---
title: 'Azure Active Directory ile SAML 2.0 SSO Kurulumu'
urlSlug: 'azure-ad-saml-sso'
summary: 'Azure AD üzerinde kurumsal uygulama tanımlama, SAML yapılandırması, grup talebi ekleme, sertifika indirme ve AD gruplarını hesaplarla eşleştirme.'
category: 'integrations'
order: 112
source: 'integrations/ad_sso'
sourceHash: 'ae0487d17c0501db'
importedAt: '2026-09-24'
---
## Ön koşullar

-   Kimlik sağlayıcınız Azure AD olmalıdır.

-   SAML 2.0 SSO yapılandırması şu Azure planlarıyla çalışır:

    -   Pro Plus
    -   Enterprise
-   sonopto.signage alt alan adınız olmalı ve kullanıcılarınızı SAML 2.0 SSO ile doğrulamak istemelisiniz.


### Azure AD konsolunda yapılması gerekenler

_Önemli: Azure AD'ye **yönetici** olarak giriş yapın._

#### Azure AD portalında kurumsal uygulama ekleme

-   **Enterprise applications** bölümüne gidin.
-   **New Application** düğmesine tıklayın.

<img src="/kb/integrations/1-ad-enterprise-application.webp" alt="Kurumsal uygulamalar" loading="lazy" decoding="async">

-   **Create your own application** seçeneğine tıklayın.
-   Uygulama adı olarak _sonopto.signage_ yazın.
-   **Integrate any other application you don't find in the gallery (Non-gallery)** seçeneğini seçin.
-   **Create** düğmesine tıklayın.

<img src="/kb/integrations/2-ad-create-app.webp" alt="Uygulama oluşturma" loading="lazy" decoding="async">

-   **Setup Single Sign on** seçeneğine tıklayın.

<img src="/kb/integrations/3-ad-setup-sso.webp" alt="Çoklu oturum açma kurulumu" loading="lazy" decoding="async">

-   Yöntem seçme adımında **SAML** seçeneğine tıklayın.

#### Adım 1

-   **Basic SAML Configuration** bölümünde **Edit** düğmesine tıklayın ve açılan pencerede:

    -   **Add Identifier** seçeneğine tıklayın. Identifier (Entity ID), Sonopto desteğinin size verdiği benzersiz kimliktir; buraya yapıştırın.
    -   **Add reply URL** seçeneğine tıklayıp yanıt adresini (Assertion Consumer Service URL) ekleyin: **https://cloud-digitalsignage.com/\_\_/auth/handler**
-   **Save** düğmesine tıklayın.

-   Ayarlarınız şöyle görünecektir:


<img src="/kb/integrations/4-ad-edit-basic-saml.webp" alt="Temel SAML yapılandırması" loading="lazy" decoding="async">

#### Adım 2

-   **Attributes & Claims** bölümünde **Edit** düğmesine tıklayın.

<img src="/kb/integrations/8-attributes-claims.webp" alt="Öznitelikler ve talepler" loading="lazy" decoding="async">

-   **Add a group claim** seçeneğine tıklayın.

<img src="/kb/integrations/9-group-claim.webp" alt="Grup talebi ekleme" loading="lazy" decoding="async">

-   **Security Groups** seçeneğini seçin.
-   **Customize the name of the group claim** kutusunu işaretleyin.
-   _groups_ yazın.
-   **Save** düğmesine tıklayın.

<img src="/kb/integrations/10-group-claim-settings.webp" alt="Grup talebi ayarları" loading="lazy" decoding="async">

#### Adım 3

-   **SAML Certificates** bölümüne gidin.
-   **Certificate (Base64)** satırında **Download** bağlantısına tıklayın. Bu dosyayı Sonopto desteğine göndermeniz gerekir.

<img src="/kb/integrations/5-ad-download-certificate.webp" alt="SAML sertifikası indirme" loading="lazy" decoding="async">

#### Adım 4

-   **Setup [sonopto.signage]** bölümündeki iki adresi kopyalayıp Sonopto desteğine gönderin.

<img src="/kb/integrations/6-ad-setup-urls.webp" alt="Kurulum adresleri" loading="lazy" decoding="async">

## AD gruplarını hesaplarla eşleştirme

-   Grupların oluşturulup hesaplarla eşleştirilmesi gerekir; dijital tabela uygulamanız için ayrı AD grupları kullanmanızı öneririz.
-   Grup kimliğini Azure AD'den alıp Sonopto desteğine iletin ve hangi kullanıcıyla eşleştirileceğini belirtin.
-   Azure AD'de **Groups** bölümüne gidin, grubunuzu bulup **Object ID** değerini kopyalayın.

<img src="/kb/integrations/7-group-id.webp" alt="Grup kimliği" loading="lazy" decoding="async">

_Kullanıcı rollerini yönetmek için [Takımlar](/destek/kullanici-yonetimi/takimlar/) makalesine bakın._
