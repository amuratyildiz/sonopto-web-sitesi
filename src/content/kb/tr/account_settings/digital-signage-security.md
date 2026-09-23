---
title: 'Güvenlik'
urlSlug: 'guvenlik'
summary: 'Hesaba girişi yalnızca belirli IP adreslerine ya da belirli ülkelere açarak sınırlama; kendinizi dışarıda bırakmamak için uyarılar.'
category: 'account_settings'
order: 4
source: 'account_settings/digital-signage-security'
sourceHash: '9e1dd71a9f47c3f4'
importedAt: '2026-09-23'
---
Erişim kısıtlamaları, hesabınıza kimlerin giriş yapabileceğini belirli ölçütlere göre sınırlamanızı sağlar. Açıldığında yalnızca tanımladığınız kurallara uyan kullanıcılar bu hesaba erişip onu yönetebilir.

Erişimi iki yolla kısıtlayabilirsiniz:

-   [IP erişim kısıtlaması](#ip-erişim-kısıtlaması): Yalnızca belirli IP adreslerinin giriş yapmasına izin verir.
-   [Ülke erişim kısıtlaması](#ülke-erişim-kısıtlaması): Yalnızca belirli ülkelerdeki kullanıcılara izin verir.

<img src="/kb/account_settings/security-setting.webp" alt="Erişim kısıtlaması ayarları" loading="lazy" decoding="async">

* * *

## IP erişim kısıtlaması

IP erişim kısıtlaması, hesabınıza erişimi **yalnızca belirli IP adresleriyle** sınırlar. Açıldığında yalnızca listeye eklediğiniz IP adreslerinden giriş yapılabilir ve hesap yönetilebilir.

Listede olmayan bir IP adresinden gelen her giriş denemesi engellenir.

<img src="/kb/account_settings/ip-security-settings.webp" alt="IP güvenlik ayarları" loading="lazy" decoding="async">

-   Sağ üst köşedeki profil simgesine tıklayın.
-   **Settings → Security** yolunu izleyin.
-   **IP Access Restrictions** bölümünü bulun.
-   Özelliği açmak için **IP Access Restrictions** kutusunu işaretleyin.

### İzinli IP adresi ekleme

-   Alana bir IP adresi girin.
-   Eklemek için **Enter** tuşuna basın.
-   IP adreslerini **tek tek** ekleyin.
-   En çok **5 IP adresi** ekleyebilirsiniz.
-   Eklenen her IP, alanın içinde bir etiket olarak görünür.

### Add My IP

-   Kendi genel IP adresinizi kendiliğinden eklemek için **Add My IP** düğmesine tıklayın.
-   Kendinizi hesabın dışında bırakmamak için kısıtlamayı açmadan önce bunu yapmanızı öneririz.

### Notlar ve iyi uygulamalar

-   Yalnızca **IPv4** adresleri desteklenir.
-   Kısıtlamayı açmadan önce gereken tüm IP adreslerini eklediğinizden emin olun (ofis ağları, VPN'ler, yönetici kullanıcılar).
-   İnternet sağlayıcınız **değişken IP adresi** veriyorsa IP'niz değiştikçe listeyi güncellemeniz gerekebilir.
-   IP erişim kısıtlaması yalnızca **panele erişim** için geçerlidir.
-   Ekran yayını, içerik dağıtımı ve oynatıcı haberleşmesi bundan **etkilenmez.**

### Önemli

IP erişim kısıtlaması açıkken kendi IP adresiniz izinli listede **yoksa** oturumunuz kapanır ve erişiminiz engellenir.

Kaydetmeden önce en az bir güvenilir IP adresi eklediğinizden her zaman emin olun.

* * *

## Ülke erişim kısıtlaması

Ülke erişim kısıtlaması, hesabınıza erişimi yalnızca belirli ülkelerle sınırlar. Açıldığında yalnızca listeye eklediğiniz ülkelerdeki kullanıcılar giriş yapıp hesabı yönetebilir.

Listede olmayan bir ülkeden gelen her giriş denemesi engellenir.

<img src="/kb/account_settings/country-security.webp" alt="Ülke güvenlik ayarları" loading="lazy" decoding="async">

-   Özelliği açmak için **Country Access Restrictions** kutusunu işaretleyin.
-   Alana bir ülke adı girin.

### Önemli

Kutuyu işaretledikten sonra hiç ülke eklemezseniz tüm ülkeler engellenir ve hesaba hiçbir erişim kalmaz. Erişimi açık tutmak için en az bir ülke ekleyin (kendi ülkeniz dâhil) ya da kısıtlamayı kapatın.
