export interface FaqEntry {
  question: string;
  answer: string;
}

export interface SolutionItem {
  /** Short label used in navigation and on the hub cards. */
  title: string;
  /** The page's H1 — a hook line, not a category name. */
  headline: string;
  summary: string;
  intro: string;
  problemTitle: string;
  problemBody: string;
  servicesTitle: string;
  services: string[];
  approachTitle: string;
  approachBody: string;
  imageAlt: string;
}

export interface ServiceItem {
  title: string;
  summary: string;
  details: string[];
  /* Descriptive, keyword-bearing alt text per identity guide §8.4. */
  imageAlt: string;
}

/** A titled paragraph — used for both the feature and the integration grids. */
export interface SignageBlock {
  title: string;
  body: string;
}

/**
 * The product page. Deliberately not modelled on SolutionItem: that shape opens
 * from a sector's technical risk and closes on a survey call, which would force
 * us to invent a "problem" the product does not have.
 *
 * No field here is optional. Anything we cannot yet source honestly — the
 * supported-device list, screenshots, public pricing — is absent from the
 * interface entirely, so the day the material arrives both dictionaries fail to
 * compile until they are filled. An optional field would instead invite
 * placeholder copy and ship it.
 */
export interface SignageContent {
  navTag: string;
  navNote: string;
  pageTitle: string;
  metaDescription: string;
  heroKicker: string;
  heroHeadline: string;
  heroIntro: string;
  platformCta: string;
  platformCtaNote: string;
  whatTitle: string;
  whatBody: string;
  featuresTitle: string;
  /* Keyed rather than a list: the key also selects the icon, so a block and its
     icon cannot drift apart the way parallel arrays would. */
  features: {
    offline: SignageBlock;
    grouping: SignageBlock;
    power: SignageBlock;
    geo: SignageBlock;
    monitoring: SignageBlock;
    scheduling: SignageBlock;
  };
  /** Carried over from the product sheet: capabilities vary by player type. */
  featuresFootnote: string;
  integrationsTitle: string;
  integrationsIntro: string;
  integrations: {
    design: SignageBlock;
    drive: SignageBlock;
    sheets: SignageBlock;
    doorSign: SignageBlock;
  };
  devicesTitle: string;
  devicesIntro: string;
  devicesNote: string;
  /* Labelled as platform integration, not as our own hardware bench test —
     the page must not imply we rated Samsung against LG ourselves. */
  deviceScoreLabel: string;
  devicePerformanceLabel: string;
  deviceAutoUpdateLabel: string;
  deviceRemoteRebootLabel: string;
  devicePowerLabel: string;
  /** Shown instead of the meters for a generic platform with no fixed hardware. */
  deviceUnrated: string;
  devices: {
    android: string;
    philips: string;
    bravia: string;
    fireTv: string;
    signageStick: string;
    tcl: string;
    viewsonic: string;
    raspberryPi: string;
    brightsign: string;
    samsung: string;
    vestel: string;
    novastar: string;
    amino: string;
    lg: string;
    chromeos: string;
    googleTv: string;
    chromecast: string;
  };
  differenceTitle: string;
  differenceBody: string;
  differencePoints: SignageBlock[];
  useCasesTitle: string;
  useCasesIntro: string;
  processTitle: string;
  processSteps: SignageBlock[];
  faqTitle: string;
  faq: FaqEntry[];
  ctaTitle: string;
  ctaBody: string;
  /** Sits at the foot of every sector solution page. */
  crossLinkBody: string;
  crossLinkCta: string;
}

export interface Dictionary {
  nav: {
    home: string;
    services: string;
    solutions: string;
    about: string;
    visionMission: string;
    references: string;
    faq: string;
    contact: string;
  };
  /**
   * The line that sits under the wordmark (identity guide §5.4). Shared by the
   * footer and the homepage title so the two cannot drift apart.
   */
  brandTagline: string;
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
    viewAllSolutions: string;
    /* CTA wording follows the identity guide §9.4: service-led, never sales-led
       ("Teklif İsteyin" on its own is explicitly listed as not to be used). */
    contactUs: string;
    requestSurvey: string;
    callService: string;
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
    heroImageAlt: string;
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
      installation: ServiceItem;
      maintenance: ServiceItem;
      consulting: ServiceItem;
      supply: ServiceItem;
    };
  };
  solutions: {
    pageTitle: string;
    headline: string;
    pageIntro: string;
    relatedTitle: string;
    items: {
      conference: SolutionItem;
      education: SolutionItem;
      hotel: SolutionItem;
      publicSector: SolutionItem;
    };
  };
  signage: SignageContent;
  about: {
    pageTitle: string;
    intro: string;
    body: string[];
    imageAlt: string;
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
    imageAlt: string;
  };
  whatsapp: {
    label: string;
    sales: string;
    support: string;
    installation: string;
    /** Prefilled into the chat so the visitor does not start from a blank box. */
    prefill: string;
  };
}

