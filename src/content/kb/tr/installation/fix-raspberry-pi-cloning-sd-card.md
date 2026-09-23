---
title: 'SD Kart Klonlandıktan Sonra Raspberry Pi Düzeltmesi'
urlSlug: 'raspberry-pi-sd-kart-klonlama-sorunu'
summary: 'Klonlanan Raspberry Pi oynatıcıların aynı ekran kimliğini paylaşmasını önleme; her cihazın kendi kimliğini üretmesini sağlama.'
category: 'installation'
order: 10
source: 'installation/fix-raspberry-pi-cloning-sd-card'
sourceHash: '5633a4389caeae48'
importedAt: '2026-09-23'
---
Yapılandırılmış bir Raspberry Pi'nin SD kartını klonlamak zaman kazandırır — ancak doğru yapılmazsa tüm oynatıcılar **aynı ekran kimliğini** paylaşır ve panelde **tek cihaz** olarak görünürler. Bu da oynatıcıların düzgün çalışmamasına yol açar.

Her klonlanan Raspberry Pi'nin kendi benzersiz ekran kimliğini üretmesi ve bağımsız çalışması için aşağıdaki adımları izleyin.

### Klonlanan Raspberry Pi oynatıcılar için adım adım çözüm

1.  **Raspberry Pi'yi hazırlayın**

    SD kartı klonlamadan önce cihazın doğru kurulduğundan emin olun:
    [Raspberry Pi üzerine kurulum](/destek/kurulum/raspberry-pi-kurulumu/)

2.  **Oynatıcıyı hesabınıza ekleyin**

    -   Raspberry Pi'yi açın ve hesabınıza bağlayın.
    -   Cihazın en güncel yazılım sürümünü indirdiğinden emin olun.
    -   Hesaba tanımladıktan sonra güncellemenin başlaması için cihazı **yeniden başlatmanız** gerekebilir.
    -   Devam etmeden önce **yazılım sürümünün 215 veya üzeri** olduğunu doğrulayın.

    <img src="/kb/installation/player-rpi-version.webp" alt="Raspberry Pi yazılım sürümü" loading="lazy" decoding="async">

3.  **`conf.txt` dosyasını silin**

    -   Yazılım güncellendikten sonra terminali açıp uygulama dizinine gidin:

        ```bash
        cd ~/digital-signage
        ```

    -   `conf.txt` adında bir dosya varsa silin:

        ```bash
        rm conf.txt
        ```

    -   Bu dosya mevcut ekran kimliğini tutar. Silmek, klonlanan oynatıcının ilk açılışta yeni bir kimlik üretmesini sağlar.

4.  **Klonlamadan önce kapatın ve temizleyin**

    -   Raspberry Pi'yi kapatın:

        ```bash
        sudo shutdown now
        ```

    -   **Önemli:** Cihazı hesabınızdan silin ve SD kartı klonlamadan **önce** cihazı tekrar **açmayın**.

5.  **SD kartı klonlayın**

    -   Artık SD kartı güvenle klonlayabilirsiniz.
    -   Klonlanan kartla yeni bir Raspberry Pi açıldığında:
        -   `conf.txt` dosyasının olmadığını görür.
        -   **Benzersiz bir ekran kimliği** üretir.
        -   Bu sırada birkaç kez kendiliğinden **yeniden başlayabilir**.

Bu adımlar tamamlandığında her klonlanan Raspberry Pi kendi kimliğiyle bağımsız bir oynatıcı olarak çalışır.
