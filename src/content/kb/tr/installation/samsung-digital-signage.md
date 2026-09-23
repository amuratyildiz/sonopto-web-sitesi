---
title: 'Samsung Ekranlara Kurulum'
urlSlug: 'samsung-kurulumu'
summary: 'Samsung SSSP ticari ekranlarda Tizen 4.0, 6.5 ve 7 için URL ile veya USB bellekten kurulum, MagicInfo yerine URL Launcher kullanma ve sunucuya bağlanamama hatasının çözümü.'
category: 'installation'
order: 17
source: 'installation/samsung-digital-signage'
sourceHash: 'bbe678add729fa6f'
importedAt: '2026-09-23'
---
### Samsung SSSP ticari ekran desteği

-   Tizen 4.0 üzerinde SSSP 6.0 ya da Tizen 6.5 ve üzerinde SSSP 10

_[Desteklenen modellerin tam listesine](#desteklenen-sssp-modelleri) bakabilirsiniz._

### Bu sayfada

-   [Tizen 4.0](#tizen-40)
-   [Tizen 6.5](#tizen-65)
-   [Tizen 7](#tizen-7)
-   [USB bellekten kurulum](#usb-bellekten-kurulum)
-   [MagicInfo yerine URL Launcher kullanma](#magicinfo-yerine-url-launcher-kullanma)
-   [Sunucuya bağlanılamıyor hatasının çözümü](#sunucuya-bağlanılamıyor-hatasının-çözümü)
-   [Desteklenen SSSP modelleri](#desteklenen-sssp-modelleri)

* * *

## Tizen 4.0

#### Seçenek 1: kullanımda olan Samsung SSSP ekran

-   Saatin doğru ayarlandığından emin olun. **Menu** > **System** > **Time**.
-   **Secured Protocol** ayarının açık olduğundan emin olun. **Menu** > **System** > **Security**.

<img src="/kb/installation/secure_protocol.webp" alt="Güvenli protokol ayarı" loading="lazy" decoding="async">

-   Kumandada **HOME** düğmesine basın.
-   **URL Launcher Settings** bölümüne gidin.

<img src="/kb/installation/sssp-url-launcher-icon.webp" alt="URL Launcher simgesi" loading="lazy" decoding="async">

-   Daha önce kurulmuş uygulama varsa kaldırın.

-   Uygulamanın adresini yazın:

    ```
    https://app-ds.net/ts
    ```

-   **Done** düğmesine basın.


<img src="/kb/installation/sssp-url-no-brand-launcher-settings.webp" alt="URL Launcher adres girişi" loading="lazy" decoding="async">

-   Uygulama kuruldu; kendiliğinden başlayacaktır.

<img src="/kb/installation/sssp-nobrand-urllauncher.webp" alt="URL Launcher ekranı" loading="lazy" decoding="async">

-   Uygulama açıldığında ekranda eşleştirme kodu görünür.
-   Panele gidip ekranı hesabınıza ekleyin.

<img src="/kb/installation/sssp-hash-code.webp" alt="Ekranda görünen eşleştirme kodu" loading="lazy" decoding="async">

#### Seçenek 2: sıfır ya da fabrika ayarlarına döndürülmüş ekran

Sıfır cihaz ilk kurulum sihirbazıyla açılır. Aşağıdaki adımları izleyin:

-   Kurulum türü ekranında **Basic Setup** seçeneğini seçin.

<img src="/kb/installation/sssp-basic-setup.webp" alt="Temel kurulum seçeneği" loading="lazy" decoding="async">

-   Bir dil seçin.

<img src="/kb/installation/sssp-language.webp" alt="Dil seçimi" loading="lazy" decoding="async">

-   Ekran yönünü seçin (yatay ya da dikey).

_Ekranı hesabınıza ekledikten sonra yönü panelden uzaktan da değiştirebilirsiniz._

<img src="/kb/installation/sssp-orientation.webp" alt="Ekran yönü seçimi" loading="lazy" decoding="async">

-   **Auto Power off** ayarını kapatın.

<img src="/kb/installation/sssp-autopoweroff.webp" alt="Otomatik kapanma ayarı" loading="lazy" decoding="async">

-   Ağ bağlantınızı yapın (kablolu ya da kablosuz).

<img src="/kb/installation/sssp-network.webp" alt="Ağ bağlantısı ayarı" loading="lazy" decoding="async">

-   **Play Via** ekranında **URL Launcher** seçeneğini seçin.

-   Oynatıcı uygulamasının adresini yazın:

    ```
    https://app-ds.net/ts
    ```


<img src="/kb/installation/sssp-play-via-url-launcher.webp" alt="Play Via ayarı" loading="lazy" decoding="async">

-   **Done** düğmesine basın.

<img src="/kb/installation/sssp-url-no-brand-launcher-settings.webp" alt="URL Launcher adres girişi" loading="lazy" decoding="async">

-   **Connect to RM Server** adımında **Skip** seçeneğini seçin.

<img src="/kb/installation/sssp-rm-server.webp" alt="RM Server adımını atlama" loading="lazy" decoding="async">

-   Tarih ve saati doğru ayarlayın.

<img src="/kb/installation/sssp-clock.webp" alt="Tarih ve saat ayarı" loading="lazy" decoding="async">

-   Kurulum tamamlandı; oynatıcı kullanıma hazır.

<img src="/kb/installation/sssp-setup-done.webp" alt="Kurulum tamamlandı ekranı" loading="lazy" decoding="async">

-   Uygulama kuruldu; kendiliğinden başlayacaktır.

<img src="/kb/installation/sssp-nobrand-urllauncher.webp" alt="URL Launcher ekranı" loading="lazy" decoding="async">

-   Uygulama açıldığında ekranda eşleştirme kodu görünür.

-   Panele gidip ekranı hesabınıza ekleyin.


<img src="/kb/installation/sssp-hash-code.webp" alt="Ekranda görünen eşleştirme kodu" loading="lazy" decoding="async">

* * *

## Tizen 6.5

#### Seçenek 1: kullanımda olan Samsung SSSP ekran

-   Kumandada **HOME** düğmesine basın.

-   Menüden **Custom App** seçeneğini seçin.

-   Daha önce bir uygulama kurulduysa **App Management** yanında görünür.


<img src="/kb/installation/sssp-65-14-no-brand.webp" alt="Önceden kurulmuş uygulama" loading="lazy" decoding="async">

-   Uygulamayı seçip **Uninstall** düğmesine tıklayın.

    <img src="/kb/installation/sssp-65-15-no-brand.webp" alt="Uygulamayı kaldırma" loading="lazy" decoding="async">

-   **Install Custom App** seçeneğini seçin.

-   Oynatıcı uygulamasının adresini yazın:

    ```
    https://app-ds.net/ts
    ```


<img src="/kb/installation/sssp-65-16-no-brand.webp" alt="Özel uygulama adresi girişi" loading="lazy" decoding="async">

-   Uygulama inip kendiliğinden başlayacaktır.

    <img src="/kb/installation/sssp-65-13.webp" alt="Kurulum sürüyor" loading="lazy" decoding="async">

-   Uygulama açıldığında ekranda eşleştirme kodu görünür.

-   Panele gidip ekranı hesabınıza ekleyin.


<img src="/kb/installation/sssp-hash-code.webp" alt="Ekranda görünen eşleştirme kodu" loading="lazy" decoding="async">

#### Seçenek 2: sıfır ya da fabrika ayarlarına döndürülmüş ekran

-   Karşılama ekranında dilinizi seçin.

    <img src="/kb/installation/sssp-65-1.webp" alt="Karşılama ekranı" loading="lazy" decoding="async">

-   Ağ bağlantınızı yapın (kablolu ya da kablosuz).

    <img src="/kb/installation/sssp-65-2.webp" alt="Ağ bağlantısı ayarı" loading="lazy" decoding="async">

-   Gizlilik bildirimini okuyup kabul edin.

    <img src="/kb/installation/sssp-65-3.webp" alt="Gizlilik bildirimi" loading="lazy" decoding="async">

-   Kurulum türünde **Basic Setup** seçeneğini seçin.

    <img src="/kb/installation/sssp-65-4.webp" alt="Temel kurulum seçeneği" loading="lazy" decoding="async">

-   Ekran yönünü seçin (yatay ya da dikey). _Ekranı hesabınıza ekledikten sonra yönü panelden uzaktan da değiştirebilirsiniz._

    <img src="/kb/installation/sssp-65-5.webp" alt="Ekran yönü seçimi" loading="lazy" decoding="async">

-   **Player Selection** altında **Custom App** seçeneğini seçin.

    <img src="/kb/installation/sssp-65-6.webp" alt="Oynatıcı seçimi" loading="lazy" decoding="async">

-   Oynatıcı uygulamasının adresini yazın:

    ```
    https://app-ds.net/ts
    ```


<img src="/kb/installation/sssp-65-7-nobrand.webp" alt="Uygulama adresi girişi" loading="lazy" decoding="async">

-   RM Server kurulumunda **Skip** seçeneğini seçin.

    <img src="/kb/installation/sssp-65-8.webp" alt="RM Server adımını atlama" loading="lazy" decoding="async">

-   **Auto Power Off** ayarını kapatın.

    <img src="/kb/installation/sssp-65-9.webp" alt="Otomatik kapanma ayarı" loading="lazy" decoding="async">

-   Tarih ve saati doğru ayarlayın.

    <img src="/kb/installation/sssp-65-10.webp" alt="Tarih ve saat ayarı" loading="lazy" decoding="async">

-   Bir PIN belirleyin.

    <img src="/kb/installation/sssp-65-11.webp" alt="PIN belirleme" loading="lazy" decoding="async">

-   Kumandada **MENU** düğmesine basın.

-   **Custom App** seçeneğini seçin.

    <img src="/kb/installation/sssp-65-12.webp" alt="Özel uygulama menüsü" loading="lazy" decoding="async">

-   Uygulama inip kendiliğinden başlayacaktır.

    <img src="/kb/installation/sssp-65-13.webp" alt="Kurulum sürüyor" loading="lazy" decoding="async">

-   Panele gidip ekranı hesabınıza ekleyin.


<img src="/kb/installation/sssp-hash-code.webp" alt="Ekranda görünen eşleştirme kodu" loading="lazy" decoding="async">

* * *

## USB bellekten kurulum

### USB belleği bilgisayarda hazırlayın

-   USB belleği bilgisayara takın.

-   Kurulum dosyasını **USB belleğin kök dizinine** indirmek için [bizimle iletişime geçin](/iletisim/)

-   Dosyayı USB belleğin kök dizinine açın (USB içinde ayrıca klasör oluşturmayın). USB sürücü F:/ ise klasör şöyle olmalıdır: F:/SSSP

-   Açılan _SSSP_ klasörünün içinde iki dosya bulunur (DigitalSignage.wgt ve sssp\_config.xml):

    <img src="/kb/installation/sssp-usb-files-nobrand.webp" alt="USB bellekteki kurulum dosyaları" loading="lazy" decoding="async">


### SSSP6 – Tizen 4.0 ekranda USB kurulumu

-   USB belleği Samsung ekrana takın.

-   Kumandada **HOME** düğmesine basın.

-   **URL Launcher** seçeneğini seçin.

-   **Install From USB Device** seçeneğini seçin.

    <img src="/kb/installation/sssp-usb-install-from-4.0.webp" alt="USB üzerinden kurulum seçeneği" loading="lazy" decoding="async">

-   PIN kodunu girin.

    <img src="/kb/installation/sssp-usb-pin-4.0.webp" alt="PIN girişi" loading="lazy" decoding="async">

-   Oynatıcı kendiliğinden inip kurulacaktır.

-   İndirme bittiğinde uygulama açılır.

    <img src="/kb/installation/sssp-url-launcher4.0.webp" alt="Kurulum tamamlandı" loading="lazy" decoding="async">

-   Uygulama açıldığında ekranda eşleştirme kodu görünür.

-   Panele gidip ekranı hesabınıza ekleyin.


<img src="/kb/installation/sssp-hash-code.webp" alt="Ekranda görünen eşleştirme kodu" loading="lazy" decoding="async">

### SSSP10 – Tizen 6.5 ekranda USB kurulumu

-   USB belleği Samsung ekrana takın.

-   Kumandada **HOME** düğmesine basın.

-   **App Management** seçeneğini seçin.

    <img src="/kb/installation/sssp-usb-app-management6.5.webp" alt="Uygulama yönetimi menüsü" loading="lazy" decoding="async">

-   **Install from USB Device** seçeneğini seçin.

    <img src="/kb/installation/sssp-usb-install-from-6.5.webp" alt="USB üzerinden kurulum seçeneği" loading="lazy" decoding="async">

-   İstenirse PIN kodunu girin.

-   Oynatıcı kendiliğinden inip kurulacaktır.

-   İndirme bittiğinde uygulama açılır.

-   Uygulama açıldığında ekranda eşleştirme kodu görünür.

-   Panele gidip ekranı hesabınıza ekleyin.


<img src="/kb/installation/sssp-hash-code.webp" alt="Ekranda görünen eşleştirme kodu" loading="lazy" decoding="async">

* * *

## Tizen 7

1.  Ekranın **Custom App** ile oynatacak şekilde ayarlandığından emin olun: **Menu > System > Play Via > Custom App**

<img src="/kb/installation/custom-app.webp" alt="Play Via menüsü" loading="lazy" decoding="async">

2.  Uygulamayı **Features > AppManagement** yolundan kurun. Bu seçenek görünmüyorsa ekranı HDMI kaynağına alıp tekrar deneyin.

<img src="/kb/installation/app-managment.webp" alt="Uygulama yönetimi menüsü" loading="lazy" decoding="async">

3.  **Install Custom App** seçeneğine tıklayıp `https://app-ds.net/ts7` adresini girin ve **Go** düğmesine basın.

<img src="/kb/installation/ts7.webp" alt="Özel uygulama kurulum ekranı" loading="lazy" decoding="async">

Uygulama inip kurulacak ve kendiliğinden başlayacaktır.

* * *

## MagicInfo yerine URL Launcher kullanma

Samsung ekranınızın ana menüsünde **URL Launcher** ya da **App Management** görünmüyorsa **Source** ayarı büyük olasılıkla **MagicInfo** olarak duruyordur. Bunu **URL Launcher** olarak değiştirmeniz gerekir.

1.  Kumandadaki **Menu** düğmesine basıp cihaz menüsünü açın.
2.  **System** bölümünü seçin.

<img src="/kb/installation/url-laucher-system.webp" alt="Sistem menüsü" loading="lazy" decoding="async">

3.  Menünün en altına inip **Play Via** seçeneğini seçin.
4.  **URL Launcher** seçeneğini seçin. Cihazda kurulu bir uygulama varsa seçenek **URL Launcher** yerine **Custom App** olarak görünebilir.

<img src="/kb/installation/url-launcher-playvia.webp" alt="Play Via menüsü" loading="lazy" decoding="async">

5.  **Home** düğmesine basıp ana menüden **URL Launcher** seçeneğini seçin.

* * *

## Sunucuya bağlanılamıyor hatasının çözümü

Samsung Tizen cihazınızda **“Unable to connect to the server, please try again later”** hatasını alıyorsanız aşağıdaki adımları izleyin.

**1\. Tarih ve saat ayarları**

Yanlış tarih ve saat sunucuyla haberleşmeyi engeller ve uygulamanın inmesini önler.

-   Denetim: **Menu > System > Date & Time** yolundan tarih ve saatin doğru olduğunu doğrulayın.

-   Tarih ve saati **Auto** yapın ya da elle doğru yerel saate ayarlayın.


**2\. Ağ erişimi**

Cihazın kararlı bir internet bağlantısına bağlı olduğundan emin olun. Zayıf ya da kesintili bağlantı sorun çıkarır.

-   Denetim: kumandadan menüyü açın > **Network** > **Network Status** yolundan bağlantının başarılı olup olmadığına bakın.

-   Ağ güvenlik duvarı ayarlarınızı denetleyin. Kısıtlama varsa uygulamanın sunucuya bağlanması engellenebilir.

-   Uygulama yine inmiyorsa mobil bir erişim noktası (hotspot) deneyin; bu ağlar genellikle daha az kısıtlıdır.


**3\. URL Launcher**

Girdiğiniz adresin doğru olduğundan emin olun. Adres büyük/küçük harfe duyarlıdır; kurulumun çalışması için yalnızca küçük harf kullanılmalıdır.

Bu adımlar sorunu çözmezse [bize ulaşın](/iletisim/).

* * *

### Desteklenen SSSP modelleri

##### SSSP10 – Tizen 2022 ve sonrası

-   QMC serisi
-   QBB serisi (temel): QB43B, QB50B, QB55B, QB65B, QB75B.
-   QMB serisi (orta): QM43B, QM50B, QM55B, QM65B, QM75B.
-   QHB serisi (üst): QH43B, QH50B, QH55B, QH65B, QH75B.

##### SSSP6 – Tizen 2018 ve öncesi

-   QMR-AN: QM32R-AN
-   QB (temel): QBR: QB13R, QB24R, QB43R, QB49R, QB50R, QB55R, QB65R, QB75R, QB85R, QB98R. QBR-B: QB24R-B, QB85R-B. QBN: QB49N, QB55N, QB65N, QB75N, QE82N. QBT: QB98T-B.
-   QM (orta): QMR: QM32R, QM43R, QM49R, QM50R, QM55R, QM65R, QM75R, QM85R. QMR-A: QM32R-A, QM43R-A, QM49R-A, QM50R-A, QM55R-A, QM65R-A, QM75R-A. QMR-B: QM32R-B, QM85R-B. QMN: QM43N, QM49N, QM55N, QM65N, QM75N, QM85N, QM98N. QMT: QM98T. QMT-B: QM98T-B.
-   QH (üst): QHR: QH43R, QH50R, QH55R, QH65R, QH75R. Vitrin ekranları (OM): OMN: OM46N, OM55N. OMN-D: OM46N-D, OM55N-D.
-   OH (dış mekân): OHF: OH55F. OHN: OH85N, OH85N-SK, OH85N-DK, OH85N-S.
