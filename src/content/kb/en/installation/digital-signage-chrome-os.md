---
title: 'Install Digital Signage on ChromeOS Player'
urlSlug: 'digital-signage-chrome-os'
summary: 'How to set up Digital Signage Player on ChromeOS with Chrome'
category: 'installation'
order: 5
source: 'installation/digital-signage-chrome-os'
sourceHash: '3e8c26258f666f24'
importedAt: '2026-09-24'
---
## How to Install Digital Signage Player on Chrome OS

### Introduction

This document provides a step-by-step tutorial on how to install Digital Signage Player on a Chrome OS device using Kiosk & Signage License from Google Workspace. This process ensures that digital signage runs in kiosk mode, providing a seamless and secure digital signage solution.

### Prerequisites

1.  **Chrome OS Device**: Ensure your Chrome OS device is powered on and connected to the internet.
2.  **Google Workspace Account**: You need admin access to Google Workspace to manage devices.
3.  **Kiosk & Signage License**: Ensure you have the Kiosk & Signage License assigned to your Chrome OS device.

### Step-by-Step Installation Guide

### Step 1: Sign in to Google Admin Console

1.  Open your browser and go to [Google Admin Console](https://admin.google.com).
2.  Sign in with your Google Workspace admin credentials.

### Step 2: Enroll Chrome OS Device

1.  Factory reset your Chromebox if it was previously used as a personal device.

-   Sign out of your Chromebook.
-   Press and hold Ctrl + Alt + Shift + r.

2.  Connect your Chromebox to the screen and make sure it has a stable internet connection.
3.  Select Get Started
4.  On the “who is using this Chromebox” page - Select enterprise enrollment in the bottom left corner of the screen
5.  Enter your Google Enterprise account details to log in, and then select ‘done’.
6.  The device will then restart. After restarting, you will be prompted to sign in to your chromebox using the same login credentials as your Google Enterprise account.
7.  Select accept and continue

For more information see the Google help guide here - [https://support.google.com/chrome/a/answer/1360534](https://support.google.com/chrome/a/answer/1360534)

### Step 3: Assign Kiosk & Signage License

1.  In the Google Admin Console, navigate to **Devices > Chrome > Devices**.
2.  Find and select the device you want to set up.
3.  Click on the device name to open its settings.
4.  Under **Licenses**, ensure that the **Kiosk & Signage License** is assigned.
5.  If you dont have active Kiosk & Signage licences, go to subscription and add licences

<img src="/kb/installation/subscriptions-admin-console.webp" alt="Subscriptions-Admin-Console" loading="lazy" decoding="async"> <img src="/kb/installation/get-more-services-admin-console.webp" alt="Get-more-services-Admin-Console" loading="lazy" decoding="async">

### Step 4: Configure Device Settings for Kiosk Mode

1.  In the Google Admin Console, navigate to **Devices > Chrome > Apps & extensions > Kiosks**.
    
2.  Click on **Add** and then add by URL
    

<img src="/kb/installation/kiosk-app-management-admin-console-add-brands.webp" alt="Kiosk-App-Management-Admin-Console-add" loading="lazy" decoding="async">

3.  Use the `https://dsplayer.io` in the URL as below, then click Save

<img src="/kb/installation/kiosk-app-management-admin-console-nobrand.webp" alt="Kiosk-App-Management-Admin-Console-url" loading="lazy" decoding="async">

4.  Set AC Kiosk power settings to never sleep

<img src="/kb/installation/device-settings-details-admin-console.webp" alt="Device-Settings-Details-Admin-Console" loading="lazy" decoding="async">

* * *
