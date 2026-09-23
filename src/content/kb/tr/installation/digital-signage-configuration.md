---
title: 'Uygulama Yapılandırma Dosyası'
urlSlug: 'yapilandirma-dosyasi'
summary: 'conf.txt dosyasıyla pencere boyutu, konum, tam ekran ve ekran kimliği ayarları; iki ekranda tek ya da ayrı içerik oynatma.'
category: 'installation'
order: 19
source: 'installation/digital-signage-configuration'
sourceHash: '9e8ec1def99e8093'
importedAt: '2026-09-23'
---
#### Şu platformlar için geçerlidir:

-   [Windows](/destek/kurulum/windows-kurulumu/)
-   [Linux](/destek/kurulum/linux-kurulumu/)
-   [Raspberry Pi](/destek/kurulum/raspberry-pi-kurulumu/)

#### 1\. Yapılandırma dosyası

Yapılandırma dosyası, uygulama dosyasıyla aynı dizinde bulunması gereken ve adı **“conf.txt”** olan bir metin dosyasıdır.

<img src="/kb/installation/conf_file.webp" alt="Yapılandırma dosyasının konumu" loading="lazy" decoding="async">

Dosyanın içeriği şöyledir:

```
window_width: 1280
window_height: 720
position_y: 0
position_x: 0
fullscreen: yes
screen_id: 1
stop_auto_app_start: yes
```

**window\_width:** Uygulamanın piksel cinsinden genişliği. Yalnızca `fullscreen: no` iken geçerlidir.

**position\_y:** Uygulamanın piksel cinsinden Y konumu. Yalnızca `fullscreen: no` iken geçerlidir.

**position\_x:** Uygulamanın piksel cinsinden X konumu. Yalnızca `fullscreen: no` iken geçerlidir.

**fullscreen:** Genişlik ve yükseklik ayarlarını yok sayarak uygulamayı tam ekran çalıştırır.

**screen\_id:** Aynı oynatıcıda birden çok uygulama örneği çalıştırmak için kullanılır.

**stop\_auto\_app\_start:** Uygulama herhangi bir nedenle kapandığında kendiliğinden yeniden başlamasını engeller.

#### 2\. Uygulamayı tam ekran çalıştırma

Tam ekran çalıştırmak için conf.txt dosyasını açıp şu satırı yazın:

```
fullscreen: yes
```

Tam ekranı kapatmak için:

```
fullscreen: no
```

#### 3\. Uygulamayı ekranın bir bölümünde gösterme

Uygulamayı ekranın yalnızca bir bölümünde göstermek için tam ekranı kapatıp genişlik, yükseklik, x ve y değerleriyle konumlandırın:

```
window_width: 800
window_height: 600
position_y: 150
position_x: 150
fullscreen: no
```

#### 4\. İki ekranı birleştirip tek yayın yapma

<img src="/kb/installation/2-screens-extended.webp" alt="Yan yana iki ekranda tek yayın" loading="lazy" decoding="async">

Uygulamayı yan yana iki ekranı kaplayacak biçimde çalıştırmak için tam ekranı kapatıp genişlik, yükseklik, x ve y değerlerini iki ekranı kapsayacak şekilde ayarlayın. Aşağıdaki örnek, her iki ekranın da 1920x1080 piksel olduğunu varsayar.

x ve y değerlerini sıfır yapın, genişliği 1920x2=3840 ve yüksekliği 1080 piksel olarak ayarlayın:

```
window_width: 3840
window_height: 1080
position_y: 0
position_x: 0
fullscreen: no
```

Pencere çubuğunu kapatmak için `position_y` değerini eksi vermeniz gerekebilir. Bu durumda uygulamanın tam ekranı kaplaması için aynı miktarı yüksekliğe eklemeyi unutmayın:

```
window_width: 3840
window_height: 1100
position_y: -20
position_x: 0
fullscreen: no
```

#### 5\. İki ekrandan yalnızca birinde yayın yapma

<img src="/kb/installation/2-screens-1080.webp" alt="İki ekrandan birinde yayın" loading="lazy" decoding="async">

Aynı oynatıcıya bağlı, her biri 1920x1080 piksel iki ekranınız olduğunu ve yayının 2. ekranda çalışmasını istediğinizi varsayalım. Yapılandırma şöyle olmalıdır:

```
window_width: 1920
window_height: 1080
position_y: 0
position_x: 1920
fullscreen: yes
```

Yayının 1. ekranda çalışmasını istiyorsanız `position_x` değerini 0 yapmanız yeterlidir:

```
window_width: 1920
window_height: 1080
position_y: 0
position_x: 0
fullscreen: yes
```

#### 6\. İki ekranda farklı içerik oynatma

Aynı oynatıcıyla iki ya da daha fazla ekranda farklı içerik oynatmak için:

-   1 - Uygulama dosyalarının bulunduğu klasörü kopyalayarak uygulamanın ikinci bir örneğini oluşturun:

<img src="/kb/installation/two-applications.webp" alt="Aynı oynatıcıda iki uygulama klasörü" loading="lazy" decoding="async">

-   2 - 1. ekran için `screen_id` değerini 1 yapın ve x değerini 0 pikselde bırakın.

```
window_width: 1920
window_height: 1080
position_y: 0
position_x: 0
fullscreen: yes
screen_id:1
```

-   3 - 2. ekran için `screen_id` değerini 2 yapın ve x değerini 1920 piksel yapın.

```
window_width: 1920
window_height: 1080
position_y: 0
position_x: 1920
fullscreen: yes
screen_id:2
```

-   4 - Her uygulama dosyasını ayrı ayrı çalıştırın. İki uygulama aynı anda çalışıp iki ayrı ekran kodu gösterecektir. İkisini de hesabınıza tanımlamak için iki lisansa ihtiyacınız olur.
