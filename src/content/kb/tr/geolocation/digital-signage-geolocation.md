---
title: 'Coğrafi Konum'
urlSlug: 'cografi-konuma-gore-yayin'
summary: 'Ekranın bulunduğu yere göre içeriğin kendiliğinden değişmesi: cihazda konum servisleri, harita üzerinde bölge çizme, kanal kurma ve bölgeleri çalma listelerine atama.'
category: 'geolocation'
order: 999
source: 'geolocation/digital-signage-geolocation'
sourceHash: '99b47040818a3044'
importedAt: '2026-09-24'
---
Coğrafi konum özelliği, içeriğin cihazın bulunduğu yere göre kendiliğinden değişmesini sağlar; böylece belirli alanlarda, bölgelerde ya da noktalarda farklı çalma listeleri oynatılabilir.

Altı ana adımı vardır.

### Adım 1: Cihazda konum servislerini yapılandırın

Uygulamanın kesin konuma erişebilmesi için cihazınızda konum servislerini ayarlayın. Bu ayar, ekranlarınızın konumunun doğru belirlenmesini ve ağınızın izlenebilmesini sağlar.

#### 1- Cihazda konum servislerini açın

Android cihazlarda uygulamaya kesin konum izni verin.

1.  Cihaz ayarlarını açın.

2.  **Location** ayarlarına gidin (aşağı kaydırıp **Location** seçeneğine dokunun).

3.  Konum servislerini açın. Kapalıysa düğmeye dokunarak açın.


<img src="/kb/geolocation/location-services.webp" alt="Konum servisleri ayarı" loading="lazy" decoding="async">

#### 2- Uygulama için kesin konumu açın

1.  Uygulama izinlerini açın:

    -   **Settings > Apps** bölümüne gidin (Android sürümünüze göre **Apps and notifications** olabilir).
    -   Konum izni vermek istediğiniz uygulamayı bulup dokunun.
2.  **Permissions** bölümünü açın.

3.  Konum erişimine izin verin:

    -   İzinler listesinde **Location** seçeneğine dokunun.
    -   Uygulamanın ihtiyacına göre **Allow all the time** ya da **Allow only while using the app** seçeneğini seçin.
4.  Kesin konumu açın:

    -   **Use precise location** seçeneğinin açık olduğundan emin olun; bu, uygulamanın GPS verisine erişmesini sağlar.

<img src="/kb/geolocation/location-permission.webp" alt="Konum izni ayarı" loading="lazy" decoding="async">

#### 3- GPS ayarlarını denetleyin

Yüksek doğruluk modu:

-   **Settings > Location** bölümüne dönün.
-   Android sürümünüze göre **Location Mode** ya da **Advanced** seçeneğine dokunup **High accuracy** modunu seçin. Bu mod konum için GPS, Wi-Fi ve mobil ağı birlikte kullanır.

<img src="/kb/geolocation/location-gps-setting.webp" alt="GPS doğruluk ayarı" loading="lazy" decoding="async">

Bu adımlardan sonra uygulama kesin konum GPS verisine erişebilir.

* * *

**Cihazda konum servislerini ve izinleri ayarladıktan sonra panele giriş yapıp aşağıdaki adımları izleyin.**

### Adım 2: Bölgeleri tanımlayın

Bölge (zone), bir kanaldaki çalma listesine atanan coğrafi alandır. Ekran o alandayken hangi içeriğin oynatılacağını belirler.

1.  **PLAYLISTS** sayfasına gidin.
2.  **CHANNELS** sekmesine geçin.
3.  Kanallar altındaki **ZONES** sekmesine tıklayın.
4.  **ADD ZONE** düğmesine tıklayın.
5.  Bölgenin adını girip **ADD** düğmesine tıklayın.

<img src="/kb/geolocation/add-zone.webp" alt="Bölge ekleme" loading="lazy" decoding="async">

6.  İçeriğin değişmesini istediğiniz coğrafi alanı harita üzerinde belirleyin; bölgeyi arayıp yakınlaştırın ya da uzaklaştırın. Haritada gezinmek için fareyi basılı tutun, tam ekran görünüm için sağ üstteki düğmeyi kullanın.

7.  Bölge, harita üzerine bir çokgen çizilerek tanımlanır. Başlangıç noktasını belirlemek için haritaya tıklayın, istediğiniz alanın kenarlarını çizmek için fareyi hareket ettirin ve başlangıç noktasına dönerek tanımı tamamlayın. Aşağıda tanımlanmış bir bölge örneği var.


<img src="/kb/geolocation/define-zone-map.webp" alt="Harita üzerinde bölge tanımlama" loading="lazy" decoding="async">

<img src="/kb/geolocation/save-zone.webp" alt="Bölgeyi kaydetme" loading="lazy" decoding="async">

8.  **SAVE** düğmesine tıklayın.
9.  Gerektiği kadar bölge ekleyin.

<img src="/kb/geolocation/zones.webp" alt="Tanımlanmış bölgeler" loading="lazy" decoding="async">

