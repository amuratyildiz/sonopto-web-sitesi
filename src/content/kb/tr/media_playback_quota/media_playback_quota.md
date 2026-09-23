---
title: 'Medya Oynatma Kotası'
urlSlug: 'oynatma-kotasi'
summary: 'Bir medya dosyasının tüm ekranlarda kaç kez oynatılabileceğini sınırlama, sayacı izleme ve sıfırlama.'
category: 'media_playback_quota'
order: 999
source: 'media_playback_quota/media_playback_quota'
sourceHash: '837aef3af7b33045'
importedAt: '2026-09-24'
---
Medya oynatma kotası, bir medya dosyasının (görsel ya da video) tüm ekranlarda kaç kez oynatılacağını denetlemenizi sağlar. Böylece içerik önceden belirlenmiş sınırlar içinde gösterilir; süreli kampanyalar ve hedefli reklamlar için elverişlidir.

## Temel özellikler

1.  **Kota belirleme**
    Her medya dosyası için ayrı bir oynatma kotası tanımlayın. Kota dolduğunda sistem o medyayı oynatma sırasına almaz.

2.  **Oynatmayı izleme**
    Oynatma sayıları, ekranlardan gelen yayın kanıtı raporlarıyla izlenir. Bu raporlar 5 dakikada bir toplanır. Sayı geçici olarak kotayı aşabilir; yeni raporlar geldikçe güncellenir.

3.  **Sayacı sıfırlama**
    Bir medya dosyasının oynatma sayacını sıfırlayıp yeniden başlatabilirsiniz.

## Nasıl ayarlanır

### Kotayı belirleme

1.  Çalma listesine gidin, ilgili medyada **Edit** düğmesine tıklayın ve yan paneldeki ayarlarda **Playback Quota** bölümünü açın.

<img src="/kb/media_playback_quota/playback-quota-settings-1.webp" alt="Oynatma kotası ayarını açma" title="Oynatma kotası ayarını açma" loading="lazy" decoding="async">

2.  Ayarları aşağıdaki gibi yapılandırın:

<img src="/kb/media_playback_quota/playback-quota-settings-2.webp" alt="Oynatma kotası ayarları" title="Oynatma kotası ayarları" loading="lazy" decoding="async">

### Ayarların anlamı

-   **Enable Media Playback Quota**
    Seçilen medya için özelliği açar ya da kapatır. Kapattığınızda kaydedilmiş ayarlar yok sayılır. Açtığınızda, bu özellik için gerekli olduğundan yayın kanıtı da kendiliğinden etkinleşir.

-   **Playback Quota Limit**
    Bu medyanın tüm ekranlarda en çok kaç kez oynatılacağını belirler. Yayın kanıtı raporları 5 dakikada bir toplandığı için gerçek oynatma sayısı kotayı geçici olarak aşabilir.

-   **Current Playback Count**
    Medyanın tüm ekranlarda kaç kez oynatıldığını gösteren toplam sayıdır. 5 dakikada bir güncellenir.

-   **Refresh**
    Bu medyanın en güncel toplam oynatma sayısını getirir (5 dakikaya kadar gecikme olabilir).

-   **Reset Counter**
    O ana kadar bildirilmiş toplam oynatma sayısını kalıcı olarak siler. Ekranların henüz bildirmediği sayıları silmez.
