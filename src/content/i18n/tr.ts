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
  footer: {
    tagline: string;
    /* Identity guide §5.4: this sub-tagline sits under the wordmark in the
       footer, e-mail signatures and print material. */
    subTagline: string;
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
  footer: {
    tagline: 'Siz işinize odaklanın, teknolojinizi biz yönetelim.',
    subTagline: 'Ses | Sahne Aydınlatma | Görüntü Sistemleri',
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
};
