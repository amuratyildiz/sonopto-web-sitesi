---
title: 'sonopto.signage configuration file'
urlSlug: 'digital-signage-configuration'
summary: 'sonopto.signage configuration file'
category: 'installation'
order: 19
source: 'installation/digital-signage-configuration'
sourceHash: '85ed90cd6e077b20'
importedAt: '2026-09-23'
---
#### Configuration for:

-   [](/en/support/installation/digital-signage-install-windows/)Windows
-   [](/en/support/installation/install-digital-signage-linux/)Linux
-   [](/en/support/installation/install-digital-signage-raspberry-pi/)Raspberry Pi

#### 1\. The Configuration File

The configuration file is a text file that should be placed in the same directory as the software application file and should be named **“conf.txt”**.

<img src="/kb/installation/conf_file.webp" alt="Digital Signage Config file" loading="lazy" decoding="async">

Configuration file contains the below

```
window_width: 1280
window_height: 720
position_y: 0
position_x: 0
fullscreen: yes
screen_id: 1
stop_auto_app_start: yes
```

**window\_width:** The width of the application in pixels, this only works when fullscreen is set to no.

**position\_y:** The Y position of the application in pixels, this only works when fullscreen is set to no.

**position\_x:** The X position of the application in pixels, this only works when fullscreen is set to no.

**fullscreen:** Force the application to go fullscreen, ignoring width and height settings.

**screen\_id:** Used to run multiple digital signage software instances on the same player.

**stop\_auto\_app\_start:** Used to stop auto start the digital signage application if it closes for any reason.

#### 2\. How do you run the application in fullscreen mode?

To run the application in fullscreen mode, edit the conf.txt file and set the fullscreen: yes as below:

```
fullscreen: yes
```

To disable fullscreen mode, set fullscreen: no as below:

```
fullscreen: no
```

#### 3\. Set the digital signage to display on part of a screen

To set the application to be displayed on part of the screen, you will need to disable the fullscreen mode and use width, height, x and y configuration to position the application as below:

```
window_width: 800
window_height: 600
position_y: 150
position_x: 150
fullscreen: no
```

#### 4\. Play sonopto.signage on Two Extended Screens

<img src="/kb/installation/2-screens-extended.webp" alt="2-screens-extended" loading="lazy" decoding="async">

To set up the application on two extended screens, disable fullscreen mode and use width, height, x, and y configuration to position the application across the two screens. Here’s an example assuming each screen is 1920x1080px.

set x and y to zero, set the width two 1920x2=3840 and the height to 1080px

```
window_width: 3840
window_height: 1080
position_y: 0
position_x: 0
fullscreen: no
```

You may need to set position\_y to a negative value to cover the window bar. Make sure to add the negative value to the height to extend the application to fullscreen, like this:

```
window_width: 3840
window_height: 1100
position_y: -20
position_x: 0
fullscreen: no
```

#### 5\. Play sonopto.signage on One of the two connected screens

<img src="/kb/installation/2-screens-1080.webp" alt="2-screens-1080" loading="lazy" decoding="async">

  Assuming you have two screens connected to the same player, each 1920x1080px, in the configuration below, and you want the digital signage application to play on screen 2, the configuration should be as follows:

```
window_width: 1920
window_height: 1080
position_y: 0
position_x: 1920
fullscreen: yes
```

and if you want to the application to play on screen 1, just set the position\_x: 0 as follows

```
window_width: 1920
window_height: 1080
position_y: 0
position_x: 0
fullscreen: yes
```

#### 6\. Run the digital signage application on two screens, different content

To run different content on two or more different screens using the same player, follow the below steps:

-   1 - Make another copy of the application by coping the folder containing the application files as the below example:

<img src="/kb/installation/two-applications.webp" alt="2-screens-1080" loading="lazy" decoding="async">

-   2 - For screen 1, update screen\_id to 1 and keep x at 0 pixels.

```
window_width: 1920
window_height: 1080
position_y: 0
position_x: 0
fullscreen: yes
screen_id:1
```

-   3 - For screen 2, update screen\_id to 2 and keep x at 1920 pixels.

```
window_width: 1920
window_height: 1080
position_y: 0
position_x: 1920
fullscreen: yes
screen_id:2
```

-   4 - Run each application file separately. Both applications should run simultaneously and display two unique screen hash codes. You will need two licenses to assign both applications to your account.
