---
title: 'Install Player on Samsung Digital Signage'
urlSlug: 'samsung-digital-signage'
summary: 'How to install digital signage app on Samsung SSSP Commercial Display'
category: 'installation'
order: 17
source: 'installation/samsung-digital-signage'
sourceHash: 'bbe678add729fa6f'
importedAt: '2026-09-23'
---
### Samsung SSSP Commercial Display Support

-   SSSP 6.0 on Tizen 4.0 or SSSP 10 on Tizen 6.5 or higher

_Check the [full list of supported devices](#list-of-supported-sssp-models)._

### Install from URL

#### [Tizen 4.0](#tizen-40-1)

-   [Tizen 4.0 existing screen](#tizen-40-option-1-follow-this-if-samsung-sssp-is-already-in-use)
-   [Tizen 4.0 Brand New Screen](#tizen-40-option-2-follow-this-if-samsung-sssp-is-brand-new-or-after-a-factory-reset)

#### [Tizen 6.5](#tizen-65-1)

-   [Tizen 6.5 Existing Screen](#tizen-65-option-1-follow-this-if-samsung-sssp-is-already-in-use)
-   [Tizen 6.5 Brand New Screen](#tizen-65-option-2-follow-this-if-samsung-sssp-is-brand-new-or-after-a-factory-reset)

#### [Tizen 7](#tizen-7-1)

### [Install from USB Flash Drive](#install-from-usb-flash-drive-1)

-   [Install from USB Flash Drive on Tizen 4.0](#usb-setup-on-sssp6---tizen-40-display)
-   [Install from USB Flash Drive on Tizen 6.5](#usb-setup-on-sssp10---tizen-65-display)

### [How to Switch from MagicInfo to URL Launcher](#how-to-switch-a-samsung-display-from-magicinfo-to-url-launcher)

### [How to Fix “Unable to connect to the server, Please try again later” on Samsung Tizen](#how-to-fix-unable-to-connect-to-the-server-please-try-again-later-on-samsung-tizen-1)

* * *

## Tizen 4.0

#### Tizen 4.0 Option 1: Follow this if Samsung SSSP is already in use

-   Make sure that the time is set up correctly. **Press Menu** > **System** > **Time**.
-   Make sure that **Secured Protocol** is on. **Press Menu** > **System** > **Security**.

<img src="/kb/installation/secure_protocol.webp" alt="URL Launcher Settings" loading="lazy" decoding="async">

-   Press **HOME** on the remote control
-   Go to **URL Launcher Settings**

<img src="/kb/installation/sssp-url-launcher-icon.webp" alt="URL Launcher Settings" loading="lazy" decoding="async">

-   Uninstall any previously installed apps
    
-   Type in the URL of the digital signage app
    
    ```
    https://app-ds.net/ts
    ```
    
-   Click on **Done**
    

<img src="/kb/installation/sssp-url-no-brand-launcher-settings.webp" alt="URL Launcher Settings Type" loading="lazy" decoding="async">

-   sonopto.signage app is now installed, it will start automatically.

<img src="/kb/installation/sssp-nobrand-urllauncher.webp" alt=" URL Launcher" loading="lazy" decoding="async">

-   When the app starts, the hash code will show on the screen
-   Go to the management console and add your screen

<img src="/kb/installation/sssp-hash-code.webp" alt="Hash Code" loading="lazy" decoding="async">

#### Tizen 4.0 Option 2: Follow this if Samsung SSSP is brand new or after a factory reset

The brand new device will start with an initial setup, Follow the below instructions:

-   Choose **Basic Setup** in the installation type page.

<img src="/kb/installation/sssp-basic-setup.webp" alt="Basic Setup" loading="lazy" decoding="async">

-   Select a language.

<img src="/kb/installation/sssp-language.webp" alt="Language" loading="lazy" decoding="async">

-   Choose the orientation (Landscape or Portrait).

_You can change the orientation remotely from the management console later on - after adding the screen_

<img src="/kb/installation/sssp-orientation.webp" alt="Orientation" loading="lazy" decoding="async">

-   Set Auto Power off to OFF

<img src="/kb/installation/sssp-autopoweroff.webp" alt="Auto Power Off" loading="lazy" decoding="async">

-   Set your network connection (Wireless or wired)

<img src="/kb/installation/sssp-network.webp" alt="Network" loading="lazy" decoding="async">

-   In **Play Via** page, Choose play via **URL Launcher**
    
-   Type in the URL of the digital signage player for SSSP
    
    ```
    https://app-ds.net/ts
    ```
    

<img src="/kb/installation/sssp-play-via-url-launcher.webp" alt="Play Via" loading="lazy" decoding="async">

-   Click on Done

<img src="/kb/installation/sssp-url-no-brand-launcher-settings.webp" alt="URL Launcher" loading="lazy" decoding="async">

-   Choose **Skip** in the step of **Connect to RM Server**

<img src="/kb/installation/sssp-rm-server.webp" alt="Skip RM Server" loading="lazy" decoding="async">

-   Set the correct date and time.

<img src="/kb/installation/sssp-clock.webp" alt="Date and time" loading="lazy" decoding="async">

-   Setup is complete. Digital Signage Player is ready to use.

<img src="/kb/installation/sssp-setup-done.webp" alt="Setup Done" loading="lazy" decoding="async">

-   sonopto.signage app is now installed, it will start automatically

<img src="/kb/installation/sssp-nobrand-urllauncher.webp" alt="URL Launcher" loading="lazy" decoding="async">

-   When the app starts, the hash code will show on the screen
    
-   Go to the management console and add your screen
    

<img src="/kb/installation/sssp-hash-code.webp" alt="Hash Code" loading="lazy" decoding="async">

* * *

## Tizen 6.5

#### Tizen 6.5 Option 1: Follow this if Samsung SSSP is already in use

-   From the Remote Control, Press **HOME**
    
-   From the menu, Choose **Custom App**
    
-   In case there was a previous application installed, it will show near App Management
    

<img src="/kb/installation/sssp-65-14-no-brand.webp" alt="previous app" loading="lazy" decoding="async">

-   Choose it and click Uninstall
    
    <img src="/kb/installation/sssp-65-15-no-brand.webp" alt="Uninstall" loading="lazy" decoding="async">
    
-   Choose **Install Custom App**
    
-   Type in the URL of digital signage player app
    
    ```
    https://app-ds.net/ts
    ```
    

<img src="/kb/installation/sssp-65-16-no-brand.webp" alt="Custom App" loading="lazy" decoding="async">

-   The App will download and start automatically
    
    <img src="/kb/installation/sssp-65-13.webp" alt="Installing" loading="lazy" decoding="async">
    
-   When the app starts, the hash code will show on the screen
    
-   Go to the management console and add your screen
    

<img src="/kb/installation/sssp-hash-code.webp" alt="Hash Code" loading="lazy" decoding="async">

#### Tizen 6.5 Option 2: Follow this if Samsung SSSP is brand new or after a factory reset

-   Select your Language on the welcome screen
    
    <img src="/kb/installation/sssp-65-1.webp" alt="Welcome" loading="lazy" decoding="async">
    
-   Set your network connection (Wireless or wired)
    
    <img src="/kb/installation/sssp-65-2.webp" alt="Network" loading="lazy" decoding="async">
    
-   Review and Accept the Privacy Notice
    
    <img src="/kb/installation/sssp-65-3.webp" alt="Privacy Notice" loading="lazy" decoding="async">
    
-   In Installation Type, Choose Basic Setup
    
    <img src="/kb/installation/sssp-65-4.webp" alt="Basic Setup" loading="lazy" decoding="async">
    
-   Choose the orientation (Landscape or Portrait). _You can change the orientation remotely from the management console later on - after adding the screen_
    
    <img src="/kb/installation/sssp-65-5.webp" alt="Orientation" loading="lazy" decoding="async">
    
-   Under Player Selection, Choose **Custom App**
    
    <img src="/kb/installation/sssp-65-6.webp" alt="Custom App" loading="lazy" decoding="async">
    
-   Type in the URL of the digital Signage Player Application:
    
    ```
    https://app-ds.net/ts
    ```
    

<img src="/kb/installation/sssp-65-7-nobrand.webp" alt="URL" loading="lazy" decoding="async">

-   Set **Skip** for RM Server setup
    
    <img src="/kb/installation/sssp-65-8.webp" alt="Skip RM Server" loading="lazy" decoding="async">
    
-   Disable Auto Power Off mode
    
    <img src="/kb/installation/sssp-65-9.webp" alt="Auto Power off" loading="lazy" decoding="async">
    
-   Set the correct date and time
    
    <img src="/kb/installation/sssp-65-10.webp" alt="Date time" loading="lazy" decoding="async">
    
-   Choose a PIN
    
    <img src="/kb/installation/sssp-65-11.webp" alt="Pin" loading="lazy" decoding="async">
    
-   On the Remote Control, Press on **MENU**
    
-   Choose **Custom App**
    
    <img src="/kb/installation/sssp-65-12.webp" alt="Custom App" loading="lazy" decoding="async">
    
-   The App will download and start automatically
    
    <img src="/kb/installation/sssp-65-13.webp" alt="Installing" loading="lazy" decoding="async">
    
-   Go to the management console and add your screen
    

<img src="/kb/installation/sssp-hash-code.webp" alt="Hash Code" loading="lazy" decoding="async">

* * *

## Install from USB Flash Drive

### Prepare the USB flash drive on a PC

-   Plug your USB Flash Drive to a PC
    
-   Download the following file under the **USB root folder**: [contact us for the download](/iletisim/)
    
-   Unzip the file under the root of the USB flash drive (DO NOT create a folder under the USB), if usb flash drive is F:/. the folder should look like this: F:/SSSP
    
-   It will create a folder named _SSSP_ . Under this folder there are 2 files (DigitalSignage.wgt and sssp\_config.xml), as following:
    
    <img src="/kb/installation/sssp-usb-files-nobrand.webp" alt="files" loading="lazy" decoding="async">
    

### USB Setup on SSSP6 - Tizen 4.0 Display

-   Insert your USB flash drive into your Samsung display
    
-   On the remote control, Press the **HOME** button
    
-   Select **URL Launcher**
    
-   Select **Install From USB Device**.
    
    <img src="/kb/installation/sssp-usb-install-from-4.0.webp" alt="Install from USB" loading="lazy" decoding="async">
    
-   Enter the PIN
    
    <img src="/kb/installation/sssp-usb-pin-4.0.webp" alt="PIN" loading="lazy" decoding="async">
    
-   The Digital Signage Player will start to download and install automatically
    
-   The app will launch once the download is complete
    
    <img src="/kb/installation/sssp-url-launcher4.0.webp" alt="DONE" loading="lazy" decoding="async">
    
-   When the app starts, the hash code will show on the screen
    
-   Go to the management console and add your screen
    

<img src="/kb/installation/sssp-hash-code.webp" alt="Hash Code" loading="lazy" decoding="async">

### USB Setup on SSSP10 - Tizen 6.5 Display

-   Insert your USB flash drive into your Samsung display
    
-   On the remote control, Press the **HOME** button
    
-   Select **App Management**
    
    <img src="/kb/installation/sssp-usb-app-management6.5.webp" alt="App Management" loading="lazy" decoding="async">
    
-   Select **Install from USB Device**
    
    <img src="/kb/installation/sssp-usb-install-from-6.5.webp" alt="App Management" loading="lazy" decoding="async">
    
-   Enter PIN if required
    
-   The Digital Signage Player will start to download and install automatically
    
-   The app will launch once the download is complete
    
-   When the app starts, the hash code will show on the screen
    
-   Go to the management console and add your screen
    

<img src="/kb/installation/sssp-hash-code.webp" alt="Hash Code" loading="lazy" decoding="async">

* * *

## Tizen 7

1.  Make sure your screen is setup to play via Custom App. Press Menu > System > Play Via > Custom App

<img src="/kb/installation/custom-app.webp" alt="SSSP Play Via Menu" loading="lazy" decoding="async">

2.  Install the DS application by going to Features > AppManagement. If you see this feature is not available, switch your screen to HDMI and then try again.

<img src="/kb/installation/app-managment.webp" alt="SSSP App Management" loading="lazy" decoding="async">

3.  Click on “Install Custom App” and enter this url `https://app-ds.net/ts7` then click Go.

<img src="/kb/installation/ts7.webp" alt="SSSP Install App" loading="lazy" decoding="async">

The application should get downloaded, installed and start automatically.

* * *

## How to Switch a Samsung Display from MagicInfo to URL Launcher

If you’re unable to see the URL Launcher or APP Management on your Samsung display’s Home Menu, it’s likely because the ‘**Source**’ setting is currently set to ‘**MagicInfo**’. To resolve this, you’ll need to switch it to ‘**URL Launcher**’.  
To switch the screen to URL Launcher, follow these steps:

1.  Press the ‘**Menu**’ button on the remote control to open the device menu.
2.  Select ‘**System**’.

<img src="/kb/installation/url-laucher-system.webp" alt="SSSP System Menu" loading="lazy" decoding="async">

3.  Scroll to the bottom of the menu and select the ‘**Play Via**’ option.
4.  Select the ‘**URL Launcher**’ option. If any app is installed on your device, the option available may be a ‘**Custom App**’ instead of ‘URL Launcher’.

<img src="/kb/installation/url-launcher-playvia.webp" alt="SSSP Play Via Menu" loading="lazy" decoding="async">

5.  Press the ‘Home’ button and select ‘URL Launcher’ from the home menu.

* * *

## How to Fix “Unable to connect to the server, Please try again later” on Samsung Tizen.

If you encounter the error message **“Unable to connect to the server, please try again later”** on your Samsung Tizen device, follow the steps below to troubleshoot and resolve the issue.

**1\. Date and Time Settings:**

Incorrect date and time settings on your Samsung Tizen can cause server communication issues and block access. Ensure that the correct date and time are set to be able to download the digital signage application.

-   How to check: Go to Menu > System > Date & Time, and verify the date and time are correct.
    
-   Set the date and time to “Auto” or adjust them manually to the correct local time.
    

**2\. Network Access:**

Ensure your Samsung Tizen device is connected to a stable internet connection. A weak or unstable network can lead to connectivity issues.

-   To check the connection: Press the menu on the remote control > Go to Network > Select Network Status > review the network settings for connection success or failure.
    
-   Check your network firewall settings. If your network has firewall restrictions, it may block the digital signage application from connecting to the server. 
    
-   If you’re still unable to download the application, try using a mobile hotspot, as these networks are typically less restricted.
    

**3\. URL Launcher:**

Ensure the digital signage app URL entered is correct. It is case-sensitive, and only lowercase letters should be used for successful installation.

If none of the steps above resolve the issue, reach out to our support team for further assistance.

* * *

### List of Supported SSSP Models

##### SSSP10 Tizen 2022 and newer

-   QMC series
-   QBB series (basic) QBB: QB43B, QB50B, QB55B, QB65B, QB75B.
-   QMB series (mid-range) QMB: QM43B, QM50B, QM55B, QM65B, QM75B.
-   QHB series (high-end) QHB: QH43B, QH50B, QH55B, QH65B, QH75B.

##### SSSP6 Tizen 2018 and older

-   QMR-AN QM32R-AN
-   QB (Basic) QBR: QB13R, QB24R, QB43R, QB49R, QB50R, QB55R, QB65R, QB75R, QB85R, QB98R. QBR-B: QB24R-B, QB85R-B. QBN: QB49N, QB55N, QB65N, QB75N, QE82N. QBT: QB98T-B.
-   QM (Mid-Range) QMR: QM32R, QM43R, QM49R, QM50R, QM55R, QM65R, QM75R, QM85R. QMR-A: QM32R-A, QM43R-A, QM49R-A, QM50R-A, QM55R-A, QM65R-A, QM75R-A. QMR-B: QM32R-B, QM85R-B. QMN: QM43N, QM49N, QM55N, QM65N, QM75N, QM85N, QM98N. QMT: QM98T. QMT-B: QM98T-B.
-   QH (High-end) QHR: QH43R, QH50R, QH55R, QH65R, QH75R. Window Display (OM): OMN: OM46N, OM55N. OMN-D: OM46N-D, OM55N-D.
-   OH (Outdoor Signage): OHF: OH55F. OHN: OH85N, OH85N-SK, OH85N-DK, OH85N-S.
