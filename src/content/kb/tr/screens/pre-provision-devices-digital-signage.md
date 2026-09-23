---
title: 'Cihazları Önceden Tanımlama'
urlSlug: 'on-tanimlama'
summary: 'Ekranlar daha çevrimiçi olmadan seri numarasıyla tanımlama: tek tek ya da CSV ile en çok 50 cihaz, çalma listesi ve etiket ataması hazır.'
category: 'screens'
order: 8
source: 'screens/pre-provision-devices-digital-signage'
sourceHash: 'f2b93d4bc49dd3d5'
importedAt: '2026-09-23'
---
Önceden tanımlama, ekranları **çevrimiçi olmadan önce** hazırlamanızı sağlar. Aynı anda çok sayıda ekran kurarken, müşteriye hazır yapılandırılmış cihaz gönderirken ya da montajcıyla çalışırken işe yarar.

Önceden tanımlanmış bir cihaz ilk kez bağlandığında hesaba kendiliğinden bağlanır ve belirlediğiniz ayarları uygular.

> **Not:** Ekranları önceden tanımlamak için yeterli lisansınız olmalıdır. Örneğin 10 ekran tanımlamak istiyorsanız hesabınızda en az 10 kullanılmamış ekran lisansı bulunmalıdır.

> CSV yükleme aracıyla **aynı anda en çok 50 oynatıcı** tanımlayabilirsiniz.

* * *

## Ne işe yarar

-   Çok sayıda cihazı daha hızlı devreye alma
-   Kurulumdan önce çalma listesi ve etiket atama
-   Müşteri ya da montajcı için işi kolaylaştırma
-   Her ekranı tek tek etkinleştirme zorunluluğunun kalkması
-   Android, WebOS, Tizen, Windows, macOS, Linux ve BrightSign desteği

* * *

## Nasıl çalışır

1.  Kurulumdan önce ekranın **seri numarasını** ekleyin.
2.  **Ad**, **çalma listesi** ve isteğe bağlı **etiketler** atayın.
3.  Cihazları gönderin ya da kurun.
4.  Cihaz bağlandığında kendini kaydeder ve ayarlarını uygular.

* * *

## Tipik akış

<div class="table-scroll"><table><thead><tr><th>Adım</th><th>İşlem</th></tr></thead><tbody><tr><td>1</td><td>Cihaz seri numaralarını toplayın</td></tr><tr><td>2</td><td>Cihazları önceden tanımlayın</td></tr><tr><td>3</td><td>Ekranları yerinde kurun</td></tr><tr><td>4</td><td>Cihazlar hesaba kendiliğinden bağlanıp ayarları uygular</td></tr></tbody></table></div>

* * *

## Cihaz ekleme

Cihazları iki yolla ekleyebilirsiniz: tek tek ya da CSV dosyasıyla.

### 1. Elle ekleme

-   **Screens** sekmesine gidin.
-   **Add Screen** düğmesine tıklayın.
-   **Provision Devices** seçeneğine tıklayın.

<img src="/kb/screens/pre-provision-devices-digital-signage.webp" alt="Cihazları önceden tanımlama" loading="lazy" decoding="async">

-   **Add Devices** seçeneğine tıklayın.

<img src="/kb/screens/add-device-manual.webp" alt="Cihaz ekleme" loading="lazy" decoding="async">

-   Cihazınızın seri numarasını yapıştırın. (Birden çok seri numarası ekleyebilirsiniz: her satıra bir tane ya da virgül veya boşlukla ayırarak.)

<img src="/kb/screens/add-serial-number.webp" alt="Seri numarası ekleme" loading="lazy" decoding="async">

-   **Save** düğmesine tıklayın.
-   Şunları girin:
    -   **Name** (isteğe bağlı)
    -   **Playlist** (isteğe bağlı)
    -   **Tags** (isteğe bağlı)

<img src="/kb/screens/add-name-playlist.webp" alt="Cihaz bilgilerini girme" loading="lazy" decoding="async">

Cihaz bağlandığında kendini kaydeder ve bu ayarları uygular.

### 2. CSV ile toplu ekleme

Aynı anda birden çok cihaz eklemek için CSV dosyası yükleyin.

> Her CSV yüklemesinde **en çok 50 cihaz**

**CSV biçimi örneği:**

```
serial,name,playlist,tags
SN001,Reception TV,Welcome Playlist,frontdesk;reception
SN002,Menu Board,Menu Playlist,restaurant;menu
```

> Etiketlerde `,` ya da `;` ayracı kullanılabilir.

-   **Add Screen** düğmesine tıklayın.
-   **Provision Devices** seçeneğine tıklayın.
-   **Upload CSV File** sekmesine geçin.

<img src="/kb/screens/add-csv-file.webp" alt="CSV dosyası yükleme sekmesi" loading="lazy" decoding="async">

-   Yüklenecek CSV dosyasını seçin.

<img src="/kb/screens/upload-devices.webp" alt="Cihazları yükleme" loading="lazy" decoding="async">

-   Kaydetmek için **Confirm** düğmesine tıklayın.

Kurulan cihazlar bağlandığında kendilerini kaydedip ayarları uygular.

* * *

## Etiketler

Etiketler ekranları gruplamaya ve içerik atamasını otomatikleştirmeye yarar.

Örnekler:

-   `reception`
-   `menu`
-   `gym`
-   `store-123`

<img src="/kb/screens/tags.webp" alt="Ekran etiketleri" loading="lazy" decoding="async">

_Ayrıntılar için [Etiketlerle Oynatmayı Denetleme](/destek/calma-listeleri/etiketlerle-oynatma-denetimi/) makalesine bakın._

* * *

## Cihaz etkinleştirme

Cihaz ilk kez bağlandığında:

-   eşleşen seri numarası olup olmadığına bakar,
-   atanmış çalma listesi ve etiketleri uygular,
-   **Players** sayfasında görünür.

<img src="/kb/screens/screens-on-dashboard.webp" alt="Paneldeki oynatıcılar" loading="lazy" decoding="async">

* * *

## İpuçları

-   Büyük kurulumlarda CSV kullanın.
-   Seri numaralarını tutarlı yazın (büyük/küçük harf farkı yoktur).
-   Düzen ve otomasyon için etiketlerden yararlanın.
-   Toplu kuruluma geçmeden önce tek ekranla deneyin.

* * *

## Sık sorulanlar

<div class="table-scroll"><table><thead><tr><th>Soru</th><th>Yanıt</th></tr></thead><tbody><tr><td>Seri numarası zaten varsa ne olur?</td><td>Yeni kayıt, etkin bir ekranın yerine geçmez</td></tr><tr><td>Tanımladıktan sonra ayarları değiştirebilir miyim?</td><td>Evet, istediğiniz zaman düzenleyebilirsiniz</td></tr><tr><td>Cihazların internete ihtiyacı var mı?</td><td>Evet, ilk etkinleştirme ve güncellemeler için</td></tr><tr><td>Tanımlamaları toplu silebilir miyim?</td><td>Evet, arayüzden silebilirsiniz</td></tr></tbody></table></div>
