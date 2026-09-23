---
title: 'Canlı Ekran Konumu'
urlSlug: 'canli-ekran-konumu'
summary: 'Cihazda konum servislerini açma ve panelde GPS ile otomatik konum güncellemeyi etkinleştirerek tüm ekranlarınızı harita üzerinde izleme.'
category: 'screens'
order: 6
source: 'screens/digital-signage-live-screen-location'
sourceHash: '09a65da0023b0450'
importedAt: '2026-09-23'
---
Canlı ekran konumu, ekranlarınızı gerçek zamanlı olarak izlemenizi sağlar. Çevrimiçi ya da çevrimdışı tüm etkin ekranlarınızı harita üzerinde göstererek her ekranın hangi noktada olduğunu görmenize yarar.

İki ana adımı vardır:

1.  [Cihazda konum servislerini yapılandırma](#1-cihazda-konum-servislerini-yapılandırma)
2.  [Panelde ekran konumunu ayarlama](#2-panelde-ekran-konumunu-ayarlama)

## 1. Cihazda konum servislerini yapılandırma

### Adım 1: Cihazda konum servislerini açın

Android cihazlarda uygulamaya kesin konum izni verin.

1.  Cihaz ayarlarını açın.

2.  **Location** ayarlarına gidin (aşağı kaydırıp **Location** seçeneğine dokunun).

3.  Konum servislerini açın. Kapalıysa düğmeye dokunarak açın.


<img src="/kb/screens/location-services.webp" alt="Konum servisleri ayarı" loading="lazy" decoding="async">

### Adım 2: Uygulama için kesin konumu açın

1.  Uygulama izinlerini açın:

    -   **Settings > Apps** bölümüne gidin (Android sürümünüze göre **Apps and notifications** olabilir).
    -   Konum izni vermek istediğiniz uygulamayı bulup dokunun.
2.  **Permissions** bölümünü açın.

3.  Konum erişimine izin verin:

    -   İzinler listesinde **Location** seçeneğine dokunun.
    -   Uygulamanın ihtiyacına göre **Allow all the time** ya da **Allow only while using the app** seçeneğini seçin.
4.  Kesin konumu açın:

    -   **Use precise location** seçeneğinin açık olduğundan emin olun; bu, uygulamanın GPS verisine erişmesini sağlar.

<img src="/kb/screens/location-permission.webp" alt="Konum izni ayarı" loading="lazy" decoding="async">

### Adım 3: GPS ayarlarını denetleyin

Yüksek doğruluk modu:

-   **Settings > Location** bölümüne dönün.
-   Android sürümünüze göre **Location Mode** ya da **Advanced** seçeneğine dokunup **High accuracy** modunu seçin. Bu mod konum için GPS, Wi-Fi ve mobil ağı birlikte kullanır.

<img src="/kb/screens/location-gps-setting.webp" alt="GPS doğruluk ayarı" loading="lazy" decoding="async">

Bu adımlardan sonra uygulama kesin konum GPS verisine erişebilir.

* * *

## 2. Panelde ekran konumunu ayarlama

Cihazda konum servislerini ve izinleri ayarladıktan sonra panelde de ekran konumunu açmanız gerekir.

1.  Panelde **SCREENS** sekmesine gidin.

2.  Ekran adının yanındaki **Screen Location** sütununda **SET LOCATION** seçeneğine tıklayın.


<img src="/kb/screens/screen-location.webp" alt="Ekran konumu ayarı" loading="lazy" decoding="async">

3.  **Enable auto-update location using the device's GPS** kutusunu işaretleyin.

<img src="/kb/screens/enable-auto-update.webp" alt="Otomatik konum güncellemeyi açma" loading="lazy" decoding="async">

4.  **UPDATE LOCATION** düğmesine tıklayın.

5.  **DASHBOARD** sekmesine dönün.

6.  Panelin solundaki **SCREEN'S LOCATIONS** bağlantısına tıklayın.

7.  Artık çevrimiçi ve çevrimdışı tüm etkin ekranlarınızın konumunu harita üzerinde görebilirsiniz. Konum gerçek zamanlı güncellendiği için değişiklikleri anında görürsünüz.

    Çevrimiçi ekranlar yeşil, çevrimdışı ekranlar kırmızı işaretle gösterilir.


<img src="/kb/screens/screen-location-on-map.webp" alt="Harita üzerinde ekran konumları" loading="lazy" decoding="async">

8.  Tam ekran görünüm için sağ üst köşedeki düğmeye tıklayın.

<img src="/kb/screens/fullscreen-view.webp" alt="Tam ekran harita görünümü" loading="lazy" decoding="async">

9.  Uydu görünümüne de geçebilirsiniz.

<img src="/kb/screens/satellite-view.webp" alt="Uydu görünümü" loading="lazy" decoding="async">
