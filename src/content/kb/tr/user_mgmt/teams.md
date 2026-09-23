---
title: 'Takımlar'
urlSlug: 'takimlar'
summary: 'Takım oluşturup yetki verme: çalma listeleri, ayarlar, ekranlar (etiketle kısıtlama dâhil), programlar, medya kütüphanesi ve kanallar; kullanıcıları takıma bağlama.'
category: 'user_mgmt'
order: 2
source: 'user_mgmt/teams'
sourceHash: '9679986535c9a8b3'
importedAt: '2026-09-24'
---
**TEAMS** (takımlar) özelliği, kullanıcılara belirli ekranlara ve içeriklere erişim vermenin yoludur.

Birden çok takım oluşturabilir ve her takıma bir ya da daha çok kullanıcı atayabilirsiniz.

Her takımın yetkileri diğerinden farklı ya da aynı olabilir.

Aynı takımdaki kullanıcılar yalnızca kendi çalma listeleri ve ekranlarıyla sınırlandırılabilir.

Örneğin **team 1** ve **team 2** adında iki takım oluşturabilirsiniz. Her takımda birden çok kullanıcı olabilir, her takım kendi çalma listelerini oluşturabilir ve yalnızca onlarla sınırlı kalır. Yöneticiler, etiketlerle her takımın erişebileceği ekranları da sınırlayabilir.

#### Adım 1: Takım ekleme

-   Sağ üst köşedeki profil simgesine tıklayın.
-   **User Management** seçeneğine tıklayın.
-   **TEAMS** sekmesine gidin.

<img src="/kb/user_mgmt/teams1.webp" alt="Takımlar sekmesi" loading="lazy" decoding="async">

-   **Administrators** takımı varsayılan olarak oluşturulur, sisteme tam erişimi vardır, düzenlenemez ve silinemez.
-   Takım eklemek için **+ADD** düğmesine tıklayın.
-   Çeşitli yetki kutularını içeren **Add Team** ekranı açılır.

<img src="/kb/user_mgmt/addteams1.webp" alt="Takım ekleme ekranı" title="Takım ekleme" loading="lazy" decoding="async">

-   Takım adını girin; örneğin “Team1”.
-   Oluşturduğunuz takıma yetkileri atayın.
-   **ADD TEAM** düğmesine tıklayın.

#### 1\. Playlists

-   **Playlists** kutusu işaretliyse
    Kullanıcı çalma listelerine erişebilir. İşaretlendiğinde hesabınızdaki tüm listeleri yönetebilir.
    Kutuyu işaretlediğinizde bir seçenek daha belirir: **Restricted**.

-   ###### Restricted

    **Restricted** kutusu işaretliyse
    Erişim yalnızca takımın kendi çalma listeleriyle sınırlanır. Diğer listeler o takımın hesabında görünmez. Kullanıcı yalnızca kendisine atanmış listeleri yönetebilir.

-   **Save** düğmesine tıklayın.


<img src="/kb/user_mgmt/restrictedplaylist.webp" alt="Kısıtlı çalma listesi yetkisi" title="Kısıtlı çalma listesi" loading="lazy" decoding="async">

**Yöneticiler çalma listelerini takımlar arasında paylaştırabilir:**

-   **Playlists** bölümüne gidin.
-   **+ADD PLAYLIST** düğmesine tıklayın.
-   **Add Playlist** ekranında listenin adını yazın; örneğin playlist.Team1.
-   **Team** açılır listesinden listeyi atayacağınız takımı seçin; örneğin Team1.
-   **Save** düğmesine tıklayın.
-   Listeyi kurmayı sürdürmek için [Çalma Listesi Yönetimi](/destek/calma-listeleri/calma-listesi-yonetimi/) makalesindeki adımları izleyin.

<img src="/kb/user_mgmt/addplaylist.webp" alt="Çalma listesi ekleme" title="Çalma listesi ekleme" loading="lazy" decoding="async">

Var olan bir çalma listesini de bir takıma atayabilirsiniz:

-   **Playlists** bölümüne gidin.
-   **Edit playlist** seçeneğine tıklayın; çalma listesi ayarları açılır.
-   **Teams** alanından listeniz için bir takım seçin.

<img src="/kb/user_mgmt/editplaylistteam.webp" alt="Çalma listesine takım atama" loading="lazy" decoding="async">

#### 2\. Settings

-   **Settings** kutusu işaretliyse

<img src="/kb/user_mgmt/settings.webp" alt="Ayarlar yetkisi" title="Ayarlar yetkisi" loading="lazy" decoding="async">

Bu yetki, seçilen kullanıcının yönetici hesabının ayarlarına erişmesini sağlar.

-   İşaretli değilse kullanıcı yalnızca kendi profilini ve kendi hesabını yönetebilir.

<img src="/kb/user_mgmt/accountsettings.webp" alt="Hesap ayarları" title="Hesap ayarları" loading="lazy" decoding="async">

#### 3\. Screens

-   **Screens** kutusu işaretli değilse kullanıcı hesabınızdaki ekranlar bölümüne erişemez.

<img src="/kb/user_mgmt/screen1.webp" alt="Ekran yetkisi kapalı" loading="lazy" decoding="async">

-   İşaretliyse **SCREENS** bölümü kullanıcıya açılır.
-   **Screens** kutusunu işaretlediğinizde üç yetki daha belirir: **Screens Admin**, **Restricted** ve **Restrict by tags**.

<img src="/kb/user_mgmt/screen2.webp" alt="Ekran yetkisi seçenekleri" loading="lazy" decoding="async">

3.1 — **Screens Admin**

