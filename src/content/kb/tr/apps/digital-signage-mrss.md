---
title: 'MRSS Tümleştirmesi'
urlSlug: 'mrss'
summary: 'Dış bir MRSS akışından görsel ve video çekerek ekran içeriğini kendiliğinden güncelleme; akış biçimi, alan tanımları ve güncelleme davranışı.'
category: 'apps'
order: 67
source: 'apps/digital-signage-mrss'
sourceHash: '4753f60ad594f5c6'
importedAt: '2026-09-24'
---
## MRSS nedir?

**MRSS**, **Media RSS** demektir; standart RSS biçiminin **görsel ve video** gibi çoklu ortam içeriklerini taşımak için genişletilmiş hâlidir.
Dış kaynaklardan gelen dinamik içerikle çalma listelerini ve ekranları kendiliğinden güncellemek için yaygın olarak kullanılır.

* * *

## Neden MRSS?

MRSS ile ekranlarınızı dış bir akışa bağlayarak **içerik güncellemelerini otomatikleştirirsiniz.** Dosyaları elle yüklemeniz ya da yeniden sıralamanız gerekmez; akıştaki değişiklikler ekranlarınıza kendiliğinden yansır.

Şunlar için elverişlidir:

-   Mağaza kampanyaları
-   Haber ve duyurular
-   Menü panoları
-   Dinamik görsel ve video kampanyaları

* * *

## MRSS uygulamasını kullanma

-   Panele giriş yapın.
-   Çalma listesini, ardından MRSS akışını ekleyeceğiniz katmanı seçin.
-   Katmanda medya yoksa uygulamalar penceresi kendiliğinden açılır. Varsa **Add New** düğmesine tıklayın.
-   **MRSS** uygulamasını **General Apps**, **Video Apps** ve **News Apps** bölümlerinde bulabilirsiniz.
-   **MRSS** seçeneğine tıklayın.
-   MRSS dosyasının adresini girin.
-   Kaç medya öğesi gösterileceğini seçin.
-   Açılır listeden medya türünü seçin: görseller, videolar ya da ikisi birden.
-   Değişiklikleri uygulamak için **Save** düğmesine tıklayın.

<video width="90%" src="/kb/apps/mrss-app.mp4" controls="" preload="metadata" playsinline=""></video>

* * *

## Akış gereksinimleri

MRSS dosyanız:

-   geçerli bir **HTTPS** sunucusunda barındırılmalı,
-   ya da bir **API çağrısının yanıtı** olarak dönmelidir.

### MRSS biçimi örneği

```xml
<rss xmlns:media="http://search.yahoo.com/mrss/" version="2.0">
 <channel>
 <title>Media RSS</title>
 <description>Media RSS Feed</description>
 <item>
 <title>Image 1</title>
 <media:content
 url="https://your-domain.com/path/image1.jpg"
 type="image/jpeg"
 medium="image"
 key_change="hash1"
 duration="10"/>
 </item>
 <item>
 <title>Video 1</title>
 <media:content
 url="https://your-domain.com/path/video1.mp4"
 type="video/mp4"
 medium="video"
 key_change="hash2"
 duration="10"/>
 </item>
 </channel>
</rss>
```

