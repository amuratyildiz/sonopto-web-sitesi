---
title: 'Install Player on Linux devices'
urlSlug: 'install-digital-signage-linux'
summary: 'How to install digital signage app on Linux player'
category: 'installation'
order: 12
source: 'installation/install-digital-signage-linux'
sourceHash: 'b3bfa88e77e5f7ee'
importedAt: '2026-09-23'
---
### Tested on

-   Ubuntu
-   Fedora

### Pre Installation steps

-   Make sure the latest Chrome or [Chromium](https://www.chromium.org/Home/) Browser is installed.
-   Disable the screen saver:

1.  Start the application **Settings**
2.  Choose **Privacy** under the **personal** heading
3.  Choose **Screen Lock**
4.  Toggle **Automatic Screen Lock** from the default “ON” to **“OFF”**

-   Hide Notifications:

1.  Go to Settings
2.  Click on **Notifications** in the sidebar to open the panel.
3.  Switch **Do Not Disturb** to on.
4.  Switch **Lock Screen Notifications** to off.

-   Prevent Screen Sleep:

1.  Go to Settings
2.  Go to Power Settings, then navigate to Power Savings Option
3.  Set **Screen Blank** to Never

-   Clean Apps: Uninstall all unneeded programs to prevent interference with the digital signage app.
    
-   Disable Auto Update of Installed Apps (printer apps, Adobe Acrobat) to prevent them from popping up on the screen while digital signage is playing.
    
-   To disable the automatic update notification from appearing on your screen when the digital signage is playing:
    

1.  Open the **Software & Updates** from the Unity Dash or run **_Software-properties-gtk_** in a terminal.
2.  Go to the **Updates** tab.
3.  Uncheck the box for **Automaticall check for updates**.
4.  Uncheck the box for **Notify me of a new Ubuntu Version** if this option is available.
5.  Close the app.

Note: This will stop the Ubuntu from automatically downloading and installing updates, whcih can make your system, less secure and stable.

### Installation steps

-   **Step 1:** Open Terminal
    
-   **Step 2:** Copy paste the below script into the terminal:
    
    For **(64-bit):**
    
    ```
    /bin/bash -c "$(curl -fsSL https://appds.io/linux/64.sh)"
    ```
    
    This script will create a folder under your home directory called “digital-signage” and download the player binary, then set up a startup script to start the app on boot time.
    
-   **Step 3:** Restart your device by writting reboot in the terminal
    
    ```
    reboot
    ```
