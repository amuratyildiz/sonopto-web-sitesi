---
title: 'Web Sitesi Dinamik Adres Değişkenleri'
urlSlug: 'dinamik-adres-degiskenleri'
summary: 'Adreslere oynatıcıya özgü değerleri kendiliğinden yerleştirme: cihaz kimliği, seri numarası, üretici ve özel etiketler.'
category: 'apps'
order: 84
source: 'apps/digital-signage-website-dynamic-url-variables'
sourceHash: '8082c67b4e7dbb07'
importedAt: '2026-09-24'
---
> **Not:** Bu özellik **Website/URL** uygulamasıyla birlikte kullanılır. Bkz. [Web Sitesi Uygulaması](/destek/uygulamalar/web-sitesi/).

Dinamik adres değişkenleri, oynatıcıya özgü değerleri adreslerin içine kendiliğinden yerleştirmenizi sağlar.
Cihaz bilgisini API'lere, içerik akışlarına, analiz sistemlerine ya da özel panolara göndermek için kullanın.

Böylece:

-   Oynatıcı bilgilerini elle girmeden aktarabilirsiniz.
-   Veri isteklerini cihaz cihaz özelleştirebilirsiniz.
-   Ekran bilgilerine göre içerik kuralları ya da API akışları tetikleyebilirsiniz.
-   İş mantığınızı özel etiketlerle tanımlayabilirsiniz (mağaza kodu, bölge, kanal vb.).

* * *

## Kullanılabilir değişkenler

<div class="table-scroll"><table><thead><tr><th>Değişken</th><th>Açıklama</th></tr></thead><tbody><tr><td><code>{player.id}</code></td><td>Oynatıcının benzersiz kimliği</td></tr><tr><td><code>{player.serial}</code></td><td>Cihazın seri numarası (varsa)</td></tr><tr><td><code>{player.name}</code></td><td>Oynatıcı adı</td></tr><tr><td><code>{player.manufacturer}</code></td><td>Cihaz üreticisi (Samsung, LG, Android vb.)</td></tr><tr><td><code>{player.osPlatform}</code></td><td>İşletim sistemi / platform</td></tr><tr><td><code>{player.tags.all}</code></td><td>Tüm etiketler, <code>anahtar:değer</code> biçiminde ve virgülle ayrılmış</td></tr><tr><td><code>{player.tags.key}</code></td><td>Anahtara göre etiket değeri (örnek aşağıda)</td></tr></tbody></table></div>

> Etiketler büyük/küçük harfe duyarlıdır. Mümkün olduğunca küçük harf kullanın.

* * *

## Etiketleri kullanma

Etiketler, her oynatıcı için özel bilgi tanımlamanızı sağlar.

Bir oynatıcıya eklenmiş örnek etiketler:

```
store:TR-001
zone:MenuBoard
city:Ankara
```

<div class="table-scroll"><table><thead><tr><th>Şablon</th><th>Çıktı</th></tr></thead><tbody><tr><td><code>{player.tags.store}</code></td><td><code>TR-001</code></td></tr><tr><td><code>{player.tags.zone}</code></td><td><code>MenuBoard</code></td></tr><tr><td><code>{player.tags.city}</code></td><td><code>Ankara</code></td></tr><tr><td><code>{player.tags.all}</code></td><td><code>store:TR-001,zone:MenuBoard,city:Ankara</code></td></tr></tbody></table></div>

> Etiketler `anahtar:değer` biçiminde yazılır. Bir oynatıcıya birden çok etiket ekleyebilirsiniz.

<img src="/kb/apps/dynamic-variables-tags.webp" alt="Oynatıcı etiketleri" loading="lazy" decoding="async">

* * *

## Örnek kullanım

```
https://example.com/sync?player={player.id}&store={player.tags.store}
```

### Birden çok etiket değişkeni

```
https://example.com/{player.tags.store}/{player.tags.zone}
```

### Tüm etiketleri gönderme

```
https://example.com?tags={player.tags.all}
```

* * *

## Değişkenleri sınama

Değişkenlerin nasıl açıldığını sınama aracıyla önizleyebilirsiniz:

[https://url-variable-tester.ds-apps.net](https://url-variable-tester.ds-apps.net)

### Sınama örneği

Şablon:

```
https://url-variable-tester.ds-apps.net?device={player.id}&store={player.tags.store}
```

Örnek çıktı:

```
https://url-variable-tester.ds-apps.net?device=PL12345&store=TR-001
```

Yayına almadan önce adres biçimlerinizi bu araçla doğrulayın.

* * *

## İyi uygulamalar

-   Etiket anahtarlarını küçük harfle yazın: `store`, `zone`, `channel`.
-   Boşluk kullanmayın; `-` ya da `_` tercih edin: `store-id:001`.
-   Etiket değerlerini kısa ve sade tutun.
-   Adresleri sınama aracıyla doğrulayın.
