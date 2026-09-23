---
title: 'OneLogin ile SSO'
urlSlug: 'onelogin-sso'
summary: 'OpenID Connect ile özel bağlayıcı oluşturma, uygulamayı kurum kataloğuna ekleme ve Client ID ile Issuer URL bilgilerini iletme.'
category: 'integrations'
order: 113
source: 'integrations/onelogin'
sourceHash: 'b6922154e9688d50'
importedAt: '2026-09-24'
---
OneLogin tümleştirmesi OpenID Connect ile yapılır. Uygulamayı kurum kataloğunuza eklemek için:

#### 1\. Özel bağlayıcı oluşturun

Aşağıdaki görselde gösterildiği gibi **Custom Connectors** bölümüne gidin.

<img src="/kb/integrations/onelogin_1.webp" alt="Özel bağlayıcılar" loading="lazy" decoding="async">

-   Yeni bir bağlayıcı oluşturun.

-   Bağlayıcının adını girin.

-   Logoları yükleyin. Bu logo uygulama kataloğunuzda görünür.

-   **OpenID Connect** seçeneğini seçin.

-   Sistem yöneticiniz size üç adres iletecektir:

    -   Redirect URI
    -   Post logout redirect URI
    -   Login URL
-   İmzalama algoritması olarak **RS256** seçin.


<img src="/kb/integrations/custom_connector_2.webp" alt="Bağlayıcı ayarları" loading="lazy" decoding="async">

#### 2\. Uygulamayı kurum kataloğunuza ekleyin

-   Bağlayıcıyı kaydettikten sonra **Add App to Connector** seçeneğine tıklayarak uygulamayı kataloğunuza ekleyin.

<img src="/kb/integrations/custom_connector_3.webp" alt="Bağlayıcıya uygulama ekleme" loading="lazy" decoding="async">

-   Uygulama kataloğunuza eklenir; gereken bilgileri doldurup kaydedin.

<img src="/kb/integrations/openloginapp_1.webp" alt="Uygulama bilgileri" loading="lazy" decoding="async">

-   Yapılandırmayı tamamlamak için **Client ID** ve **Issuer URL** değerlerini sistem yöneticisine göndermeniz gerekir.
-   Bu değerleri **SSO** sekmesinde bulabilirsiniz.

<img src="/kb/integrations/onelogin_2.webp" alt="Client ID ve Issuer URL" loading="lazy" decoding="async">
