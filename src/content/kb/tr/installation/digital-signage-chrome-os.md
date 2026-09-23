---
title: 'ChromeOS Oynatıcı Üzerine Kurulum'
urlSlug: 'chromeos-kurulumu'
summary: 'Google Workspace Kiosk & Signage lisansıyla ChromeOS cihazı kaydetme ve kiosk modunda oynatıcı kurulumu.'
category: 'installation'
order: 5
source: 'installation/digital-signage-chrome-os'
sourceHash: '3e8c26258f666f24'
importedAt: '2026-09-23'
---
## ChromeOS üzerine oynatıcı nasıl kurulur

### Giriş

Bu makale, Google Workspace'in **Kiosk & Signage** lisansını kullanarak bir ChromeOS cihazına oynatıcının nasıl kurulacağını adım adım anlatır. Bu yöntem yayının kiosk modunda çalışmasını sağlar; böylece cihaz kesintisiz ve kapalı bir ortamda yayın yapar.

### Ön koşullar

1.  **ChromeOS cihazı**: Cihazın açık ve internete bağlı olduğundan emin olun.
2.  **Google Workspace hesabı**: Cihazları yönetebilmek için yönetici erişimi gerekir.
3.  **Kiosk & Signage lisansı**: Lisansın ChromeOS cihazınıza atanmış olması gerekir.

### Kurulum adımları

### Adım 1: Google Admin Console'a giriş yapın

1.  Tarayıcınızdan [Google Admin Console](https://admin.google.com) adresine gidin.
2.  Google Workspace yönetici bilgilerinizle giriş yapın.

### Adım 2: ChromeOS cihazını kaydedin

1.  Chromebox daha önce kişisel cihaz olarak kullanıldıysa fabrika ayarlarına döndürün.

-   Oturumu kapatın.
-   Ctrl + Alt + Shift + R tuşlarına basılı tutun.

2.  Chromebox'ı ekrana bağlayın ve kararlı bir internet bağlantısı olduğundan emin olun.
3.  **Get Started** seçeneğini seçin.
4.  "Who is using this Chromebox" ekranında, sol alt köşedeki **enterprise enrollment** seçeneğini seçin.
5.  Google kurumsal hesap bilgilerinizi girip **Done** düğmesine basın.
6.  Cihaz yeniden başlar. Açıldığında aynı kurumsal hesapla oturum açmanız istenir.
7.  **Accept and continue** seçeneğini seçin.

Ayrıntılı bilgi için Google'ın kendi rehberine bakabilirsiniz: [support.google.com/chrome/a/answer/1360534](https://support.google.com/chrome/a/answer/1360534)

### Adım 3: Kiosk & Signage lisansını atayın

1.  Google Admin Console'da **Devices > Chrome > Devices** yolunu izleyin.
2.  Kurulum yapacağınız cihazı bulup seçin.
3.  Ayarlarını açmak için cihaz adına tıklayın.
4.  **Licenses** bölümünde **Kiosk & Signage License** lisansının atandığından emin olun.
5.  Etkin lisansınız yoksa abonelik bölümüne gidip lisans ekleyin.

<img src="/kb/installation/subscriptions-admin-console.webp" alt="Admin Console abonelik ekranı" loading="lazy" decoding="async"> <img src="/kb/installation/get-more-services-admin-console.webp" alt="Admin Console hizmet ekleme ekranı" loading="lazy" decoding="async">

### Adım 4: Cihazı kiosk moduna ayarlayın

1.  Google Admin Console'da **Devices > Chrome > Apps & extensions > Kiosks** yolunu izleyin.

2.  **Add** düğmesine tıklayıp **add by URL** seçeneğini seçin.

<img src="/kb/installation/kiosk-app-management-admin-console-add-brands.webp" alt="Kiosk uygulaması ekleme ekranı" loading="lazy" decoding="async">

3.  URL alanına `https://dsplayer.io` adresini girip **Save** düğmesine basın.

<img src="/kb/installation/kiosk-app-management-admin-console-nobrand.webp" alt="Kiosk uygulaması URL ayarı" loading="lazy" decoding="async">

4.  **AC Kiosk power settings** ayarını uykuya geçmeyecek şekilde (never sleep) yapın.

<img src="/kb/installation/device-settings-details-admin-console.webp" alt="Cihaz ayarları ayrıntıları" loading="lazy" decoding="async">

* * *
