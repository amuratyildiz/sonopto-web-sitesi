---
title: 'Google E-Tablolar ile Dinamik Veri'
urlSlug: 'google-e-tablolar-ile-dinamik-veri'
summary: 'Şablonun bir bölümünü Google E-Tablolar’a bağlayarak menü, nöbet listesi ve etkinlik programı gibi sık değişen içerikleri kendiliğinden güncelleme.'
category: 'dynamic-data'
order: 999
source: 'dynamic-data/google-sheet-digital-signage'
sourceHash: '9375852ec0320af8'
importedAt: '2026-09-24'
---
## Şablonlarda Google E-Tablolar ile dinamik veri

Şablonlarınızın bir bölümünü Google E-Tablolar'a bağlayarak dinamik hâle getirebilirsiniz. Bu özellik menü, nöbet listesi ya da etkinlik programı gibi sık güncellenen içerikler için biçilmiş kaftandır.

Güncellemeler Google Drive API üzerinden tetiklenir ve anlık olacağının güvencesi yoktur. Bir değişiklik genellikle **saniyeler ile dakikalar içinde** ekrana yansır; bu süre Google'ın önbellekleme ve işleme aralıklarına bağlıdır. Ayrıca şablon düzenleyiciden veriyi elle de yenileyebilirsiniz (**dakikada en çok bir kez**).

### Google E-Tablolar ile dinamik veriyi açma

#### Adım 1: Şablon oluşturun ya da seçin

-   Boş bir şablonla başlayın ya da kitaplıktaki hazır şablonlardan birini kullanın.

    <img src="/kb/dynamic-data/add-templates-1.webp" alt="Şablon ekleme" loading="lazy" decoding="async">

-   Şablon düzenleyiciyi açın.

    <img src="/kb/dynamic-data/open-templates-editor-2.webp" alt="Şablon düzenleyiciyi açma" loading="lazy" decoding="async">


#### Adım 2: Şablonunuzu tasarlayın

-   Görselleri yükleyip dinamik veri için yer ayırın.
-   Tasarımınızda dinamik verinin görüneceği alanları boş bırakın.

#### Adım 3: Google E-Tablolar'a bağlanın

1.  Şablon düzenleyicide sol menüden **GOOGLE SHEETS** seçeneğini seçin.

<img src="/kb/dynamic-data/choose-google-sheets-3.webp" alt="Google E-Tablolar seçeneği" loading="lazy" decoding="async">

2.  Tablonuzu, size verilen kullanıcıyla görüntüleyici olarak paylaşın.

    -   Verilen kullanıcı e-postasını kopyalayın.

    <img src="/kb/dynamic-data/copy-google-sheet-user-4.webp" alt="Görüntüleyici e-postasını kopyalama" loading="lazy" decoding="async">


-   Tablonuzu **Viewer** (görüntüleyici) yetkisiyle paylaşın.

    Not: Google tablosu, satır ve sütun boyutları eşit, düz bir tablo biçiminde olmalıdır.

    <img src="/kb/dynamic-data/gogole-sheets-share-digital-signage-5.webp" alt="Tabloyu paylaşma" loading="lazy" decoding="async">


<img src="/kb/dynamic-data/gogole-sheets-share-user-6.webp" alt="Görüntüleyici yetkisi verme" loading="lazy" decoding="async">

3.  Google tablosunun adresini kopyalayıp düzenleyicideki alana yapıştırın.
4.  Bağlamak için **Add** düğmesine tıklayın.

<img src="/kb/dynamic-data/paste-google-sheet-url-7.webp" alt="Tablo adresini yapıştırma" loading="lazy" decoding="async">

#### Adım 4: Veriyi doğrulayın ve seçin

-   Tabloyu ekledikten sonra:
    -   Tablo adı ve sayfa sekmeleri görünmelidir. Görünmüyorsa **Refresh Data** düğmesine tıklayın.
    -   Veri birkaç saniye içinde yüklenir.
-   Dinamik veri için kullanacağınız sayfayı seçin (şablon başına yalnızca bir sayfa).
-   Veriyi şablona eklemek ve veri düzenleyiciyi açmak için **ADD TO TEMPLATE** düğmesine tıklayın.

<img src="/kb/dynamic-data/add-sheet-8.webp" alt="Sayfa seçimi" loading="lazy" decoding="async">

#### Adım 5: Veriyi yapılandırın

-   Şablonda hangi alanların ya da satırların görüneceğini veri düzenleyiciden seçin.
-   Gerekirse aynı tablodan farklı veriler seçerek birden çok veri bloğu ekleyin.
-   İçeriği düzenlemek için metin hizalamasını ayarlayın.

### Dinamik verinin biçimlendirilmesi

-   Yazı tipini, rengi ve boyutu tasarımınıza uyacak şekilde değiştirin.
-   Verinin şablon düzeninize sorunsuz oturması için ızgarayı ayarlayın.

### Otomatik yenileme

-   Veri, Google Drive API üzerinden genellikle saniyeler ile dakikalar içinde güncellenir.
-   Hemen yenilemek için şablon içindeki **Refresh Data** düğmesine tıklayın.
    Not: Elle yenileme dakikada bir kezle sınırlıdır.

### Kullanım örnekleri

Bu tümleştirme şunlar için elverişlidir:

-   Günün menüsünü gösteren restoran panoları
-   Personel ve nöbet listeleri
-   Etkinlik programları
-   Sık güncellenen veri içeren her şablon

Böylece ekranlarınız güncel kalır ve elle güncelleme yükünden kurtulursunuz.
