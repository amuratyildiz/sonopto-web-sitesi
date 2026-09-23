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
 * A signage sector page. Unlike SolutionItem this carries no imageAlt: the
 * signage section is drawn with line icons and ink bands rather than
 * photography, so there is no photo to describe.
 */
export interface SignageSector {
  /** Short label for cards and breadcrumbs. */
  title: string;
  /**
   * Optional because healthcare has no photograph yet. The layout throws if a
   * sector carries an image without one, so an image can never ship unlabelled.
   */
  imageAlt?: string;
  imageSecondaryAlt?: string;
  /** The page's H1 — a hook, not a category name. */
  headline: string;
  /** Card text on the product page. */
  summary: string;
  metaDescription: string;
  intro: string;
  problemTitle: string;
  problemBody: string;
  screensTitle: string;
  /** What actually goes on the screens in this sector. */
  screens: string[];
  integrationTitle: string;
  integrationBody: string;
  resultTitle: string;
  resultBody: string;
  faq: FaqEntry[];
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
  sectors: {
    retail: SignageSector;
    food: SignageSector;
    office: SignageSector;
    transport: SignageSector;
    education: SignageSector;
    health: SignageSector;
  };
  /** Strip at the foot of every sector page. */
  otherSectorsTitle: string;
  backToProduct: string;
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
  notFound: {
    kicker: string;
    pageTitle: string;
    headline: string;
    lead: string;
    servicesTitle: string;
    solutionsTitle: string;
    shortcutsTitle: string;
    /** Shown to visitors who landed here from an /en/ URL. */
    otherLanguageNote: string;
    otherLanguageCta: string;
  };
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
      'Dijital tabela ihtiyacı sektöre göre değişir: bir mağazada kampanya döngüsü, bir restoranda gün içinde değişen menü, bir ofiste oda doluluğu, bir klinikte sıra yönetimidir. Sektörünüze özel kurguyu aşağıdaki sayfalarda anlattık.',
    otherSectorsTitle: 'Diğer Sektörler',
    backToProduct: 'sonopto.signage hakkında her şey',
    sectors: {
      retail: {
        title: 'Perakende ve Mağazalar',
        imageAlt:
          'Mağaza vitrininde indirim kampanyası gösteren büyük formatlı dijital ekran',
        imageSecondaryAlt:
          'Market reyonunda günün kampanyasını gösteren dikey dijital totem ekranı',
        headline: 'Kampanya Başladığında Vitrin de Değişsin',
        summary:
          'Vitrin ve reyon ekranları, şube ağında tek panelden yönetim, kampanya takvimine bağlı otomatik içerik değişimi.',
        metaDescription:
          'Mağaza ve vitrin ekranları için dijital tabela: kampanyaları tüm şubelere tek panelden gönderin, saatine göre otomatik değiştirin. Ekran tedariki ve montaj dahil.',
        intro:
          'Perakendede ekranın işi dekorasyon değil, doğru anda doğru mesajı göstermek. Kampanya pazartesi başlıyorsa vitrin pazartesi sabahı değişmiş olmalı — hem merkezdeki mağazada hem de üç şehir ötedeki şubede.',
        problemTitle: 'Kampanya başladı, ekranlar hâlâ geçen ayın afişini gösteriyor',
        problemBody:
          'Çünkü içerik güncellemesi çoğu zaman şube personeline bırakılmış durumda: USB bellekle dolaşmak, her ekrana tek tek girmek, kim yaptı kim yapmadı takip edememek. Şube sayısı arttıkça bu yöntem kendi ağırlığı altında çöker ve en pahalı reklam alanınız — vitrin — güncelliğini yitirir. Merkezden yönetilen bir sistemde bu iş tek bir yüklemeye iner.',
        screensTitle: 'Ekranlarda neler gösteriliyor?',
        screens: [
          'Vitrin ekranları: sezon kampanyaları, indirim duyuruları, marka filmleri',
          'Reyon ve raf ekranları: ürün tanıtımı, fiyat ve kampanya bilgisi',
          'Kasa önü ekranları: sırada beklerken son dakika teklifleri ve sadakat programı',
          'Karşılama ve yönlendirme: kat planı, reyon yönlendirmesi, yürüyen duyurular',
          'Personel alanı: vardiya, hedef ve iç duyuru ekranları',
        ],
        integrationTitle: 'Bu sektörde asıl fark: coğrafi konum ve gruplama',
        integrationBody:
          'Şubeleri gruplayarak aynı içeriği tek işlemle yüzlerce ekrana gönderirsiniz. Coğrafi konum özelliğiyle de aynı çalma listesi her şubede o şubeye ait içeriği gösterir — İstanbul mağazasında İstanbul stoğu, Ankara mağazasında Ankara kampanyası. Fiyat ve stok gibi sık değişen veriler Google Sheets üzerinden beslendiğinde, tabloyu güncellemeniz ekranların da güncellenmesi için yeterli olur.',
        resultTitle: 'Ekranı biz kurduğumuz için fark ne?',
        resultBody:
          'Vitrin ekranı, ofis ekranından farklı bir iştir: gün ışığı altında okunabilmesi için yüksek parlaklık, cam yüzeyde yansımayı kesen konumlandırma ve vitrin içinde gizlenmiş bir kablolama gerekir. Keşif sırasında bunları yerinde ölçüyor, panel ve askı seçimini buna göre yapıyoruz. Yazılımı satıp montajı başkasına bırakmadığımız için, ekran karardığında aranacak tek numara bizde.',
        faq: [
          {
            question: 'Şubelerimizde farklı marka ve boyutta ekranlar var, hepsi bağlanır mı?',
            answer:
              'Büyük ihtimalle evet. Kurumsal ekranlarda yazılım doğrudan ekranın işletim sistemi üzerinde çalışır; normal televizyonlarda ise küçük bir harici oynatıcı eklenir. Hangi ekranın hangi yolla bağlanacağını keşifte belirliyoruz, kullanılabilecek bir ekranı değiştirmenizi önermiyoruz.',
          },
          {
            question: 'Kampanyayı belirli bir saatte otomatik başlatabilir miyiz?',
            answer:
              'Evet. İçeriği tarih ve saate bağlayabilirsiniz; kampanya pazartesi 09:00’da kendiliğinden devreye girer, bitiş tarihinde de kendiliğinden kalkar. Mağaza kapanışında ekranların otomatik kapanması da aynı şekilde programlanır.',
          },
          {
            question: 'İnternet kesilirse vitrin kararır mı?',
            answer:
              'Hayır. Medya dosyaları ekranın yerel depolamasına indiği için yayın çevrimdışı da sürer. Bağlantı geri geldiğinde cihaz panelle eşleşip bekleyen güncellemeleri alır.',
          },
        ],
      },
      food: {
        title: 'Restoran ve Kafeler',
        imageAlt:
          'Restoranda tuğla duvara monte edilmiş, kategorilere ayrılmış dijital menü panosu',
        imageSecondaryAlt:
          'Kafe tezgâhının üzerinde kahve çeşitlerini ve fiyatlarını gösteren dijital menü ekranı',
        headline: 'Menü Kahvaltıdan Akşama Kendi Kendine Değişsin',
        summary:
          'Dijital menü panoları, gün içinde otomatik değişen menüler, fiyatların tablodan beslenmesi ve baskı maliyetinin sıfırlanması.',
        metaDescription:
          'Restoran ve kafeler için dijital menü ekranı: kahvaltı, öğle ve akşam menüleri saatine göre otomatik değişir, fiyatlar tablodan güncellenir. Ekran ve montaj dahil.',
        intro:
          'Menü panosu bir restoranın en çok okunan yüzeyidir. Basılı menüde bir fiyat değişikliği yeniden baskı demektir; ekranda ise bir tablo hücresini güncellemek yeterlidir.',
        problemTitle: 'Fiyat değişti, menüyü yeniden bastırmak gerekiyor',
        problemBody:
          'Basılı menünün gerçek maliyeti kâğıt değil, değişime direnç göstermesidir. Bir ürünün fiyatı arttığında ya da tedarik sorunu çıktığında menü haftalarca yanlış kalır; kampanya denemek, günün yemeğini öne çıkarmak veya saatlik teklif vermek pratikte imkânsızlaşır. Ekrana geçince bu kararlar dakikalar içinde uygulanabilir hale gelir.',
        screensTitle: 'Ekranlarda neler gösteriliyor?',
        screens: [
          'Menü panoları: kategori bazlı fiyat listeleri, görselli ürün tanıtımları',
          'Gün bölümüne göre menü: kahvaltı, öğle, akşam ve gece menüsünün otomatik geçişi',
          'Kampanya ve upsell: sırada beklerken tatlı, içecek ve menü tamamlayıcı teklifler',
          'Günün yemeği ve tükenen ürün bildirimi',
          'Wi-Fi şifresi ve sosyal medya hesapları için QR kodlu ekranlar',
        ],
        integrationTitle: 'Bu sektörde asıl fark: Google Sheets ve zamanlama',
        integrationBody:
          'Menü fiyatlarını bir Google Sheets tablosundan besleyebilirsiniz: tabloyu güncellediğinizde ekranlar kendiliğinden güncellenir, panele girmenize bile gerek kalmaz. Zamanlama özelliğiyle kahvaltı menüsü 11:00’de yerini öğle menüsüne bırakır. Tasarım tarafında Canva entegrasyonu, hazır şablonlarla menü düzenlemeyi mutfak ekibinin bile yapabileceği bir işe indirger.',
        resultTitle: 'Ekranı biz kurduğumuz için fark ne?',
        resultBody:
          'Menü panosu genelde tezgâhın üstünde, mutfak ısısına ve buharına yakın bir noktada durur; kablolama gıda alanı kurallarına uygun geçirilmek zorundadır. Askı yüksekliğini ayakta duran müşterinin göz hizasına göre belirlemek de okunabilirliği doğrudan etkiler. Bunları keşifte yerinde ölçüyoruz. Birden fazla ekranı yan yana tek bir menü olarak kullanacaksanız, senkron oynatma ile hepsi tek parça gibi çalışır.',
        faq: [
          {
            question: 'Menüyü kendimiz güncelleyebilir miyiz?',
            answer:
              'Evet, amaç bu. Fiyatları Google Sheets üzerinden yönetiyorsanız tabloyu güncellemeniz yeterli. Tasarımı değiştirmek isterseniz Canva üzerinden hazırlayıp doğrudan ekrana gönderebilirsiniz; kurulum sonrası ekibinize eğitim veriyoruz.',
          },
          {
            question: 'Birden fazla ekranı tek menü gibi kullanabilir miyiz?',
            answer:
              'Evet. Yan yana duran ekranlar senkron oynatma grubuna alındığında içerik hepsinde aynı anda akar, böylece üç ekran tek bir geniş menü panosu gibi görünür. Ekranların aynı model ve aynı boyutta olması görsel bütünlük açısından önemlidir; keşifte buna göre öneriyoruz.',
          },
          {
            question: 'Ekranlar kapanış saatinde kapanır mı?',
            answer:
              'Evet. Güç yönetimi ile ekranlar belirlediğiniz saatte otomatik kapanır ve açılır. Bu hem elektrik faturasına hem de panel ömrüne yansır; gece boyunca boşuna çalışan bir ekran yılda binlerce saat yıpranma demektir.',
          },
        ],
      },
      office: {
        title: 'Kurumsal Ofisler',
        imageAlt:
          'Cam bölmeli toplantı odasının kapısında, odanın dolu olduğunu ve toplantının saatini gösteren kırmızı dijital kapı ekranı',
        imageSecondaryAlt:
          'Toplantı odası girişinde odanın boş olduğunu gösteren yeşil dijital kapı ekranı',
        headline: 'Toplantı Odası Kapısındaki Tartışma Bitsin',
        summary:
          'Karşılama ekranları, kapı önü oda rezervasyon ekranları, iç iletişim panoları ve kurum içi duyuru ağı.',
        metaDescription:
          'Kurumsal ofisler için dijital tabela: karşılama ekranları, Microsoft ve Google Takvim ile çalışan kapı etiketi ekranları, iç iletişim panoları. Kurulum ve montaj dahil.',
        intro:
          'Ofiste ekranın iki işi var: gelen ziyaretçiye kurumu doğru anlatmak ve çalışana gün içinde ihtiyaç duyduğu bilgiyi aramadan vermek. İkisi de basit görünür, ikisi de doğru kurgulanmadığında işe yaramaz.',
        problemTitle: 'Oda doluydu, kimse haberdar değildi',
        problemBody:
          'Toplantı odası çakışmaları takvim yüzünden değil, takvimin kapının önünde görünmemesi yüzünden çıkar. Odayı rezerve eden kişi gelmediğinde oda boş durur; rezerve etmeyen biri girdiğinde ise toplantı bölünür. Kapıya konan küçük bir ekran, takvimle canlı bağlandığında bu iki durumu da ortadan kaldırır: odanın o anki durumu ve sıradaki toplantı kapının önünde yazar.',
        screensTitle: 'Ekranlarda neler gösteriliyor?',
        screens: [
          'Kapı önü oda ekranları: anlık doluluk, sıradaki toplantı ve yerinde rezervasyon',
          'Karşılama ekranı: ziyaretçi karşılama mesajı, kurum tanıtımı, günün programı',
          'İç iletişim panoları: duyurular, İK bilgilendirmeleri, yeni katılan ekip arkadaşları',
          'Performans ve operasyon ekranları: hedefler, canlı gösterge panoları',
          'Ortak alan ekranları: yemekhane menüsü, servis saatleri, etkinlik takvimi',
        ],
        integrationTitle: 'Bu sektörde asıl fark: Kapı Etiketi ve takvim entegrasyonu',
        integrationBody:
          'Kapı etiketi uygulaması Microsoft ve Google Takvim ile bağlanır; odanın doluluğu takvimden canlı okunur, ayrı bir sistem beslemeniz gerekmez. Duyuru panolarında ise Google Drive entegrasyonu işi kolaylaştırır: İK ekibi bir klasöre dosya attığında ekranda belirir, panele hiç girmeden. Kurumsal kimliğinizi taşıyan şablonlar Canva üzerinden hazırlanıp tüm ofislere tek seferde dağıtılabilir.',
        resultTitle: 'Ekranı biz kurduğumuz için fark ne?',
        resultBody:
          'Kapı önü ekranları küçük ama zahmetli işlerdir: alçıpan duvara gömme montaj, kablo kanalı görünmeyecek şekilde veri ve enerji çekilmesi, kapı kasasına hizalı bir yerleşim gerekir. Toplantı odalarında zaten ses ve görüntü sistemi kuruyoruz; signage ekranlarını aynı keşifte ve aynı ekiple çözmek, iki ayrı firmayla uğraşmaktan hem hızlı hem tutarlı olur.',
        faq: [
          {
            question: 'Kapı ekranları Microsoft 365 takvimimizle çalışır mı?',
            answer:
              'Evet. Kapı etiketi uygulaması Microsoft ve Google Takvim ile bağlanır; odanın o anki doluluğu ve sıradaki toplantı doğrudan takviminizden okunur. Rezervasyon süreciniz nasıl işliyorsa öyle kalır, ekran yalnızca onu görünür kılar.',
          },
          {
            question: 'Mevcut toplantı odası sistemimizle birlikte çalışır mı?',
            answer:
              'Evet. Signage ekranları Zoom Rooms veya Microsoft Teams Rooms kurulumunuzdan bağımsız çalışır; ikisi birbirine karışmaz. Toplantı odası sistemlerini de kuruyoruz, ikisini tek keşifte planlamak en verimlisi olur.',
          },
          {
            question: 'Birden fazla ofisimiz var, hepsini tek yerden yönetebilir miyiz?',
            answer:
              'Evet. Ofisleri gruplayarak kurumsal duyuruyu tek işlemle hepsine gönderir, yerel duyuruları ise yalnızca ilgili ofisin grubuna bırakırsınız. Hangi ekranın çevrimiçi olduğunu ve en son ne zaman güncellendiğini de panelden görürsünüz.',
          },
        ],
      },
      transport: {
        title: 'Ulaşım ve Terminaller',
        imageAlt:
          'Tren peronunda yolculara kampanya gösteren dikey dijital bilgilendirme ekranı',
        imageSecondaryAlt:
          'Terminal geçişinde altı ekrandan oluşan, tek görüntü olarak çalışan dijital video wall',
        headline: 'Yolcu Beklerken Ekran Çalışsın',
        summary:
          'Peron ve terminal bilgilendirmesi, yönlendirme ekranları, reklam alanı olarak kullanılan video wall kurulumları.',
        metaDescription:
          'Metro, tren, otogar ve havalimanı için dijital tabela: sefer bilgilendirmesi, yönlendirme ve reklam ekranları. Video wall kurulumu ve montaj dahil.',
        intro:
          'Ulaşım noktalarında ekranın iki işi vardır: yolcuyu doğru yere yönlendirmek ve bekleme süresini değerli bir alana çevirmek. İkincisi çoğu kurumda kullanılmadan duran bir gelir kalemidir.',
        problemTitle: 'Yolcu akışı durmuyor, bakım için ekranı kapatmak da mümkün olmuyor',
        problemBody:
          'Terminaller 7/24 açıktır; bir ekranı kapatıp müdahale etmek için uygun bir saat neredeyse hiç yoktur. Bu yüzden ulaşım noktalarındaki kurulumlarda kritik olan ekranın markası değil, arızaya düşmeden ne kadar dayandığı ve düştüğünde ne kadar hızlı ayağa kalktığıdır. Uzaktan izleme ile arızayı yolcudan önce görmek, müdahale penceresini saatler yerine dakikalara indirir.',
        screensTitle: 'Ekranlarda neler gösteriliyor?',
        screens: [
          'Sefer ve peron bilgilendirmesi: kalkış, varış, gecikme ve peron değişikliği',
          'Yönlendirme: çıkış, aktarma, bagaj ve engelli erişim yönlendirmesi',
          'Reklam alanı: peron ve holdeki ekranların kiralanabilir yayın envanteri olarak kullanılması',
          'Video wall: giriş holü ve aktarma geçişlerinde büyük ölçekli kurumsal yayın',
          'Acil durum bilgilendirmesi: tahliye yönlendirmesi ve anons desteği',
        ],
        integrationTitle: 'Bu sektörde asıl fark: çevrimdışı çalışma ve ekran gruplama',
        integrationBody:
          'Terminal ağlarında bağlantı her noktada aynı kalitede olmaz. Medya dosyaları ekranın yerel depolamasına indiği için kopan bir hat yayını durdurmaz. Gruplama ile peron ekranlarını tek grup, hol ekranlarını başka bir grup olarak yönetir; sefer bilgisini yalnızca ilgili perona, kurumsal yayını ise tüm terminale gönderirsiniz. Video wall kurulumlarında senkron oynatma, yan yana duran ekranların tek bir görüntü gibi çalışmasını sağlar.',
        resultTitle: 'Ekranı biz kurduğumuz için fark ne?',
        resultBody:
          'Ulaşım noktalarındaki montaj bir yapı işidir: yüksek tavana askı, yoğun yolcu akışının ortasında güvenli konstrüksiyon, kapalı alanda görüş açısına göre yerleşim. Video wall ise milimetrik hizalama ister; tek bir panel yamuk oturduğunda bütün duvar yamuk görünür. Bu işleri kendi ekibimizle yapıyor, metal konstrüksiyondan veri ve enerji altyapısına kadar tek kalemde çözüyoruz.',
        faq: [
          {
            question: 'Sefer bilgilerini mevcut sistemimizden çekebilir miyiz?',
            answer:
              'Sefer verisi bir tablo, CSV, JSON ya da web sayfası olarak dışarı verilebiliyorsa ekrana bağlanabilir. Mevcut sisteminizin ne sunduğunu keşif sırasında inceliyor, entegrasyonun mümkün olup olmadığını taahhüt vermeden önce netleştiriyoruz.',
          },
          {
            question: 'Video wall kurulumu yapıyor musunuz?',
            answer:
              'Evet. LED duvar ve çok ekranlı video wall kurulumları yaptığımız işlerin önemli bir bölümünü oluşturuyor; metal konstrüksiyon imalatı, veri ve enerji altyapısı ile montaj bize ait. Yazılım tarafında senkron oynatma ile ekranlar tek görüntü olarak çalışır.',
          },
          {
            question: 'Ekranlar reklam geliri için kullanılabilir mi?',
            answer:
              'Evet, yaygın bir kullanım. Ekranları bölge ve saat bazında gruplayarak farklı reklamverenlere farklı zaman dilimleri ayırabilir, yayının gerçekten döndüğünü uzaktan izleme ile doğrulayabilirsiniz.',
          },
        ],
      },
      education: {
        title: 'Okullar ve Kampüsler',
        imageAlt:
          'Okul koridorunda duyuru ve kulüp tanıtımı gösteren üç dijital ekranın önünden geçen öğrenciler',
        imageSecondaryAlt:
          'Kütüphanede yeni gelen kitapları duyuran dikey dijital bilgilendirme ekranı',
        headline: 'Panodaki Duyuruyu Kimse Okumuyor',
        summary:
          'Koridor ve kantin duyuru ekranları, kütüphane bilgilendirmesi, sınav ve etkinlik takvimi, kampüs yönlendirmesi.',
        metaDescription:
          'Okul ve kampüsler için dijital tabela: koridor duyuru ekranları, sınav ve etkinlik takvimi, kütüphane bilgilendirmesi, kampüs yönlendirmesi. Kurulum ve montaj dahil.',
        intro:
          'Okullarda iletişim sorunu bilgi eksikliğinden değil, bilginin kimsenin bakmadığı bir yerde durmasından kaynaklanır. Koridordaki bir ekran, kapıdaki mantar panodan çok daha fazla okunur.',
        problemTitle: 'Duyuru asıldı ama öğrenciye ulaşmadı',
        problemBody:
          'Basılı duyurunun iki sorunu vardır: asılana kadar geçen süre ve asıldıktan sonra kimsenin bakmaması. Sınav saati değiştiğinde ya da servis gecikmesi olduğunda bilginin dakikalar içinde yayılması gerekir; kâğıt bunu yapamaz. Ekrana geçen okullarda duyurunun ulaşma süresi günden dakikaya iner, üstelik duyuruyu asacak personel de bu işten kurtulur.',
        screensTitle: 'Ekranlarda neler gösteriliyor?',
        screens: [
          'Koridor duyuruları: sınav takvimi, ders programı değişiklikleri, servis ve yemek bilgisi',
          'Kulüp ve etkinlik tanıtımı: kulüp çağrıları, turnuva ve tören duyuruları',
          'Kütüphane: yeni gelen kitaplar, sessizlik hatırlatmaları, çalışma saatleri',
          'Kampüs yönlendirmesi: bina ve derslik yönlendirmesi, kat planları',
          'Öğretmenler odası ve idari alanlar: nöbet listesi, toplantı ve iç duyurular',
        ],
        integrationTitle: 'Bu sektörde asıl fark: zamanlama ve Google Sheets',
        integrationBody:
          'Okul günü zaten bir zaman çizelgesidir; ekranlar da aynı çizelgeye bağlanır. Ders programı ve sınav takvimi bir Google Sheets tablosundan beslendiğinde, tabloyu güncelleyen idari personel ekranları da güncellemiş olur. Zamanlama ile teneffüste farklı, ders saatinde farklı içerik yayınlanır; tatil dönemlerinde güç yönetimi ekranları tamamen kapatır. Tasarım tarafında Canva şablonları, duyuru hazırlamayı öğrenci kulüplerinin bile üstlenebileceği bir işe indirger.',
        resultTitle: 'Ekranı biz kurduğumuz için fark ne?',
        resultBody:
          'Okullarda montaj planlaması en az montajın kendisi kadar önemlidir: işler yaz döneminde, okul kapalıyken yapılır. Koridor ekranları öğrenci trafiğine dayanıklı askılarla ve erişilemeyecek yükseklikte monte edilir. Eğitim kurumlarında zaten akıllı tahta servisi, anons ve tören sistemleri kuruyoruz; signage ekranlarını aynı yaz programına almak hem maliyeti hem kesintiyi azaltır.',
        faq: [
          {
            question: 'Kurulum eğitim yılını böler mi?',
            answer:
              'Hayır, planlaması buna göre yapılır. Eğitim kurumlarındaki işleri yaz döneminde, okul kapalıyken yürütüyoruz. Yıl içinde acil bir ihtiyaç çıkarsa hafta sonu ve mesai dışı çalışmayla ders akışını kesmeden tamamlıyoruz.',
          },
          {
            question: 'Duyuruları öğretmenler kendisi girebilir mi?',
            answer:
              'Evet. Panel tarayıcıdan çalışır ve gündelik duyuru için teknik bilgi gerektirmez. Ders programı gibi düzenli veriyi Google Sheets üzerinden yönetirseniz tabloyu güncellemek yeterli olur; panele girmeye bile gerek kalmaz.',
          },
          {
            question: 'Mevcut akıllı tahtalarımızı duyuru ekranı olarak kullanabilir miyiz?',
            answer:
              'Çoğu durumda evet, ancak önerimiz duruma göre değişir. Akıllı tahtalar ders için kullanıldığı saatlerde duyuru gösteremez; bu yüzden koridor ve ortak alanlara ayrı ekran koymak genellikle daha verimlidir. Mevcut envanterinizi keşifte görüp hangisinin nerede değerlendirileceğini birlikte belirliyoruz.',
          },
        ],
      },
      health: {
        title: 'Sağlık Kuruluşları',
        headline: 'Bekleyen Hasta Ne Kadar Bekleyeceğini Bilsin',
        summary:
          'Sıra ve yönlendirme ekranları, poliklinik bilgilendirmesi, bekleme alanı içeriği ve hekim programı ekranları.',
        metaDescription:
          'Hastane, klinik ve poliklinikler için dijital tabela: sıra ve yönlendirme ekranları, hekim programı, bekleme alanı bilgilendirmesi. Ekran tedariki ve montaj dahil.',
        intro:
          'Sağlık kuruluşlarında bekleme süresinin kendisi kadar, ne kadar bekleneceğinin bilinmemesi rahatsız eder. Doğru kurgulanmış bir ekran ağı, personelin gün boyu cevapladığı soruların büyük bölümünü ortadan kaldırır.',
        problemTitle: 'Danışmaya sorulan soruların çoğu ekranda yazabilir',
        problemBody:
          'Hangi hekim hangi odada, sıra kaçta, hangi kat, ödeme nereden yapılır — bunların hepsi tekrar eden ve her seferinde bir personelin zamanını alan sorulardır. Bekleme alanına ve koridorlara konumlandırılmış ekranlar bu yükü üstlendiğinde, danışma personeli gerçekten insan teması gerektiren işlere vakit ayırabilir. Bekleme algısı da ölçülebilir biçimde kısalır.',
        screensTitle: 'Ekranlarda neler gösteriliyor?',
        screens: [
          'Sıra ve çağrı ekranları: sıra numarası, oda yönlendirmesi, tahmini bekleme',
          'Hekim programı: poliklinik saatleri, oda değişiklikleri, izin duyuruları',
          'Yönlendirme: kat planı, birim yönlendirmesi, acil çıkış bilgilendirmesi',
          'Bekleme alanı içeriği: sağlık bilgilendirmeleri, kurum tanıtımı, sessiz video akışı',
          'Personel alanları: vardiya, nöbet listesi ve iç duyurular',
        ],
        integrationTitle: 'Bu sektörde asıl fark: çevrimdışı çalışma ve uzaktan izleme',
        integrationBody:
          'Sağlık kuruluşunda kararan bir ekran yalnızca estetik sorun değildir; yönlendirme ekranıysa doğrudan hasta akışını bozar. Medya dosyaları ekranın yerel depolamasına indiği için ağ kesintisinde yayın sürer. Uzaktan izleme ile hangi ekranın çevrimiçi olduğunu ve ne oynattığını panelden görürsünüz — arızayı hasta değil siz fark edersiniz. Bekleme alanı ekranları genelde sessiz çalıştığı için içerik altyazılı ve görsel ağırlıklı kurgulanır.',
        resultTitle: 'Ekranı biz kurduğumuz için fark ne?',
        resultBody:
          'Hastane koridorları 7/24 çalışan, temizliğe ve dezenfektana dayanıklı, güvenli monte edilmiş ekranlar ister; hasta trafiğinin olduğu bir alanda askı seçimi bir güvenlik konusudur. Kurulumu çalışan bir kurumda, hasta akışını kesmeden ve çoğu zaman mesai dışında yapmak gerekir. Bunlar montaj planlamasının parçası — keşifte konuşup takvime bağlıyoruz.',
        faq: [
          {
            question: 'Sıra sistemimizle entegre olur mu?',
            answer:
              'Sıra verisi çoğu kurumda mevcut bir yazılımdan gelir. Bu veri bir tablo, CSV ya da web sayfası olarak dışarı verilebiliyorsa ekrana bağlanabilir. Mevcut sisteminizin ne sunduğunu keşif sırasında birlikte inceleyip, entegrasyonun mümkün olup olmadığını taahhüt vermeden önce netleştiriyoruz.',
          },
          {
            question: 'Ekranlar 7/24 çalışabilir mi?',
            answer:
              'Kurumsal ekranlar bunun için üretilir; normal televizyonlar üretilmez. Sürekli çalışacak noktalarda kurumsal panel öneriyoruz, gün içinde belirli saatlerde çalışacak noktalarda ise güç yönetimiyle otomatik kapatarak panel ömrünü uzatıyoruz.',
          },
          {
            question: 'Hasta verisi ekranda gösterilir mi?',
            answer:
              'Bu tamamen sizin kararınız ve kurumunuzun kişisel veri politikasına tabidir. Sıra ekranlarında genellikle yalnızca sıra numarası ve oda bilgisi gösterilir, isim gösterilmez. Sistem hangi veriyi beslerseniz onu gösterir; bu kapsamı kurulum öncesinde birlikte belirliyoruz.',
          },
        ],
      },
    },
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
  notFound: {
    kicker: '404',
    pageTitle: 'Sayfa Bulunamadı',
    headline: 'Aradığınız Sayfayı Bulamadık',
    lead:
      'Ama aradığınız çözümü büyük ihtimalle bulabiliriz. Adres değişmiş ya da yanlış yazılmış olabilir; aşağıdan devam edebilir veya doğrudan bize yazabilirsiniz.',
    servicesTitle: 'Hizmetlerimiz',
    solutionsTitle: 'Sektörel Çözümler',
    shortcutsTitle: 'Kısayollar',
    otherLanguageNote: 'Looking for the English site?',
    otherLanguageCta: 'Go to the English home page',
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
