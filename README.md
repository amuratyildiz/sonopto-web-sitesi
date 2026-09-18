# Sonopto Web Sitesi

Sonopto'nun kurumsal web sitesi. Astro ile statik olarak üretilir, Azure Static Web Apps üzerinde barındırılır, referans/proje içeriği build zamanında bir SharePoint listesinden Microsoft Graph API ile çekilir, iletişim formu Dataverse'e CRM lead olarak düşer. Detaylı mimari kararlar ve gerekçeleri için bkz. `PLAN.md`.

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
- `scripts/fetch-project-media.mjs` — Build öncesi SharePoint doküman kütüphanesinden proje görsellerini indirir.
- `staticwebapp.config.json` — 301 yönlendirmeleri (eski Odoo URL'leri) + güvenlik başlıkları.

## Ortam Değişkenleri

Kök dizindeki `.env.example` dosyasını `.env` olarak kopyalayıp doldurun (bkz. dosya içi açıklamalar): `GRAPH_TENANT_ID`, `GRAPH_CLIENT_ID`, `GRAPH_CLIENT_SECRET`, `GRAPH_SITE_ID`, `GRAPH_PROJECTS_LIST_ID`, `GRAPH_MEDIA_DRIVE_ID`, `PUBLIC_TURNSTILE_SITE_KEY`.

`api/` fonksiyonu için `api/local.settings.json.example` dosyasını `api/local.settings.json` olarak kopyalayıp doldurun: `DATAVERSE_URL`, `DATAVERSE_TENANT_ID`, `DATAVERSE_CLIENT_ID`, `DATAVERSE_CLIENT_SECRET`, `TURNSTILE_SECRET_KEY`.

Production'da bu değerler GitHub Actions repository secrets (site build'i için) ve Azure Static Web Apps Application Settings (Function runtime'ı için) olarak ayarlanmalı — asla repoya commitlenmemeli.

## Altyapı Durumu

M365/Azure tarafı kuruldu ve GitHub Actions secrets'ları bağlandı:

1. ~~**SharePoint "Projects" listesi**~~ — Kuruldu: `https://sonopto.sharepoint.com/sites/sonopto-web-sitesi`, `Projects` listesi (tam kolon şemasıyla) + `ProjectMedia` doküman kütüphanesi. `scripts/provision-sharepoint-list.mjs` bu kurulumu tekrarlanabilir kılıyor (gerekirse başka bir ortamda yeniden çalıştırılabilir).
2. ~~**Entra ID uygulama kaydı (Graph okuma)**~~ — `Sonopto Web Sitesi - Graph Icerik Okuma` uygulaması, `Sites.Selected` izniyle sadece bu siteye salt-okunur/yazma erişimine sahip (diğer SharePoint sitelerine erişemez).
3. ~~**Entra ID uygulama kaydı + Dataverse Application User (form yazma)**~~ — `Sonopto Web Sitesi - Iletisim Formu Servis Hesabi` uygulaması, `sonoptocrm` ortamında özel bir güvenlik rolüyle (`Web Sitesi Iletisim Formu` — yalnızca Lead tablosunda Create yetkisi) kayıtlı. Graph okuma uygulamasından tamamen ayrı, en az yetkili bir kimlik.
4. **Power Automate akışı** — henüz kurulmadı (opsiyonel — günlük zamanlanmış build zaten bir güvenlik ağı; içerik güncellemesinden sonra anlık yayın için ileride eklenebilir).
5. **Cloudflare Turnstile** — henüz kurulmadı; `PUBLIC_TURNSTILE_SITE_KEY`/`TURNSTILE_SECRET_KEY` ayarlanana kadar form widget'sız ama çalışır durumda.
6. ~~**Azure Static Web Apps kaynağı**~~ — `sonopto-web-sitesi` (Free tier, `mcpp-purchase` kaynak grubu, `victorious-desert-00b3ca10f.1.azurestaticapps.net`) oluşturuldu, deploy token GitHub secret'ı olarak eklendi.
7. ~~**Marka kimliği**~~ — Sonopto Kurumsal Kimlik Kılavuzu'ndan (v1.0, "Sonopto" design system artifact'i) alınan gerçek değerlerle uygulandı: renkler (`#000000`/`#ffffff`/Neon Yeşil `#39ff14`), tipografi (Alata/Roboto Slab/Roboto Mono, self-hosted `@fontsource`), radius-none kuralı ve gerçek logo/favicon/OG görseli (`public/logo.png`, `public/favicon.svg`, `public/og-default.png`). Kalan tek açık nokta: `global.css`'teki `neutral-100..500` gri ton ramp'i kılavuzun tam olarak onaylanmış tonlarıyla değil, makul bir placeholder ile dolduruldu (yalnızca `neutral-400 = #555555` kılavuzdan doğrulandı) — kesinleştiğinde güncellenmeli. Ayrıca wordmark'ın gerçek fontu **Visby Heavy** lisanslı bir dosya olmadığı için şu an Alata (bold) ile render ediliyor.
8. **İçerik incelemesi** — Vizyon & Misyon ve Hakkımızda sayfaları artık kılavuzdaki gerçek marka cümleleriyle güncellendi ("Sonopto kurduysa sorun çıkmaz.", "Müşterinin krizi, bizim önceliğimizdir.", "Sahadaki Çözüm Ortağınız"). Hizmet detayları ve SSS metinleri hâlâ taslak; yayına almadan önce Sonopto ekibi tarafından gözden geçirilmeli. `Projects` listesi şu an boş — gerçek proje içerikleri (KOSGEB, Fuar Ekranları, Konferans Salonu ve yenileri) SharePoint üzerinden girilmeli.
9. **Partner logoları** — `src/data/partners.ts` + `public/partners/*.svg` şu an yer tutucu metin logolar; gerçek marka logoları ve tam/güncel partner listesi ile değiştirilmeli.

GitHub Actions secrets olarak ayarlı: `GRAPH_TENANT_ID`, `GRAPH_CLIENT_ID`, `GRAPH_CLIENT_SECRET`, `GRAPH_SITE_ID`, `GRAPH_PROJECTS_LIST_ID`, `GRAPH_MEDIA_DRIVE_ID`, `AZURE_STATIC_WEB_APPS_API_TOKEN`. Azure Static Web Apps Application Settings olarak ayarlı: `DATAVERSE_URL`, `DATAVERSE_TENANT_ID`, `DATAVERSE_CLIENT_ID`, `DATAVERSE_CLIENT_SECRET`.

Aşamalı teslim planı, 301 yönlendirme haritası ve yayına alma kontrol listesi için `PLAN.md` dosyasına bakın.

## Dağıtım (Deployment)

`.github/workflows/azure-static-web-apps.yml`, `main` dalına her push'ta, PR önizlemelerinde, günlük zamanlanmış bir güvenlik ağı olarak ve yukarıdaki Power Automate webhook'u tarafından tetiklenerek build+deploy çalıştırır. Gerekli GitHub secrets: `AZURE_STATIC_WEB_APPS_API_TOKEN` ve yukarıdaki `GRAPH_*`/`PUBLIC_TURNSTILE_SITE_KEY` değerleri.

## Geliştirme

```sh
astro dev --background
```

ile arka planda çalıştırılabilir; `astro dev stop`, `astro dev status`, `astro dev logs` ile yönetilir. Tam Astro dokümantasyonu için https://docs.astro.build.
