# Sonopto Web Sitesi Yeniden Yapılanma Planı

## Context

Sonopto'nun kurumsal web sitesi (www.sonopto.com) şu anda Odoo üzerinde barındırılıyor. Şirket Microsoft 365 ortamına geçtiği için Odoo aboneliği iptal edilecek ve site tamamen yeniden inşa edilecek. Hedef: hafif, hızlı, güçlü SEO altyapısına sahip, kolayca yönetilebilen (blog/referans projesi ekleme dahil), mevcut marka kimliğine sadık kalan ve M365/Dataverse ekosistemiyle uyumlu bir site.

Çalışma dizini (`C:\Users\alimu\OneDrive\Documents\sonopto_web_sitesi`) ve hedef GitHub reposu (`amuratyildiz/sonopto-web-sitesi`) şu anda tamamen boş — bu sıfırdan bir proje kurulumu.

Mevcut canlı site incelenerek (sitemap + sayfa içerikleri) şu bulgular elde edildi:
- Sayfalar: `/`, `/hizmetler` (+4 alt sayfa), `/kurumsal/hakkimizda`, `/vizyon-misyon`, `/referanslar`, `/iletisim`, `/teknik-servis`, `/helpdesk/destek-2/knowledgebase`, ve Odoo blog modülü üzerinden yayınlanan 3 "referans proje" yazısı (`/blog/referanslar-5/...`).
- Referans projeler aslında blog modülü kullanılarak yayınlanan proje vaka analizleri (başlık, tarih, 9 fotoğraflık galeri, çok bölümlü metin, proje bilgi tablosu, SSS bloğu).
- İletişim bilgileri: `info@sonopto.com`, `+90 850 302 81 26`, Cevizlidere Mah. 1243 Sk. 4/A Palmiye İş Merkezi, Çankaya/Ankara. İletişim formu alanları: Ad*, Telefon, E-posta*, Şirket, Konu*, Mesaj*.
- `/teknik-servis` Sonopto'ya özel olmayan jenerik bir Odoo şablon sayfası; `/helpdesk/.../knowledgebase` pratikte tek gerçek makale içeriyor. **Karar: ikisi tek bir statik `/sss` (SSS) sayfasına dönüştürülecek, eski URL'ler oraya 301 yönlendirilecek.**

## Onaylanan Kararlar

