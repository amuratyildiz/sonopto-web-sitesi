---
title: 'Windows Üzerine Kurulum'
urlSlug: 'windows-kurulumu'
summary: 'Windows tabanlı oynatıcılarda kurulum öncesi hazırlık, uygulama kurulumu ve açılışta otomatik başlatma.'
category: 'installation'
order: 8
source: 'installation/digital-signage-install-windows'
sourceHash: '330ae44ef7c7596f'
importedAt: '2026-09-23'
---
#### Desteklenen Windows sürümleri

Windows 7 ve üzeri (7, 8, 10 ve 11).

### Kurulum öncesi hazırlık

Uygulamayı kurmadan önce Windows oynatıcıda aşağıdakileri tamamlayın.

-   Windows oturumunu açın
-   Ekran koruyucuyu kapatın
-   **Güç seçenekleri**: Denetim Masası'ndaki güç seçeneklerinden ekranın kararmamasını, kapanmamasını ve bilgisayarın uyku moduna geçmemesini ayarlayın.
-   **Gereksiz uygulamaları kaldırın**: Yayınla çakışmaması için ihtiyaç duyulmayan programları kaldırın.
-   Kurulu uygulamaların otomatik güncellemesini kapatın (yazıcı yazılımları, Adobe Acrobat gibi); yayın sırasında ekranda pencere açmalarını önler.
-   Güncel **Edge**, **Chrome** ya da [Chromium](https://www.chromium.org/Home/) tarayıcısının kurulu olduğundan emin olun.

### Uygulamayı kurun

-   Kurulum dosyası için [bizimle iletişime geçin](/iletisim/).
-   İndirdiğiniz dosyayı açın (unzip)
-   Uygulamayı başlatmak için dosyaya çift tıklayın
-   "Unknown Publisher" uyarısı çıkarsa **More** ve ardından **Run Anyway** seçeneğine tıklayın
-   Birkaç saniye içinde ekranda hash kodu görünür
-   Artık panelden ekranınızı ekleyebilirsiniz

### Açılışta otomatik başlatma

-   **autostart.bat** dosyasının masaüstü kısayolunu oluşturun.
-   Oluşturduğunuz kısayolu masaüstünden Windows'un başlangıç (Startup) klasörüne kopyalayın; böylece uygulama Windows her açıldığında kendiliğinden başlar. Adımlar Windows sürümüne göre değişir.

_Başlangıç klasörü, yerel Windows hesabınızla oturum açtığınızda otomatik çalışan uygulamaların kısayollarını barındırır._

Başlangıç klasörünü bulamazsanız:

1.  Klavyede **Windows + R** tuşlarına basın. Çalıştır penceresi açılır.
2.  **%appdata%** yazıp Enter tuşuna basın. Dosya Gezgini açılır.
3.  **Microsoft → Windows → Start Menu → Programs → Startup** yolunu izleyin.
