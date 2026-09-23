import type { Dictionary } from './tr';

export const en: Dictionary = {
  nav: {
    home: 'Home',
    services: 'Services',
    solutions: 'Solutions',
    about: 'About',
    visionMission: 'Vision & Mission',
    references: 'References',
    faq: 'FAQ',
    support: 'Support',
    contact: 'Contact',
  },
  brandTagline: 'Video | Audio | Stage Systems',
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
    viewAllSolutions: 'View All Solutions',
    contactUs: 'Contact Us',
    requestSurvey: 'Request a Free Site Survey',
    callService: 'Request Service',
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
    heroImageAlt:
      'A professional meeting room system with a video conferencing display and table microphones',
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
        imageAlt: 'A Sonopto technician carrying out a professional ceiling speaker installation',
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
        imageAlt: 'A Sonopto technician cleaning a projector lens during scheduled maintenance',
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
        imageAlt: 'Technical specification and project plan review as part of AV project consulting',
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
        imageAlt: 'Professional AV equipment and flight cases prepared for an installation project',
      },
    },
  },
  solutions: {
    pageTitle: 'Sector Solutions',
    headline: 'Technical Assurance Built Around Your Sector',
    pageIntro:
      'Every sector carries a different technical risk. In a meeting room it is a signal that must never drop; in a hotel it is the television that fails at midnight; in a school it is the PA system that goes silent on ceremony morning. We shape our solutions around those differences — and we keep the systems running, not just install them.',
    relatedTitle: 'Our Other Sector Solutions',
    items: {
      conference: {
        title: 'Conference & Meeting Rooms',
        headline: 'The Unseen Hero of Your Meetings',
        summary:
          'Meeting room and conference hall installation, Zoom/Teams room integration, and on-site technical support before critical meetings.',
        intro:
          'Seeing a "no signal" warning during your most important presentation is not merely a technical fault — it is a matter of corporate reputation. We build and operate meeting room systems so that they do not let you down at the critical moment, or at any other.',
        problemTitle: 'Why do meeting room problems always surface at the worst moment?',
        problemBody:
          'Because these systems sit under light load for most of the year. The real load arrives in the meeting where every participant connects, the screen is shared and all the microphones open at once. In our field experience, most faults come not from equipment quality but from usage scenarios that were never tested during commissioning. That is why we never hand over an installation without running the system through a real meeting scenario first.',
        servicesTitle: 'What We Do',
        services: [
          'Audio and video system installation for meeting rooms and conference halls',
          'Zoom Rooms and Microsoft Teams Rooms setup — hardware selection, licence pairing and commissioning',
          'Cable management and clean mounting; in-table connection units and rack layout',
          'Pre-meeting connection checks and an on-site technician for critical meetings',
          'Installation and operation of simultaneous interpretation and delegate systems',
        ],
        approachTitle: 'Do we have to replace our existing system entirely?',
        approachBody:
          'No. Because we work brand-independently, it is usually possible to service your existing displays, cameras and audio system and integrate them into the new platform. We start by reporting on the condition of what you already have, then state which components can stay and which need replacing, with reasons. Avoiding unnecessary replacement is part of our sustainability principle.',
        imageAlt:
          'A conference room meeting system with a video conferencing display and table microphones',
      },
      education: {
        title: 'Schools & Education',
        headline: 'Keep the Bell Ringing',
        summary:
          'Interactive whiteboard service, PA and ceremony systems, and summer maintenance programmes planned around the school calendar.',
        intro:
          'In education a technical fault does not just stop a device — it stops the lesson. From interactive whiteboards to PA systems, from the ceremony ground to the conference hall, we manage your entire AV inventory from a single point and on the school calendar.',
        problemTitle: 'When should school AV maintenance be done?',
        problemBody:
          'Over the summer. Servicing every system while the school is closed prevents the majority of the emergency faults that would otherwise interrupt lessons during term. Systems under regular maintenance see a 75% lower fault rate, and that figure matters even more in buildings with heavy daily use where the cost of a fault lands directly on teaching.',
        servicesTitle: 'Built for Education',
        services: [
          'Interactive whiteboard and display service: touch panel repair, calibration and software updates',
          'Summer maintenance programme — every classroom and hall serviced before term begins',
          'School PA and bell system installation, zoned announcements',
          'Ceremony ground sound: weather-resistant outdoor audio systems',
          'Audio and video installation for conference and multi-purpose halls',
        ],
        approachTitle: 'How is the budget planned?',
        approachBody:
          'Education budgets are usually annual and committed in advance. So we begin with a condition report on the existing inventory, then set a prioritised plan for which systems need attention this year and which can wait until next. A scheduled maintenance agreement then turns that plan into a predictable, fixed line item.',
        imageAlt: 'A teacher leading a lesson at an interactive whiteboard in a classroom',
      },
      hotel: {
        title: 'Hotels & Hospitality',
        headline: 'The Technical Backbone of Guest Satisfaction',
        summary:
          'Ballroom audio and stage lighting operation, IPTV and in-room TV installation, and seasonal technician cover for the events calendar.',
        intro:
          'In hospitality a technical hiccup turns straight into a guest review: the television that fails at midnight, or the music that cuts out mid-wedding. We treat a hotel\'s AV infrastructure as a service that only counts as successful while the guest never notices it.',
        problemTitle: 'How do we cover event peaks with our own staff?',
        problemBody:
          'Employing a full-time AV technician year-round is rarely economical for a hotel — yet during wedding, congress and gala season even one is not enough. Seasonal technician cover closes that gap: we place a technician on site according to your events calendar, and outside the season we keep the system under a maintenance agreement.',
        servicesTitle: 'Operational Solutions',
        services: [
          'Installation and refurbishment of ballroom audio, stage lighting and video systems',
          'On-site technician cover during event seasons (seasonal technical staff)',
          'IPTV and in-room television installation — central system integration across hundreds of rooms',
          'Technical operation of meeting and congress halls',
          'Digital signage and lobby display installation, including the content infrastructure',
        ],
        approachTitle: 'Can the work be done while the hotel is open?',
        approachBody:
          'Yes; we plan on the assumption that the operation never stops. Noisy work is moved to the quietest hours, we progress floor by floor, and every area is handed back ready for guests at the end of each day. For ballroom refurbishments we agree a window that does not clash with your events calendar and size the crew to fit it.',
        imageAlt:
          'A gala event in a hotel ballroom with a professional sound system and stage lighting',
      },
      publicSector: {
        title: 'Public Sector & Municipalities',
        headline: 'Technical Service That Respects Protocol',
        summary:
          'Council chamber voting and delegate systems, simultaneous interpretation, technical specification and tender file consulting.',
        intro:
          'In public sector projects, the transparency of the process and its compliance with regulation weigh as heavily as technical competence. From preparing the tender file through to final acceptance, we run an installation process that follows protocol and is fully documented.',
        problemTitle: 'Who should write the technical specification?',
        problemBody:
          'It is in the institution\'s interest for the specification to be written by a party independent of whoever hopes to win the work; otherwise it ends up shaped around one manufacturer\'s product features and competition narrows. Because we work brand-independently, we write specifications that define the requirement without pointing at a specific manufacturer, and we act as the institution\'s technical advisor through the tender.',
        servicesTitle: 'Services for Public Institutions',
        services: [
          'Technical specification and tender file preparation, plus technical advice during the tender',
          'Council chamber systems: voting and delegate units, installation and annual checks',
          'Simultaneous interpretation system installation and staffed operation at international meetings',
          'Audio and video systems for conference centres and multi-purpose halls',
          'PA and general announcement systems in public buildings',
        ],
        approachTitle: 'What happens after final acceptance?',
        approachBody:
          'For us the completed installation is the beginning, not the end. After final acceptance we recommend bringing the system under a scheduled maintenance agreement: pre-session checks on the voting units, pre-meeting tests on the interpretation systems and an annual general service all fall within that scope. The system then stays at the performance it was handed over with.',
        imageAlt: 'A council chamber fitted with delegate units and voting displays',
      },
    },
  },
  signage: {
    navTag: 'sonopto.signage',
    navNote: 'Our digital signage platform',
    pageTitle: 'sonopto.signage — Digital Signage Software',
    metaDescription:
      'sonopto.signage: cloud-based digital signage content and device management. Design content, schedule it and push it to every screen — from the team that installs the screen.',
    heroKicker: 'PRODUCT',
    heroHeadline: 'Run Every Screen From One Panel',
    heroIntro:
      'sonopto.signage is cloud-based digital signage software that lets you design content, schedule it and send it to any screen. From the same team that mounts the panel, runs the cable and turns up when something fails.',
    platformCta: 'Sign In to the Platform',
    platformCtaNote: 'Already using sonopto.signage?',
    kbNote: 'For step-by-step guides on using the product:',
    kbCta: 'Knowledge Base',
    whatTitle: 'What is sonopto.signage?',
    whatBody:
      'It is the management layer that decides what appears on a screen and when. From a panel you open in your browser, you upload content, build playlists and plan which screen shows what at which hour. The same panel serves a single screen and hundreds of screens spread across cities. The infrastructure runs on Google Cloud; support comes directly from us.',
    featuresTitle: 'Key Features',
    features: {
      offline: {
        title: 'Offline Operation',
        body: 'Media files download to the screen’s local storage. When the connection drops the screen does not go dark — playback carries on.',
      },
      grouping: {
        title: 'Screen Grouping',
        body: 'Screens that need to share the same content and settings are grouped. One change reaches hundreds of screens in a single action.',
      },
      power: {
        title: 'Power Management',
        body: 'Screens switch on and off automatically at set times. A screen running outside business hours costs both electricity and panel life.',
      },
      geo: {
        title: 'Geolocation',
        body: 'Content changes automatically based on where the device is. One playlist shows each branch its own content.',
      },
      monitoring: {
        title: 'Remote Monitoring and Control',
        body: 'See which screens are online, what they are playing and when they last updated. You notice the fault before your customer does.',
      },
      scheduling: {
        title: 'Scheduling and Layers',
        body: 'Build different content streams for different parts of the day, and manage several zones on one screen through layout layers.',
      },
    },
    featuresFootnote: 'Features may vary by player type; we confirm the details with you before installation.',
    integrationsTitle: 'Integrations',
    integrationsIntro:
      'Feed your screens from the tools your team already uses, instead of building a separate workflow just to update a display.',
    integrations: {
      design: {
        title: 'Canva',
        body: 'Designs you build in Canva flow straight to your screens. With hundreds of thousands of ready-made templates and drag-and-drop layout, you do not need a separate design team.',
      },
      drive: {
        title: 'Google Drive',
        body: 'Connect a Drive folder and whatever lands in it appears on screen. Your team can update content without ever opening the panel.',
      },
      sheets: {
        title: 'Google Sheets',
        body: 'Frequently changing data — price lists, schedules, announcements — is driven from a spreadsheet. Update the sheet and the screen follows.',
      },
      doorSign: {
        title: 'Door Sign',
        body: 'Room displays connected to Microsoft and Google Calendar show current occupancy and the next meeting, ending the scheduling argument at the door.',
      },
    },
    devicesTitle: 'Supported Devices',
    devicesIntro:
      'sonopto.signage runs on a commercial display’s own operating system or through an external player. Which route suits the screens you have is something we establish on site during the survey.',
    devicesNote:
      'The scores describe how mature each platform’s integration with sonopto.signage is; they are not a hardware benchmark. If you do not see your device here, ask us — we test compatibility before installation.',
    deviceScoreLabel: 'Platform Integration',
    devicePerformanceLabel: 'Playback Performance',
    deviceAutoUpdateLabel: 'Automatic updates',
    deviceRemoteRebootLabel: 'Remote reboot',
    devicePowerLabel: 'Power management',
    deviceUnrated: 'Depends on the hardware you choose',
    devices: {
      android:
        'The software runs as a native Android app. Android 5 and above is supported, 7 and later recommended. Performance and remote-control capability depend on the box you choose.',
      philips:
        'Commercial displays with Android built in. Anti-glare panels, built for continuous operation, and the hardware is fully manageable remotely.',
      bravia:
        'Sony BRAVIA professional series (BZ, BU, EZ, BA). The software runs on the display itself with no external player — suited to shop windows and lobbies that need high brightness.',
      fireTv:
        'The budget entry point. Fine for short-term, non-critical installations; because OS updates can interrupt playback and there is no power management, choose the Signage Stick for 24/7 duty.',
      signageStick:
        'A plug-and-play player purpose-built for digital signage. Scales from a single screen to multi-site estates and is designed for continuous operation.',
      tcl: 'Commercial 4K Android displays from 43" to 98", up to 400 nits. Rated for 24/7 operation across retail, hospitality and transport.',
      viewsonic:
        'Commercial 4K Android displays built for continuous operation, with WPA3 network security and flexible connectivity.',
      raspberryPi:
        'A low-cost, dependable player based on the Raspberry Pi 5 — the most economical way to turn screens you already own into signage displays.',
      brightsign:
        'A dedicated player with its own operating system and very high reliability. Every BrightSign model is supported; the choice where downtime is unacceptable.',
      samsung:
        'Tizen-based commercial displays; every model on SSSP 6.0 / Tizen 4.0 or later is supported. Anti-glare panels and 24-hour operation.',
      vestel:
        'A commercial display range for retail, restaurants, control rooms and transport hubs, with local supply and service in Türkiye.',
      novastar:
        'For LED walls and large-format displays. Taurus and TU series players connect through a web-page widget in ViPlex Express, which is why power management and remote reboot are not available by this route.',
      amino:
        'An enterprise-grade set-top box (H200 / H200W, Android 10). Ships with the software preloaded, and its tamper-resistant hardware suits distributed estates.',
      lg: 'webOS-based commercial displays. The software runs as a native webOS app, so no external hardware is needed.',
      chromeos:
        'A secure, centrally managed platform for kiosks and signage, with a wide device range and a strong update policy.',
      googleTv:
        'Built into televisions from Sony, TCL, Hisense and Philips. The app installs from the Play Store with no extra hardware; power management is not available on this platform.',
      chromecast:
        'An inexpensive plug-in player that turns any television into a signage screen, in 4K and HD. Hides behind the display; suited to non-critical installations.',
    },
    differenceTitle: 'What Sets Us Apart: We Install the Screen Too',
    differenceBody:
      'Plenty of companies sell digital signage software. Here is where we differ: the team that sells the software is the team that mounts the screen. Software alone is not a solution — getting the panel on the right wall, with the right bracket and the right data and power infrastructure, is half the job.',
    differencePoints: [
      {
        title: 'One contact, one contract',
        body: 'Panel, mounting system, player, data and power infrastructure, installation and platform licence in a single scope. When something goes wrong, nobody argues about whether it is hardware or software.',
      },
      {
        title: 'The team that installs it maintains it',
        body: 'When a screen goes dark, the people who answer the phone are the people who put it up. Sending someone who already knows the system is the single biggest factor in shortening downtime.',
      },
      {
        title: 'Survey before purchase',
        body: 'We will not tell you how many screens, what size, what brightness or which player you need without seeing the site. Not recommending hardware you do not need is part of how we work.',
      },
    ],
    useCasesTitle: 'Where It Is Used',
    useCasesIntro:
      'Signage needs differ by sector: a campaign cycle in a shop, a menu that changes through the day in a restaurant, room availability in an office, queue management in a clinic. Each sector page sets out the specifics.',
    otherSectorsTitle: 'Other Sectors',
    backToProduct: 'Everything about sonopto.signage',
    sectors: {
      retail: {
        title: 'Retail and Shops',
        imageAlt:
          'A large-format digital display in a shop window showing a sale campaign',
        imageSecondaryAlt:
          'A freestanding digital totem in a supermarket aisle showing the promotion of the day',
        headline: 'When the Campaign Starts, So Should the Window',
        summary:
          'Window and aisle displays, one panel for the whole branch network, content that changes automatically on the campaign calendar.',
        metaDescription:
          'Digital signage for shops and shop windows: push campaigns to every branch from one panel and switch them automatically by time of day. Screen supply and installation included.',
        intro:
          'In retail a screen is not decoration; its job is to show the right message at the right moment. If the campaign starts on Monday the window should have changed by Monday morning — in the flagship and in the branch three cities away.',
        problemTitle: 'The campaign has started and the screens still show last month’s poster',
        problemBody:
          'Because updating content is usually left to branch staff: walking around with a USB stick, logging into each screen, with no way to tell who did it and who did not. As the branch count rises that method collapses under its own weight, and your most expensive advertising surface — the window — goes stale. Managed centrally, the same job becomes a single upload.',
        screensTitle: 'What goes on the screens?',
        screens: [
          'Window displays: seasonal campaigns, sale announcements, brand films',
          'Aisle and shelf displays: product introductions, price and promotion information',
          'Checkout displays: last-minute offers and loyalty programmes while customers queue',
          'Welcome and wayfinding: floor plans, department directions, rolling announcements',
          'Staff areas: shift, target and internal announcement screens',
        ],
        integrationTitle: 'What really matters here: geolocation and grouping',
        integrationBody:
          'Group your branches and one action reaches hundreds of screens. With geolocation the same playlist shows each branch its own content — Istanbul stock in the Istanbul store, the Ankara promotion in Ankara. Feed fast-moving data such as prices and stock from Google Sheets and updating the spreadsheet is all it takes to update the screens.',
        resultTitle: 'What difference does it make that we install the screen?',
        resultBody:
          'A window display is a different job from an office screen: it needs high brightness to stay readable in daylight, positioning that kills reflections on the glass, and cabling hidden inside the window. We measure all of that on site during the survey and choose the panel and mount accordingly. Because we do not sell the software and hand the installation to someone else, there is one number to call when a screen goes dark.',
        faq: [
          {
            question: 'Our branches have screens of different brands and sizes — will they all connect?',
            answer:
              'Almost certainly. On commercial displays the software runs on the display’s own operating system; on ordinary televisions a small external player is added. We establish which screen takes which route during the survey, and we will not ask you to replace a screen that still works.',
          },
          {
            question: 'Can a campaign start automatically at a set time?',
            answer:
              'Yes. Content can be tied to a date and time, so the campaign goes live by itself at 09:00 on Monday and comes down by itself on the end date. Switching the screens off at closing time is scheduled the same way.',
          },
          {
            question: 'Does the window go dark if the internet drops?',
            answer:
              'No. Media files download to the screen’s local storage, so playback continues offline. When the connection returns the device re-syncs with the panel and picks up any pending updates.',
          },
        ],
      },
      food: {
        title: 'Restaurants and Cafés',
        imageAlt:
          'A digital menu board mounted on a brick wall in a restaurant, split into categories',
        imageSecondaryAlt:
          'A digital menu screen above a café counter listing coffees and their prices',
        headline: 'Let the Menu Change Itself From Breakfast to Dinner',
        summary:
          'Digital menu boards, menus that switch automatically through the day, prices driven from a spreadsheet and no reprinting.',
        metaDescription:
          'Digital menu boards for restaurants and cafés: breakfast, lunch and dinner menus switch automatically and prices update from a spreadsheet. Screens and installation included.',
        intro:
          'The menu board is the most-read surface in a restaurant. On a printed menu a price change means a reprint; on a screen it means editing one cell in a spreadsheet.',
        problemTitle: 'The price changed, so the menu has to be reprinted',
        problemBody:
          'The real cost of a printed menu is not paper — it is how strongly it resists change. When a price rises or a supply problem hits, the menu stays wrong for weeks, and trying a promotion, pushing the dish of the day or running an hourly offer becomes impractical. On screen those decisions take minutes.',
        screensTitle: 'What goes on the screens?',
        screens: [
          'Menu boards: price lists by category, dishes presented with photography',
          'Dayparting: automatic switching between breakfast, lunch, dinner and late menus',
          'Promotions and upsell: desserts, drinks and add-ons shown while customers wait',
          'Dish of the day and sold-out notices',
          'QR code screens for the Wi-Fi password and social media accounts',
        ],
        integrationTitle: 'What really matters here: Google Sheets and scheduling',
        integrationBody:
          'Menu prices can be driven from a Google Sheet: update the sheet and the screens follow, without anyone opening the panel. Scheduling hands the breakfast menu over to lunch at 11:00 on its own. On the design side, the Canva integration and its ready-made templates bring menu layout within reach of the kitchen team.',
        resultTitle: 'What difference does it make that we install the screen?',
        resultBody:
          'Menu boards usually sit above the counter, close to kitchen heat and steam, and the cabling has to be routed to food-area rules. Mount height matters too — it is set to the eye line of a standing customer, which directly affects legibility. We measure this on site. If you are running several screens as one continuous menu, synchronised playback keeps them acting as a single board.',
        faq: [
          {
            question: 'Can we update the menu ourselves?',
            answer:
              'Yes — that is the point. If prices are managed in Google Sheets, updating the sheet is enough. To change the design you can build it in Canva and send it straight to the screen. We train your team after installation.',
          },
          {
            question: 'Can several screens work as one menu?',
            answer:
              'Yes. Screens placed side by side can be put in a synchronised playback group so content runs across all of them at once and three displays read as one wide menu board. Matching model and size matters for visual continuity; we advise on that during the survey.',
          },
          {
            question: 'Do the screens switch off at closing time?',
            answer:
              'Yes. Power management switches screens off and on at times you set. That shows up in both the electricity bill and the life of the panel — a screen running needlessly overnight accumulates thousands of hours of wear a year.',
          },
        ],
      },
      office: {
        title: 'Corporate Offices',
        imageAlt:
          'A red digital door display on a glass-walled meeting room showing the room is occupied and when the meeting ends',
        imageSecondaryAlt:
          'A green digital door display at a meeting room entrance showing the room is vacant',
        headline: 'End the Argument Outside the Meeting Room',
        summary:
          'Welcome displays, room booking screens at the door, internal communication boards and a company-wide announcement network.',
        metaDescription:
          'Digital signage for corporate offices: welcome displays, door signs driven by Microsoft and Google Calendar, internal communication boards. Installation included.',
        intro:
          'A screen in an office has two jobs: to present the company properly to a visitor, and to give staff the information they need without having to go looking for it. Both look simple, and both fail when they are not set up properly.',
        problemTitle: 'The room was booked and nobody knew',
        problemBody:
          'Meeting room clashes are not caused by the calendar — they are caused by the calendar being invisible at the door. When whoever booked the room does not turn up, the room sits empty; when someone who did not book it walks in, a meeting gets interrupted. A small screen at the door, wired live to the calendar, removes both: current status and the next meeting are written outside the room.',
        screensTitle: 'What goes on the screens?',
        screens: [
          'Door displays: live occupancy, the next meeting and booking on the spot',
          'Welcome screen: visitor greeting, company introduction, the day’s schedule',
          'Internal communication boards: announcements, HR notices, new joiners',
          'Performance and operations screens: targets and live dashboards',
          'Shared areas: canteen menu, shuttle times, event calendar',
        ],
        integrationTitle: 'What really matters here: the door sign and calendar integration',
        integrationBody:
          'The door sign app connects to Microsoft and Google Calendar, so occupancy is read live from the calendar and there is no second system to maintain. For announcement boards the Google Drive integration does the work: HR drops a file in a folder and it appears on screen, with nobody opening the panel. Templates carrying your brand can be built in Canva and pushed to every office at once.',
        resultTitle: 'What difference does it make that we install the screen?',
        resultBody:
          'Door displays are small but fiddly: recessed mounting into plasterboard, data and power run without visible trunking, and alignment to the door frame. We are already installing audio and video systems in your meeting rooms, so handling the signage screens in the same survey with the same team is both quicker and more consistent than coordinating two firms.',
        faq: [
          {
            question: 'Do the door screens work with our Microsoft 365 calendar?',
            answer:
              'Yes. The door sign app connects to Microsoft and Google Calendar, and current occupancy and the next meeting are read straight from your calendar. Your booking process stays exactly as it is; the screen only makes it visible.',
          },
          {
            question: 'Will it work alongside our existing meeting room system?',
            answer:
              'Yes. Signage screens run independently of your Zoom Rooms or Microsoft Teams Rooms setup; the two do not interfere. We install meeting room systems as well, so planning both in one survey is the most efficient route.',
          },
          {
            question: 'We have several offices — can we manage them from one place?',
            answer:
              'Yes. Group the offices and a company-wide announcement reaches all of them in one action, while local notices go only to the relevant group. You can also see from the panel which screens are online and when each last updated.',
          },
        ],
      },
      transport: {
        title: 'Transport and Terminals',
        imageAlt:
          'A portrait digital information display on a railway platform showing an offer to waiting passengers',
        imageSecondaryAlt:
          'A six-panel digital video wall running as a single image across a terminal concourse',
        headline: 'Put the Wait to Work',
        summary:
          'Platform and terminal information, wayfinding displays, and video walls run as sellable advertising inventory.',
        metaDescription:
          'Digital signage for metro, rail, coach and airport terminals: service information, wayfinding and advertising displays. Video wall installation included.',
        intro:
          'A screen in a transport hub has two jobs: send the passenger to the right place, and turn the wait into something of value. The second is revenue most operators leave on the table.',
        problemTitle: 'Passenger flow never stops, so there is no window to take a screen down',
        problemBody:
          'Terminals run around the clock, and there is almost never a convenient hour to switch a display off and work on it. That makes the critical factor not the brand of the screen but how long it runs without failing and how quickly it comes back when it does. Remote monitoring — seeing the fault before a passenger does — shrinks the response window from hours to minutes.',
        screensTitle: 'What goes on the screens?',
        screens: [
          'Service and platform information: departures, arrivals, delays and platform changes',
          'Wayfinding: exits, interchanges, baggage and step-free access',
          'Advertising: platform and concourse screens run as rentable broadcast inventory',
          'Video walls: large-format corporate content in entrance halls and interchanges',
          'Emergency information: evacuation guidance and support for public address',
        ],
        integrationTitle: 'What really matters here: offline operation and screen grouping',
        integrationBody:
          'Connectivity is never uniform across a terminal estate. Because media downloads to each screen\u2019s local storage, a dropped line does not stop playback. Grouping lets you run platform screens as one group and concourse screens as another, so service information goes only to the relevant platform while corporate content goes estate-wide. On video walls, synchronised playback keeps adjacent panels behaving as a single image.',
        resultTitle: 'What difference does it make that we install the screen?',
        resultBody:
          'Installation in a transport hub is structural work: mounting to high ceilings, safe steelwork in the middle of heavy passenger flow, and positioning set by sight lines in an enclosed space. A video wall demands millimetre alignment — one panel seated slightly off and the whole wall looks crooked. We do this with our own team, covering steel fabrication, data and power infrastructure in a single scope.',
        faq: [
          {
            question: 'Can we feed service information from our existing system?',
            answer:
              'If that data can be exported as a spreadsheet, CSV, JSON or a web page, it can be connected to the screens. We look at what your current system exposes during the survey and confirm whether integration is possible before committing to it.',
          },
          {
            question: 'Do you install video walls?',
            answer:
              'Yes. LED walls and multi-screen video walls are a substantial part of our work: steel fabrication, data and power infrastructure and the installation itself are ours. On the software side, synchronised playback makes the panels run as one image.',
          },
          {
            question: 'Can the screens be used for advertising revenue?',
            answer:
              'Yes, and it is a common use. Grouping screens by zone and time lets you sell different slots to different advertisers, and remote monitoring lets you verify that the campaign actually played.',
          },
        ],
      },
      education: {
        title: 'Schools and Campuses',
        imageAlt:
          'Pupils walking past three digital displays in a school corridor showing announcements and a club promotion',
        imageSecondaryAlt:
          'A portrait digital display in a library announcing newly arrived books',
        headline: 'Nobody Reads the Noticeboard',
        summary:
          'Corridor and canteen announcement screens, library information, exam and event calendars, campus wayfinding.',
        metaDescription:
          'Digital signage for schools and campuses: corridor announcement screens, exam and event calendars, library information and campus wayfinding. Installation included.',
        intro:
          'Communication problems in schools rarely come from missing information. They come from information sitting somewhere nobody looks. A screen in the corridor gets read far more than a cork board by the door.',
        problemTitle: 'The notice went up, but it never reached the students',
        problemBody:
          'A printed notice has two problems: the time it takes to go up, and the fact that nobody looks at it once it has. When an exam time changes or a bus is delayed, the information has to travel in minutes — paper cannot do that. Schools that move to screens cut the time a notice takes to land from a day to a minute, and free the member of staff who used to pin them up.',
        screensTitle: 'What goes on the screens?',
        screens: [
          'Corridor announcements: exam timetables, timetable changes, bus and lunch information',
          'Clubs and events: club call-outs, tournament and ceremony announcements',
          'Library: new arrivals, quiet reminders, opening hours',
          'Campus wayfinding: building and classroom directions, floor plans',
          'Staff and admin areas: duty rotas, meetings and internal notices',
        ],
        integrationTitle: 'What really matters here: scheduling and Google Sheets',
        integrationBody:
          'A school day is already a timetable, and the screens run on the same one. When the timetable and exam calendar are driven from a Google Sheet, the admin staff who update the sheet have updated the screens too. Scheduling shows one thing at break and another during lessons, and power management switches the screens off entirely over the holidays. On the design side, Canva templates bring notice-making within reach of the student clubs themselves.',
        resultTitle: 'What difference does it make that we install the screen?',
        resultBody:
          'In schools the scheduling of an installation matters as much as the installation: the work happens over the summer, while the buildings are empty. Corridor screens are mounted out of reach on brackets that survive student traffic. We already service interactive whiteboards and install PA and ceremony systems in education, so folding the signage screens into the same summer programme cuts both cost and disruption.',
        faq: [
          {
            question: 'Will the installation interrupt the school year?',
            answer:
              'No — it is planned around it. We carry out work in education over the summer while the buildings are closed. If something urgent comes up mid-year we complete it at weekends and outside teaching hours, without breaking the timetable.',
          },
          {
            question: 'Can teachers post notices themselves?',
            answer:
              'Yes. The panel runs in a browser and posting a notice needs no technical background. If regular data such as the timetable is managed in a Google Sheet, updating the sheet is enough — nobody has to open the panel at all.',
          },
          {
            question: 'Can we use our existing interactive whiteboards as notice screens?',
            answer:
              'In many cases yes, though our recommendation depends on the situation. A whiteboard cannot show notices during the lessons it is being used for, so dedicated screens in corridors and shared areas are usually more effective. We look at your existing inventory during the survey and decide together what is best used where.',
          },
        ],
      },
      health: {
        title: 'Healthcare',
        headline: 'Let Waiting Patients Know How Long They Are Waiting',
        summary:
          'Queue and wayfinding displays, clinic information, waiting area content and consultant schedule screens.',
        metaDescription:
          'Digital signage for hospitals, clinics and practices: queue and wayfinding displays, consultant schedules, waiting area information. Screen supply and installation included.',
        intro:
          'In healthcare it is not the wait itself that frustrates people so much as not knowing how long it will be. A well-planned screen network removes most of the questions staff answer all day.',
        problemTitle: 'Most of the questions at reception could be written on a screen',
        problemBody:
          'Which consultant is in which room, what number the queue is on, which floor, where to pay — these repeat endlessly and each one costs a member of staff their time. When screens in the waiting area and corridors carry that load, reception can spend its time on the things that genuinely need a person. Perceived waiting time falls measurably too.',
        screensTitle: 'What goes on the screens?',
        screens: [
          'Queue and call displays: ticket number, room direction, estimated wait',
          'Consultant schedules: clinic hours, room changes, absence notices',
          'Wayfinding: floor plans, department directions, emergency exit information',
          'Waiting area content: health information, hospital introduction, silent video',
          'Staff areas: shift and on-call rotas and internal notices',
        ],
        integrationTitle: 'What really matters here: offline operation and remote monitoring',
        integrationBody:
          'In a healthcare setting a dark screen is not only an aesthetic problem; if it is a wayfinding display it disrupts patient flow directly. Media files download to the screen’s local storage, so playback survives a network outage. Remote monitoring shows you which screens are online and what they are playing — you notice the fault before a patient does. Waiting area screens usually run silent, so content is planned to be visual and subtitled.',
        resultTitle: 'What difference does it make that we install the screen?',
        resultBody:
          'Hospital corridors need screens that run 24/7, tolerate cleaning and disinfectant, and are mounted securely — in an area with patient traffic the choice of mount is a safety matter. Installation in a working facility has to happen without interrupting patient flow, and usually outside normal hours. That is all part of planning the installation, which we agree and schedule during the survey.',
        faq: [
          {
            question: 'Will it integrate with our queue system?',
            answer:
              'Queue data usually comes from software you already run. If that data can be exported as a spreadsheet, a CSV or a web page, it can be connected to the screens. We look at what your current system exposes during the survey and confirm whether integration is possible before committing to it.',
          },
          {
            question: 'Can the screens run 24/7?',
            answer:
              'Commercial displays are built for it; ordinary televisions are not. Where a screen has to run continuously we specify a commercial panel, and where it only runs during set hours we use power management to switch it off and extend the panel’s life.',
          },
          {
            question: 'Is patient data shown on screen?',
            answer:
              'That is entirely your decision and governed by your own data protection policy. Queue displays normally show only a ticket number and a room, not a name. The system displays whatever data you feed it; we agree that scope with you before installation.',
          },
        ],
      },
    },
    processTitle: 'How We Start',
    processSteps: [
      {
        title: '1. Survey',
        body: 'We visit the site and establish screen count, sizes and mounting points. If you already have screens, this is where we confirm whether they can be connected to the platform.',
      },
      {
        title: '2. Screens and Installation',
        body: 'Panel supply, bracket and steelwork fabrication, data and power infrastructure and the installation itself are completed at this stage — the scope of our installation and assembly service.',
      },
      {
        title: '3. Account Setup and Training',
        body: 'Your platform account is opened, screens are registered and the first playlists are built together. We train your team so they can run the content themselves.',
      },
      {
        title: '4. Maintenance and Support',
        body: 'Once commissioned, the system comes under scheduled maintenance. Platform support is provided by email and phone during business hours.',
      },
    ],
    faqTitle: 'Frequently Asked Questions',
    faq: [
      {
        question: 'Can we use our existing screens?',
        answer:
          'In most cases yes. Depending on the screen, we either connect a compatible player or use the display’s own operating system. We determine which route fits by looking at your screens during the survey; we will not ask you to replace a screen that still works.',
      },
      {
        question: 'Do the screens go dark if the internet drops?',
        answer:
          'No. Media files are downloaded to the screen’s local storage, so playback continues offline. When the connection returns the device re-syncs with the panel and picks up any pending updates.',
      },
      {
        question: 'Can we manage the content ourselves?',
        answer:
          'Yes — that is the point. The panel runs in a browser and day-to-day updates need no technical background. We train your team after installation, and if you prefer to work through Canva, Google Drive or Google Sheets you can update content without opening the panel at all.',
      },
      {
        question: 'How does pricing work?',
        answer:
          'Licensing is calculated per screen, per year, and the unit price falls as the screen count rises. Because the total depends on screen count, hardware needs and installation scope, we do not publish a single list price. Tell us how many screens and where, and we will scope it and prepare a quote.',
      },
      {
        question: 'How many screens does it take to be worthwhile?',
        answer:
          'It works for a single screen, but the platform earns its keep when you are running several from one place. The more screens you have and the further apart they are, the clearer the gain from managing them remotely.',
      },
    ],
    ctaTitle: 'Let’s Talk About Your Screens',
    ctaBody:
      'Tell us how many screens you have and where you want to use them. We will scope it with you and prepare the right setup and quote.',
    crossLinkBody:
      'The information and wayfinding screens in this environment can be run from a single panel with sonopto.signage, our own digital signage platform.',
    crossLinkCta: 'Explore sonopto.signage',
  },
  notFound: {
    kicker: '404',
    pageTitle: 'Page Not Found',
    headline: 'We Could Not Find That Page',
    lead:
      'We can almost certainly find what you were after, though. The address may have changed or been mistyped — carry on below, or just write to us.',
    servicesTitle: 'Our Services',
    solutionsTitle: 'Sector Solutions',
    shortcutsTitle: 'Shortcuts',
    otherLanguageNote: 'Türkçe site mi arıyordunuz?',
    otherLanguageCta: 'Türkçe ana sayfaya gidin',
  },
  kb: {
    pageTitle: 'Knowledge Base',
    pageIntro:
      'Every step of using the sonopto.signage dashboard — from installing a screen to building a playlist, scheduling content and working out what went wrong.',
    categoriesTitle: 'Sections',
    onThisPage: 'On this page',
    inThisSection: 'In this section',
    prev: 'Previous',
    next: 'Next',
    articles: 'articles',
    englishBadge: 'EN',
    englishNote: '',
    lastReviewed: 'Last reviewed',
    stuckTitle: 'Still stuck?',
    stuckBody:
      'If the dashboard will not do what you need, write to us. The team that installed your screens is the team that answers, so we can usually see the problem from here.',
    categories: {
      dashboard: {
        name: 'Dashboard',
        intro:
          'The screen you land on after signing in. Screen status, recently uploaded media and the account summary all sit here; the working day starts on this page.',
        metaDescription: 'The sonopto.signage dashboard: screen status, recent media and account summary.',
      },
      register: {
        name: 'Registration and Login',
        intro:
          'Creating an account, signing in and password handling. These steps have to be complete before you can add users to your team.',
        metaDescription: 'Creating a sonopto.signage account, signing in and password handling.',
      },
      installation: {
        name: 'Installation',
        intro:
          'How to install the software on each screen and player. Separate steps for Samsung, LG, Philips, Vestel, Sony, BrightSign, Android, ChromeOS and Raspberry Pi.',
        metaDescription:
          'Installing sonopto.signage: step-by-step for Samsung, LG, Philips, Vestel, Sony, BrightSign, Android, ChromeOS and Raspberry Pi.',
      },
      playlists: {
        name: 'Playlists',
        intro:
          'What decides which content plays on a screen. Creating a playlist, choosing a layout, adding layers, synchronised playback and touchscreen use.',
        metaDescription: 'sonopto.signage playlists: layouts, layers, synchronised playback and touchscreen use.',
      },
      apps: {
        name: 'Apps',
        intro:
          'The components that feed content into a playlist: calendars, weather, spreadsheets, video, social media and design tools. Each one sits in a layer.',
        metaDescription:
          'sonopto.signage apps: Canva, Google Sheets, calendars, weather, video and social media components.',
      },
      templates: {
        name: 'Templates',
        intro:
          'Ready-made designs and the online editor — a way to place your own text and images without designing from scratch.',
        metaDescription: 'sonopto.signage templates and the online editor.',
      },
      media_assets: {
        name: 'Media Assets',
        intro:
          'Where the images and video you upload are kept. Folders, search, and reuse across playlists.',
        metaDescription: 'sonopto.signage media assets: uploading images and video, folders and reuse.',
      },
      schedule: {
        name: 'Schedules',
        intro:
          'Setting which day and hour content plays. Dayparting for menus and the campaign calendar are built here.',
        metaDescription: 'sonopto.signage scheduling: automatic content changes by day and time.',
      },
      screens: {
        name: 'Screens',
        intro:
          'Managing registered screens: grouping, power management, brightness, extended storage, live location and LED wall support.',
        metaDescription:
          'sonopto.signage screen management: grouping, power management, brightness, storage and LED support.',
      },
      videowall: {
        name: 'Video Wall',
        intro:
          'Making adjacent screens behave as one image. Splitting, alignment and synchronised playback.',
        metaDescription: 'sonopto.signage video wall setup: splitting, alignment and synchronised playback.',
      },
      media_playback_quota: {
        name: 'Media Playback Quota',
        intro:
          'Limiting how many times a piece of media plays — for campaign content with a fixed run or a contracted number of plays.',
        metaDescription: 'sonopto.signage media playback quota: limiting how often an item plays.',
      },
      proof_of_play: {
        name: 'Proof of Play',
        intro:
          'A report of what played, when and how often. The basis for billing where screen time is sold as advertising inventory.',
        metaDescription: 'sonopto.signage proof of play: playback records and advertising billing.',
      },
      account_settings: {
        name: 'Settings',
        intro:
          'Profile, security, media, calendar and statistics settings, plus account logs. Everything that governs how the account behaves.',
        metaDescription: 'sonopto.signage account settings: profile, security, media, calendar, statistics and logs.',
      },
      languages: {
        name: 'Languages',
        intro: 'The dashboard interface language and working with content in more than one language.',
        metaDescription: 'sonopto.signage language settings and multilingual content.',
      },
      user_mgmt: {
        name: 'User Management',
        intro:
          'Adding users, granting permissions and building teams. Which team can see which screens and playlists is decided here.',
        metaDescription: 'sonopto.signage user and team management, permissions.',
      },
      integrations: {
        name: 'Integrations',
        intro: 'Enterprise authentication: single sign-on with Azure AD and OneLogin.',
        metaDescription: 'sonopto.signage SSO integration: single sign-on with Azure AD and OneLogin.',
      },
      geolocation: {
        name: 'Geo Location',
        intro:
          'Content that changes with where the device is, so one playlist shows each branch its own material.',
        metaDescription: 'sonopto.signage geolocation: content that changes automatically by device location.',
      },
      'dynamic-data': {
        name: 'Dynamic Data',
        intro:
          'Content fed from outside sources such as Google Sheets — update the spreadsheet and the screen follows.',
        metaDescription: 'sonopto.signage dynamic data: content driven from Google Sheets and other tables.',
      },
      troubleshoot: {
        name: 'Troubleshoot',
        intro:
          'Start here if a player shows offline, sticks on the loading screen, or a video plays as a black screen.',
        metaDescription: 'sonopto.signage troubleshooting: offline player, stuck loading, black screen on video.',
      },
    },
  },
  about: {
    pageTitle: 'About Us',
    intro: 'Your Solution Partner in the Field.',
    body: [
      'We are the technical operations partner that businesses and technology firms trust to have by their side in the field. In installation, integration and maintenance, we are the natural extension of your team.',
      'We focus on building, sustaining and operating systems, covering the whole path from installation to equipment supply, from commissioning to after-sales support, all from a single point of contact. Our service focus is your systems\' uptime, first and foremost.',
      'In our B2B partnerships we value client confidentiality and act as a natural extension of our partner\'s own team out in the field.',
    ],
    imageAlt: 'A Sonopto field technician organising cabling inside a rack cabinet',
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
    imageAlt: 'A Sonopto support agent taking a call on the technical support line',
  },
  whatsapp: {
    label: 'Message us on WhatsApp',
    sales: 'Sales',
    support: 'Support',
    installation: 'Installation',
    prefill: 'Hello, I am writing from your website.',
  },
};
