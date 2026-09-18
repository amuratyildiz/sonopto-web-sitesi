import { app, type HttpRequest, type HttpResponseInit, type InvocationContext } from '@azure/functions';
import { z } from 'zod';
import { createDataverseLead } from '../lib/dataverse.js';
import { verifyTurnstile } from '../lib/turnstile.js';
import { isRateLimited } from '../lib/rateLimit.js';

const contactSchema = z.object({
  name: z.string().trim().min(1).max(200),
  email: z.email().trim().max(320),
  phone: z.string().trim().max(50).optional().or(z.literal('')),
  company: z.string().trim().max(200).optional().or(z.literal('')),
  subject: z.string().trim().min(1).max(200),
  message: z.string().trim().min(1).max(5000),
  // Honeypot field: real visitors never fill this in.
  website: z.string().max(0).optional().or(z.literal('')),
  'cf-turnstile-response': z.string().optional(),
});

async function contactSubmit(request: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
  const clientIp = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown';

  if (isRateLimited(clientIp)) {
    return { status: 429, jsonBody: { error: 'Too many requests' } };
  }

  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return { status: 400, jsonBody: { error: 'Invalid JSON body' } };
  }

  const parsed = contactSchema.safeParse(payload);
  if (!parsed.success) {
    return { status: 400, jsonBody: { error: 'Invalid form data' } };
  }

  const { name, email, phone, company, subject, message, website } = parsed.data;

  // Honeypot tripped: pretend success so bots don't learn to skip this field.
  if (website) {
    context.log('Honeypot triggered, silently discarding submission.');
    return { status: 200, jsonBody: { ok: true } };
  }

  const turnstileOk = await verifyTurnstile(parsed.data['cf-turnstile-response'], clientIp);
  if (!turnstileOk) {
    return { status: 400, jsonBody: { error: 'Verification failed' } };
  }

  try {
    await createDataverseLead({ name, email, phone: phone || undefined, company: company || undefined, subject, message });
  } catch (error) {
    context.error('Failed to create Dataverse lead', error);
    return { status: 502, jsonBody: { error: 'Could not submit your message right now' } };
  }

  return { status: 200, jsonBody: { ok: true } };
}

app.http('contact-submit', {
  methods: ['POST'],
  authLevel: 'anonymous',
  route: 'contact-submit',
  handler: contactSubmit,
});
