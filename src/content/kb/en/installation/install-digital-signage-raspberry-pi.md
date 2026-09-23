---
title: 'Install digital signage on Raspberry Pi'
urlSlug: 'install-digital-signage-raspberry-pi'
summary: 'Learn how to install digital signage on your Raspberry Pi with our step-by-step guide. Simplify digital signage setup and get started in minutes!'
category: 'installation'
order: 11
source: 'installation/install-digital-signage-raspberry-pi'
sourceHash: '3408137ae6fd4f40'
importedAt: '2026-09-23'
---
## Supported Raspberry Pi

-   Raspberry Pi 5
-   Raspberry Pi 4
-   Raspberry Pi 4 Model B
-   Raspberry Pi 3 Model A+
-   Raspberry Pi 3 Model B+

* * *

## Installing digital signage on Raspberry Pi

You can set up digital signage on your Raspberry Pi using one of two installation methods, depending on your needs:

[**Option 1: Flash digital signage Custom Android 15 Image**](#option-1-use-digital-signage-custom-android-image)  
This is the recommended and easiest way. This image is optimized for **Raspberry Pi 4 and 5**, comes with the digital signage app pre-installed, and ensures maximum performance and stability.

[**Option 2: Install digital signage on Raspberry Pi OS**](#option-2-install-digital-signage-on-raspberry-pi-os)  
For users who prefer to keep Raspberry Pi OS, you can install digital signage directly.

Choose the method that best fits your setup and follow the step-by-step guide below.

### Option 1: Use digital signage Custom Android Image

Using the **digital signage Custom Android Image** is highly recommended for the best performance and stability.

**Why use the custom image?**

-   Better performance
-   Custom OS locked down to the digital signage App
-   digital signage App pre-installed
-   Full support for all digital signage features
-   Robust and easy to install, supporting both Raspberry Pi 5 and Raspberry Pi 4

#### 1\. Download the Image

-   Download the image file for Raspberry 4: [rpi4-aosp15-ez-v1.img.zip](/iletisim/)
    
-   Download the image file for Raspberry 5: [rpi5-aosp15-ez-v1.img.zip](/iletisim/)
    

#### 2\. Flash the Image to an SD Card

-   Insert a microSD card (32GB or larger recommended) into your computer.
    
-   Download the Raspberry Pi Imager from [](https://www.raspberrypi.com/software)raspberrypi.com/software and run the installer.
    
-   Open Raspberry Pi Imager:
    
    1.  Click **Choose Device**
    
    <img src="/kb/installation/imager.webp" alt="choose raspberry pi device" loading="lazy" decoding="async">
    
    2.  Select your Raspberry Pi model from the list.
    
    <img src="/kb/installation/choose-device.webp" alt="choose raspberry pi model" loading="lazy" decoding="async">
    
    3.  Click **Choose OS → Use Custom**
    
    <img src="/kb/installation/use-custom.webp" alt="choose custom OS" loading="lazy" decoding="async">
    
    4.  select **rpi5-aosp15-ez-v1.img.zip** (for Raspberry Pi 5).
        
    5.  Click **Choose Storage → select your SD card**.
        
    
    <img src="/kb/installation/choose-storage-device.webp" alt="choose storage device" loading="lazy" decoding="async">
    
    6.  Click **Next** → In a popup, Imager will ask you to apply OS customisation. Click **NO** button to skip.
    
    <img src="/kb/installation/no-customization.webp" alt="OS customization settings" loading="lazy" decoding="async">
    
    7.  Respond **YES** to the popup “Are you sure you want to continue?”.
    
    <img src="/kb/installation/continue-yes.webp" alt="Continue" loading="lazy" decoding="async">
    
    8.  Click **Write** when an admin prompt ask for permission to allow the Imager to read and write to your SD card. Wait until the flashing is complete, this could take a few minutes.
    
    <img src="/kb/installation/write-on-storage.webp" alt="Write on storage device" loading="lazy" decoding="async">
    
    9.  Click **Cancel Verify** to skip the verification process.
    
    <img src="/kb/installation/cancel-verify.webp" alt="Cancel Verify" loading="lazy" decoding="async">
    
    10.  When you see the “Write Successful” popup, your image has been completely written. You’re now ready to boot a Raspberry Pi from the SD card!
    
    <img src="/kb/installation/write-successful.webp" alt="Write Successful" loading="lazy" decoding="async">
    

#### 3\. Boot the Raspberry Pi

-   Insert the microSD card into your Raspberry Pi.
-   Connect power, HDMI display, and optional USB keyboard/mouse.
-   The device will boot into **digital signage Android 15**.

* * *

### Connecting to Wi-Fi (Open Android Settings)

#### Option A: Using a Keyboard

1.  Plug in a USB keyboard.
2.  Press **ALT + M**.
3.  Enter the default password: **1122**.
4.  Select **Open Settings**.
5.  Go to **Network & Internet > Wi-Fi**.
6.  Connect to your Wi-Fi network.
7.  Restart the player once connected.

#### Option B: Using a Mouse

1.  Connect a USB mouse.
2.  Long left-click on the **top-left corner** of the screen for **5 seconds**.
3.  Enter the default password: **1122**.
4.  Select **Open Settings**.
5.  Go to **Network & Internet > Wi-Fi**.
6.  Connect to your Wi-Fi network.
7.  Restart the player once connected.

_That’s it! Your Raspberry Pi is now running **digital signage Android 15** and ready to use._

* * *

### Option 2: Install digital signage on Raspberry Pi OS

#### Pre Installation steps

Download and install Raspberry Pi OS with desktop on your Raspberry Pi

Check the below link for more information on how to install Raspberry Pi OS on your device.

[Setting up your Raspberry Pi](https://www.raspberrypi.com/documentation/computers/getting-started.html#setting-up-your-raspberry-pi)

-   **Make sure Chromium browser is installed**:
    
-   **Disable Screen Blanking**:
    
    -   **Step 1:** On the main Raspberry Pi menu, click on Raspberry Pi Configuration under Preferences
        
        <img src="/kb/installation/raspberry-pi-configuration.webp" alt="Raspberry-Pi-Configuration" loading="lazy" decoding="async">
        
    
    -   **Step 2:** Click to the “Display”.
        
        <img src="/kb/installation/raspberry-pi-display.webp" alt="Raspberry-Pi-Display" loading="lazy" decoding="async">
        
    
    -   **Step 3:** Disable the “Screen Blanking”
        
        <img src="/kb/installation/raspberry-pi-screen-blanking.webp" alt="Raspberry-Pi-Screen-Blanking" loading="lazy" decoding="async">
        

#### Installation steps

-   **Step 1:** Open Terminal as the below:
    
    <img src="/kb/installation/open-terminal-on-raspbian.webp" alt="Raspberry-Pi-Screen-Blanking" loading="lazy" decoding="async">
    
-   **Step 2:** Copy paste the below script into the terminal:
    
    For **Raspberry Pi OS (64-bit):**
    
    ```
    /bin/bash -c "$(curl -fsSL https://appds.io/rpi64.sh)"
    ```
    
    For **Raspberry Pi OS (32-bit):**
    
    ```
    /bin/bash -c "$(curl -fsSL https://appds.io/rpi32.sh)"
    ```
    
    This script will create a folder under your home directory called “digital-signage” and download the player binary, then set up a startup script to start the app on boot time.
    
-   **Step 3:** Restart your device by writing reboot in the terminal
    
    ```
    reboot
    ```
    

* * *

## Fix Starting digital signage on the latest Raspberry Pi OS

The latest operating system is configured with the Wayland desktop manager which is causing issues when starting the application in fullscreen mode. To solve the issue, switch from the **Wayland** desktop manager to **X11**.

Follow the below steps:

Open terminal and run the below command

```
  sudo raspi-config
```

-   Navigate to: 6 Advanced Options

<img src="/kb/installation/raspberry-pi-4-software-configuration-1.webp" alt="Raspberry-Pi-Software-configuration" loading="lazy" decoding="async">

-   Choose : A6 Wayland

<img src="/kb/installation/raspberry-pi-4-software-configuration-2.webp" alt="Raspberry-Pi-Software-configuration" loading="lazy" decoding="async">

-   Choose : W1 X11

<img src="/kb/installation/raspberry-pi-4-software-configuration-3.webp" alt="Raspberry-Pi-Software-configuration" loading="lazy" decoding="async">

-   Press Ok. You should see the message “Openbox on X11 is active” press Ok.
    
-   Press finish, and you will be asked if you would like to reboot now; choose Yes.
