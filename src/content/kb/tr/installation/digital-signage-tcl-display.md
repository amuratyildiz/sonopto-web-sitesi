---
title: 'TCL Ekranlar Üzerine Kurulum'
urlSlug: 'tcl-ekran-kurulumu'
summary: 'TCL kurumsal Android ekranlarda APK kurulumu, birincil CMS ayarı, otomatik başlatma ve güç yönetimi.'
category: 'installation'
order: 7
source: 'installation/digital-signage-tcl-display'
sourceHash: '35ebd8c071c9f143'
importedAt: '2026-09-23'
---
Bu rehber, TCL kurumsal Android ekranlara kurulumu, ayarların yapılandırılmasını ve oynatıcının varsayılan uygulama olarak tanımlanmasını anlatır.

## Desteklenen TCL modelleri

-   TMN serisi (Android 13)
-   TBN serisi (Android 13)
-   TEN serisi (Android 9)

## Kurulum

### Adım 1: APK dosyasını edinin

-   Bir USB belleği bilgisayara takın

-   Güncel APK dosyası için [bizimle iletişime geçin](/iletisim/)

-   Dosyayı USB belleğin ana dizinine kopyalayın

-   USB belleği TCL ekranınızdaki boş bir USB portuna takın

### Adım 2: APK dosyasını kurun

-   Kumandada **Apps** düğmesine basın

<img src="/kb/installation/tcl-remotecontrol.webp" alt="TCL kumandası" loading="lazy" decoding="async">

-   **File Browser** bölümüne gidin

<img src="/kb/installation/tcl-install-apk.webp" alt="TCL uygulama listesi" loading="lazy" decoding="async">

-   APK dosyasına tıklayın

-   **Install** seçeneğini seçin

-   Kurulumun tamamlanmasını bekleyip **Done** düğmesine basın

### Adım 3: Oynatıcıyı birincil CMS olarak ayarlayın

-   Kumandada **Settings** düğmesine basın

-   **System** → **Customisation** → **Primary CMS** yolunu izleyin

-   Televizyonun birincil CMS'i olarak oynatıcı uygulamasını seçin

### Adım 4: Saat dilimini ayarlayın

-   **Date and time** bölümüne gidin

-   Tarih ve saatin doğru olduğundan emin olun

### Adım 5: Otomatik başlatmayı yapılandırın

Otomatik başlatma, cihaz açıldığında ya da yeniden başlatıldığında yazılımın kendiliğinden çalışmasını sağlar.

-   **1. adım** (televizyonun özelliklerine göre değişir):

**Settings > Device Preferences > Quick Start** yolunu izleyip **Quick Start** anahtarını açık konuma getirin.

veya:

**Settings > Apps > Special app access > Display over other apps** yolunu izleyip oynatıcı uygulamasının açık olduğundan emin olun.

-   **2. adım**:

    -   Televizyondaki **Safety Guard** uygulamasını açın
    -   **Permission shield** seçeneğini seçin
    -   **Auto launch permission** seçeneğini seçin
    -   Önce **Auto manager** ayarını kapalı (Closed) konuma getirin
    -   Ardından oynatıcı uygulamasını açık (Opened) konuma getirin

-   **3. adım**:

    -   **Settings > Device Preferences > Restart** yolunu izleyin
    -   Televizyon açıldıktan birkaç saniye sonra oynatıcı kendiliğinden başlamalıdır

### Adım 6: Güç yönetimini yapılandırın

Güç yönetimi özelliğini etkinleştirmek için:

-   Oynatıcı çalışırken ekrana bir klavye bağlayın

-   Gizli menüyü açmak için **ALT + M** tuşlarına basın

-   Parolayı girin: **1122**

-   **Open TV Settings** seçeneğine basın

-   **Power Key Definition** ayarına gidip **Sleep Now** olarak ayarlayın

**Not:** Güç yönetimi özelliği yalnızca root erişimi olan Android cihazlarda kullanılabilir.

### Adım 7: Ekranı kaydedin

-   Ekranı yeniden başlatın

-   Oynatıcı kendiliğinden açılır ve bir **Screen ID** gösterir

-   Panele gidip **Screens** bölümünde **Add Screen** düğmesine tıklayın

-   Ekranı hesabınıza bağlamak için **Screen ID** değerini girin
