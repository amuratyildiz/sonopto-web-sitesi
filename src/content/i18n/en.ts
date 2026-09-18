import type { Dictionary } from './tr';

export const en: Dictionary = {
  nav: {
    home: 'Home',
    services: 'Services',
    about: 'About',
    visionMission: 'Vision & Mission',
    references: 'References',
    faq: 'FAQ',
    contact: 'Contact',
  },
  footer: {
    tagline: 'You focus on your business, we will manage your technology.',
    servicesTitle: 'Services',
    companyTitle: 'Company',
    contactTitle: 'Contact',
    rightsReserved: 'All rights reserved.',
  },
  common: {
    readMore: 'Read More',
    viewAllReferences: 'View All References',
    getQuote: 'Get a Quote',
    sendMessage: 'Send Message',
    switchLanguage: 'Türkçe',
    backToReferences: 'Back to all references',
    client: 'Client',
    location: 'Location',
    category: 'Category',
    date: 'Date',
  },
  home: {
    heroTagline: 'You Focus On Your Business, We Will Manage Your Technology',
    heroSubtitle:
      'Your end-to-end solution partner for the installation, maintenance and consulting of audio, video and stage lighting systems.',
    heroCta: 'Explore Our Services',
    servicesTitle: 'What We Do',
    servicesSubtitle: 'From installation to after-sales support, we manage the full lifecycle of your AV systems.',
    partnersTitle: 'Brands We Work With',
    referencesTitle: 'Featured Projects',
    ctaTitle: "Let's talk about your project",
    ctaSubtitle: "We'll listen to your needs and design the right AV solution together.",
  },
  services: {
    pageTitle: 'Our Services',
    pageIntro:
      'From installation and assembly to consulting, maintenance and repair, to sales and supply — we support every stage of your AV systems.',
    items: {
      installation: {
        title: 'Installation & Assembly',
        summary: 'From site survey to cable management, from aesthetic mounting to fine-tuned calibration. Improper installation cuts equipment lifespan by roughly 40%.',
        details: [
          'Site/acoustic survey, cable management and aesthetic mounting planning',
          'Brand-independent mounting — experience with manufacturers such as Barco, Samsung and Bose',
          'Field installation / subcontractor partnership for IT and architecture firms',
          'Full commissioning and fine-tuned calibration of every system function',
        ],
      },
      maintenance: {
        title: 'Maintenance & Repair',
        summary: 'No more "who do I call?" when your system fails. Systems under regular maintenance see a 75% lower fault rate.',
        details: [
          'Maintenance and repair for your entire AV inventory — including systems out of warranty or installed by another company',
          'Scheduled Maintenance Agreements: annual contracts with 24/7 coverage',
          'Emergency Response: fast on-site service for critical faults',
          'Spare Parts & Repair: projector lamp replacement, amplifier repair, cable renewal',
        ],
      },
      consulting: {
        title: 'Consulting',
        summary: 'We provide technical support from architectural design through the tender process to deliver the most sustainable, efficient solution for your needs.',
        details: [
          'Assessment and reporting of existing systems',
          'Needs analysis and a brand-independent equipment recommendation',
          'Technical specification and tender document preparation',
          'Independent guidance when selecting an implementation partner',
        ],
      },
      supply: {
        title: 'Sales & Supply',
        summary: 'Through our extensive distributor network, we source the equipment and spare parts your service and installation projects need on the best terms.',
        details: [
          'Equipment and spare parts sourcing through our distributor network',
          'Brand-independent mounting capability — brands such as Barco, Samsung and Bose',
          'Subcontractor supply support for IT and architecture firms',
          'Complete delivery including full commissioning',
        ],
      },
    },
  },
  about: {
    pageTitle: 'About Us',
    intro: 'Your Solution Partner in the Field.',
    body: [
      'We are the technical operations partner that businesses and technology firms trust to have by their side in the field. In installation, integration and maintenance, we are the natural extension of your team.',
      'We focus on installing, running and operating systems, not just selling products — offering end-to-end service from installation through after-sales support, all from a single point of contact. Our service focus is your systems\' uptime, first and foremost.',
      'In our B2B partnerships we value client confidentiality and act as a natural extension of our partner\'s own team out in the field.',
    ],
  },
  visionMission: {
    pageTitle: 'Vision & Mission',
    visionTitle: 'Our Vision',
    vision: 'If Sonopto installed it, nothing goes wrong.',
    visionDetail:
      "To build Turkey's largest and most capable professional AV technical service network with a product-independent service philosophy, and to make \"if Sonopto installed it, nothing goes wrong\" the industry standard.",
    missionTitle: 'Our Mission',
    mission: "Our client's crisis is our priority.",
    missionDetail:
      'To be the single address businesses and individuals can entrust their technology infrastructure to — one they can reach the moment something goes wrong, and one that guarantees a solution.',
    valuesTitle: 'Our Core Values',
    values: [
      { title: 'Accessibility', description: 'A commitment to being there for our clients the moment an issue arises.' },
      { title: 'Competence', description: 'A solid, engineering-driven approach to building systems.' },
      { title: 'Trust', description: 'Representing our clients in the field in the best possible way, protecting their reputation.' },
    ],
  },
  references: {
    pageTitle: 'Our References',
    pageIntro: 'Some of the projects we have completed.',
    empty: 'New projects will be featured here soon.',
  },
  faq: {
    pageTitle: 'Frequently Asked Questions',
    pageIntro: 'The most common questions about technical service and support.',
    items: [
      {
        question: 'What is pixel pitch on an LED display?',
        answer:
          "Pixel pitch is the distance between the centers of two adjacent pixels on an LED panel, measured in millimeters (for example, on a P2.5 panel that distance is 2.5 mm). The smaller the value, the sharper and higher-resolution the image — but production cost rises too. Rule of thumb: minimum viewing distance (meters) ≈ pixel pitch (mm) × 1, so a P4 display should be viewed from at least 4 meters away. Indoor displays are viewed up close and need a tighter pitch (P1.2–P3), while outdoor displays are viewed from farther away and need to handle direct sunlight, so a wider pitch (P4–P10+) is sufficient. We determine the right pixel pitch for each project based on the venue and typical viewing distance.",
      },
      {
        question: 'How quickly do you respond to a fault?',
        answer:
          'Clients under a maintenance agreement receive priority response; exact response times depend on the agreement scope and location. Contact us for precise figures.',
      },
      {
        question: 'What warranty applies to the equipment we purchase?',
        answer:
          'Warranty length depends on the supplier brand and product category. We confirm the exact warranty terms for your equipment at the proposal stage.',
      },
      {
        question: 'Is pre-installation technical consulting paid?',
        answer:
          'The initial consultation and needs analysis are free of charge. The scope of detailed technical consulting is assessed separately based on project size.',
      },
    ],
  },
  contact: {
    pageTitle: 'Contact',
    pageIntro: 'Get in touch about your project and we will get back to you shortly.',
    formName: 'Full Name',
    formPhone: 'Phone',
    formEmail: 'Email',
    formCompany: 'Company',
    formSubject: 'Subject',
    formMessage: 'Message',
    formRequired: 'required',
    formSuccess: 'Thank you for your message — we will get back to you shortly.',
    formError: 'Something went wrong, please try again later or call us directly.',
    addressTitle: 'Address',
    phoneTitle: 'Phone',
    emailTitle: 'Email',
  },
};
