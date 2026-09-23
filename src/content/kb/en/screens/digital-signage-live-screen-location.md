---
title: 'Live Screen Location'
urlSlug: 'digital-signage-live-screen-location'
summary: 'Learn how to use the sonopto.signage Live Screen Location feature, which provides a map view of all your active digital signage screens.'
category: 'screens'
order: 6
source: 'screens/digital-signage-live-screen-location'
sourceHash: '09a65da0023b0450'
importedAt: '2026-09-23'
---
The Live Screen Location feature allows you to monitor your digital signage screens in real-time. It provides a map view of all your active screens, whether online or offline, so you can see where each screen is located across multiple sites.

There are 2 main steps to use the Live Screen Location:

1.  [Configure Location Services on the Device](#configure-location)
2.  [Set Screen Location on the CMS Portal](#set-screen-location)

## 1\. Configure Location Services on the Device

To configure the Live Screen Location feature, follow these steps:

### Step 1: Enable Location Services for the Device

To enable location services, grant the app permission for precise location on Android devices.

1.  Open the device settings.
    
2.  Go to Location Settings. (Scroll down and tap on Location)
    
3.  Turn on Location Services. If Location is off, tap the switch to turn it on.
    

<img src="/kb/screens/location-services.webp" alt="Location Services" loading="lazy" decoding="async">

### Step 2: Enable Precise Location for an App

1.  Open App Permissions:
    
    -   Go to Settings > Apps (or Apps and notifications, depending on your Android version).
    -   Find the app to which you want to grant location permissions and tap on it.
2.  Open Permissions.
    
3.  Allow Location Access:
    
    -   In the list of permissions, tap on Location.
    -   Choose Allow all the time or Allow only while using the app, depending on your app’s needs.
4.  Enable Precise Location:
    
    -   Ensure that Use precise location is enabled (it allows the app to access GPS data). You will see a toggle next to “Use precise location”; ensure it’s turned on.

<img src="/kb/screens/location-permission.webp" alt="Location Permission" loading="lazy" decoding="async">

### Step 3: Check GPS Settings

High Accuracy Mode:

-   Go back to Settings > Location.
-   Tap on Location Mode or Advanced (depending on your Android version), and select High accuracy. This will use GPS, Wi-Fi, and mobile networks for location detection.

<img src="/kb/screens/location-gps-setting.webp" alt="Location GPS Settings" loading="lazy" decoding="async">

After following these steps, your app should be able to access GPS data from a precise location.

* * *

## 2\. Set Screen Location on the CMS Portal

After configuring the location services and permissions on your digital signage device, you must enable the screen location in the CMS portal.

1.  On the dashboard, go to the SCREENS tab.
    
2.  Under the Screen Location column next to the screen name, click on SET LOCATION.
    

<img src="/kb/screens/screen-location.webp" alt="Screen Location" loading="lazy" decoding="async">

3.  Check " Enable auto-update location using the device’s GPS".

<img src="/kb/screens/enable-auto-update.webp" alt="Enable Auto-update Location" loading="lazy" decoding="async">

4.  Click on UPDATE LOCATION.
    
5.  Go back on the DASHBOARD tab.
    
6.  Click on SCREEN’S LOCATIONS, on the left side of the dashboard.
    
7.  Now, you can see the locations of all your active screens, both online or offline, displayed on the map. This feature displays your screen’s live location in real-time, allowing you to see location changes instantly.
    
    Online screens are marked with green pins, while offline screens with red pins.
    

<img src="/kb/screens/screen-location-on-map.webp" alt="Scree Location on Map" loading="lazy" decoding="async">

8.  Click the Toggle in the top right corner for a fullscreen view.

<img src="/kb/screens/fullscreen-view.webp" alt="Fullscreen View" loading="lazy" decoding="async">

9.  You can also switch to Satellite view.

<img src="/kb/screens/satellite-view.webp" alt="Satellite View" loading="lazy" decoding="async">