export const tr: Dictionary = {
  nav: {
    home: 'Ana Sayfa',
    services: 'Hizmetler',
    solutions: 'Çözümler',
    about: 'Kurumsal',
    visionMission: 'Vizyon & Misyon',
    references: 'Referanslar',
    faq: 'SSS',
    contact: 'İletişim',
  },
  brandTagline: 'Görüntü | Ses | Sahne Sistemleri',
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
    viewAllSolutions: 'Tüm Çözümleri Gör',
    contactUs: 'Bize Ulaşın',
    requestSurvey: 'Ücretsiz Keşif İsteyin',
    callService: 'Servis Çağırın',
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
    heroImageAlt:
      'Konferans salonunda video konferans ekranı ve masa mikrofonlarıyla kurulmuş profesyonel toplantı sistemi',
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
        imageAlt: 'Sonopto teknik ekibi tarafından gerçekleştirilen profesyonel tavan hoparlörü montajı',
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
        imageAlt: 'Periyodik bakım kapsamında projektör lens temizliği yapan Sonopto teknisyeni',
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
        imageAlt: 'AV proje danışmanlığı kapsamında teknik şartname ve proje planı incelemesi',
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
        imageAlt: 'Kurulum projesi için hazırlanan profesyonel AV ekipmanları ve taşıma kasaları',
      },
    },
  },
  solutions: {
    pageTitle: 'Sektörel Çözümler',
    headline: 'Sektörünüze Özel Teknik Güvence',
    pageIntro:
      'Her sektörün teknik riski farklıdır: bir toplantı salonunda kritik olan sinyalin hiç kesilmemesi, bir otelde gece yarısı çalışmayan televizyon, bir okulda tören sabahı susan anons sistemidir. Çözümlerimizi bu farklara göre kurguluyor, sistemi kurduğumuz gibi yaşatıyoruz.',
    relatedTitle: 'Diğer Sektörel Çözümlerimiz',
    items: {
      conference: {
        title: 'Konferans ve Toplantı Salonları',
        headline: 'Toplantılarınızın Gizli Kahramanı',
        summary:
          'Toplantı odası ve konferans salonu kurulumu, Zoom/Teams oda entegrasyonu ve toplantı öncesi yerinde teknik destek.',
        intro:
          'En önemli sunumunuz sırasında ekranda "sinyal yok" uyarısı görmek, teknik bir arıza olmanın ötesinde kurumsal bir itibar meselesidir. Toplantı salonu sistemlerini, en kritik anda değil hiçbir anda sizi yarı yolda bırakmayacak şekilde kuruyor ve işletiyoruz.',
        problemTitle: 'Toplantı odalarında sorunlar neden hep kritik anda çıkar?',
        problemBody:
          'Çünkü bu sistemler yılın büyük bölümünde düşük yükte çalışır; gerçek yük, tüm katılımcıların bağlandığı, ekranın paylaşıldığı ve mikrofonların aynı anda açıldığı toplantıda ortaya çıkar. Sahadaki gözlemimize göre arızaların çoğu cihaz kalitesinden değil, devreye alma sırasında hiç test edilmemiş kullanım senaryolarından kaynaklanır. Bu yüzden hiçbir kurulumu, sistemi gerçek toplantı senaryosuyla birebir çalıştırmadan teslim etmiyoruz.',
        servicesTitle: 'Hizmetlerimiz',
        services: [
          'Toplantı odası ve konferans salonu ses/görüntü sistemi kurulumu',
          'Zoom Rooms ve Microsoft Teams Rooms oda kurulumu — donanım seçimi, lisans eşleştirme ve devreye alma',
          'Kablo yönetimi ve estetik montaj; masa altı bağlantı üniteleri ve rack düzeni',
          'Toplantı öncesi bağlantı kontrolü ve kritik toplantılarda yerinde teknisyen desteği',
          'Simültane tercüme ve delege sistemlerinin kurulumu ve işletmesi',
        ],
        approachTitle: 'Mevcut sistemimizi tamamen değiştirmek zorunda mıyız?',
        approachBody:
          'Hayır. Marka bağımsız çalıştığımız için mevcut ekranlarınızı, kameralarınızı ve ses sisteminizi elden geçirip yeni platforma entegre etmek çoğu zaman mümkündür. Önce mevcut sistemin durum raporunu çıkarır, hangi bileşenin kalabileceğini hangisinin değişmesi gerektiğini gerekçesiyle belirtiriz; gereksiz değişimi önlemek sürdürülebilirlik ilkemizin bir parçasıdır.',
        imageAlt:
          'Konferans salonunda video konferans ekranı ve masa mikrofonlarıyla kurulmuş toplantı sistemi',
      },
      education: {
        title: 'Okul ve Eğitim Kurumları',
        headline: 'Ders Ziliniz Hiç Susmasın',
        summary:
          'Akıllı tahta servisi, anons ve tören sistemleri, yaz dönemi toplu bakım — eğitim takvimine göre planlanan teknik hizmet.',
        intro:
          'Eğitim kurumlarında teknik arıza, yalnızca bir cihazın durması değil dersin durmasıdır. Akıllı tahtadan anons sistemine, tören alanındaki seslendirmeden konferans salonuna kadar tüm AV envanterinizi tek elden ve okul takvimine uygun şekilde yönetiyoruz.',
        problemTitle: 'Okullarda bakım ne zaman yapılmalı?',
        problemBody:
          'Yaz döneminde. Okullar kapalıyken tüm sistemlerin elden geçirilmesi, eğitim yılı içinde ders kesintisine yol açan acil arızaların büyük bölümünü baştan önler. Düzenli bakımı yapılan sistemlerde arıza oranı %75 azalır; bu oran, kullanım yoğunluğu yüksek ve arızanın maliyeti doğrudan eğitime yansıyan kurumlarda daha da belirleyici hale gelir.',
        servicesTitle: 'Eğitim Kurumlarına Özel Hizmetler',
        services: [
          'Akıllı tahta ve etkileşimli ekran servisi: dokunmatik panel onarımı, kalibrasyon ve yazılım güncellemesi',
          'Yaz dönemi toplu bakım programı — tüm sınıf ve salonların eğitim yılı başlamadan elden geçirilmesi',
          'Okul anons ve zil sistemleri kurulumu, bölgesel seslendirme',
          'Tören alanı seslendirmesi: hava koşullarına dayanıklı dış mekân ses sistemleri',
          'Konferans salonu ve çok amaçlı salon ses/görüntü kurulumu',
        ],
        approachTitle: 'Bütçe planlaması nasıl yapılır?',
        approachBody:
          'Eğitim kurumlarının bütçesi genellikle yıllıktır ve önceden bağlanır. Bu yüzden önce mevcut envanterin durum raporunu çıkarır, hangi sistemin bu yıl hangisinin gelecek yıl müdahale gerektirdiğini önceliklendirilmiş bir plana bağlarız. Periyodik bakım anlaşması ise bu planı öngörülebilir ve sabit bir bütçe kalemine dönüştürür.',
        imageAlt: 'Sınıfta etkileşimli akıllı tahta başında ders anlatan öğretmen ve öğrenciler',
      },
      hotel: {
        title: 'Otel ve Konaklama',
        headline: 'Misafir Memnuniyetinin Teknik Altyapısı',
        summary:
          'Balo salonu ses ve sahne ışık işletmesi, IPTV ve oda TV kurulumu, etkinlik dönemlerinde teknisyen desteği.',
        intro:
          'Otelcilikte teknik bir aksaklık doğrudan misafir yorumuna dönüşür: gecenin bir yarısı çalışmayan televizyon ya da düğün sırasında kesilen müzik. Otellerin AV altyapısını, misafir fark etmediği sürece başarılı sayılan bir hizmet olarak kurguluyoruz.',
        problemTitle: 'Etkinlik yoğunluğunu kendi kadromuzla nasıl karşılarız?',
        problemBody:
          'Çoğu otel için yıl boyunca tam zamanlı bir AV teknisyeni istihdam etmek ekonomik değildir; buna karşılık düğün, kongre ve gala sezonlarında tek bir teknisyen bile yetmez. Dönemsel teknisyen desteğiyle bu dalgalanmayı kapatıyoruz: etkinlik takviminize göre sahada teknisyen bulunduruyor, sezon dışında ise sistemi bakım anlaşması kapsamında izliyoruz.',
        servicesTitle: 'Operasyonel Çözümler',
        services: [
          'Balo salonu ses, sahne ışık ve görüntü sistemlerinin kurulumu ve revizyonu',
          'Etkinlik dönemlerinde saha teknisyeni desteği (dönemsel teknik kadro)',
          'IPTV ve oda televizyonu kurulumu — yüzlerce odanın merkezi sistem entegrasyonu',
          'Toplantı ve kongre salonlarının teknik işletmesi',
          'Digital signage ve lobi ekranlarının kurulumu ve içerik altyapısı',
        ],
        approachTitle: 'Otel çalışırken kurulum yapılabilir mi?',
        approachBody:
          'Evet; operasyon hiç durmadan çalışmayı varsayarak planlıyoruz. Gürültülü işler misafir yoğunluğunun düşük olduğu saatlere alınır, kat kat ilerlenir ve her günün sonunda çalışılan alan misafir kullanımına hazır bırakılır. Balo salonu revizyonlarında ise etkinlik takviminizle çakışmayan bir pencere belirleyip ekip planlamasını o pencereye göre yaparız.',
        imageAlt:
          'Otel balo salonunda profesyonel ses sistemi ve sahne aydınlatmasıyla düzenlenmiş gala etkinliği',
      },
      publicSector: {
        title: 'Kamu Kurumları ve Belediyeler',
        headline: 'Protokol Kurallarına Uygun Teknik Hizmet',
        summary:
          'Meclis salonu oylama ve delege sistemleri, simültane tercüme, teknik şartname ve ihale dosyası danışmanlığı.',
        intro:
          'Kamu projelerinde teknik yeterlilik kadar sürecin şeffaflığı ve mevzuata uygunluğu belirleyicidir. İhale dosyasının hazırlanmasından kesin kabule kadar, protokol kurallarına uygun ve belgelenebilir bir kurulum süreci yürütüyoruz.',
        problemTitle: 'Teknik şartnameyi kim hazırlamalı?',
        problemBody:
          'Şartnamenin, o işi almayı hedefleyen firmadan bağımsız bir tarafça hazırlanması kurumun lehinedir; aksi halde şartname tek bir markanın ürün özelliklerine göre şekillenir ve rekabet daralır. Marka bağımsız çalıştığımız için ihtiyacı tanımlayan, belirli bir üreticiyi işaret etmeyen teknik şartnameler hazırlıyor, ihale sürecinde kurumun teknik danışmanı olarak yer alıyoruz.',
        servicesTitle: 'Kamuya Yönelik Hizmetler',
        services: [
          'Teknik şartname ve ihale dosyası hazırlama, ihale sürecinde teknik danışmanlık',
          'Meclis salonu sistemleri: oylama ve delege üniteleri, kurulum ve yıllık kontroller',
          'Simültane tercüme sistemi kurulumu ve uluslararası toplantılarda teknisyenli işletme',
          'Konferans merkezi ve çok amaçlı salon ses/görüntü sistemleri',
          'Kamu binalarında anons ve genel seslendirme sistemleri',
        ],
        approachTitle: 'Kesin kabulden sonra ne oluyor?',
        approachBody:
          'Kurulumun tamamlanması bizim için işin sonu değil başlangıcıdır. Kesin kabulün ardından sistemi periyodik bakım anlaşması kapsamına almayı öneriyoruz: meclis oylama ünitelerinin oturum öncesi kontrolleri, simültane sistemlerin toplantı öncesi testleri ve yıllık genel bakım bu kapsamda yürütülür. Böylece sistem, ilk gün teslim edildiği performansta kalır.',
        imageAlt: 'Meclis salonunda delege üniteleri ve oylama ekranlarıyla donatılmış oturum salonu',
      },
    },
  },
  signage: {
    navTag: 'sonopto.signage',
    navNote: 'Dijital tabela platformumuz',
    pageTitle: 'sonopto.signage — Dijital Tabela Yazılımı',
    metaDescription:
      'sonopto.signage: bulut tabanlı dijital tabela içerik ve cihaz yönetim platformu. İçeriği tasarlayın, zamanlayın, tüm ekranlarınıza gönderin — ekranı kuran ekipten.',
    heroKicker: 'ÜRÜN',
    heroHeadline: 'Ekranlarınızı Tek Panelden Yönetin',
    heroIntro:
      'sonopto.signage, içerik tasarlamanıza, zamanlamanıza ve herhangi bir ekrana göndermenize olanak tanıyan bulut tabanlı bir dijital tabela yazılımıdır. Ekranı asan, kabloyu çeken ve arızada gelen ekiple aynı çatı altında.',
    platformCta: 'Platforma Giriş Yapın',
    /* Sits at the foot of the page, not in the hero: signing in is for people
       who are already customers, and it should not compete with the enquiry. */
    platformCtaNote: 'Zaten sonopto.signage kullanıyor musunuz?',
    whatTitle: 'sonopto.signage nedir?',
    whatBody:
      'Bir ekrana ne zaman ne görüneceğini belirleyen yönetim katmanıdır. Tarayıcıdan açtığınız panelden içeriğinizi yükler, çalma listelerini kurar, hangi ekranın hangi saatte ne göstereceğini planlarsınız. Tek bir ekran için de, farklı şehirlere dağılmış yüzlerce ekran için de aynı panel kullanılır. Altyapı Google Cloud üzerinde çalışır; destek Türkçe ve doğrudan bizden.',
    featuresTitle: 'Öne Çıkan Özellikler',
    features: {
      offline: {
        title: 'Çevrimdışı Çalışma',
        body: 'Medya dosyaları ekranın yerel depolamasına iner. İnternet kesildiğinde ekran kararmaz, yayın kaldığı yerden devam eder.',
      },
      grouping: {
        title: 'Ekran Gruplama',
        body: 'Aynı içeriği ve ayarları paylaşması gereken ekranlar gruplanır. Bir değişikliği yüzlerce ekrana tek işlemle uygularsınız.',
      },
      power: {
        title: 'Güç Yönetimi',
        body: 'Ekranlar belirlenen tarih ve saatte otomatik açılıp kapanır. Mesai dışında boşuna çalışan ekran, hem elektrik hem panel ömrü demektir.',
      },
      geo: {
        title: 'Coğrafi Konum',
        body: 'İçerik, cihazın bulunduğu konuma göre otomatik değişir. Aynı çalma listesi her şubede o şubeye ait içeriği gösterir.',
      },
      monitoring: {
        title: 'Uzaktan İzleme ve Kontrol',
        body: 'Hangi ekranın çevrimiçi olduğunu, ne oynattığını ve en son ne zaman güncellendiğini panelden görürsünüz. Arızayı müşteri değil siz fark edersiniz.',
      },
      scheduling: {
        title: 'Zamanlama ve Katmanlar',
        body: 'Gün içindeki saat dilimlerine göre farklı içerik akışları kurulur; yerleşim katmanlarıyla aynı ekranda birden fazla bölge yönetilir.',
      },
    },
    featuresFootnote: 'Özellikler oynatıcı tipine göre değişiklik gösterebilir; kurulum öncesi birlikte netleştiriyoruz.',
    integrationsTitle: 'Entegrasyonlar',
    integrationsIntro:
      'İçeriğinizi zaten kullandığınız araçlardan besleyin; ekranı güncellemek için ayrı bir iş akışı kurmanıza gerek kalmasın.',
    integrations: {
      design: {
        title: 'Canva',
        body: 'Canva üzerinde hazırladığınız tasarımlar doğrudan ekranlarınıza akar. Yüz binlerce hazır şablon ve sürükle-bırak düzeniyle, tasarım için ayrı bir ekibe ihtiyaç duymazsınız.',
      },
      drive: {
        title: 'Google Drive',
        body: 'Medya dosyalarınızı Drive klasöründen bağlarsınız; klasöre eklenen dosya ekranda belirir. Ekibiniz panele hiç girmeden içerik güncelleyebilir.',
      },
      sheets: {
        title: 'Google Sheets',
        body: 'Fiyat listesi, program veya duyuru gibi sık değişen veriler bir tablodan beslenir. Tabloyu güncellediğinizde ekran kendiliğinden güncellenir.',
      },
      doorSign: {
        title: 'Kapı Etiketi',
        body: 'Microsoft ve Google Takvim ile bağlanan kapı ekranları, odanın o anki doluluğunu ve sıradaki toplantıyı gösterir. Salon kapısındaki çakışma tartışmasını bitirir.',
      },
    },
    devicesTitle: 'Desteklenen Cihazlar',
    devicesIntro:
      'sonopto.signage, kurumsal ekranların kendi işletim sistemi üzerinde ya da harici bir oynatıcıyla çalışır. Elinizdeki ekranın hangi yola uygun olduğunu keşif sırasında yerinde belirliyoruz.',
    devicesNote:
      'Puanlar, platformun sonopto.signage ile entegrasyon olgunluğunu gösterir; donanım kıyaslaması değildir. Listede göremediğiniz bir cihaz için bize danışın, uyumluluğu kurulum öncesinde test ediyoruz.',
    deviceScoreLabel: 'Platform Uyumu',
    devicePerformanceLabel: 'Oynatma Performansı',
    deviceAutoUpdateLabel: 'Otomatik güncelleme',
    deviceRemoteRebootLabel: 'Uzaktan yeniden başlatma',
    devicePowerLabel: 'Güç yönetimi',
    deviceUnrated: 'Kullanılan donanıma göre değişir',
    devices: {
      android:
        'Yazılım yerel bir Android uygulaması olarak çalışır. Android 5 ve üzeri desteklenir, 7 ve sonrası önerilir. Performans ve uzaktan kontrol yetenekleri seçtiğiniz kutunun donanımına bağlıdır.',
      philips:
        'Android’i dahili kurumsal ekranlar. Yansıma önleyici panel ve kesintisiz çalışmaya uygun yapı; donanımın tamamı uzaktan yönetilebilir.',
      bravia:
        'Sony BRAVIA profesyonel serisi (BZ, BU, EZ, BA). Yazılım doğrudan ekran üzerinde çalışır, harici oynatıcı gerekmez. Yüksek parlaklık isteyen vitrin ve lobi uygulamaları için.',
      fireTv:
        'Bütçe dostu giriş seviyesi. Kısa süreli ve kritik olmayan kurulumlarda iş görür; işletim sistemi güncellemeleri yayını kesebildiği ve güç yönetimi bulunmadığı için 7/24 senaryolarda Signage Stick tercih edilmeli.',
      signageStick:
        'Doğrudan dijital tabela için üretilmiş tak-çalıştır oynatıcı. Tek ekrandan çok şubeli kurulumlara kadar ölçeklenir ve kesintisiz çalışmaya uygundur.',
      tcl: '43"–98" arası 4K kurumsal Android ekranlar, 400 nit’e kadar parlaklık. 7/24 çalışmaya uygun; perakende, ağırlama ve ulaşım noktaları için.',
      viewsonic:
        'Kesintisiz çalışma için tasarlanmış 4K Android kurumsal ekranlar. WPA3 ağ güvenliği ve esnek bağlantı seçenekleri sunar.',
      raspberryPi:
        'Raspberry Pi 5 ile düşük maliyetli ve güvenilir oynatıcı. Elinizdeki ekranları tabela ekranına çevirmenin en ekonomik yolu.',
      brightsign:
        'Kendi işletim sistemine sahip, adanmış ve yüksek güvenilirlikli oynatıcı. Tüm BrightSign modelleri desteklenir; arıza toleransının kritik olduğu kurulumlar için.',
      samsung:
        'Tizen tabanlı kurumsal ekranlar; SSSP 6.0 / Tizen 4.0 ve üzeri tüm modeller desteklenir. Yansıma önleyici panel ve 24 saat çalışma.',
      vestel:
        'Kurumsal ekran ailesi. Perakende, restoran, kontrol odası ve ulaşım noktaları için; yerli servis ve tedarik avantajıyla.',
      novastar:
        'LED duvarlar ve büyük ölçekli ekranlar için. Taurus ve TU serisi oynatıcılar ViPlex Express üzerinden web sayfası bileşeniyle bağlanır; bu nedenle güç yönetimi ve uzaktan yeniden başlatma bu yolla kullanılamaz.',
      amino:
        'Kurumsal sınıf set üstü kutu (H200 / H200W, Android 10). Yazılım önyüklü gelir, kurcalamaya dayanıklı donanımı dağıtık ağlar için uygundur.',
      lg: 'webOS tabanlı kurumsal ekranlar. Yazılım yerel bir webOS uygulaması olarak çalışır, harici donanım gerekmez.',
      chromeos:
        'Kiosk ve tabela için güvenli, merkezi yönetilebilir platform. Geniş cihaz yelpazesi ve güçlü güncelleme politikası.',
      googleTv:
        'Sony, TCL, Hisense ve Philips televizyonlarında dahili gelir. Uygulama Play Store’dan kurulur, ek donanım gerekmez; güç yönetimi bu platformda bulunmaz.',
      chromecast:
        'Herhangi bir televizyonu tabela ekranına çeviren ekonomik takılabilir oynatıcı, 4K ve HD seçenekleriyle. Ekran arkasına gizlenir; kritik olmayan kurulumlar için uygundur.',
    },
    differenceTitle: 'Farkımız: Ekranı da Biz Kuruyoruz',
    differenceBody:
      'Dijital tabela yazılımı satan çok sayıda firma var. Ayrıldığımız nokta şu: yazılımı satan ekiple ekranı duvara asan ekip aynı. Yazılım tek başına bir çözüm değildir; panelin doğru yere, doğru askıyla, doğru veri ve enerji altyapısıyla monte edilmesi işin yarısıdır.',
    differencePoints: [
      {
        title: 'Tek muhatap, tek sözleşme',
        body: 'Panel, askı sistemi, oynatıcı, veri ve enerji altyapısı, montaj ve platform lisansı tek kalemde. Sorun çıktığında "yazılım mı donanım mı" tartışması yaşanmaz.',
      },
      {
        title: 'Kuran ekip, bakan ekip',
        body: 'Ekran karardığında telefonu açan ekip, o ekranı asan ekiptir. Sistemi tanıyan birinin gelmesi, arıza süresini kısaltan en somut etkendir.',
      },
      {
        title: 'Satın almadan önce keşif',
        body: 'Kaç ekran, hangi boyut, hangi parlaklık ve hangi oynatıcı gerektiğini yerinde görmeden söylemeyiz. Gereksiz donanım önermemek, uzun vadeli çalışma biçimimizin parçası.',
      },
    ],
    useCasesTitle: 'Hangi Sektörlerde Kullanılıyor?',
    useCasesIntro:
      'Dijital tabela ihtiyacı sektöre göre değişir: bir otelde karşılama ve yönlendirme, bir okulda duyuru ve tören bilgilendirmesi, bir kamu binasında sıra ve bilgilendirme ekranıdır. Sektörünüze özel kurguyu aşağıdaki sayfalarda anlattık.',
    processTitle: 'Nasıl Başlıyoruz?',
    processSteps: [
      {
        title: '1. Keşif',
        body: 'Mekânı yerinde görür, ekran sayısını, boyutlarını ve montaj noktalarını belirleriz. Mevcut ekranlarınız varsa bunların platforma bağlanıp bağlanamayacağını burada netleştiririz.',
      },
      {
        title: '2. Ekran ve Montaj',
        body: 'Panel tedariki, askı ve konstrüksiyon imalatı, veri ve enerji altyapısı ile montaj bu aşamada tamamlanır. Kurulum ve montaj hizmetimizin kapsamı bu aşamadadır.',
      },
      {
        title: '3. Hesap Kurulumu ve Eğitim',
        body: 'Platform hesabınız açılır, ekranlar tanımlanır, ilk çalma listeleri birlikte kurulur. İçeriği kendi ekibinizin yönetebilmesi için kullanım eğitimi veririz.',
      },
      {
        title: '4. Bakım ve Destek',
        body: 'Sistem devreye alındıktan sonra periyodik bakım kapsamına alınır. Platform tarafındaki destek e-posta ve telefonla mesai saatleri içinde sağlanır.',
      },
    ],
    faqTitle: 'Sık Sorulan Sorular',
    faq: [
      {
        question: 'Mevcut ekranlarımızı kullanabilir miyiz?',
        answer:
          'Çoğu durumda evet. Ekranın tipine göre ya doğrudan uyumlu bir oynatıcı bağlanır ya da ekranın kendi işletim sistemi kullanılır. Hangi yolun uygun olduğunu keşif sırasında ekranlarınızı görerek belirliyoruz; kullanılabilecek bir ekranı değiştirmenizi önermiyoruz.',
      },
      {
        question: 'İnternet kesilirse ekranlar kararır mı?',
        answer:
          'Hayır. Medya dosyaları ekranın yerel depolamasına indirildiği için yayın çevrimdışı da sürer. İnternet geri geldiğinde cihaz panelle yeniden eşleşir ve bekleyen güncellemeleri alır.',
      },
      {
        question: 'İçeriği kendimiz yönetebilir miyiz?',
        answer:
          'Evet, amaç bu. Panel tarayıcıdan çalışır ve gündelik içerik güncellemesi için teknik bilgi gerektirmez. Kurulum sonrası ekibinize eğitim veriyoruz; ayrıca Canva, Google Drive veya Google Sheets üzerinden çalışmayı tercih ederseniz panele hiç girmeden de içerik güncelleyebilirsiniz.',
      },
      {
        question: 'Fiyatlandırma nasıl işliyor?',
        answer:
          'Lisans, ekran başına ve yıllık olarak hesaplanır; ekran sayısı arttıkça birim fiyat düşer. Toplam maliyet ekran sayısına, donanım ihtiyacına ve montaj kapsamına göre değiştiği için tek bir liste fiyatı vermiyoruz. Ekran sayınızı ve mekânı paylaşın, kapsamı netleştirip teklif hazırlayalım.',
      },
      {
        question: 'Kaç ekrandan itibaren mantıklı oluyor?',
        answer:
          'Tek ekranda da kullanılabilir, ancak platformun asıl değeri birden fazla ekranı tek yerden yönetmekte ortaya çıkar. Ekran sayısı arttıkça ve ekranlar farklı noktalara dağıldıkça uzaktan yönetimin kazancı belirginleşir.',
      },
    ],
    ctaTitle: 'Ekranlarınızı Konuşalım',
    ctaBody:
      'Kaç ekranınız olduğunu ve nerede kullanmak istediğinizi paylaşın; kapsamı birlikte netleştirip size uygun kurgu ve teklifi hazırlayalım.',
    crossLinkBody:
      'Bu alandaki bilgilendirme ve yönlendirme ekranlarını, kendi dijital tabela platformumuz sonopto.signage ile tek panelden yönetebilirsiniz.',
    crossLinkCta: 'sonopto.signage\'ı inceleyin',
  },
  about: {
    pageTitle: 'Hakkımızda',
    intro: 'Sahadaki Çözüm Ortağınız.',
    body: [
      'Biz, işletmelerin ve teknoloji firmalarının sahada güvenle yanına aldığı teknik operasyon partneriyiz. Kurulum, entegrasyon ve bakım konularında ekibinizin doğal uzantısıyız.',
      'Sistem kurmaya, yaşatmaya ve işletmeye odaklanıyoruz; kurulumdan ürün tedarikine, devreye almadan satış sonrası desteğe kadar tek noktadan hizmet sunuyoruz. Servis odaklılığımızın önceliği sistemlerinizin kesintisiz çalışma (uptime) süresidir.',
      'B2B iş ortaklıklarımızda müşteri konfidansiyalitesine değer veririz ve sahada partnerimizin kendi ekibinin doğal bir parçası gibi hareket ederiz.',
    ],
    imageAlt: 'Rack kabin içinde kablo düzenlemesi yapan Sonopto saha teknisyeni',
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
    imageAlt: 'Sonopto teknik destek hattında çağrı karşılayan müşteri temsilcisi',
  },
  whatsapp: {
    label: 'WhatsApp ile yazın',
    sales: 'Satış',
    support: 'Destek',
    installation: 'Montaj',
    prefill: 'Merhaba, web sitenizden yazıyorum.',
  },
};
