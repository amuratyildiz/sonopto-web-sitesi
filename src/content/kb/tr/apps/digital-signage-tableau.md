---
title: 'Tableau Pano Uygulaması'
urlSlug: 'tableau'
summary: 'Tableau panolarını ekranlarda gösterme: herkese açık panolar ve Connected App ile korumalı panolar için adım adım kurulum.'
category: 'apps'
order: 71
source: 'apps/digital-signage-tableau'
sourceHash: '47e4b4abe2c785da'
importedAt: '2026-09-24'
---
Bu makale, Tableau panolarını herkese açık ya da korumalı biçimde ekranlarınızda nasıl göstereceğinizi anlatır.

* * *

## İçindekiler

1.  [Genel bakış](#1-genel-bakış)
2.  [Herkese açık ve korumalı panolar](#2-herkese-açık-ve-korumalı-panolar)
3.  [Tableau Connected App kurulumu](#3-tableau-connected-app-kurulumu)
4.  [Panelde yapılandırma](#4-panelde-yapılandırma)

* * *

## 1\. Genel bakış

Tableau pano uygulaması, Tableau panolarınızı ekranlarınızda göstermenizi sağlar.

-   **Herkese açık panolar:** Kimlik doğrulaması gerekmez.
-   **Korumalı panolar:** Güvenli erişim için **Connected App** (direct trust) yapılandırması gerekir.

* * *

## 2\. Herkese açık ve korumalı panolar

-   **Herkese açık panolar**

    -   Herkesin erişimine açıktır.
    -   Kullanmak için hiçbir kimlik bilgisi ya da yapılandırma gerekmez.
-   **Korumalı panolar**

    -   Kimlik doğrulamalı gömülü panolar olarak da bilinir.
    -   Yalnızca kimliği doğrulanmış kullanıcılar erişebilir.
    -   Tableau'da bir **Connected App** oluşturmayı ve ilgili kimlik bilgilerini panele girmeyi gerektirir.
    -   **Farklı Tableau hesaplarından birden çok Connected App** desteklenir.

* * *

## 3\. Tableau Connected App kurulumu

Korumalı panolara erişmek için aşağıdaki adımlarla bir Connected App oluşturup gerekli kimlik bilgilerini alın.

### Adım 1: Tableau'da Connected App oluşturup etkinleştirin

1.  Yönetici hesabınızla **Tableau Cloud**'a giriş yapın.

2.  **Settings → Connected Apps** yolunu izleyin.

3.  **New Connected App** düğmesine tıklayıp **Direct Trust** seçeneğini seçin.

    <img src="/kb/apps/connected-app-direct-trust.webp" alt="Direct Trust seçimi" loading="lazy" decoding="async">

4.  Uygulamaya bir ad verin (örneğin “Digital Signage”) ve gereken erişim düzeyini belirleyin.

    <img src="/kb/apps/create-connected-app.webp" alt="Connected App oluşturma" loading="lazy" decoding="async">

5.  Kimlik bilgilerini üretmek için **Create** düğmesine tıklayın.


#### Uygulamayı etkinleştirme

6.  Oluşturduktan sonra **Connected Apps listesine dönün.**
7.  Yeni oluşturduğunuz uygulamayı seçip **Actions** listesinden **Enable** düğmesine tıklayın.

    <img src="/kb/apps/enable-tableau-connected-app.webp" alt="Connected App'i etkinleştirme" loading="lazy" decoding="async">

### Adım 2: Kimlik bilgilerini alın

1.  Yeni oluşturduğunuz uygulamaya tıklayın.

2.  **Generate New Secret** düğmesine tıklayın; şu bilgiler görünür:

    -   **Secret ID**
    -   **Secret Value**
    -   **Client ID**

    <img src="/kb/apps/connected-app-copy-details.webp" alt="Connected App kimlik bilgileri" loading="lazy" decoding="async">

3.  Bu değerleri panolarınızı panele bağlarken kullanacaksınız.


* * *

## 4\. Panelde yapılandırma

### Adım 1: Paneli açın

1.  Hesabınıza giriş yapın.

2.  **Playlists** bölümüne gidip var olan bir çalma listesini seçin ya da yenisini oluşturun.

3.  Uygulamalar listesine ulaşıp **Business Intelligence** bölümünü seçin.

    <img src="/kb/apps/select-bi.webp" alt="Business Intelligence bölümü" loading="lazy" decoding="async">

4.  Uygulamalar arasından **Tableau** seçeneğine gidin.

    <img src="/kb/apps/digital-signage-tableau.webp" alt="Tableau uygulaması" loading="lazy" decoding="async">

5.  Tableau hesabınıza dönüp kullanmak istediğiniz panoya gidin, **Share** düğmesine tıklayıp adresi kopyalayın.

    <img src="/kb/apps/tableau-dashboard-get-dashboard-link.webp" alt="Pano bağlantısını alma" loading="lazy" decoding="async">

6.  Adresi girin, **Public Dashboard** kutusunun işaretini kaldırın ve **ADD CONNECTED APP** düğmesine tıklayın.

    <img src="/kb/apps/digital-signage-connected-app-add.webp" alt="Connected App ekleme" loading="lazy" decoding="async">

7.  2. adımda aldığınız bilgileri girin:


-   Uygulama adını girin.

-   **Secret ID** değerini kopyalamak için **Actions** listesinden **Copy ID** seçeneğine tıklayın ve **Secret ID** alanına yapıştırın.

-   **Secret Value** değerini kopyalamak için **Actions** listesinden **Copy Value** seçeneğine tıklayın ve **Secret Value** alanına yapıştırın.

-   **Copy Client ID** düğmesiyle istemci kimliğini kopyalayıp **Client ID** alanına yapıştırın.

-   Tableau panosunda kullanılan kullanıcı e-postasını girin.

-   **ADD** düğmesine tıklayın.

    <img src="/kb/apps/edit-connected-app.webp" alt="Connected App bilgilerini girme" loading="lazy" decoding="async">


8.  Yeni eklediğiniz uygulamanın seçili olduğundan emin olup **Save** düğmesine tıklayın.

    <img src="/kb/apps/select-connected-app.webp" alt="Connected App seçimi" loading="lazy" decoding="async">

9.  Panonuzu medya önizlemesinde görebilirsiniz.

10.  Eklemek istediğiniz her Tableau Connected App için yukarıdaki adımları yineleyerek **birden çok** uygulama ekleyebilirsiniz.

11.  Çalma listesini ekranınıza atayıp **Publish** düğmesine tıklayın.


* * *