-   Kullanıcıların ekranlarınızı yönetebilmesi için **Screens Admin** işaretli olmalıdır. Bu yetki ekran ekleme ve silme, ekran etiketlerini değiştirme, lisans ekleme ve yayın kanıtına erişim sağlar.
-   İşaretli değilse kullanıcı ekranları yalnızca görüntüleyebilir ve ekran içeriğini belirleyebilir.

3.2 — **Restricted**

-   İşaretliyse kullanıcı yalnızca takımın kendi gruplarına ve video duvarlarına erişebilir. Yöneticinin ya da diğer takımların oluşturduğu grup ve video duvarları bu takıma görünmez.

<img src="/kb/user_mgmt/restrictedgroups.webp" alt="Kısıtlı grup yetkisi" title="Kısıtlı grup" loading="lazy" decoding="async">

3.3 — **Restrict by tags**

-   İşaretliyse kullanıcı yalnızca aynı etikete sahip ekranlara erişebilir.
-   Takımın erişmesini istediğiniz ekranın aynı etiketi taşıdığından emin olun.
-   Ekranlara etiket eklemek için: **SCREENS** sayfası > ekran yapılandırmasını düzenle > **Tags** > bir ya da daha çok etiket girin (örneğin Tag1) > **Save**.
-   **Restrict by tags** kutusunu işaretlediğinizde bu takıma etiket eklemenizi sağlayan **+ Add** seçeneği belirir.
-   **+ Add** seçeneğine tıklayın.

<img src="/kb/user_mgmt/teamtags.webp" alt="Takım etiketleri" loading="lazy" decoding="async">

-   Bir ya da daha çok etiket girin.
-   **Save** düğmesine tıklayın.
-   Etiketi eşleşen ekranlar bu takıma açılır.
-   **Restrict by tags** işaretli değilse takım hesabınızdaki tüm ekranlara erişir.

#### 4\. Schedules

Bu yetki, kullanıcının **SCHEDULES** bölümüne erişmesini sağlar.

-   İşaretli değilse kullanıcı hesabınızdaki programlara erişemez.
-   İşaretliyse programlar bölümü açılır ve tüm programlar kullanıcıya yönetilebilir olur.

<img src="/kb/user_mgmt/schedule.webp" alt="Program yetkisi" title="Program yetkisi" loading="lazy" decoding="async">

-   ##### Restricted

    İşaretliyse takım yalnızca kendi programlarına erişir. Diğer programları yönetemez.

<img src="/kb/user_mgmt/schedule2.webp" alt="Kısıtlı program yetkisi" loading="lazy" decoding="async">

-   Bu takımdaki kullanıcılar kendi programlarını oluşturabilir.
-   **Schedules > + ADD SCHEDULE** yolunu izleyin, bir ad yazıp **Save** düğmesine tıklayın.
-   Varsayılan bir çalma listesi seçin.
-   Takımın çalma listesi erişimi kendi listeleriyle sınırlıysa yalnızca kendisine atanmış listelerden seçebilir. Hesabınızdaki diğer listeler görünmez.

<img src="/kb/user_mgmt/scheduleplaylist.webp" alt="Programda çalma listesi seçimi" loading="lazy" decoding="async">

#### 5\. Media Assets

-   Bu seçenek takıma medya kütüphanesine erişim yetkisi verir.
-   İşaretliyse takım, medya kütüphanesine hem panelden hem de çalma listesine katman eklerken açılan uygulamalar penceresinden erişebilir.

#### 6\. Channels

-   Bu yetki, kullanıcının çalma listeleri sayfasındaki **CHANNELS** bölümüne erişmesini sağlar.
-   Etkinleştirmek için **Channels** kutusunu işaretleyin.

<img src="/kb/user_mgmt/channels-settings1.webp" alt="Kanal yetkisi ayarları" loading="lazy" decoding="async">

-   İşaretli değilse takım hesabınızdaki kanallar sayfasına erişemez.
-   İşaretliyse takım kanallara hem çalma listeleri sayfasından hem de ekranlar sayfasındaki içerik kaynağı türünden erişebilir.
-   Erişimi yalnızca takımın kendi kanallarıyla sınırlamak için **Restricted** kutusunu işaretleyin. İşaretli değilse takım hesabınızdaki tüm kanallara erişir.
-   **Save** düğmesine tıklayın.

##### Not:

-   **Playlists** işaretli değil ama **Channels** işaretliyse takım, kanallar sayfasına çalma listeleri sayfasından erişemez (çalma listelerine yetkisi yoktur). Ancak ekranlar sayfasındaki içerik kaynağı türünden kanalları yine görebilir.
-   **Playlists** ayarlarında **Restricted** işaretliyse takım kanallara yalnızca kendi çalma listelerini ekleyebilir. Diğer listeler hesabında görünmez.

#### Adım 2: Kullanıcıları takımlara bağlayın

Oluşturduğunuz takıma yetkileri atadıktan sonra kullanıcı yönetiminde **USERS** sekmesine gidip kullanıcıları takıma bağlayın. Yeni kullanıcı ekleyebilir ya da var olanı düzenleyebilirsiniz.

-   Yeni kullanıcı eklemek için [Kullanıcılar](/destek/kullanici-yonetimi/kullanicilar/) makalesindeki adımları izleyin.
-   Var olan bir kullanıcıya takım atamak için e-posta adresinin yanındaki düzenleme simgesine tıklayın.

<img src="/kb/user_mgmt/edituser1.webp" alt="Kullanıcı düzenleme" loading="lazy" decoding="async">

-   Seçili kullanıcının takımını güncelleyip **Save** düğmesine tıklayın.

<img src="/kb/user_mgmt/edituser3.webp" alt="Kullanıcının takımını güncelleme" loading="lazy" decoding="async">
