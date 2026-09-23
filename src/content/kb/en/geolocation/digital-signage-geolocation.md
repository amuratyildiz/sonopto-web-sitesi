---
title: 'Geo Location'
urlSlug: 'digital-signage-geolocation'
summary: 'Discover how geolocation enhances digital signage campaigns with sonopto.signage. Learn to target audiences with precision using location-based technology.'
category: 'geolocation'
order: 999
source: 'geolocation/digital-signage-geolocation'
sourceHash: '99b47040818a3044'
importedAt: '2026-09-23'
---
Geo-Location allows automatic updates of content based on the device’s geographical location, enabling specific playlists to be displayed in designated areas, regions, or locations.

There are 6 main steps to configure the Geo-location feature:

### Step 1. Configure Location Services on the Device

Set up the Location Services on your digital signage device to permit precise location access. This setup enables the app to accurately identify and display your screens’ locations to monitor the digital signage network.

To configure the location servies on your digital signage device, follow these steps:

#### 1- Enable Location Services for the Device

To enable location services, grant the app permission for precise location on Android devices.

1.  Open the device settings.
    
2.  Go to Location Settings. (Scroll down and tap on Location)
    
3.  Turn on Location Services. If Location is off, tap the switch to turn it on.
    

<img src="/kb/geolocation/location-services.webp" alt="Location Services" loading="lazy" decoding="async">

#### 2- Enable Precise Location for an App

1.  Open App Permissions:
    
    -   Go to Settings > Apps (or Apps and notifications, depending on your Android version).
    -   Find the app to which you want to grant location permissions and tap on it.
2.  Open Permissions.
    
3.  Allow Location Access:
    
    -   In the list of permissions, tap on Location.
    -   Choose Allow all the time or Allow only while using the app, depending on your app’s needs.
4.  Enable Precise Location:
    
    -   Ensure that Use precise location is enabled (it allows the app to access GPS data). You will see a toggle next to “Use precise location”; ensure it’s turned on.

<img src="/kb/geolocation/location-permission.webp" alt="Location Permission" loading="lazy" decoding="async">

#### 3- Check GPS Settings

High Accuracy Mode:

-   Go back to Settings > Location.
-   Tap on Location Mode or Advanced (depending on your Android version), and select High accuracy. This will use GPS, Wi-Fi, and mobile networks for location detection.

<img src="/kb/geolocation/location-gps-setting.webp" alt="Location GPS Settings" loading="lazy" decoding="async">

After setting up these steps, the app should be able to access GPS data from a precise location.

* * *

**After configuring the location services and permissions on your digital signage device, log in to the CMS Portal and follow the below steps:**

### Step 2: Define Zones

A zone is a geographic area assigned to a playlist in a channel. It specifies the content that plays when a screen is located in that designated area.

1.  Go to the PLAYLISTS page.
2.  Navigate to the CHANNELS tab.
3.  Click on ZONES tab under Channels.
4.  Click on ADD ZONE.
5.  Enter the name of the zone, then click ADD.

<img src="/kb/geolocation/add-zone.webp" alt="Add Zone" loading="lazy" decoding="async">

4.  Define the geographic zone on the map where content should change by searching for regions and zooming in or out as needed. Click and hold the mouse to navigate the map, and use the Toggle Button in the top right corner for a fullscreen view.
    
5.  A zone is defined by drawing a polygon on the map. To define the zone, click on the map to set a start point. Move the mouse to draw the lines of the desired area, then return to the starting point to complete the zone definition. Below is an example of a defined zone.
    

<img src="/kb/geolocation/define-zone-map.webp" alt="Define Zone" loading="lazy" decoding="async">

<img src="/kb/geolocation/save-zone.webp" alt="Save Zone" loading="lazy" decoding="async">

6.  Click on SAVE.
7.  Add more zones as needed.

<img src="/kb/geolocation/zones.webp" alt="Zones" loading="lazy" decoding="async">

