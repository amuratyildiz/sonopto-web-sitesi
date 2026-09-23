---
title: 'Media JSON Tümleştirmesi'
urlSlug: 'media-json'
summary: 'Dış bir JSON akışından görsel ve video çekerek ekran içeriğini kendiliğinden güncelleme; akış biçimi, alan tanımları ve güncelleme davranışı.'
category: 'apps'
order: 66
source: 'apps/digital-signage-media-json'
sourceHash: '86e3d71c72785a51'
importedAt: '2026-09-24'
---
## Media JSON nedir?

**Media JSON**, **görsel ve video** gibi çoklu ortam içeriklerini taşımak için tasarlanmış hafif bir JSON yapısıdır.
MRSS'in çağdaş bir alternatifidir; API tümleştirmesi ve içerik otomasyonu için iyileştirilmiştir.

* * *

## Neden Media JSON?

Media JSON ile ekranınızı dış bir JSON akışına bağlayarak **içerik güncellemelerini otomatikleştirirsiniz.**
Dosyaları elle yüklemeniz gerekmez; akıştaki her değişiklik ekranlarınıza anında yansır.

Şunlar için elverişlidir:

-   Mağaza kampanyaları
-   Haber ve duyurular
-   Menü panoları
-   Dinamik görsel ve video kampanyaları

* * *

## Media JSON uygulamasını kullanma

-   Panele giriş yapın.
-   Çalma listesini, ardından akışı ekleyeceğiniz katmanı seçin.
-   Katman boşsa uygulamalar penceresi kendiliğinden açılır. Varsa **Add New** düğmesine tıklayın.
-   **Media JSON** uygulamasını **General Apps**, **Video Apps** ve **News Apps** bölümlerinde bulabilirsiniz.
-   **Media JSON** seçeneğine tıklayın.
-   Akış adresini girin.
-   Kaç öğe gösterileceğini seçin.
-   Medya türünü seçin: görseller, videolar ya da ikisi birden.
-   Değişiklikleri uygulamak için **Save** düğmesine tıklayın.

<video width="90%" src="/kb/apps/media-json-video.mp4" controls="" preload="metadata" playsinline=""></video>

* * *

## Akış gereksinimleri

Media JSON akışınız:

-   geçerli bir **HTTPS** sunucusunda barındırılmalı,
-   ya da herkese açık bir **API ucundan** dönmelidir.

### Media JSON biçimi örneği

```json
{
 "channel": {
 "items": [
 {
 "title": "Image 1",
 "mediaContent": {
 "url": "https://files.cloud-digitalsignage.com/mrss/files/1.jpg",
 "type": "image/jpeg",
 "medium": "image",
 "duration": "10",
 "changeKey": "a077ae97dfe45af878f0e0fafdc05c85"
 }
 },
 {
 "title": "Video 1",
 "mediaContent": {
 "url": "https://files.cloud-digitalsignage.com/mrss/files/a.mp4",
 "type": "video/mp4",
 "medium": "video",
 "duration": "10",
 "changeKey": "f11b8c8d750d2087e0a6c0478840063d"
 }
 }
 ]
 }
}
```

Örnek akış dosyası: [https://files.cloud-digitalsignage.com/media-json/media-json.json](https://files.cloud-digitalsignage.com/media-json/media-json.json)

* * *

## Media JSON alan kılavuzu

Alanları bilmek, içeriğinizin ekranlarda doğru görünmesini sağlar.

### Kök yapı

<div class="table-scroll"><table><thead><tr><th>Alan</th><th>Zorunlu</th><th>Açıklama</th></tr></thead><tbody><tr><td><code>channel</code></td><td>✅</td><td>Akıştaki tüm öğeleri taşıyan kapsayıcı</td></tr><tr><td><code>items</code></td><td>✅</td><td>Medya öğelerinin dizisi</td></tr></tbody></table></div>

* * *

### Her `item`

<div class="table-scroll"><table><thead><tr><th>Alan</th><th>Zorunlu</th><th>Açıklama</th></tr></thead><tbody><tr><td><code>title</code></td><td>✅</td><td>Medyanın başlığı</td></tr><tr><td><code>mediaContent</code></td><td>✅</td><td>Medya dosyasının bilgilerini taşıyan nesne</td></tr></tbody></table></div>

* * *

### `mediaContent` öznitelikleri

<div class="table-scroll"><table><thead><tr><th>Öznitelik</th><th>Zorunlu</th><th>Açıklama</th></tr></thead><tbody><tr><td><code>url</code></td><td>✅</td><td>Medya dosyasının doğrudan HTTPS adresi</td></tr><tr><td><code>type</code></td><td>✅</td><td>MIME türü; örneğin <code>image/jpeg</code> ya da <code>video/mp4</code></td></tr><tr><td><code>medium</code></td><td>✅</td><td><code>image</code> ya da <code>video</code></td></tr><tr><td><code>duration</code></td><td>✅</td><td>Saniye cinsinden gösterim süresi</td></tr><tr><td><code>changeKey</code></td><td>❌ (önerilir)</td><td>Benzersiz kimlik (örneğin MD5 özeti). Adres aynı kalsa bile içerik değiştiğinde yenilemeyi zorlar.</td></tr></tbody></table></div>

* * *

## Örnek öğe

```json
{
 "title": "Video 1",
 "mediaContent": {
 "url": "https://yourdomain.com/media/video1.mp4",
 "type": "video/mp4",
 "medium": "video",
 "duration": "15",
 "changeKey": "abc123xyz456def789"
 }
}
```

Bu öğe `video1.mp4` dosyasını 15 saniye gösterir. İçerik yalnızca `url` ya da `changeKey` değiştiğinde yenilenir.

* * *

## Güncellemeler nasıl çalışır

-   İçerik, **adres** ya da `changeKey` değiştiğinde güncellenir.
-   Hiçbir şey değişmezse medya yeniden indirilmez.
-   Adres aynı kalırken dosya değiştiyse `changeKey` değerini yenileyin.

* * *

## Güncelleme sıklığı

-   Akışlar **15 dakikada bir** denetlenir.
-   Yalnızca etkin çalma listesi olan **çevrimiçi oynatıcılar** denetim tetikler.
-   Çevrimdışı oynatıcılar yeniden bağlandığında güncellenir; bu **15 dakikaya kadar** sürebilir.

* * *

## Medya depolama

-   Dosyalar JSON akışından **bulut depolamaya** indirilir.
-   Ardından **çevrimdışı oynatma** için oynatıcılarınıza eşitlenir.

* * *

## Desteklenen medya türleri

-   **Görseller:** `image/jpeg`, `image/png`
-   **Videolar:** `video/mp4`, `video/webm`

Her `mediaContent` nesnesi şunları içermelidir:

-   `url`
-   `type`
-   `medium`
-   `duration`
-   `changeKey` (isteğe bağlı ama önerilir)

* * *

## İpuçları

-   Akışları küçük tutun; daha hızlı yüklenir.
-   Medya dosyaları için CDN ya da hızlı bir sunucu kullanın.
-   Aynı adresle dosya değiştirdiğinizde `changeKey` değerini mutlaka güncelleyin.
