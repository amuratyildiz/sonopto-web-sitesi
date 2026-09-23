---
title: 'Katman Kilitleme'
urlSlug: 'katman-kilitleme'
summary: 'Bir katmanı yalnızca sahibi olan takımın değiştirebilmesi için kilitleme; logo koruma ve müşteriye tek katman yetkisi verme örnekleri.'
category: 'playlists'
order: 12
source: 'playlists/digital-signage-lock-a-layer'
sourceHash: '88c05f4208f25632'
importedAt: '2026-09-23'
---
**Katman kilitleme**, çalma listesindeki belirli bir katmana erişimi kısıtlamanızı sağlar. Böylece o katmanı yalnızca sahibi olan takım değiştirebilirken, diğer kullanıcılar çalma listesinin geri kalanını yönetmeyi sürdürebilir.

<img src="/kb/playlists/digital-signage-lock-layer.webp" alt="Katman kilitleme" loading="lazy" decoding="async">

## Nasıl çalışır

-   Bir katman **kilitlendiğinde**, ona yalnızca katman sahibiyle **aynı takımdaki** kullanıcılar erişebilir ya da onu değiştirebilir.
-   **Hesap sahibinin** erişimi her zaman vardır.
-   **Administrator** takımındaki kullanıcıların erişimi her zaman vardır.
-   Diğer tüm kullanıcılar çalma listesini görebilir ama **kilitli katmana erişemez ve onu düzenleyemez.**

## Ne zaman kullanılır

Sık karşılaşılan kullanımlar:

-   Müşteri ya da takım tarafından yönetilen çalma listelerinde **logonuzun ya da filigranınızın** her zaman görünür kalmasını sağlamak
-   **Ekranın bir bölümünü kendiniz yönetirken** geri kalanını müşteriye ya da takıma bırakmak
-   Kritik içeriği alt kullanıcıların ya da müşterilerin kazara yapacağı düzenlemelerden korumak

* * *

## Örnek 1: Filigran katmanını kilitleme

Bu kullanım, müşterinin çalma listesi içeriğini yönetmesine izin verirken logonuzu ya da marka öğelerinizi korur.

### Adımlar

1.  **Takım oluşturun**

    -   Bir takım oluşturun (örneğin **Team A**).
    -   Müşterinizi ya da kullanıcıları **alt kullanıcı** olarak ekleyin.
    -   Onları **Team A** takımına atayın.
    -   Team A takımına çalma listelerinde **Read-only** yetkisi verin.
2.  **Çalma listenizi oluşturun**

    -   Yeni bir çalma listesi oluşturun.
    -   **Küçük bir katman** ekleyin (örneğin alt köşeye).
    -   Logonuzu ya da filigranınızı bu katmana yükleyin.
    -   Katmanda **Lock** düğmesine tıklayın.
    -   **Hesap sahibi** ya da **Administrator** takımında olduğunuzdan emin olun.
3.  **Ekrana yayınlayın**

    -   Çalma listesini ekranınıza atayın.
    -   **Publish** düğmesine tıklayın.

### Sonuç

-   Team A çalma listesi içeriğini yönetebilir.
-   Team A kilitli filigran katmanına **erişemez ve onu değiştiremez.**
-   Marka öğeleriniz her zaman korunur.

* * *

## Örnek 2: Müşteriye yalnızca tek katman yetkisi verme

Bu kullanım, ekranın bir bölümünü kendiniz yönetirken belirli bir alanı müşteriye bırakmanızı sağlar.

### Adımlar

1.  **Örnek 1**'deki adımları izleyin.
2.  Küçük bir katman yerine:
    -   Müşterinin yöneteceği alana denk gelen **daha büyük bir katman** oluşturun.
3.  Korumak istediğiniz katmanları kilitleyin.
4.  Müşterinin yöneteceği katmanı kilitsiz bırakın.

### Sonuç

-   Ekranın kritik alanları sizde kalır.
-   Müşteri kendi katmanındaki içeriği güvenle yönetir.
-   Korunan içeriğin üzerine yazılma tehlikesi olmaz.

* * *

## Ekran erişimi önerileri

-   Team A takımına şunları verebilirsiniz:
    -   ekranlarda **salt okunur** yetki, ya da
    -   hiç ekran yetkisi vermemek.
-   Böylece kullanıcılar ekran atamalarına ya da korunan katmanlara karışmadan çalma listelerini yönetebilir.

* * *

## Notlar ve iyi uygulamalar

-   Kilitli katmanlar yayın sırasında yine görünür.
-   Kilitleme oynatmayı ya da başarımı etkilemez.
-   Yönetimi kolaylaştırmak için takımlara açık adlar verin (örneğin _Müşteri – A Mağazası_).
-   En yüksek denetim için **katman kilitleme** ile **takım tabanlı yetkilendirmeyi** birlikte kullanın.

Düzen önizlemesine dönmek için **Back** düğmesine tıklayın.
