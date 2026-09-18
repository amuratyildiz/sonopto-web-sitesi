# Sonopto Web Sitesi

Sonopto'nun kurumsal web sitesi. Astro ile statik olarak üretilir, Azure Static Web Apps üzerinde barındırılır, referans/proje içeriği build zamanında bir SharePoint listesinden Microsoft Graph API ile çekilir, iletişim formu Dataverse'deki özel `cr0c0_iletisimformukaydi` ("Web Sitesi Iletisim Formu") tablosuna kaydedilir (standart Lead veya mevcut "Fırsat" tablosu değil — bkz. "Altyapı Durumu"). Detaylı mimari kararlar ve gerekçeleri için bkz. `PLAN.md`.

## Hızlı Başlangıç

```sh
npm install
npm run dev
```

Site `http://localhost:4321` adresinde açılır. Herhangi bir M365/Azure kimlik bilgisi olmadan da çalışır — referans projeler `src/data/projects.sample.ts` içindeki yer tutucu verilerle, iletişim formu Dataverse'e yazmadan (konsola uyarı loglayarak) çalışır.

```sh
npm run build     # ./dist/ altına statik site üretir
npm run preview   # build çıktısını yerelde önizler
```

## Proje Yapısı

- `src/pages/` — TR sayfalar kökte, EN sayfalar `src/pages/en/` altında (bkz. `src/lib/i18n/routes.ts`).
- `src/lib/graph/` — Microsoft Graph build-time entegrasyonu (SharePoint "Projects" listesi).
- `src/content/i18n/` — TR/EN arayüz metinleri.
- `src/data/` — Şirket bilgileri, partner logoları, yer tutucu proje verisi.
- `api/` — Azure Static Web Apps "Managed Functions": `/api/contact-submit` (iletişim formu → Dataverse).
- `scripts/fetch-project-media.mjs` / `scripts/fetch-partner-logos.mjs` — Build öncesi SharePoint doküman kütüphanelerinden proje görsellerini ve partner logolarını indirir.
- `staticwebapp.config.json` — 301 yönlendirmeleri (eski Odoo URL'leri) + güvenlik başlıkları.

## Ortam Değişkenleri

Kök dizindeki `.env.example` dosyasını `.env` olarak kopyalayıp doldurun (bkz. dosya içi açıklamalar): `GRAPH_TENANT_ID`, `GRAPH_CLIENT_ID`, `GRAPH_CLIENT_SECRET`, `GRAPH_SITE_ID`, `GRAPH_PROJECTS_LIST_ID`, `GRAPH_MEDIA_DRIVE_ID`, `GRAPH_PARTNERS_LIST_ID`, `GRAPH_PARTNER_LOGOS_DRIVE_ID`, `PUBLIC_TURNSTILE_SITE_KEY`.

`api/` fonksiyonu için `api/local.settings.json.example` dosyasını `api/local.settings.json` olarak kopyalayıp doldurun: `DATAVERSE_URL`, `DATAVERSE_TENANT_ID`, `DATAVERSE_CLIENT_ID`, `DATAVERSE_CLIENT_SECRET`, `TURNSTILE_SECRET_KEY`.

Production'da bu değerler GitHub Actions repository secrets (site build'i için) ve Azure Static Web Apps Application Settings (Function runtime'ı için) olarak ayarlanmalı — asla repoya commitlenmemeli.

## Altyapı Durumu

M365/Azure tarafı kuruldu ve GitHub Actions secrets'ları bağlandı:

1. ~~**SharePoint "Projects" listesi**~~ — Kuruldu: `https://sonopto.sharepoint.com/sites/sonopto-web-sitesi`, `Projects` listesi (tam kolon şemasıyla) + `ProjectMedia` doküman kütüphanesi. `scripts/provision-sharepoint-list.mjs` bu kurulumu tekrarlanabilir kılıyor (gerekirse başka bir ortamda yeniden çalıştırılabilir).
2. ~~**Entra ID uygulama kaydı (Graph okuma)**~~ — `Sonopto Web Sitesi - Graph Icerik Okuma` uygulaması, `Sites.Selected` izniyle sadece bu siteye salt-okunur/yazma erişimine sahip (diğer SharePoint sitelerine erişemez).
3. ~~**Entra ID uygulama kaydı + Dataverse Application User (form yazma)**~~ — `Sonopto Web Sitesi - Iletisim Formu Servis Hesabi` uygulaması, `sonoptocrm` ortamında özel bir güvenlik rolüyle (`Web Sitesi Iletisim Formu` — `cr0c0_iletisimformukaydi` tablosunda **Create + Read**, Global depth) kayıtlı. Graph okuma uygulamasından tamamen ayrı, en az yetkili bir kimlik. Standart Lead tablosu ve mevcut "Fırsat" (`cr0c0_firsat`) tablosu **kullanılmıyor** — Fırsat tablosu zorunlu bir Şirket bağlantısı gerektiriyor ve isim/e-posta/telefon/mesaj alanları yok, bu yüzden web sitesi gönderileri için özel olarak `cr0c0_iletisimformukaydi` ("Web Sitesi Iletisim Formu") tablosu oluşturuldu (Ad Soyad, E-posta, Telefon, Şirket Adı, Konu, Mesaj alanlarıyla). Not: Dataverse'in Web API'si bir kayıt oluştururken dahili bir "sahiplik kontrolü" için **Read** yetkisini de istiyor — yalnızca Create yetmiyor; bu proje sırasında canlıda 502 hatasına yol açan asıl neden buydu.
4. **Power Automate akışı** — henüz kurulmadı (opsiyonel — günlük zamanlanmış build zaten bir güvenlik ağı; içerik güncellemesinden sonra anlık yayın için ileride eklenebilir).
5. **Cloudflare Turnstile** — henüz kurulmadı; `PUBLIC_TURNSTILE_SITE_KEY`/`TURNSTILE_SECRET_KEY` ayarlanana kadar form widget'sız ama çalışır durumda.
6. ~~**Azure Static Web Apps kaynağı**~~ — `sonopto-web-sitesi` (Free tier, `mcpp-purchase` kaynak grubu, `victorious-desert-00b3ca10f.1.azurestaticapps.net`) oluşturuldu, deploy token GitHub secret'ı olarak eklendi.
7. ~~**Marka kimliği**~~ — Sonopto Kurumsal Kimlik Kılavuzu'ndan (v1.0, "Sonopto" design system artifact'i) alınan gerçek değerlerle uygulandı: renkler (`#000000`/`#ffffff`/Neon Yeşil `#39ff14`), tipografi (Alata/Roboto Slab/Roboto Mono, self-hosted `@fontsource`), radius-none kuralı ve gerçek logo/favicon/OG görseli (`public/logo.png`, `public/favicon.svg`, `public/og-default.png`). Kalan tek açık nokta: `global.css`'teki `neutral-100..500` gri ton ramp'i kılavuzun tam olarak onaylanmış tonlarıyla değil, makul bir placeholder ile dolduruldu (yalnızca `neutral-400 = #555555` kılavuzdan doğrulandı) — kesinleştiğinde güncellenmeli. Ayrıca wordmark'ın gerçek fontu **Visby Heavy** lisanslı bir dosya olmadığı için şu an Alata (bold) ile render ediliyor.
8. **İçerik incelemesi** — Vizyon & Misyon ve Hakkımızda sayfaları artık kılavuzdaki gerçek marka cümleleriyle güncellendi ("Sonopto kurduysa sorun çıkmaz.", "Müşterinin krizi, bizim önceliğimizdir.", "Sahadaki Çözüm Ortağınız"). Hizmet detayları ve SSS metinleri hâlâ taslak; yayına almadan önce Sonopto ekibi tarafından gözden geçirilmeli. `Projects` listesi şu an boş — gerçek proje içerikleri (KOSGEB, Fuar Ekranları, Konferans Salonu ve yenileri) SharePoint üzerinden girilmeli.
9. ~~**Partner logoları**~~ — Gerçek marka logoları eklendi (beyaz-on-siyah wordmark'lar; ana sayfadaki şerit bu yüzden siyah bantta). Set artık SharePoint'ten yönetiliyor: `Partners` listesi (`Title`, `LogoFile`, `AltText`, `Website`, `SortOrder`, `Published`) + `PartnerLogos` doküman kütüphanesi — ikisi de kuruldu, 12 marka girildi (10'u yayında; Alhambra ve C.F. Martin gitar markaları Pro AV hikâyesine oturmadığı için `Published=false` olarak duruyor, silinmedi). `scripts/provision-partners-list.mjs` kurulumu tekrarlanabilir kılıyor, `scripts/fetch-partner-logos.mjs` build öncesi dosyaları indiriyor. `src/data/partners.ts` yalnızca Graph erişilemediğinde devreye giren yedek. Not: liste/kütüphane **oluşturma** çağrısı `Sites.Manage.All` istiyor ve `az rest` delegated token'ı bunu karşılamıyor (403) — bu iki istek Graph Explorer'dan yapıldı; liste *öğesi* ekleme ve dosya yükleme `az` token'ıyla çalışıyor.
10. ~~**Sektörel Çözümler bölümü**~~ — `/cozumler` (+ `/en/solutions`) altında 4 sektör sayfası eklendi: konferans/toplantı salonu, okul ve eğitim, otel ve konaklama, kamu kurumları. İçerik kimlik kılavuzu §12'deki gerçek sektörel hizmet kalemlerinden yazıldı; her sayfa soru formatında H2'ler ve `FAQPage` şeması içeriyor.
11. **`snpt/` klasörü** — Antigravity ile yapılmış eski içerik çalışmasının referansı (kendi git reposu, ~480MB). `.gitignore`'da; görseller kullanıldıkça `public/` altına optimize edilerek kopyalanıyor. Henüz değerlendirilmeyen içerikler: KOSGEB referans vaka analizi (1.100 kelime + 24 gerçek saha fotoğrafı) ve 2 blog yazısı — blog bölümü açıldığında kullanılabilir.

GitHub Actions secrets olarak ayarlı: `GRAPH_TENANT_ID`, `GRAPH_CLIENT_ID`, `GRAPH_CLIENT_SECRET`, `GRAPH_SITE_ID`, `GRAPH_PROJECTS_LIST_ID`, `GRAPH_MEDIA_DRIVE_ID`, `AZURE_STATIC_WEB_APPS_API_TOKEN`. Azure Static Web Apps Application Settings olarak ayarlı: `DATAVERSE_URL`, `DATAVERSE_TENANT_ID`, `DATAVERSE_CLIENT_ID`, `DATAVERSE_CLIENT_SECRET`.

Aşamalı teslim planı, 301 yönlendirme haritası ve yayına alma kontrol listesi için `PLAN.md` dosyasına bakın.

## Dağıtım (Deployment)

`.github/workflows/azure-static-web-apps.yml`, `main` dalına her push'ta, PR önizlemelerinde, günlük zamanlanmış bir güvenlik ağı olarak ve yukarıdaki Power Automate webhook'u tarafından tetiklenerek build+deploy çalıştırır. Gerekli GitHub secrets: `AZURE_STATIC_WEB_APPS_API_TOKEN` ve yukarıdaki `GRAPH_*`/`PUBLIC_TURNSTILE_SITE_KEY` değerleri.

## Geliştirme

```sh
astro dev --background
```

ile arka planda çalıştırılabilir; `astro dev stop`, `astro dev status`, `astro dev logs` ile yönetilir. Tam Astro dokümantasyonu için https://docs.astro.build.