### Adım 3: Çalma listelerinden bir kanal oluşturun

Çalma listelerinizi hazırlayıp onlardan bir kanal oluşturun.

1.  Kullandığınız ekran türüne göre **HORIZONTAL** ya da **VERTICAL** sekmesinden çalma listesi ekleyin. Ayrıntılar için [Çalma Listesi Yönetimi](/destek/calma-listeleri/calma-listesi-yonetimi/) makalesine bakın.
2.  Listeleri oluşturduktan sonra **CHANNELS** sekmesine dönün.
3.  Kanallar bölümünde **ADD** düğmesine tıklayarak eklediğiniz listelerden bir kanal oluşturun. Ayrıntılar için [Kanallar](/destek/calma-listeleri/kanallar/) makalesine bakın.

<img src="/kb/geolocation/geolocation-add-channel.webp" alt="Kanal ekleme" loading="lazy" decoding="async">

4.  Kanalınıza bir ad verin ve açılır listeden ekran yönünü (yatay ya da dikey) seçin.
5.  Kanala erişimi yalnızca belirli bir takımla sınırlamak için bir takım seçin. Kısıtlama gerekmiyorsa boş bırakın.
6.  **ADD** düğmesine tıklayın.

<img src="/kb/geolocation/geolocation-create-channel.webp" alt="Kanal oluşturma" loading="lazy" decoding="async">

7.  Kanala çalma listesi eklemek için **+** işaretine tıklayın.

<img src="/kb/geolocation/assign-playlists.webp" alt="Kanala çalma listesi atama" loading="lazy" decoding="async">

### Adım 4: Bölgeleri çalma listelerine atayın

İçeriğin konuma göre değişmesi için kanaldaki her çalma listesini karşılık gelen coğrafi bölgeye bağlayın.

1.  Bir listeyi bölgeye atamak için yanındaki konum simgesine tıklayın.

<img src="/kb/geolocation/assign-zone-to-playlist.webp" alt="Çalma listesine bölge atama" loading="lazy" decoding="async">

2.  Listeyi o konumla sınırlamak için listeden bir bölge adı seçin.

<img src="/kb/geolocation/choose-zone.webp" alt="Bölge seçimi" loading="lazy" decoding="async">

<img src="/kb/geolocation/zones-list.webp" alt="Bölge listesi" loading="lazy" decoding="async">

3.  Atamaları bitirdiğinizde **CLOSE** düğmesine tıklayın.

### Adım 5: Kanalı ekranlara atayın

1.  **SCREENS** sayfasına gidin. Ekran ekleme ayrıntıları için [Ekran Yönetimi](/destek/ekranlar/ekran-yonetimi/) makalesine bakın.

2.  Ekran adının yanındaki içerik kaynağı türüne tıklayın.

3.  Kaynak türü olarak **Channels** seçeneğini seçin.


<img src="/kb/geolocation/assign-channel-to-screen.webp" alt="Ekrana kanal atama" loading="lazy" decoding="async">

4.  Ekranınıza atamak istediğiniz kanalı seçin.

5.  Değişiklikleri ekrana göndermek için **Publish** düğmesine tıklayın.


### Adım 6: Ekran konumunu açın

Son olarak ekran konumu özelliğini etkinleştirmeniz gerekir.

1.  **SCREENS** sekmesine gidin.

2.  Ekran adının yanındaki **Screen Location** sütununda **SET LOCATION** seçeneğine tıklayın.


<img src="/kb/geolocation/screen-location.webp" alt="Ekran konumu ayarı" loading="lazy" decoding="async">

3.  **Enable auto-update location using the device's GPS** kutusunu işaretleyin.

<img src="/kb/geolocation/enable-auto-update.webp" alt="Otomatik konum güncellemeyi açma" loading="lazy" decoding="async">

4.  **UPDATE LOCATION** düğmesine tıklayın.
5.  **DASHBOARD** sekmesine dönün.
6.  Panelin solundaki **SCREEN'S LOCATIONS** bağlantısına tıklayın.

Artık çevrimiçi ve çevrimdışı tüm etkin ekranlarınızın konumunu harita üzerinde görebilirsiniz. Konum gerçek zamanlı güncellenir. Ekran tanımlı bölgeler arasında hareket ettiğinde içerik, belirlediğiniz coğrafi konumlara göre kendiliğinden başka bir çalma listesine geçer.

Çevrimiçi ekranlar yeşil, çevrimdışı ekranlar kırmızı işaretle gösterilir.

<img src="/kb/geolocation/screen-location-on-map.webp" alt="Harita üzerinde ekran konumları" loading="lazy" decoding="async">

Tam ekran görünüm için sağ üst köşedeki düğmeye tıklayabilirsiniz.

<img src="/kb/geolocation/fullscreen-view.webp" alt="Tam ekran harita görünümü" loading="lazy" decoding="async">

Uydu görünümüne de geçebilirsiniz.

<img src="/kb/geolocation/satellite-view.webp" alt="Uydu görünümü" loading="lazy" decoding="async">
