---
title: 'Raspberry Pi Üzerine Kurulum'
urlSlug: 'raspberry-pi-kurulumu'
summary: 'Raspberry Pi 4 ve 5 için hazır Android imajını SD karta yazdırma ya da Raspberry Pi OS üzerine doğrudan kurulum; Wayland kaynaklı tam ekran sorununun çözümü.'
category: 'installation'
order: 11
source: 'installation/install-digital-signage-raspberry-pi'
sourceHash: 'cf4a5f8b1037c69a'
importedAt: '2026-09-23'
---
## Desteklenen Raspberry Pi modelleri

-   Raspberry Pi 5
-   Raspberry Pi 4
-   Raspberry Pi 4 Model B
-   Raspberry Pi 3 Model A+
-   Raspberry Pi 3 Model B+

* * *

## Raspberry Pi üzerine kurulum

İhtiyacınıza göre iki kurulum yönteminden birini seçebilirsiniz:

[**Seçenek 1: Özel Android 15 imajını yazdırın**](#seçenek-1-özel-android-15-imajını-yazdırın)
Önerilen ve en kolay yol budur. İmaj **Raspberry Pi 4 ve 5** için iyileştirilmiştir, oynatıcı uygulaması önceden kuruludur ve en yüksek performansı sağlar.

[**Seçenek 2: Raspberry Pi OS üzerine kurun**](#seçenek-2-raspberry-pi-os-üzerine-kurun)
Raspberry Pi OS kullanmayı sürdürmek isteyenler uygulamayı doğrudan kurabilir.

Kurulumunuza uygun yöntemi seçip aşağıdaki adımları izleyin.

### Seçenek 1: Özel Android 15 imajını yazdırın

En iyi performans ve kararlılık için özel Android imajını kullanmanızı öneririz.

**Neden özel imaj?**

-   Daha yüksek performans
-   Yalnızca oynatıcı uygulamasına kilitlenmiş özel işletim sistemi
-   Önceden kurulu oynatıcı uygulaması
-   Tüm özelliklerin eksiksiz desteği
-   Raspberry Pi 4 ve 5 için sağlam ve kolay kurulum

#### 1\. İmaj dosyasını indirin

-   Raspberry Pi 4 imaj dosyası: [rpi4-aosp15-ez-v1.img.zip](https://download.cloud-digitalsignage.com/rpi/android/ds-rpi4-aosp15-ez-v1.zip)

-   Raspberry Pi 5 imaj dosyası: [rpi5-aosp15-ez-v1.img.zip](https://download.cloud-digitalsignage.com/rpi/android/ds-rpi5-aosp15-ez-v1.zip)


#### 2\. İmajı SD karta yazdırın

-   Bir microSD kartı (32 GB ve üzeri önerilir) bilgisayarınıza takın.

-   [raspberrypi.com/software](https://www.raspberrypi.com/software/) adresinden Raspberry Pi Imager uygulamasını indirip kurun.

-   Raspberry Pi Imager uygulamasını açın:

    1.  **Choose Device** düğmesine tıklayın.

    <img src="/kb/installation/imager.webp" alt="Raspberry Pi cihaz seçimi" loading="lazy" decoding="async">

    2.  Listeden Raspberry Pi modelinizi seçin.

    <img src="/kb/installation/choose-device.webp" alt="Raspberry Pi model listesi" loading="lazy" decoding="async">

    3.  **Choose OS → Use Custom** yolunu izleyin.

    <img src="/kb/installation/use-custom.webp" alt="Özel işletim sistemi seçimi" loading="lazy" decoding="async">

    4.  İndirdiğiniz imaj dosyasını seçin (Raspberry Pi 5 için Pi 5 imajı).

    5.  **Choose Storage** düğmesine tıklayıp SD kartınızı seçin.


    <img src="/kb/installation/choose-storage-device.webp" alt="Depolama aygıtı seçimi" loading="lazy" decoding="async">

    6.  **Next** düğmesine tıklayın. Imager işletim sistemi özelleştirmesi isterse **NO** diyerek atlayın.

    <img src="/kb/installation/no-customization.webp" alt="İşletim sistemi özelleştirme uyarısı" loading="lazy" decoding="async">

    7.  “Are you sure you want to continue?” uyarısına **YES** yanıtını verin.

    <img src="/kb/installation/continue-yes.webp" alt="Devam onayı" loading="lazy" decoding="async">

    8.  Imager'ın SD karta yazma izni istemesi üzerine **Write** düğmesine tıklayın. Yazma işleminin bitmesini bekleyin; bu birkaç dakika sürebilir.

    <img src="/kb/installation/write-on-storage.webp" alt="Depolama aygıtına yazma" loading="lazy" decoding="async">

    9.  Doğrulama adımını atlamak için **Cancel Verify** düğmesine tıklayın.

    <img src="/kb/installation/cancel-verify.webp" alt="Doğrulamayı iptal etme" loading="lazy" decoding="async">

    10.  “Write Successful” uyarısını gördüğünüzde imaj tamamen yazılmıştır. Artık Raspberry Pi'yi bu SD kartla açabilirsiniz.

    <img src="/kb/installation/write-successful.webp" alt="Yazma başarılı uyarısı" loading="lazy" decoding="async">


#### 3\. Raspberry Pi'yi açın

-   microSD kartı Raspberry Pi'ye takın.
-   Güç, HDMI ekran ve isteğe bağlı USB klavye/fare bağlayın.
-   Cihaz özel Android 15 sistemiyle açılacaktır.

* * *

### Wi-Fi bağlantısı (Android ayarlarını açma)

#### A yolu: klavye ile

1.  Bir USB klavye takın.
2.  **ALT + M** tuşlarına basın.
3.  Varsayılan parolayı girin: **1122**.
4.  **Open Settings** seçeneğini seçin.
5.  **Network & Internet > Wi-Fi** bölümüne gidin.
6.  Wi-Fi ağınıza bağlanın.
7.  Bağlantı kurulduktan sonra oynatıcıyı yeniden başlatın.

#### B yolu: fare ile

1.  Bir USB fare bağlayın.
2.  Ekranın **sol üst köşesine** farenin sol tuşuyla **5 saniye** basılı tutun.
3.  Varsayılan parolayı girin: **1122**.
4.  **Open Settings** seçeneğini seçin.
5.  **Network & Internet > Wi-Fi** bölümüne gidin.
6.  Wi-Fi ağınıza bağlanın.
7.  Bağlantı kurulduktan sonra oynatıcıyı yeniden başlatın.

_İşlem tamam. Raspberry Pi'niz artık özel Android 15 sistemiyle çalışıyor._

* * *

### Seçenek 2: Raspberry Pi OS üzerine kurun

#### Kurulum öncesi

Raspberry Pi'nize masaüstü sürümlü Raspberry Pi OS kurun.

Raspberry Pi OS kurulumuyla ilgili ayrıntılar için:

[Raspberry Pi kurulumu](https://www.raspberrypi.com/documentation/computers/getting-started.html#setting-up-your-raspberry-pi)

-   **Chromium tarayıcısının kurulu olduğundan emin olun.**

-   **Ekran kararmasını kapatın:**

    -   **Adım 1:** Raspberry Pi ana menüsünde **Preferences** altındaki **Raspberry Pi Configuration** seçeneğine tıklayın.

        <img src="/kb/installation/raspberry-pi-configuration.webp" alt="Raspberry Pi yapılandırma ekranı" loading="lazy" decoding="async">


    -   **Adım 2:** **Display** sekmesine tıklayın.

        <img src="/kb/installation/raspberry-pi-display.webp" alt="Raspberry Pi ekran ayarları" loading="lazy" decoding="async">


    -   **Adım 3:** **Screen Blanking** ayarını kapatın.

        <img src="/kb/installation/raspberry-pi-screen-blanking.webp" alt="Ekran kararması ayarı" loading="lazy" decoding="async">


#### Kurulum adımları

-   **Adım 1:** Terminali aşağıdaki gibi açın:

    <img src="/kb/installation/open-terminal-on-raspbian.webp" alt="Raspberry Pi OS üzerinde terminali açma" loading="lazy" decoding="async">

-   **Adım 2:** Aşağıdaki betiği terminale yapıştırın:

    **Raspberry Pi OS (64 bit)** için:

    ```
    /bin/bash -c "$(curl -fsSL https://appds.io/rpi64.sh)"
    ```

    **Raspberry Pi OS (32 bit)** için:

    ```
    /bin/bash -c "$(curl -fsSL https://appds.io/rpi32.sh)"
    ```

    Bu betik ev dizininizde “digital-signage” adında bir klasör oluşturur, oynatıcı dosyasını indirir ve uygulamayı açılışta başlatacak betiği kurar.

-   **Adım 3:** Terminale `reboot` yazarak cihazı yeniden başlatın.

    ```
    reboot
    ```


* * *

## Güncel Raspberry Pi OS'ta uygulamanın başlamaması

Güncel işletim sistemi Wayland masaüstü yöneticisiyle geliyor ve bu, uygulamanın tam ekran başlamasında sorun çıkarıyor. Çözüm, **Wayland** yerine **X11** kullanmaktır.

Terminali açıp aşağıdaki komutu çalıştırın:

```
 sudo raspi-config
```

-   **6 Advanced Options** bölümüne gidin.

<img src="/kb/installation/raspberry-pi-4-software-configuration-1.webp" alt="Raspberry Pi yazılım yapılandırması" loading="lazy" decoding="async">

-   **A6 Wayland** seçeneğini seçin.

<img src="/kb/installation/raspberry-pi-4-software-configuration-2.webp" alt="Wayland seçeneği" loading="lazy" decoding="async">

-   **W1 X11** seçeneğini seçin.

<img src="/kb/installation/raspberry-pi-4-software-configuration-3.webp" alt="X11 seçeneği" loading="lazy" decoding="async">

-   **Ok** düğmesine basın. “Openbox on X11 is active” iletisini gördüğünüzde yine **Ok** düğmesine basın.

-   **Finish** düğmesine basın; yeniden başlatmak isteyip istemediğiniz sorulduğunda **Yes** yanıtını verin.
