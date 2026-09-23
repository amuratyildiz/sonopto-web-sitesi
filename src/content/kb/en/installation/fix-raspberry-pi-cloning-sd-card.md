---
title: 'Fix Raspberry Pi After Cloning the SD Card'
urlSlug: 'fix-raspberry-pi-cloning-sd-card'
summary: 'Learn how to avoid duplicate Screen ID issues on Raspberry Pi devices after cloning an SD card.'
category: 'installation'
order: 10
source: 'installation/fix-raspberry-pi-cloning-sd-card'
sourceHash: '1e700316d81580ad'
importedAt: '2026-09-23'
---
Cloning the SD card of a configured Raspberry Pi can save time—but if not done properly, it can cause all your players to share the **same Screen ID**, which means they’ll be treated as the **same device** in digital signage. This leads to unexpected behavior, including players not functioning correctly.

Follow the steps below to ensure each cloned Raspberry Pi generates a unique Screen ID and operates independently.

### Step-by-Step Fix for Cloned Raspberry Pi Players

1.  **Prepare Your Raspberry Pi**
    
    Before cloning the SD card, make sure your Raspberry Pi is properly set up by following this guide:  
    [](/en/support/installation/install-digital-signage-raspberry-pi/)Install App on Raspberry Pi
    

2.  **Add the Player to Your your sonopto.signage account**
    
    -   Power on your Raspberry Pi and connect it to your digital signage account.
    -   Ensure the device downloads the latest software version.
    -   You may need to **restart the device** after assigning it to your account to trigger the software update.
    -   Confirm the **software version is 215 or higher** before proceeding.
    
    <img src="/kb/installation/player-rpi-version.webp" alt="Rpi Version" loading="lazy" decoding="async">
    

3.  **Delete the `conf.txt` File**
    
    -   Once the software is updated, open the terminal and navigate to the app directory:
        
        ```bash
        cd ~/digital-signage
        ```
        
    -   Check if a file named `conf.txt` exists. If it does, delete it:
        
        ```bash
        rm conf.txt
        ```
        
    -   This file contains the existing screen ID. Removing it ensures the cloned player will generate a new ID on first boot.
        

4.  **Shutdown and Clean Up Before Cloning**
    
    -   Shutdown the Raspberry Pi using:
        
        ```bash
        sudo shutdown now
        ```
        
    -   **Important:** Delete the device from your digital signage account and **DO NOT** turn it back on **before** cloning the SD card.
        

5.  **Clone the SD Card**
    
    -   Now you can safely clone the SD card.
    -   Once a new Raspberry Pi boots from the cloned SD card:
        -   It will detect the missing `conf.txt`.
        -   It will generate a **unique Screen ID**.
        -   It may **restart a few times** automatically during this process.

Once these steps are completed, each cloned Raspberry Pi will behave as an independent player with its own unique identity.
