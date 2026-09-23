---
title: 'Power BI Uygulaması'
urlSlug: 'power-bi'
summary: 'Power BI raporlarını ekranlarda gösterme: herkese açık bağlantıyla ya da Microsoft hesabıyla korumalı erişim; yenileme aralığı ve belirteç güvenliği.'
category: 'apps'
order: 64
source: 'apps/digital-signage-powerbi'
sourceHash: 'c59287ba53afd16e'
importedAt: '2026-09-24'
---
## Power BI uygulamasını kullanma

Power BI uygulaması, Power BI raporlarınızı ekranlarınızda göstermenizi sağlar. Anlık veri ve panoları izleyicinizle paylaşmak için elverişlidir.

### Raporları paylaşmanın iki yolu

Power BI raporlarını iki biçimde paylaşabilirsiniz: **herkese açık raporlar** ve **korumalı raporlar**.

* * *

#### 1\. Herkese açık raporlar

Herkese açık raporlara, Microsoft hesabıyla giriş yapmadan bir bağlantı üzerinden ulaşılır.

1.  **Herkese açık bağlantıyı oluşturun**

    -   Power BI raporunuzu açın.
    -   **File > Embed Report > Publish to Web** yolunu izleyin.

<img src="/kb/apps/digital-signage-powerbi-1.webp" alt="Power BI web'de yayımlama" loading="lazy" decoding="async">

-   Verilen herkese açık adresi kopyalayın.

<img src="/kb/apps/digital-signage-powerbi-2.2.webp" alt="Power BI adresini kopyalama" loading="lazy" decoding="async">

-   Adres şuna benzer görünmelidir:

    `https://app.powerbi.com/view?r=XXXX`


2.  **Raporu çalma listenize ekleyin**

    -   Panele giriş yapın.
    -   **Çalma listenize** gidip Power BI'ı ekleyeceğiniz katmanı seçin.
        -   Katmanda medya yoksa uygulamalar penceresi kendiliğinden açılır.
        -   Medya varsa **Add New** düğmesine tıklayın.
    -   **Business Intelligence > Power BI** yolunu izleyin.

<img src="/kb/apps/digital-signage-powerbi-3.webp" alt="Business Intelligence bölümü" loading="lazy" decoding="async"> <img src="/kb/apps/digital-signage-powerbi-4.webp" alt="Power BI uygulaması" loading="lazy" decoding="async">

-   Kopyaladığınız adresi kutuya yapıştırın.
-   **Public** kutusunu işaretleyin.

3.  **Yenileme aralığını belirleyin**

    -   Panodaki verilerin güncellenme sıklığını seçin. Seçenekler **15 ile 60 dakika** arasındadır.
4.  **Kaydedin**

    -   Raporu ekranınızda göstermek için **Save** düğmesine tıklayın.

<img src="/kb/apps/digital-signage-powerbi-5.webp" alt="Adresi yapıştırma" loading="lazy" decoding="async">

* * *

#### 2\. Korumalı raporlar

Korumalı raporlar kimlik doğrulaması gerektirir ve herkese açık raporlardan daha güvenlidir.

1.  **Rapor adresini kopyalayın**

    -   Raporunuzu Power BI'da açın.

    -   Adres çubuğundaki adresi kopyalayın. Şuna benzer görünmelidir:

        `https://app.powerbi.com/groups/XXXX/reports/XXX/ReportSection2?experience=power-bi`


<img src="/kb/apps/digital-signage-powerbi-2.webp" alt="Rapor adresini kopyalama" loading="lazy" decoding="async">

2.  **Raporu çalma listenize ekleyin**

    -   Herkese açık raporlardaki adımların aynısını izleyin, ancak **Public kutusunu işaretlemeyin.**
3.  **Microsoft ile giriş yapın**

    -   İstendiğinde Microsoft hesabınızla giriş yapın.
    -   Bu, panele panonuz için **salt okunur** erişim verir.
4.  **Hesabınızı seçin**

    -   Kaydetmeden önce e-posta adresinizin **hesap listesinde** göründüğünden ve seçili olduğundan emin olun.
5.  **Kaydedin**

    -   Korumalı raporu göstermek için **Save** düğmesine tıklayın.

<img src="/kb/apps/digital-signage-powerbi-6.webp" alt="Korumalı rapor ayarı" loading="lazy" decoding="async">

##### Not:

Farklı Power BI çalışma alanlarından rapor paylaşmak için birden çok Microsoft hesabı ekleyebilirsiniz.

* * *

### Microsoft girişi ve güvenlik

Microsoft ile giriş yaptığınızda verileriniz şu şekilde korunur:

1.  **Uzun ömürlü belirteç**

    -   Giriş yaptığınızda Microsoft uzun ömürlü bir belirteç (**refresh token**) verir; bu belirteç veritabanımızda şifrelenerek güvenle saklanır.
    -   Belirteç kullanıcılarla paylaşılmaz ve ekranlara gönderilmez.
2.  **Kısa ömürlü erişim belirteci**

    -   Sistem, uzun ömürlü belirteci kullanarak yalnızca 1 saat geçerli olan kısa ömürlü bir **erişim belirteci** ister.
    -   Panoyu göstermek için ekranlara güvenli biçimde bu belirteç gönderilir.
3.  **Güvenli yenileme**

    -   Ekranlar, panonun güncel kalması için her saat başı güvenli biçimde yeni bir erişim belirteci ister.

Böylece Power BI raporlarınıza kesintisiz erişim sağlanırken verileriniz korunur.

* * *
