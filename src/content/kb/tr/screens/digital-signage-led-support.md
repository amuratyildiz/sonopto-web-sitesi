---
title: 'LED Ekran Desteği'
urlSlug: 'led-ekran-destegi'
summary: 'LED ekran ve bilbordlarda yayın: içerik alanı çözünürlüğünü bulma, katmanı bu ölçüye getirme ve çalma listesini LED ekrana atama.'
category: 'screens'
order: 5
source: 'screens/digital-signage-led-support'
sourceHash: 'cae1e45e11437797'
importedAt: '2026-09-23'
---
**ÖNEMLİ:** Aşağıdaki adımlara geçmeden önce oynatıcınızı kurmuş olmalısınız. LED oynatıcı kurulumu, olağan oynatıcı kurulumuyla aynıdır. Ayrıntılar için [Kurulum](/destek/kurulum/) bölümüne gidip elinizdeki oynatıcı türünü seçin.

Panelimizi LED ekranlarda ve bilbordlarda içerik yayınlamak için kullanabilirsiniz. En iyi sonuç için doğru hesap ve ayarlar gerekir.

#### Adım 1: İçerik alanı çözünürlüğünü belirleyin

LED ekranların çözünürlüğü çoğu zaman beklenen giriş çözünürlüğünden düşüktür; özellikle büyük ekranlarda. Genellikle girişin yalnızca sol üst köşesi içerik için kullanılır. Panelin LED ekranı doğru yönetebilmesi için bu çözünürlüğü öğrenip ayarları ona göre hesaplamak gerekir.

İçerik alanı çözünürlüğünü LED tedarikçinizden öğrenin. Aşağıdaki örnekte çözünürlüğü 320x320 piksel varsayıyoruz.

<img src="/kb/screens/led-layout.webp" alt="LED içerik alanı yerleşimi" loading="lazy" decoding="async">

#### Adım 2: Çalma listesi oluşturun

Bir çalma listesi oluşturup sonradan kolayca bulabileceğiniz bir ad verin.

<img src="/kb/screens/create_led_playlist.webp" alt="LED çalma listesi oluşturma" loading="lazy" decoding="async">

Birden çok katmanı olan bir düzen seçin; örneğin 2. düzen.

<img src="/kb/screens/led-playlist-choose-layout.webp" alt="Düzen seçimi" loading="lazy" decoding="async">

#### Adım 3: Düzeni düzenleyin

Katmanları LED çözünürlüğüne uydurmak için **Edit Layout** düğmesine tıklayın.

<img src="/kb/screens/led-playlist-edit-layout.webp" alt="Düzeni düzenleme" loading="lazy" decoding="async">

Katmanı 320x320 piksele getirin ve aşağıdaki görselde olduğu gibi x=0, y=0 değerlerini vererek sol üst köşeden başlamasını sağlayın.

Bu örnekte kullanılmayacağı için ikinci katmanı silin.

<img src="/kb/screens/led-playlist-set-layers.webp" alt="Katman ölçülerini ayarlama" loading="lazy" decoding="async">

Son düzen aşağıdaki gibi görünmelidir.

<img src="/kb/screens/led-playlist-layer.webp" alt="LED katmanı" loading="lazy" decoding="async">

**Back** düğmesine tıklayın, sonra içerik yüklemek için ayarladığınız katmana tıklayın.

<img src="/kb/screens/led-playlist-select-layer.webp" alt="Katman seçimi" loading="lazy" decoding="async">

#### Adım 4: İçerik yükleyin

İçerik yüklemek için **Upload media** seçeneğine tıklayıp dosyalarınızın kaynağını seçin.

Hazır şablonlardan yararlanmak için Canva uygulamasını da kullanabilirsiniz.

<img src="/kb/screens/led-playlist-upload-content.webp" alt="İçerik yükleme" loading="lazy" decoding="async">

İçeriğinizi yükledikten sonra aşağıdakine benzer bir görünüm elde edersiniz.

<img src="/kb/screens/led-playlist-content.webp" alt="Çalma listesi içeriği" loading="lazy" decoding="async">

#### Adım 5: Çalma listesini LED ekrana atayın

Çalma listeniz hazır olduğuna göre ekranlar sayfasına gidip içerik kaynağına tıklayın. Oluşturduğunuz listeyi seçip LED ekranınıza atayın.

<img src="/kb/screens/led-playlist-media-source.webp" alt="Ekranın içerik kaynağını seçme" loading="lazy" decoding="async">

İçeriği ekrana göndermek için **Publish** düğmesine tıkladığınızdan emin olun; içeriğiniz saniyeler içinde LED ekranda oynamaya başlar.

<img src="/kb/screens/led-playlist-publish.webp" alt="Değişiklikleri ekrana yayınlama" loading="lazy" decoding="async">

LED ekranınızda birden çok içerik göstermek isterseniz, aşağıdaki örnekteki gibi iki katman ekleyerek ekranı bölgelere ayırabilirsiniz. Tüm LED içeriğiniz tek bir denetleyicide toplandığı hâlde farklı içerikler göstermeniz gerekiyorsa bu işinize yarar.

<img src="/kb/screens/led-playlist-2-layers.webp" alt="İki katmanlı LED yerleşimi" loading="lazy" decoding="async">
