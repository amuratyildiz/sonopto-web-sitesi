---
title: 'Linux Cihazlara Kurulum'
urlSlug: 'linux-kurulumu'
summary: 'Ubuntu ve Fedora üzerinde kurulum öncesi hazırlık ve tek komutla oynatıcı kurulumu.'
category: 'installation'
order: 12
source: 'installation/install-digital-signage-linux'
sourceHash: 'b3bfa88e77e5f7ee'
importedAt: '2026-09-23'
---
### Test edildiği dağıtımlar

-   Ubuntu
-   Fedora

### Kurulum öncesi hazırlık

-   Güncel Chrome ya da [Chromium](https://www.chromium.org/Home/) tarayıcısının kurulu olduğundan emin olun.
-   Ekran koruyucuyu kapatın:

1.  **Settings** uygulamasını açın
2.  **Personal** başlığı altındaki **Privacy** bölümüne girin
3.  **Screen Lock** seçeneğini seçin
4.  **Automatic Screen Lock** ayarını **OFF** konumuna getirin

-   Bildirimleri gizleyin:

1.  **Settings** uygulamasını açın
2.  Kenar çubuğundan **Notifications** bölümüne girin
3.  **Do Not Disturb** ayarını açın
4.  **Lock Screen Notifications** ayarını kapatın

-   Ekranın uykuya geçmesini engelleyin:

1.  **Settings** uygulamasını açın
2.  **Power Settings** → **Power Savings Option** yolunu izleyin
3.  **Screen Blank** ayarını **Never** yapın

-   Gereksiz uygulamaları kaldırın: Yayınla çakışmaması için ihtiyaç duyulmayan programları kaldırın.

-   Kurulu uygulamaların otomatik güncellemesini kapatın (yazıcı yazılımları, Adobe Acrobat gibi); yayın sırasında ekranda pencere açmalarını önler.

-   Yayın sırasında otomatik güncelleme bildiriminin çıkmasını engellemek için:

1.  **Software & Updates** uygulamasını açın (ya da terminalde `software-properties-gtk` komutunu çalıştırın).
2.  **Updates** sekmesine gidin.
3.  **Automatically check for updates** kutusunun işaretini kaldırın.
4.  Varsa **Notify me of a new Ubuntu Version** kutusunun işaretini kaldırın.
5.  Uygulamayı kapatın.

Not: Bu ayar Ubuntu'nun güncellemeleri kendiliğinden indirip kurmasını durdurur; sistemi güvenlik ve kararlılık açısından daha savunmasız bırakabilir.

### Kurulum adımları

-   **Adım 1:** Terminali açın

-   **Adım 2:** Aşağıdaki komutu terminale yapıştırın:

    **64 bit için:**

    ```
    /bin/bash -c "$(curl -fsSL https://appds.io/linux/64.sh)"
    ```

    Bu komut, ana dizininizde `digital-signage` adında bir klasör oluşturur, oynatıcıyı indirir ve açılışta başlaması için gerekli betiği kurar.

-   **Adım 3:** Terminale `reboot` yazarak cihazı yeniden başlatın

    ```
    reboot
    ```
