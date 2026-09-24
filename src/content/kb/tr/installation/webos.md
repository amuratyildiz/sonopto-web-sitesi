---
title: 'LG WebOS Ekranlara Kurulum'
urlSlug: 'lg-webos-kurulumu'
summary: 'LG WebOS Signage ekranlarında internet veya USB üzerinden IPK kurulumu, SI Server ayarları ve USB ile toplu kurulum.'
category: 'installation'
order: 18
source: 'installation/webos'
sourceHash: '44035b255904e617'
importedAt: '2026-09-23'
---
### WebOS Signage desteği

Desteklenen LG işletim sistemleri: WebOS 4.0 Signage, WebOS 4.1 Signage ve üzeri.

**WebOS akıllı TV modelleri desteklenmez.**

### sonopto.signage uygulamasının kurulumu

Uygulamayı kurmak için iki yöntemden birini seçin:

-   internet üzerinden (önerilen),
-   ya da USB bellek ile.

## Saat ve tarihi ayarlayın

**_Önemli: Saat ve tarih ayarlanmadan uygulama bulut hizmetiyle haberleşemez._**

**Settings** menüsüne gidin.

-   **General** bölümünü seçin.
-   **Time & Date** bölümünü seçin.
-   **Set Automatically** seçeneğini seçip saatin doğru olduğundan emin olun.
-   **Timezone** bölümüne gidin.
-   Doğru kıta, ülke/bölge ve şehir bilgisini seçin.

### Uygulamayı internet üzerinden kurma

Bu yöntem internet bağlantısı gerektirir; bir önceki adımın doğru yapıldığından emin olun.

-   Kumandadaki **settings** düğmesiyle (ya da dişli simgesiyle) ayarları açın.
-   **EZ Setting** bölümüne gidin.
-   **SI Server Setting** bölümüne gidip ilerleyin.

<img src="/kb/installation/ez-setting-si-server-setting.webp" alt="EZ Setting menüsü" loading="lazy" decoding="async">

**SI Server Setting** seçeneğini seçin.

<img src="/kb/installation/si-server-setting-si-server-setting.webp" alt="SI Server ayarları" loading="lazy" decoding="async">

Burada aşağıdaki ayarları bu sırayla yapın:

-   **Fully qualified domain name**: enabled

-   **Address URL**: https://appds.io/lgw

-   **Application Launch Mode**: local

-   **Local Application type**: IPK

-   **Auto Set**: “Off” (bu ayar her modelde görünmez)

-   Son olarak **Local Application Upgrade** bölümüne gidip **REMOTE** seçeneğini seçin. **OK** düğmesiyle onaylayın. Sağ üst köşede bir saniyeliğine “Start Application Upgrade” uyarısı görünür.

-   Bu uyarı kaybolduğunda cihazı kumandayla **kapatın**. 10 saniye sonra tekrar **açın**. Uygulama kurulup çalışmaya başlayacaktır.


<img src="/kb/installation/si-server-setting-local-app-upgrade-remote.webp" alt="Uzaktan uygulama güncelleme ayarı" loading="lazy" decoding="async">

### Uygulamayı USB bellek ile kurma

-   [Güncel .ipk dosyasını indirin](https://download.cloud-digitalsignage.com/brands/com.lg.app.signage.ipk)

-   İndirdiğiniz .ipk dosyasının adını **com.lg.app.signage.ipk** olarak değiştirin — **bu adım zorunludur.**

-   USB belleği FAT32 olarak biçimlendirin.

-   USB belleğin kök dizininde **application** adında bir klasör oluşturun (tamamı küçük harf).

-   Adını değiştirdiğiniz **com.lg.app.signage.ipk** dosyasını bu klasörün içine koyun.

-   USB belleği WebOS cihaza takın.


**Ardından**

-   Cihazı açın.
-   Kumandadaki **settings** düğmesine (ya da dişli simgesine) basın.
-   **SI Server Setting** bölümüne gidip ilerleyin.
-   **SI Server Setting** seçeneğini seçin.
-   **Application Launch Mode**: local
-   **Local Application type**: IPK
-   Son olarak **Local Application Upgrade** bölümüne gidip **USB** seçeneğini seçin. **OK** düğmesiyle onaylayın. Sağ üst köşede bir saniyeliğine “Start Application Upgrade” uyarısı görünür.
-   Bu uyarı kaybolduğunda cihazı kumandayla **kapatın**. 10 saniye sonra tekrar **açın**. sonopto.signage uygulaması kurulup çalışmaya başlayacaktır.

<img src="/kb/installation/si-server-setting-local-app-upgrade-usb.webp" alt="USB ile uygulama güncelleme ayarı" loading="lazy" decoding="async">

### USB'deki ayar dosyasıyla buluttan toplu kurulum

-   Daha önce uygulama kurulduysa ekranı fabrika ayarlarına döndürün.

-   Saat ve tarihi otomatik yapıp saat dilimini ayarlayın.

-   “scap\_installation.json” dosyasını indirip USB belleğin kök dizinine kopyalayın.

    [scap\_installation.json](/kb/installation/scap_installation.json)

-   USB belleği takıp ekranı yeniden başlatın.

-   Ekran yeniden başlayıp uygulamayı kuracaktır.

-   “START TO UPGRADE APPLICATION” ve ardından “COMPLETE” bildirimlerini görmelisiniz.

-   Uygulama başlamazsa USB belleği çıkarıp ekranı yeniden başlatın.
