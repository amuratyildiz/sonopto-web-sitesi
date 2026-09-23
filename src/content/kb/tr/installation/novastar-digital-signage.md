---
title: 'NovaStar LED Ekranlara Kurulum'
urlSlug: 'novastar-led-ekran-kurulumu'
summary: 'NovaStar Taurus ve TU serisi oynatıcılarda ViPlex Express ile web sayfası bileşeni kurma, eşleştirme ve ekran kimliğini kalıcı hâle getirme.'
category: 'installation'
order: 14
source: 'installation/novastar-digital-signage'
sourceHash: 'a7034e3212fd49d7'
importedAt: '2026-09-23'
---
Bu sayfa, NovaStar LED ekranlarda dijital tabela kurulumunu anlatır. Yöntem, NovaStar çoklu ortam oynatıcısının kendi web sayfası bileşenini kullanarak [web oynatıcıyı](/iletisim/) doğrudan yüklemeye dayanır.

Kurulum bittikten sonra içerik panelden yönetilir. Olağan içerik güncellemeleri için ViPlex Express'i tekrar açmanız gerekmez.

## NovaStar LED ekranlara kurulum

Kurulum için gerekenler:

-   LED ekrana bağlı bir NovaStar çoklu ortam oynatıcısı
-   Oynatıcıda internet bağlantısı (Ethernet, Wi-Fi ya da 4G)
-   Windows bilgisayarda kurulu ViPlex Express

## Desteklenen NovaStar donanımı

NovaStar Taurus ve TU serisi çoklu ortam oynatıcıları desteklenir: TB20 Plus, TB30, TB40, TB50, TB60, TU15 Pro, TU20 Pro, TU40 Pro, TU4K Pro ve benzeri modeller.

Çoklu ortam oynatıcısı olmayan standart NovaStar gönderici kartları desteklenmez.

Başlamadan önce: NovaStar oynatıcının ağa alınması, bağlantısı ve ViPlex Express'te bulunması için önce NovaStar'ın resmî kurulum belgelerini izleyin.

### Adım 1: Çalma listesi oluşturup web sayfası bileşeni ekleyin

1.  Ekranınızı seçip **Playlist** sekmesini açın.

<img src="/kb/installation/05-playlist-tab.webp" alt="ViPlex Express çalma listesi sekmesi" loading="lazy" decoding="async">

2.  Bir çalma listesi oluşturup çözünürlüğü LED ekranınızla aynı yapın.
3.  **Widget** bölümünü açıp bir **Web Page** bileşeni ekleyin.

<img src="/kb/installation/06-editor-widget-tabs.webp" alt="ViPlex Express bileşen sekmesi" loading="lazy" decoding="async">

4.  Bileşeni tam ekran olacak şekilde boyutlandırın.
5.  **X=0** ve **Y=0** değerlerini girin, **W/H** değerlerini tam çözünürlüğünüz yapın.
6.  Web sayfası özelliklerine aşağıdaki adresi girin:

```
https://dsplayer.io
```

7.  Tarayıcının sürekli yenilenmemesi için web sayfası oynatma süresini **1 ya da 2 saat** yapın.

Bu ViPlex çalma listesinde tek bir web sayfası yeterlidir. Çalma listesi planlaması ve döngüsü buluttaki panelden yönetilir.

### Adım 2: Ekrana yayınlayın

1.  **Save**, ardından **Publish** düğmesine tıklayın.

<img src="/kb/installation/07-publish-solution.webp" alt="ViPlex Express yayınlama ekranı" loading="lazy" decoding="async">

2.  Hedef ekranı seçip yayınlamayı onaylayın.
3.  Yayından sonra LED ekranda bir eşleştirme kodu görünür.

### Adım 3: Ekranı hesabınızla eşleştirin

1.  Panele giriş yapın.
2.  **Screens** bölümüne gidip **Add Screen** düğmesine tıklayın.
3.  LED ekranda görünen eşleştirme kodunu girin.
4.  Bir çalma listesi ya da program atayıp yayını başlatın.

Ayrıntılar için: [Ekranlar](/destek/ekranlar/)

### Adım 4: Ekran kimliğini kalıcı hâle getirin

Bu adım, NovaStar cihazının atanmış ekran kimliğini kalıcı olarak korumasını sağlar. Bazı NovaStar cihazları yeniden başlatma veya donanım yazılımı güncellemesi sırasında tarayıcı depolamasını temizler; bu da ekranın hesabınızla bağlantısını koparır.

Ekran kimliğini kalıcı hâle getirmek bu sorunu önler.

1.  Panelde **Screens** bölümüne gidin.
2.  Yeni eşleştirdiğiniz NovaStar ekranına tıklayın.
3.  **Details** bölümünü açın.

**Details** altında **Device ID** değerini bulacaksınız.

<img src="/kb/installation/device-id.webp" alt="NovaStar cihaz kimliği" loading="lazy" decoding="async">

**Device ID** değerini kopyalayın, ardından 1. adımdaki web sayfası adresini aşağıdaki biçimde yeniden yayınlayın:

```
https://dsplayer.io?id=XYZ
```

**XYZ** yerine kendi **Device ID** değerinizi yazın.

Güncellenmiş adres yayınlandıktan sonra cihaz, tarayıcı depolaması temizlense bile aynı ekran kimliğini kullanmaya devam eder.

## Sorun giderme

### Web sayfası açılmıyor

-   ViPlex Monitor & Control üzerinden internet bağlantısını doğrulayın.
-   Tarih, saat ve saat dilimini (NTP) doğrulayın.
-   Adresin tam olarak `https://dsplayer.io` olduğunu doğrulayın.

### Ekran boş ya da beyaz

-   Oynatıcının donanım yazılımını güncelleyip çalma listesini yeniden yayınlayın.

### Eşleştirme kodu görünmüyor

-   Oynatıcıyı yeniden başlatıp yeniden yayınlayın.

### ViPlex oynatıcıyı bulamıyor

-   Ağ eşleştirmesi için NovaStar'ın resmî bağlantı ve keşif kılavuzunu izleyin.
-   Bilgisayarın ve oynatıcının aynı ağda olduğundan emin olun.
-   Oynatıcının hotspot modunu deneyin.
-   IP adresiyle elle ekleyin (`192.168.0.10`).

### Eşleştirmeden sonra içerik oynamıyor

-   Çalma listesinin ekrana atandığını doğrulayın.
-   Ekran lisansının etkin olduğunu doğrulayın.

##### İpucu:

Kurulumdan sonra içerik güncellemelerini panelden yapın. ViPlex Express yalnızca ilk kurulum için gereklidir.
