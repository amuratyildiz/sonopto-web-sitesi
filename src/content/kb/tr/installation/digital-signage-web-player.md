---
title: 'Web Oynatıcı'
urlSlug: 'web-oynatici'
summary: 'Tarayıcı üzerinden çalışan oynatıcıyı kullanma, ekran kimliğini kalıcı hâle getirme ve Chrome otomatik oynatma kısıtını aşma.'
category: 'installation'
order: 9
source: 'installation/digital-signage-web-player'
sourceHash: '609af3a052a4c870'
importedAt: '2026-09-23'
---
### Tarayıcı tabanlı oynatıcı nasıl kullanılır?

-   Bir tarayıcı açın, tercihen Chrome ya da Chromium.
-   Web oynatıcı adresi için [bizimle iletişime geçin](/iletisim/).
-   Panele gidip tarayıcıda görünen kodu kullanarak web oynatıcıyı hesabınıza tanımlayın.
-   Ekranı hesabınıza ekleme adımları için [Ekranlar](/destek/ekranlar/) bölümüne bakın.

### Ekran kimliğini (Player ID) kalıcı hâle getirme

Bazı gömülü cihazlar yeniden başlatma, elektrik kesintisi, yazılım güncellemesi veya bakım sırasında tarayıcı depolamasını temizler. Bu olduğunda oynatıcı kendisine atanmış ekran kimliğini kaybeder ve hesabınızla bağlantısı kopar.

Ekran kimliğini kalıcı hâle getirmek, cihazın her seferinde aynı kimlikle bağlanmasını sağlar; böylece yinelenen ekran kayıtları oluşmaz ve cihazı yeniden eşleştirmeniz gerekmez.

1.  Hesabınıza giriş yapıp **Screens** bölümüne gidin.
2.  Yeni eşleştirdiğiniz web oynatıcı ekranını açın.
3.  **Details** bölümüne tıklayın.

**Details** altında **Device ID** değerini bulacaksınız.

<img src="/kb/installation/device-id.webp" alt="Cihaz kimliği ekranı" loading="lazy" decoding="async">

**Device ID** değerini kopyalayın, ardından web sayfası adresini aşağıdaki biçimde güncelleyip yeniden yayınlayın:

```
https://dsplayer.io?id=XYZ
```

`XYZ` yerine kendi **Device ID** değerinizi yazın.

Güncellenmiş adresi yayınladıktan sonra cihaz, tarayıcı önbelleği veya yerel depolama temizlense bile her zaman aynı ekran kimliğiyle bağlanır.

## Önemli: Chrome otomatik oynatma politikası

### Chrome otomatik oynatma politikası nedir?

Chrome gibi güncel tarayıcılar, kullanıcı sayfayla etkileşime geçmediği sürece (tıklama, dokunma, tuşa basma) sesli videoların kendiliğinden oynatılmasını engeller. Bu, beklenmedik ses çıkmasını önlemek için tasarlanmıştır — ancak videolarınız sesliyse yayını etkileyebilir.

### Nasıl aşılır

Videoların kısıtlama olmadan oynatılması için:

#### Seçenek 1: Videoyu sessize alın

1.  Panele gidin
2.  Çalma listesindeki video öğesini düzenleyin
3.  **Mute** kutusunu işaretleyin
4.  **Publish** düğmesine tıklayın

Sessiz videolar, hiçbir kullanıcı etkileşimi gerekmeden tüm tarayıcılarda kendiliğinden oynatılabilir.

#### Seçenek 2: Chrome'da otomatik oynatma kısıtını kapatın

Kiosk ya da kontrollü ortamlarda kısıtlamayı devre dışı bırakabilirsiniz:

**Yöntem 1: Chrome'u özel bir parametreyle başlatın**

-   Windows:

    ```bash
    chrome.exe --autoplay-policy=no-user-gesture-required
    ```

-   macOS:

    ```bash
    /Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --autoplay-policy=no-user-gesture-required
    ```

-   Linux:

    ```bash
    google-chrome --autoplay-policy=no-user-gesture-required
    ```

**Yöntem 2: Chrome deneysel bayrağı** (yeni sürümlerde çalışmayabilir)

-   `chrome://flags/#autoplay-policy` adresini açın
-   **No user gesture is required** olarak ayarlayın
-   Tarayıcıyı yeniden başlatın

**_Not: Bu yöntem geliştirme ve kiosk kullanımı için uygundur. Halka açık kullanımda önerilen yol videoyu sessize almaktır._**