### Step 3: Create a Channel of Playlists

Set up your playlists and create a channel for these playlists.

1.  Go to HORIZONTAL or VERTICAL tabs to add playlists, depending on the type of screens used. For more info on creating a playlist, you can refer to the [PLAYLIST](/en/support/playlists/digital-signage-playlist/) page.
2.  Once you finish creating playlists, return to the CHANNELS tab.
3.  In the Channels sub-section, click on ADD to create a channel of the playlists added previously. For more info on creating a channel, refer to the [CHANNELS](/en/support/playlists/digital-signage-channels/) page.

<img src="/kb/geolocation/geolocation-add-channel.webp" alt="Add Channel" loading="lazy" decoding="async">

5.  Name your channel, and choose a screen orientation, horizontal or vertical, from the drop-down list.
6.  Choose a team to restrict channel access exclusively to that team. Leave it empty if no restrictions are needed.
7.  Click on ADD.

<img src="/kb/geolocation/geolocation-create-channel.webp" alt="Create Channel" loading="lazy" decoding="async">

8.  Click on the **+** to add playlists to the channel.

<img src="/kb/geolocation/assign-playlists.webp" alt="Assign Playlists" loading="lazy" decoding="async">

### Step 4: Assign Zones to Playlists

Link each playlist under channels to its corresponding geographical zone so the content updates according to location.

1.  Click on the location icon next to each playlist to assign it to a zone.

<img src="/kb/geolocation/assign-zone-to-playlist.webp" alt="Assign Zones to Playlists" loading="lazy" decoding="async">

2.  Select a zone name from the list to restrict the playlist to that location.

<img src="/kb/geolocation/choose-zone.webp" alt="Choose Zone" loading="lazy" decoding="async">

<img src="/kb/geolocation/zones-list.webp" alt="Zones list" loading="lazy" decoding="async">

3.  Click on CLOSE after assigning zones to the playlists.

### Step 5: Assign Channel to Screens

1.  Navigate to the SCREENS page. (For more details on adding a screen, see the [SCREENS](/en/support/screens/digital-signage-screens/) page).
    
2.  Click on Media Source Type next to the screen name.
    
3.  Select **Channels** as the source type.
    

<img src="/kb/geolocation/assign-channel-to-screen.webp" alt="Assign Channel to Screen" loading="lazy" decoding="async">

4.  Choose the desired channel to assign it to your screen.
    
5.  Click Publish to send the updates to the screen.
    

### Step 6: Set Screen Location

Now, you must enable the screen location feature.

1.  Go to the SCREENS tab.
    
2.  Under the Screen Location column next to the screen name, click on SET LOCATION.
    

<img src="/kb/geolocation/screen-location.webp" alt="Screen Location" loading="lazy" decoding="async">

3.  Check " Enable auto-update location using the device’s GPS".

<img src="/kb/geolocation/enable-auto-update.webp" alt="Enable Auto-update Location" loading="lazy" decoding="async">

4.  Click on UPDATE LOCATION.
5.  Go back on the DASHBOARD tab.
6.  Click on SCREEN’S LOCATIONS, on the left side of the dashboard.

Now, you can see the locations of all your active screens, both online or offline, displayed on the map. This feature displays your screen’s live location in real-time, allowing you to see location changes instantly. When the screen moves within the defined zones, the content will automatically switch playlists, based on the defined geolocations.

Online screens are marked with green pins, while offline screens with red pins.

<img src="/kb/geolocation/screen-location-on-map.webp" alt="Screen Location on Map" loading="lazy" decoding="async">

You can click the Toggle in the top right corner for a fullscreen view.

<img src="/kb/geolocation/fullscreen-view.webp" alt="Fullscreen View" loading="lazy" decoding="async">

You can also switch to Satellite view.

<img src="/kb/geolocation/satellite-view.webp" alt="Satellite View" loading="lazy" decoding="async">