1. **Platform**: Statik site üretimi (Astro, `output: 'static'`) → Azure Static Web Apps üzerinde barındırma, GitHub Actions ile CI/CD.
2. **İçerik yönetimi (referans projeler)**: Üçüncü parti headless CMS yerine **SharePoint Listesi**, build zamanında Microsoft Graph API ile çekiliyor. Gerekçe: ek maliyet yok, ekip zaten SharePoint/Excel arayüzüne aşina, Odoo'dan M365'e konsolidasyon stratejisiyle uyumlu.
3. **M365/Dataverse entegrasyonu (v1 kapsamı)**: İletişim formu gönderimleri Dataverse'e CRM lead olarak düşecek; bunun ötesinde altyapı Azure/M365 ekosistemiyle uyumlu olacak (SSO veya başka Dataverse tablosu v1'de yok).
4. **Dil**: Türkçe (varsayılan, kök URL'lerde) + İngilizce (`/en/...` altında).
5. **Teknik Servis/Helpdesk**: Küçük bir `/sss` sayfasında birleştirilecek, eski URL'ler 301 ile oraya yönlendirilecek.

## Mimari

### Framework: Astro (Next.js değil)

Gerekçe: Site ağırlıklı olarak statik kurumsal içerik; etkileşimli tek gerçek eleman iletişim formu (+ dil değiştirici, galeri lightbox). Astro'nun "islands" mimarisi varsayılan olarak sıfır JS gönderir, sadece gereken bileşenleri hydrate eder — Next.js'in varsayılan React runtime yüküne göre "hafif/hızlı/SEO" hedefine çok daha uygun. Azure Static Web Apps'in yerel/en iyi desteklenen senaryosu tam statik çıktıdır (Next.js'in hibrit SSR desteği Azure'da ekstra Functions katmanı ve kısıtlamalar gerektirir). Astro'nun build-time veri çekme modeli (Graph API'den tek seferlik çekim → statik HTML) doğrudan ihtiyaca denk düşüyor.

### Proje Klasör Yapısı

```
sonopto-web-sitesi/
├── .github/workflows/azure-static-web-apps.yml   # build+deploy, PR preview, zamanlanmış rebuild
├── api/contact-submit/                            # Azure Function (SWA Managed Functions)
│   ├── index.ts                                   # doğrulama + Dataverse Web API çağrısı
│   └── function.json
├── src/
│   ├── components/
│   │   ├── layout/ (Header, Footer, LanguageSwitcher)
│   │   ├── sections/ (Hero, ServiceCard, PartnerLogos, CaseStudyCard, FaqAccordion, ProjectFactsTable)
│   │   └── seo/ (SeoHead, JsonLd, Breadcrumbs)
│   ├── content/i18n/ (tr.json, en.json)
│   ├── lib/
│   │   ├── graph/ (graphClient.ts, projects.ts, media.ts, types.ts)
│   │   ├── i18n/routes.ts                         # sayfa slug eşlemesi TR↔EN
│   │   └── seo/ (schema.ts, meta.ts)
│   ├── layouts/ (BaseLayout.astro, CaseStudyLayout.astro)
│   ├── pages/
│   │   ├── index.astro
│   │   ├── hizmetler/ (index, kurulum-ve-montaj, bakim-ve-onarim, danismanlik-hizmetleri, satis-ve-tedarik)
│   │   ├── kurumsal/hakkimizda.astro
│   │   ├── vizyon-misyon.astro
│   │   ├── referanslar/index.astro, [slug].astro
│   │   ├── sss.astro                              # teknik-servis + helpdesk birleşimi
│   │   ├── iletisim.astro
│   │   ├── en/ (yukarıdaki ağacın EN karşılığı)
│   │   └── 404.astro
│   └── styles/global.css
├── public/ (favicon, marka varlıkları — logo dosyası müşteriden istenecek)
├── astro.config.mjs
├── staticwebapp.config.json                       # 301 yönlendirme haritası + güvenlik başlıkları
├── tailwind.config.cjs
└── README.md
```

## SEO Uygulama Kontrol Listesi

- Her sayfada `SeoHead.astro` üzerinden title/description/canonical/ogImage.
- Open Graph + Twitter card.
- Dile özgü self-referencing canonical (TR/EN gerçekten farklı içerik, birbirine canonicalize edilmeyecek).
- `hreflang="tr"`, `hreflang="en"`, `hreflang="x-default"` (TR'ye işaret eder).
- `@astrojs/sitemap` (i18n/hreflang desteğiyle) → `sitemap-index.xml`; dinamik `/referanslar/[slug]` rotaları otomatik dahil olur.
- `robots.txt`: `/api/` disallow, sitemap referansı.
- JSON-LD: `Organization` (gerçek telefon/e-posta ile), `ProfessionalService`/`LocalBusiness` (gerçek Ankara adresiyle), her sayfada `BreadcrumbList`, her proje sayfasında `Article`.
- Core Web Vitals: `astro:assets` ile responsive WebP/AVIF görseller + explicit width/height (CLS önleme), self-hosted WOFF2 font (`font-display: swap`), Tailwind CSS purge, Azure SWA CDN + Brotli.
- `staticwebapp.config.json` `globalHeaders`: CSP, X-Frame-Options, Referrer-Policy, HSTS.

## 301 Yönlendirme Haritası

Kök karar: **TR öntanımlı ve prefix'siz kalır** (`/`), **EN `/en/...` altına eklenir** — bu, mevcut indekslenmiş URL'lerin büyük çoğunluğunu değiştirmeden koruyarak yönlendirme sayısını minimuma indirir. Astro config: `i18n: { locales: ['tr','en'], defaultLocale: 'tr', routing: { prefixDefaultLocale: false } }`.

| Eski URL | Yeni URL | Not |
|---|---|---|
| `/`, `/hizmetler`, `/hizmetler/*` (4 alt sayfa), `/kurumsal/hakkimizda`, `/vizyon-misyon`, `/referanslar`, `/iletisim` | değişmez | aynı path korunuyor |
| `/blog/referanslar-5` | 301 → `/referanslar` | eski "blog index" listeleme sayfasına birleşiyor |
| `/blog/referanslar-5/feed` | 301 → `/rss.xml` (opsiyonel) veya `/referanslar` | |
| `/blog/referanslar-5/kosgeb-x-garaj-teknoloji-gelistirme-merkezi-led-video-wall-kurulumu-7` | 301 → `/referanslar/kosgeb-x-garaj-teknoloji-gelistirme-merkezi-led-video-wall-kurulumu-7` | slug SharePoint'te birebir yeniden oluşturulmalı |
| `/blog/referanslar-5/fuar-ekranları-6` | 301 → `/referanslar/fuar-ekranlari-6` | kaynak slug'da "ı" var — hem UTF-8 hem percent-encoded (`%C4%B1`) formu için yönlendirme kuralı eklenmeli; yeni slug ASCII'ye normalize edilecek |
| `/blog/referanslar-5/konferans-salonu-5` | 301 → `/referanslar/konferans-salonu-5` | |
| `/teknik-servis` | 301 → `/sss` | |
| `/helpdesk/destek-2/knowledgebase` | 301 → `/sss` | tek gerçek makale (LED ekran piksel aralığı) `/sss` içine taşınacak |

Uygulama: Azure Static Web Apps'in `staticwebapp.config.json` `routes` dizisi (`redirect` + `statusCode: 301`), edge'de değerlendirilir, ek maliyet yok, git ile versiyonlanır. Özel bir `404.astro` eklenecek. Lansmandan sonraki 2-4 hafta Google Search Console Coverage raporu izlenerek atlanan legacy URL kalıpları yakalanacak.

**DNS notu**: Sadece web A/CNAME kayıtları değiştirilecek; MX/SPF/DKIM/TXT kayıtlarına dokunulmayacak (şirket M365 posta geçişinde).

## İçerik Modeli: SharePoint Listesi

**Tek liste (`Projects`)**, iki ayrı liste değil — mevcut site zaten blog ve referans projeyi aynı içerik olarak kullanıyor, tek liste editoryal yükü azaltır. İleride gerçek bir haber akışı gerekirse `ContentType` alanı sayesinde şema değişikliği gerekmeden ayrılabilir.

| Alan | Tip | Not |
|---|---|---|
| Title / TitleEN | Tek satır metin | EN boşsa çeviri henüz yok demektir |
| Slug / SlugEN | Tek satır metin | mevcut 3 proje için legacy Odoo slug'larıyla birebir eşleşmeli |
| ContentType | Seçim: Project / News | varsayılan Project |
| Client, Location | Tek satır metin | Location, `ProfessionalService` şemasında da kullanılır |
| Category/Tags | Çoklu seçim | LED Video Wall, Konferans Sistemleri, Ses Sistemleri, Sahne Işık vb. |
| PublishDate, Published, SortOrder | Tarih / Evet-Hayır / Sayı | build sadece `Published=true` olanları alır |
| MediaFolder | Bağlantılı `ProjectMedia` doküman kütüphanesindeki klasöre link | proje başına bir klasör, kapak görseli `cover.jpg` |
| BodyTR / BodyEN | Çok satır zengin metin | EN boşsa proje EN listesinden filtrelenir (stub sayfa üretilmez) |
| MetaDescriptionTR/EN | Tek satır metin (opsiyonel) | |
| ProjectFacts, FaqItems | JSON (çok satır düz metin) veya ayrı kolonlar | canlı KOSGEB yazısındaki proje bilgi tablosu ve SSS bloğunu besler |

Görseller **doküman kütüphanesinden** (Attachments değil) Graph `/drives/{id}/root:/{path}:/children` ile toplu çekilir, build sırasında indirilip `astro:assets` ile optimize WebP/AVIF olarak `dist/`'e gömülür — ziyaretçi tarafında SharePoint'e hiçbir runtime bağımlılık kalmaz.

## Microsoft Graph Entegrasyonu (Build-Time)

- Entra ID uygulama kaydı: **application permission `Sites.Selected`** (tüm tenant değil, sadece ilgili SharePoint sitesine salt-okunur erişim — bir kerelik admin onayı gerekir).
- Auth: OAuth2 client credentials (`@azure/identity` `ClientSecretCredential` + `@microsoft/microsoft-graph-client`).
- Secrets (`GRAPH_TENANT_ID/CLIENT_ID/CLIENT_SECRET`) GitHub Actions repository secrets olarak saklanır, sadece build job ortamına enjekte edilir.
- **Rebuild tetikleme (hibrit)**: Power Automate ("item created/modified" on `Projects`) → GitHub `repository_dispatch` (anlık yayın) **+** günlük zamanlanmış GitHub Actions cron (güvenlik ağı) **+** manuel `workflow_dispatch`.

## İletişim Formu → Dataverse Entegrasyonu

**Azure Function (`/api/contact-submit`, SWA Managed Functions)** — tarayıcıdan doğrudan Power Automate HTTP tetikleyicisine bağlanmak, sayfa kaynağında herkese açık, token gerektirmeyen bir uç nokta bırakır. Bunun yerine:

Tarayıcı → `/api/contact-submit` (same-origin) → Function alan doğrulama + honeypot + Turnstile kontrolü → `@azure/identity` ile **ayrı, en az yetkili** bir Entra uygulaması + Dataverse Application User (Lead tablosunda sadece Create yetkisi) → `POST .../api/data/v9.2/leads`.

Bu kimlik bilgisi, Graph okuma kimlik bilgisinden **tamamen ayrı** olacak (biri sadece SharePoint okur, diğeri sadece Dataverse'e lead yazar). Secrets, Azure Static Web Apps Application Settings'te saklanır. Spam koruması: Cloudflare Turnstile (ücretsiz) + honeypot alan + Function içinde basit IP bazlı rate limiting.

## Çok Dillilik (i18n)

- URL yapısı: TR kökte prefix'siz, EN `/en/...` altında.
- Sayfa bazlı slug çevirisi `src/lib/i18n/routes.ts` içinde tek bir haritada tutulur (`hizmetler/kurulum-ve-montaj` ↔ `en/services/installation-and-assembly`), hem EN sayfa ağacını üretmek hem `astro:i18n`'in `getRelativeLocaleUrl()` ile hreflang/dil değiştirici linkleri üretmek için kullanılır.
- Dil değiştirici, çevirisi olmayan içerikte 404 yerine ilgili dilin listeleme/ana sayfasına düşer (v1'de çoğu proje sadece TR olacağı için önemli).

## Tasarım Sistemi / Marka Kimliği

Otomatik ekran görüntüsü/metin analizi güvenilir hex/font değerleri veremiyor, bu yüzden:
1. Canlı sitede Chrome DevTools → Computed panelinden navbar/body/CTA renkleri ve font-family manuel olarak not alınacak.
2. Kullanılan web fontu tespit edilip lisanslanacak veya (Odoo temasına gömülü ücretli bir fontsa) Inter/Manrope gibi açık kaynak bir alternatif seçilecek.
3. **Logo kaynak dosyası (SVG/AI/EPS veya en az yüksek çözünürlüklü şeffaf PNG) doğrudan müşteriden istenecek** — ekran görüntüsünden yeniden türetilmeyecek.
4. Onaylanan değerler tek bir marka teması + CSS custom properties olarak merkezi hale getirilecek.
5. Partner logoları (AMX, Audio-Technica, Martin vb.) basit bir statik `src/data/partners.ts` dizisi olarak tutulacak (nadiren değiştiği için SharePoint'e gerek yok).

## Aşamalı Teslim Planı

- **Faz 0 — Kurulum (~1 hafta)**: Repo/Azure SWA kaynağı (Free tier ile başla), Entra uygulama kayıtları ve Dataverse Application User provisioning erken başlatılır (tenant/Power Platform admin onayı gerektirdiği için muhtemel darboğaz budur).
- **Faz 1 — Statik sayfalar + tasarım sistemi + temel SEO (2-3 hafta)**: Astro iskeleti, Tailwind marka tokenleri, tüm TR statik sayfalar (`/sss` dahil), sitemap/robots/JSON-LD, `staticwebapp.config.json` iskeleti, GitHub Actions CI + SWA PR preview ortamları.
- **Faz 2 — SharePoint içerik entegrasyonu (2 hafta)**: `Projects` listesi + `ProjectMedia` kütüphanesi kurulumu, Graph fetch/görsel optimizasyon pipeline'ı, mevcut 3 projenin legacy slug'larla birebir taşınması, Power Automate rebuild webhook'u + zamanlanmış güvenlik ağı.
- **Faz 3 — Dataverse iletişim formu (1-2 hafta)**: Azure Function, Dataverse Application User + güvenlik rolü, Turnstile + honeypot, uçtan uca lead oluşturma testi.
- **Faz 4 — İngilizce içerik + yönlendirmeler + geçiş (2-3 hafta)**: EN çeviriler, EN slug haritası, hreflang, tam yönlendirme tablosunun QA'i (Screaming Frog ile redirect chain/loop taraması).

**Yayına alma kontrol listesi**: Odoo'da içerik dondurma → staging'de tam redirect/sitemap/hreflang QA → DNS TTL'i 24-48 saat önceden düşürme → Azure SWA custom domain + TLS doğrulama → geçiş (sadece web A/CNAME, MX/SPF/DKIM'e dokunma) → her yönlendirilen URL ve canlı iletişim formunun geçiş sonrası kontrolü → Google Search Console + Bing Webmaster Tools'a sitemap yeniden gönderimi → 2-4 hafta Coverage/404 izleme → Odoo'yu ancak stabil bir dönemden sonra ve içerik/helpdesk geçmişinin tam yedeği alındıktan sonra kapatma.

## Kullanılacak Ana Paketler/Teknolojiler

`astro`, Tailwind (v4 Vite plugin veya `@astrojs/tailwind`), `@astrojs/sitemap`, `astro:assets`, `astro:i18n`, `@astrojs/rss` (opsiyonel), `@microsoft/microsoft-graph-client` + `@azure/identity`, `zod`, `@azure/functions` v4, Cloudflare Turnstile, `Azure/static-web-apps-deploy@v1`, Power Automate (sadece SharePoint webhook için).

## Doğrulama

- Yerel: `astro build` + `astro preview` ile tüm statik sayfaların ve `/referanslar/[slug]` dinamik rotalarının build zamanında SharePoint'ten doğru veri çekerek üretildiğini doğrula.
- SEO: build çıktısında `sitemap-index.xml`, `robots.txt`, her sayfada canonical/hreflang/JSON-LD varlığını kontrol et (ör. Google Rich Results Test).
- Erişilebilirlik/performans: Lighthouse ile Core Web Vitals ölç.
- Yönlendirmeler: yukarıdaki tablodaki her eski URL'nin staging ortamında doğru 301 hedefine düştüğünü manuel/Screaming Frog ile doğrula.
- İletişim formu: Azure Function'ın test ortamında gerçek bir Dataverse lead kaydı oluşturduğunu uçtan uca doğrula; honeypot ve Turnstile'ın spam'i engellediğini test et.
- Çok dillilik: dil değiştiricinin her sayfada doğru karşılığa gittiğini, çevirisi olmayan projelerde 404 yerine listeleme sayfasına düştüğünü kontrol et.

## Uygulama Notları (Planla Farklar)

Bu plan uygulanırken aşağıdaki küçük teknik sapmalar yapıldı, sonuç aynı hedefe hizmet ediyor:

- `tailwind.config.cjs` yerine Tailwind v4'ün CSS-first `@theme` bloğu (`src/styles/global.css`) kullanıldı — tek kaynak marka teması hedefi aynı şekilde karşılanıyor, ayrıca otomatik olarak CSS custom properties olarak da dışa veriliyor.
- `content/i18n/tr.json`/`en.json` yerine tip güvenliği için `tr.ts`/`en.ts` (TypeScript nesneleri) kullanıldı.
- `/rss.xml` ilk sürümde inşa edilmedi; `/blog/referanslar-5/feed` şimdilik `/referanslar`'a yönlendiriliyor (bkz. `staticwebapp.config.json`).
- SharePoint görsellerini indiren `scripts/fetch-project-media.mjs` bir `prebuild` npm script'i olarak eklendi; `GRAPH_MEDIA_DRIVE_ID` ayarlı değilse no-op olarak geçer.
- `astro:assets` ile responsive görsel optimizasyonu ilk sürümde uygulanmadı (görseller şu an düz `<img>` ile render ediliyor) — gerçek proje görselleri SharePoint'ten geldiğinde `astro:assets`'e geçiş önerilir.

## Marka Kimliği — Kılavuzdan Alınan Gerçek Değerler

Plan yazıldığı sırada marka renkleri/fontu bilinmiyordu (bkz. "Tasarım Sistemi / Marka Kimliği" bölümündeki orijinal placeholder yaklaşımı). Uygulama sırasında Sonopto'nun gerçek Kurumsal Kimlik Kılavuzu'na (v1.0, Şubat 2026 — "Sonopto" design system artifact'i, Cowork üzerinden pptx'ten çıkarıldı) erişildi ve şu gerçek değerler siteye uygulandı:

- **Renk formülü**: %70 Siyah (`#000000`) / Beyaz (`#ffffff`) + %20 gri tonlar + %10 Neon Yeşil (`#39ff14`, sadece buton/CTA/logonun noktası — gövde metninde asla kullanılmaz).
- **Tipografi**: Başlıklar **Alata** (her zaman bold), gövde metni **Roboto Slab** (1.6–1.8 satır aralığı), meta/altbilgi etiketleri **Roboto Mono** — üçü de açık kaynak (Google Fonts) olduğu için `@fontsource` ile self-hosted edildi. Wordmark'ın gerçek fontu **Visby Heavy**'dir ancak lisanslı dosyası mevcut olmadığından siteye Alata (bold) yedek olarak uygulandı.
- **Radius kuralı**: Kart/buton/form gibi UI blokları köşe yuvarlama kullanmaz (`radius-none`); yalnızca fotoğraf çerçevelerinde hafif bir yuvarlama vardır (`rounded-photo`, 4px). Bu, sitedeki tüm `rounded-full`/`rounded-2xl`/`rounded-lg` kullanımlarının kaldırılmasını gerektirdi (küçük madde işareti noktaları ve favicon'daki daire motifleri hariç — bunlar "köşe yuvarlama" değil, kasıtlı dairesel şekiller).
- **Logo**: Gerçek logo dosyaları (siyah/beyaz/renkli varyantlar, PNG) design system'in asset deposundan alınıp `public/logo.png` (JSON-LD için) ve yeni `public/favicon.svg`/`public/og-default.png` için kaynak olarak kullanıldı.
- **Marka sesi**: Vizyon/Misyon ve Hakkımızda sayfaları artık kılavuzun kendi cümleleriyle yazılı: vizyon "Sonopto kurduysa sorun çıkmaz.", misyon "Müşterinin krizi, bizim önceliğimizdir.", konumlandırma "Sahadaki Çözüm Ortağınız."
- **Açık kalan nokta**: `neutral-100..500` gri ton ramp'inin tam değerleri kılavuzdan henüz tek tek doğrulanmadı (yalnızca `neutral-400 = #555555` kaynakta teyitli) — şu anki ramp makul bir placeholder'dır.
