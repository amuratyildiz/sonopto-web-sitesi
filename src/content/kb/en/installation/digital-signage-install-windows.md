---
title: 'Install Player on Windows Digital Signage'
urlSlug: 'digital-signage-install-windows'
summary: 'How to install digital signage app on Windows screens'
category: 'installation'
order: 8
source: 'installation/digital-signage-install-windows'
sourceHash: '240b9ae272f7ed12'
importedAt: '2026-09-23'
---
#### Supported Windows Versions

Windows 7 onwards (7,8,10 and 11).

### Pre Installation steps

On the windows player, make sure the following steps are done before installing the digital signage app.

-   Log in to the digital signage windows screen
-   Disable the screen saver
-   **Power Options**: Under Control Panel, in the power options, set the PC to never dim the display, never turn off the display and never put the computer in sleep mode.
-   **Clean Apps**: Uninstall all unneeded programs to prevent interference with the digital signage app.
-   Disable Auto Update of Installed Apps (printer apps, Adobe Acrobat) to prevent them from popping up on the screen while digital signage is playing.
-   Make sure you have the latest **Edge**, **Chrome** or [Chromium](https://www.chromium.org/Home/) Browser is installed.

### Install the sonopto.signage app

-   Download the the sonopto.signage app from the below link(s).

[Digital Signage for Windows 64bit](/iletisim/)

-   Unzip the downloaded file
-   Double click the downloaded file to start the digital signage app
-   An Unknown Publisher Warning will appear, click on **More**, then on **Run Anyway**
-   Wait for a few seconds, the hash will appear
-   You can now add your screen from the management console

### Start on boot

-   Create a desktop shortcut of the **autostart.bat** file.
-   Copy the created shortcut from the desktop to the startup folder of the Windows, so the signage app will start automatically every time the Windows boots. The steps depend on the screen’s windows version.

_The Startup folder contains shortcuts to every application that launches automatically when you sign in with your local Windows account._

If you couldn’t locate or access the startup folder, please follow the below instructions:

1.  Press the **Windows + R** keys on your keyboard. This is going to bring the Run Utility.
2.  Type in **%appdata%** and press the Enter key on your keyboard. This will launch the File Explorer window.
3.  Navigate to **Microsoft → Windows → Start Menu → Programs → Startup**.
