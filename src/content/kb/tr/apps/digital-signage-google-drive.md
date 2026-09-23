---
title: 'Google Drive Uygulaması'
urlSlug: 'google-drive'
summary: 'Bir Google Drive klasörünü ekranlara bağlayıp içindeki dosyaların kendiliğinden eşitlenmesini sağlama; yayın zorunluluğu, büyük dosya önerileri ve eşitleme sorunlarının çözümü.'
category: 'apps'
order: 47
source: 'apps/digital-signage-google-drive'
sourceHash: '87d18128ca5f3ebc'
importedAt: '2026-09-24'
---
Google Drive tümleştirmesi, içeriğinizi doğrudan Google Drive üzerinden yönetmenizi sağlar. Drive'daki medya dosyalarını ekranlarınıza bağlarsınız; belirlediğiniz klasörde yapılan her değişiklik ekranlarınıza neredeyse anında yansır.

Hangi dosya türlerinin gösterileceğini seçebilirsiniz: yalnızca videolar, yalnızca görseller ya da desteklenen tüm türler.

Ayrıca bu tümleştirme sayesinde dışarıdan çalıştığınız kişiler, panele erişmeden ekranlarınıza içerik gönderebilir.

## Google Drive'ı bağlama

-   Panele giriş yapın.
-   Drive klasörünü ekleyeceğiniz katmana tıklayın.
-   Katmanda medya yoksa uygulamalar penceresi açılır. Varsa **Add New** düğmesine tıklayın.
-   **Google Apps** seçeneğine tıklayın.
-   **Google Drive** seçeneğini seçin.
-   Verilen e-posta adresini kopyalamak için **kopyalama simgesine** tıklayın.

<img src="/kb/apps/copy-email-address.webp" alt="E-posta adresini kopyalama" loading="lazy" decoding="async">

Şimdi Google Drive klasörünüzü bu e-posta adresiyle **Viewer** (görüntüleyici) olarak paylaşın.

**Not**: Klasör, panele eklenmeden önce içinde dosya bulundurmalıdır.

-   Paylaşmak istediğiniz Drive klasörünü açın.
-   Klasör adının yanındaki oka tıklayın.
-   Menüden **Share > Share** yolunu izleyin.

<img src="/kb/apps/share-google-drive.webp" alt="Drive klasörünü paylaşma" loading="lazy" decoding="async">

-   Kopyaladığınız e-posta adresini yapıştırın.
-   Yetki düzeyini **Viewer** yapın.
-   **Share** düğmesine tıklayıp **Share anyway** ile onaylayın.

<img src="/kb/apps/share-email-address.webp" alt="E-posta adresiyle paylaşma" loading="lazy" decoding="async">

-   Klasör adının yanındaki oka yeniden tıklayın.
-   **Share > Copy link** yolunu izleyin.

Panele dönün:

-   Klasör bağlantısını ilgili alana yapıştırın.
-   **ADD FOLDER** düğmesine tıklayın.

<img src="/kb/apps/paste-folder-link.webp" alt="Klasör bağlantısını yapıştırma" loading="lazy" decoding="async">

-   Gösterilecek en fazla dosya sayısını seçin.
-   Açılır listeden izin verilen dosya türünü seçin (yalnızca görseller, yalnızca videolar ya da desteklenen tüm türler).
-   **Save** düğmesine tıklayın.

<img src="/kb/apps/choose-file-type.webp" alt="Dosya türü seçimi" loading="lazy" decoding="async">

-   Dosyalar artık doğrudan Google Drive klasörünüzden alınır.
-   İçeriği ekranda göstermek için **PUBLISH** düğmesine tıklayın.
-   Klasörde yaptığınız her değişiklik ekranlarınıza kendiliğinden yansır.

Başka Drive klasörleri eklemek için çalma listesi adının yanındaki **EDIT** düğmesine tıklayın.

-   **ADD A NEW FOLDER** düğmesine tıklayıp yukarıdaki adımları yineleyin.

<img src="/kb/apps/add-new-folder.webp" alt="Yeni klasör ekleme" loading="lazy" decoding="async">

-   Hangi klasörün gösterileceğini açılır listeden seçebilirsiniz.
-   Dosya adını seçin, **Refresh**, ardından **Save** düğmesine tıklayın.

Drive klasörlerini çalma listesinde ayrı katmanlar olarak da ekleyebilirsiniz:

-   **ADD NEW > Google Apps > Google Drive** yolunu izleyin.
-   Açılır listeden istediğiniz klasörü seçin.

Ek Drive klasörleri bu bölümden yönetilir.

## Otomatik eşitleme (önemli)

Otomatik eşitlemenin çalışması için klasörün önce bir ekrana yayınlanmış olması gerekir.

Açmak için:

-   Çalma listesine bir Drive klasörü ekleyin.
-   Bu listeyi bir oynatıcıya atayın.
-   **PUBLISH** düğmesine tıklayın.

Yayınlandıktan sonra sonopto.signage, bağlı klasördeki değişiklikleri **2 dakikada bir** denetleyip eşitler.

**Önemli not:**
Çalma listesi en az bir kez yayınlanmadıysa klasör **eşitlenmez**. Otomatik eşitleme yalnızca ilk yayından sonra başlar.

Bu, içeriğin ekranlara çıkmadan önce bilinçli olarak onaylanmasını sağlar.

## Büyük dosyalar ve eşitleme önerileri

Büyük medya dosyalarıyla, özellikle videolarla çalışırken aşağıdaki önerileri izlemek eşitlemenin güvenilir olmasına yardımcı olur.

### Büyük video dosyaları

-   **100 MB'den büyük** video dosyalarını aynı anda birden çok yüklemekten kaçının.
-   Büyük dosyaları **tek tek**, aralarında **2-3 dakika** bırakarak yükleyin.
-   Böylece hem Google Drive hem de sonopto.signage her dosyayı tam olarak işleyecek zamanı bulur ve klasör eşitlemesi düzgün çalışır.

Birden çok büyük dosyayı aynı anda yüklemek eşitlemeyi geciktirebilir ya da kesintiye uğratabilir.

## Klasör eşitlenmiyorsa

Klasörünüz **2 dakika** içinde eşitlenmiyorsa:

1.  Klasörde küçük bir değişiklik yapın:

    -   yeni bir dosya ekleyin ya da
    -   var olan bir dosyayı silin.
2.  Eşitlemenin çalışması için **2 dakika** bekleyin.

3.  İçerik hâlâ güncellenmiyorsa:

    -   çalma listenize gidin,
    -   Google Drive öğesinde **Edit** düğmesine tıklayın,
    -   **Refresh** düğmesine tıklayın.
4.  Değişiklikler yine görünmüyorsa:

    -   yenileme bittikten sonra **Publish** düğmesine tıklayın.
5.  Tüm bu adımlardan sonra klasör hâlâ eşitlenmiyorsa [bize ulaşın](/iletisim/).


Bu adımlar eşitleme sorunlarının çoğunu çözer ve klasör güncellemesini güvenle yeniden tetikler.