Örnek akış dosyası: [https://files.cloud-digitalsignage.com/mrss/mrss-feed.xml](https://files.cloud-digitalsignage.com/mrss/mrss-feed.xml)

* * *

## MRSS alan kılavuzu

Medyanızın ekranlarda doğru güncellenmesi için akıştaki alanları bilmek önemlidir.

### Kök ve yapı

<div class="table-scroll"><table><thead><tr><th>Alan</th><th>Zorunlu</th><th>Açıklama</th></tr></thead><tbody><tr><td><code>&lt;rss&gt;</code></td><td>✅</td><td>Akışın kök öğesi. <code>xmlns:media="http://search.yahoo.com/mrss/"</code> ve <code>version="2.0"</code> içermelidir.</td></tr><tr><td><code>&lt;channel&gt;</code></td><td>✅</td><td>Akışın künyesini ve medya öğelerinin listesini taşır.</td></tr><tr><td><code>&lt;title&gt;</code></td><td>✅</td><td>Kanalın ya da öğenin başlığı (tanımlama içindir, ekranda gösterilmesi gerekmez).</td></tr><tr><td><code>&lt;description&gt;</code></td><td>✅</td><td>Akışın ya da öğenin açıklaması.</td></tr></tbody></table></div>

### `<item>` (her medya için yinelenir)

Her `<item>` bir medya içeriğini (görsel ya da video) temsil eder.

<div class="table-scroll"><table><thead><tr><th>Alan</th><th>Zorunlu</th><th>Açıklama</th></tr></thead><tbody><tr><td><code>&lt;title&gt;</code></td><td>✅</td><td>Medyanın başlığı. İç düzen ve tanımlama için yararlıdır.</td></tr><tr><td><code>&lt;media:content&gt;</code></td><td>✅</td><td>Medya dosyasının bilgilerini taşır. Adres, tür ve ortam gibi temel öznitelikleri içermelidir.</td></tr></tbody></table></div>

### `<media:content>` öznitelikleri

<div class="table-scroll"><table><thead><tr><th>Öznitelik</th><th>Zorunlu</th><th>Açıklama</th></tr></thead><tbody><tr><td><code>url</code></td><td>✅</td><td>Medya dosyasının doğrudan adresi (HTTPS olmalıdır).</td></tr><tr><td><code>type</code></td><td>✅</td><td>Dosyanın MIME türü. Örnek: görseller için <code>image/jpeg</code>, videolar için <code>video/mp4</code>.</td></tr><tr><td><code>medium</code></td><td>✅</td><td>Medya türünü belirtir: <code>image</code> ya da <code>video</code>. Sistemin dosyayı doğru işlemesini sağlar.</td></tr><tr><td><code>duration</code></td><td>✅</td><td>Medyanın kaç saniye gösterileceği.</td></tr><tr><td><code>key_change</code></td><td>❌ (önerilir)</td><td>Medya dosyasının benzersiz kimliği (örneğin bir MD5 özeti). Bu değeri değiştirmek, adres aynı kalsa bile sistemi dosyayı güncellemeye zorlar.</td></tr></tbody></table></div>

### Örnek öğe

```xml
<item>
 <title>Video 1</title>
 <media:content
 url="https://yourdomain.com/media/video1.mp4"
 type="video/mp4"
 medium="video"
 duration="15"
 key_change="abc123xyz456def789"/>
</item>
```

Bu öğe `video1.mp4` dosyasını 15 saniye oynatır ve yalnızca adres ya da `key_change` değeri değişirse yeniden indirilir.

* * *

## Güncellemeler nasıl çalışır

-   Değişikliğin algılanması için **adres ya da `key_change` alanı** değişmelidir.
-   Hiçbir değişiklik algılanmazsa sistem bant genişliğinden tasarruf etmek için yeniden indirmez.
-   Medya dosyası değiştiğinde, adres aynı kalsa bile `key_change` değerini yeni ve benzersiz bir dizeyle (örneğin bir MD5 özeti) güncelleyin.

* * *

## Güncelleme sıklığı

-   Akışlar **15 dakikada bir** denetlenir.
-   Yalnızca **çevrimiçi oynatıcılara atanmış etkin çalma listeleri** güncelleme denetimi tetikler.
-   Oynatıcı **çevrimdışıysa** güncelleme gönderilmez.
-   Oynatıcı yeniden çevrimiçi olduğunda içeriğin yenilenmesi **15 dakikaya kadar** sürebilir.

* * *

## Medya depolama

-   MRSS akışındaki tüm medya dosyaları **bulut depolamamıza indirilir.**
-   Ardından güvenilir **çevrimdışı oynatma** için oynatıcınıza eşitlenir.

* * *

## Desteklenen medya türleri

-   **Görseller:** `image/jpeg`, `image/png`
-   **Videolar:** `video/mp4`, `video/webm`

Her `<media:content>` şunları içermelidir:

-   `url` (dosyanın adresi)
-   `type` (MIME türü)
-   `medium` (`image` ya da `video`)
-   `duration` (saniye)
-   `key_change` (isteğe bağlı ama önerilir)

* * *

## İpuçları

-   MRSS akışınızı hafif ve hızlı yüklenir tutun.
-   Medya dosyalarınızı güvenilir bir CDN ya da bulut sunucuda barındırın.
-   İçerik değiştiğinde, adres aynı kalsa bile güncellemeyi zorlamak için `key_change` değerini mutlaka güncelleyin.
