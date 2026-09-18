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
    visionDetail: string;
    missionTitle: string;
    mission: string;
    missionDetail: string;
    valuesTitle: string;
    values: { title: string; description: string }[];
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
        summary: 'Alan hesabından kablo yönetimine, estetik montajdan ince ayar kalibrasyonuna kadar profesyonel kurulum süreci. Hatalı kurulum, ekipman ömrünü yaklaşık %40 azaltır.',
        details: [
          'Alan/akustik hesabı, kablo yönetimi ve estetik montaj planlaması',
          'Marka bağımsız montaj — Barco, Samsung, Bose gibi üreticilerle çalışma deneyimi',
          'Bilişim ve mimarlık firmalarına saha kurulum/alt yüklenici ortaklığı',
          'Sistemlerin tüm işlevleriyle çalışır halde devreye alınması (commissioning) ve ince ayar kalibrasyonu',
        ],
      },
      maintenance: {
        title: 'Bakım ve Onarım',
        summary: 'Sisteminiz arıza yaptığında "kimi arayacağım?" derdine son. Düzenli bakımı yapılan sistemlerde arıza oranı %75 azalır.',
        details: [
          'Garanti süresi dolmuş veya başka firma tarafından kurulmuş sistemler dahil, tüm AV envanterinize bakım-onarım',
          'Periyodik Bakım Anlaşmaları: 7/24 koruma sağlayan yıllık sözleşmeler',
          'Acil Müdahale: kritik arızalarda hızlı yerinde servis',
          'Yedek Parça ve Onarım: projektör lambası değişimi, amplifikatör tamiri, kablo yenileme',
        ],
      },
      consulting: {
        title: 'Danışmanlık Hizmetleri',
        summary: 'İşletmenizin ihtiyacına en uygun, sürdürülebilir ve verimli çözümü sunmak için mimari projelerden ihale süreçlerine kadar teknik destek sağlıyoruz.',
        details: [
          'Mevcut sistem analizi ve raporlama',
          'İhtiyaç belirleme ve marka bağımsız ürün reçetesi oluşturma',
          'Teknik şartname ve ihale dosyası hazırlama',
          'Uygulayıcı firma seçiminde bağımsız danışmanlık',
        ],
      },
      supply: {
        title: 'Satış ve Tedarik',
        summary: 'Geniş distribütör ağımızla servis ve kurulum projeleriniz için gerekli cihaz ve yedek parçaları en uygun şartlarda temin ediyoruz.',
        details: [
          'Distribütör ağı üzerinden cihaz ve yedek parça temini',
          'Marka bağımsız montaj kapasitesi — Barco, Samsung, Bose gibi markalar',
          'Bilişim ve mimarlık firmalarına alt yüklenici tedarik desteği',
          'Devreye alma (commissioning) dahil eksiksiz teslimat',
        ],
      },
    },
  },
  about: {
    pageTitle: 'Hakkımızda',
    intro: 'Sahadaki Çözüm Ortağınız.',
    body: [
      'Biz, işletmelerin ve teknoloji firmalarının sahada güvenle yanına aldığı teknik operasyon partneriyiz. Kurulum, entegrasyon ve bakım konularında ekibinizin doğal uzantısıyız.',
      'Ürün satmaya değil, sistem kurmaya, yaşatmaya ve işletmeye odaklanıyoruz — kurulumdan satış sonrası desteğe kadar tek noktadan hizmet sunuyoruz. Servis odaklılığımızın önceliği sistemlerinizin kesintisiz çalışma (uptime) süresidir.',
      'B2B iş ortaklıklarımızda müşteri konfidansiyalitesine değer veririz ve sahada partnerimizin kendi ekibinin doğal bir parçası gibi hareket ederiz.',
    ],
  },
  visionMission: {
    pageTitle: 'Vizyon & Misyon',
    visionTitle: 'Vizyonumuz',
    vision: 'Sonopto kurduysa sorun çıkmaz.',
    visionDetail:
      'Ürün bağımsız hizmet anlayışıyla, Türkiye\'nin en geniş ve yetkin profesyonel AV teknik servis ağını oluşturmak; "Sonopto kurduysa sorun çıkmaz" algısını endüstri standardı haline getirmek.',
    missionTitle: 'Misyonumuz',
    mission: 'Müşterinin krizi, bizim önceliğimizdir.',
    missionDetail:
      'İşletmelerin ve bireylerin teknolojik altyapılarını emanet edebilecekleri, sorun anında ulaşabilecekleri ve çözüm garantisi veren tek adres olmak.',
    valuesTitle: 'Temel Değerlerimiz',
    values: [
      { title: 'Ulaşılabilirlik', description: 'Sorun anında müşteri desteği sağlama taahhüdü.' },
      { title: 'Yetkinlik', description: 'Mühendislik yaklaşımıyla kurulan sağlam sistem anlayışı.' },
      { title: 'Güven', description: 'Müşteri itibarını koruyarak sahada en iyi şekilde temsil etme.' },
    ],
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
          'Piksel aralığı, bir LED panelde komşu iki pikselin merkezi arasındaki mesafedir (mm cinsinden ölçülür — örneğin P2.5\'te bu mesafe 2,5 mm\'dir). Değer küçüldükçe görüntü daha keskin ve yüksek çözünürlüklü olur, ancak üretim maliyeti artar. Genel kural: minimum izleme mesafesi (metre) ≈ piksel aralığı (mm) × 1 — yani bir P4 ekran en az 4 metre uzaklıktan izlenmelidir. İç mekan ekranları yakından izlendiği için dar aralık (P1.2–P3), dış mekan ekranları ise güneş ışığına dayanıklı ve uzaktan görülen geniş aralık (P4–P10+) gerektirir. Doğru piksel aralığını kullanım alanınıza ve izleyici mesafenize göre projeye özel belirliyoruz.',
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
