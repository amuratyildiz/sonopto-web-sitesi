export interface FaqEntry {
  question: string;
  answer: string;
}

export interface Dictionary {
  nav: {
    home: string;
    services: string;
    about: string;
    visionMission: string;
    references: string;
    faq: string;
    contact: string;
  };
  footer: {
    tagline: string;
    servicesTitle: string;
    companyTitle: string;
    contactTitle: string;
    rightsReserved: string;
  };
  common: {
    readMore: string;
    viewAllReferences: string;
    getQuote: string;
    sendMessage: string;
    switchLanguage: string;
    backToReferences: string;
    client: string;
    location: string;
    category: string;
    date: string;
  };
  home: {
    heroTagline: string;
    heroSubtitle: string;
    heroCta: string;
    servicesTitle: string;
    servicesSubtitle: string;
    partnersTitle: string;
    referencesTitle: string;
    ctaTitle: string;
    ctaSubtitle: string;
  };
  services: {
    pageTitle: string;
    pageIntro: string;
    items: {
      installation: { title: string; summary: string; details: string[] };
      maintenance: { title: string; summary: string; details: string[] };
      consulting: { title: string; summary: string; details: string[] };
      supply: { title: string; summary: string; details: string[] };
    };
  };
  about: {
    pageTitle: string;
    intro: string;
    body: string[];
  };
  visionMission: {
    pageTitle: string;
    visionTitle: string;
    vision: string;
    missionTitle: string;
    mission: string;
  };
  references: {
    pageTitle: string;
    pageIntro: string;
    empty: string;
  };
  faq: {
    pageTitle: string;
    pageIntro: string;
    items: FaqEntry[];
  };
  contact: {
    pageTitle: string;
    pageIntro: string;
    formName: string;
    formPhone: string;
    formEmail: string;
    formCompany: string;
    formSubject: string;
    formMessage: string;
    formRequired: string;
    formSuccess: string;
    formError: string;
    addressTitle: string;
    phoneTitle: string;
    emailTitle: string;
  };
}

