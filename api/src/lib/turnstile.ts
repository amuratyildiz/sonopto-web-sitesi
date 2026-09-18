/**
 * Verifies a Cloudflare Turnstile token server-side.
 * Returns true (skips verification) when TURNSTILE_SECRET_KEY is not
 * configured, so the endpoint keeps working before Turnstile has been set
 * up — see README. Configure the secret before launch.
 */
export async function verifyTurnstile(token: string | undefined, remoteIp: string | undefined): Promise<boolean> {
  const secretKey = process.env.TURNSTILE_SECRET_KEY;
  if (!secretKey) {
    return true;
  }

  if (!token) {
    return false;
  }

  const body = new URLSearchParams({ secret: secretKey, response: token });
  if (remoteIp) body.set('remoteip', remoteIp);

  const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body,
  });

  const result = (await response.json()) as { success: boolean };
  return result.success === true;
}
