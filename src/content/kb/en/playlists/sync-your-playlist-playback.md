---
title: 'Sync your playlist playback'
urlSlug: 'sync-your-playlist-playback'
summary: 'Discover how to sync your playlist playback seamlessly on your digital signage. Follow our easy guide to ensure smooth and synchronized content delivery.'
category: 'playlists'
order: 6
source: 'playlists/sync-your-playlist-playback'
sourceHash: 'ca176f236515421b'
importedAt: '2026-09-23'
---
Sync players’ playlists content playback has never been easier. it works if your players are in one location sharing one local network (wifi/wired) or if they are in different locations with a 3G/4G internet connection.

<img src="/kb/playlists/synced_playlist.webp" alt="Playlist Settings Open" loading="lazy" decoding="async">

### Synced playlist

This feature is very handy with setups where multiple screens are visually present in the same area.

-   To enable synchronized playback for screens using this playlist, simply check the designated box. This will ensure that all screens play the same content simultaneously for a seamless viewing experience.

### Sync Group

-   Sync Group: When you assign a playlist to a sync group, all other playlists in that group will play back in sync with it. This means that all screens playing content from those playlists will display the same order of content at the same time.
    
-   To add a playlist to a sync group, simply click on the drop down menu and select an existing one. Alternatively, you can type in the name of a new group and press Enter to create it. This will allow the playlist to play back in sync with all other playlists in that group.
    
-   Sync your playlists by enabling the feature on **horizontal or vertical playlists** that belong to the same group.
    

_If the playlist has multiple layers, only the last layer (last from top to base) will be synced. This feature is for syncing a background layer between multiple screens._

### Local Sync vs Internet Sync

**Local Sync:** (enabled by default) Screens will use the local network (wired or wireless) to sync playlist playback, including video walls.

The player will be communicating over UDP multicast, so make sure your network supports multicast.

To use local sync, make sure your “Local Sync” is enabled (Settings > Screens’ Settings).

**Internet Sync:** Screens will use the internet to communicate with each other to sync content.

Only use this option if your screens are not connected to the same local network, for example, if your players are in different locations. Or they are connected to the cloud using a 3G or 4G Internet connection.

As the screens are communicating using the internet, they might not be 100% in sync; the delay time depends on the internet speed. In most cases, the delay will be less than 0.3 seconds.

To use Internet sync, make sure your “Local Sync” is disabled (Settings > Screens’ Settings).

<img src="/kb/playlists/screen_settings.webp" alt="Screen Settings" loading="lazy" decoding="async">

* * *