export const tr: Dictionary = {
  nav: {
    home: 'Ana Sayfa',
    services: 'Hizmetler',
    about: 'Kurumsal',
    visionMission: 'Vizyon & Misyon',
    references: 'Referanslar',
    faq: 'SSS',
    contact: 'İletişim',
  },
  footer: {
    tagline: 'Siz işinize odaklanın, teknolojinizi biz yönetelim.',
    servicesTitle: 'Hizmetler',
    companyTitle: 'Kurumsal',
    contactTitle: 'İletişim',
    rightsReserved: 'Tüm hakları saklıdır.',
  },
  common: {
    readMore: 'Devamını Oku',
    viewAllReferences: 'Tüm Referansları Gör',
    getQuote: 'Teklif Alın',
    sendMessage: 'Mesaj Gönder',
    switchLanguage: 'English',
    backToReferences: 'Tüm referanslara dön',
    client: 'Müşteri',
    location: 'Lokasyon',
    category: 'Kategori',
    date: 'Tarih',
  },
  home: {
    heroTagline: 'Siz İşinize Odaklanın, Teknolojinizi Biz Yönetelim',
    heroSubtitle:
      'Ses, görüntü ve sahne ışık sistemlerinin kurulumu, bakımı ve danışmanlığında uçtan uca çözüm ortağınız.',
    heroCta: 'Hizmetlerimizi İnceleyin',
    servicesTitle: 'Neler Yapıyoruz',
    servicesSubtitle: 'Kurulumdan satış sonrası desteğe, AV sistemlerinizin tüm yaşam döngüsünü yönetiyoruz.',
    partnersTitle: 'Birlikte Çalıştığımız Markalar',
    referencesTitle: 'Öne Çıkan Projeler',
    ctaTitle: 'Projenizi konuşalım',
    ctaSubtitle: 'İhtiyaçlarınızı dinleyip size en uygun AV çözümünü birlikte tasarlayalım.',
  },
  services: {
    pageTitle: 'Hizmetlerimiz',
    pageIntro:
      'Kurulum ve montajdan danışmanlığa, bakım-onarımdan satış ve tedarike kadar AV sistemlerinizin her aşamasında yanınızdayız.',
    items: {
      installation: {
        title: 'Kurulum ve Montaj',
        summary: 'Ses, görüntü ve sahne ışık sistemlerinin profesyonel kurulumu ve devreye alınması.',
        details: [
          'Proje bazlı keşif ve uygulama planlaması',
          'Ses, görüntü, LED ekran ve sahne ışık sistemlerinin montajı',
          'Kontrol sistemleri entegrasyonu ve devreye alma',
          'Kurulum sonrası test ve kullanıcı eğitimi',
        ],
      },
      maintenance: {
        title: 'Bakım ve Onarım',
        summary: 'Planlı bakım ve arıza müdahalesiyle sistemlerinizin kesintisiz çalışmasını garanti altına alıyoruz.',
        details: [
          'Periyodik bakım planları ve saha ziyaretleri',
          'Arıza tespiti ve hızlı müdahale',
          'Yedek parça tedariki ve garanti kapsamı takibi',
          'Uzaktan izleme ve önleyici bakım önerileri',
        ],
      },
      consulting: {
        title: 'Danışmanlık Hizmetleri',
        summary: 'Doğru teknolojiyi doğru bütçeyle seçmeniz için proje öncesi teknik danışmanlık sunuyoruz.',
        details: [
          'İhtiyaç analizi ve teknoloji seçimi',
          'Bütçe ve zaman planlaması desteği',
          'Teknik şartname hazırlığı',
          'Uygulayıcı firma seçiminde bağımsız danışmanlık',
        ],
      },
      supply: {
        title: 'Satış ve Tedarik',
        summary: 'Global markaların ekipmanlarını ihtiyacınıza uygun şekilde tedarik ediyoruz.',
        details: [
          'Uluslararası markalarla doğrudan iş ortaklığı',
          'İhtiyaca özel ekipman seçimi ve teklif hazırlığı',
          'Lojistik ve teslimat koordinasyonu',
          'Satış sonrası destek ve garanti süreçleri',
        ],
      },
    },
  },
  about: {
    pageTitle: 'Hakkımızda',
    intro: 'Sahadaki Çözüm Ortağınız.',
    body: [
      'Biz, işletmelerin ve teknoloji firmalarının sahada güvenle yanına aldığı teknik operasyon partneriyiz. Kurulum, entegrasyon ve bakım konularında ekibinizin doğal uzantısıyız.',
      'Ürün satmaya değil, sistem kurmaya, yaşatmaya ve işletmeye odaklanıyoruz — kurulumdan satış sonrası desteğe kadar tek noktadan hizmet sunuyoruz.',
    ],
  },
  visionMission: {
    pageTitle: 'Vizyon & Misyon',
    visionTitle: 'Vizyonumuz',
    vision: 'Sonopto kurduysa sorun çıkmaz.',
    missionTitle: 'Misyonumuz',
    mission: 'Müşterinin krizi, bizim önceliğimizdir.',
  },
  references: {
    pageTitle: 'Referanslarımız',
    pageIntro: 'Tamamladığımız projelerden bazıları.',
    empty: 'Yakında burada yeni projeler yer alacak.',
  },
  faq: {
    pageTitle: 'Sıkça Sorulan Sorular',
    pageIntro: 'Teknik servis ve destek hakkında en çok merak edilen sorular.',
    items: [
      {
        question: 'LED ekranda piksel aralığı (pixel pitch) nedir?',
        answer:
          'Piksel aralığı, bir LED ekrandaki iki piksel merkezi arasındaki mesafedir (mm cinsinden) ve ekranın çözünürlüğünü, izleme mesafesini ve maliyetini doğrudan etkiler. Doğru piksel aralığını, kullanım alanına ve izleyici mesafesine göre projeye özel olarak belirliyoruz.',
      },
      {
        question: 'Arıza durumunda ne kadar sürede müdahale ediyorsunuz?',
        answer:
          'Bakım anlaşması kapsamındaki müşterilerimize öncelikli müdahale sağlıyoruz; müdahale süresi anlaşma kapsamına ve lokasyona göre değişir. Kesin süreler için bizimle iletişime geçebilirsiniz.',
      },
      {
        question: 'Satın aldığımız ekipmanların garantisi ne kadar sürüyor?',
        answer:
          'Garanti süresi, tedarikçi markaya ve ürün grubuna göre değişir. Teklif aşamasında size ürüne özel garanti koşullarını netleştiriyoruz.',
      },
      {
        question: 'Kurulum öncesi teknik danışmanlık ücretli mi?',
        answer:
          'İlk görüşme ve ihtiyaç analizi ücretsizdir. Detaylı teknik danışmanlık kapsamı projenin büyüklüğüne göre ayrıca değerlendirilir.',
      },
    ],
  },
  contact: {
    pageTitle: 'İletişim',
    pageIntro: 'Projeniz için bize ulaşın, en kısa sürede dönüş yapalım.',
    formName: 'Ad Soyad',
    formPhone: 'Telefon',
    formEmail: 'E-posta',
    formCompany: 'Şirket',
    formSubject: 'Konu',
    formMessage: 'Mesaj',
    formRequired: 'zorunlu',
    formSuccess: 'Mesajınız için teşekkürler, en kısa sürede size dönüş yapacağız.',
    formError: 'Bir şeyler ters gitti, lütfen daha sonra tekrar deneyin veya bizi doğrudan arayın.',
    addressTitle: 'Adres',
    phoneTitle: 'Telefon',
    emailTitle: 'E-posta',
  },
};
