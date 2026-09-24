---
title: 'Media Playback Quota'
urlSlug: 'media_playback_quota'
summary: 'Learn about the Media Playback Quota feature that helps manage content playback limits, monitor usage, and optimize campaigns on digital signage networks.'
category: 'media_playback_quota'
order: 999
source: 'media_playback_quota/media_playback_quota'
sourceHash: '837aef3af7b33045'
importedAt: '2026-09-24'
---
The Media Playback Quota feature, also known as “Content Playback Cap” or “Play Count Restriction” in the digital signage advertisement industry, gives users control over how many times a specific media file (image or video) can play across all screens. This ensures content is displayed according to predefined limits, making it ideal for managing limited-run promotions and targeted campaigns.

  

## Key Features

1.  **Set Media Playback Quota**  
    Define a specific playback quota for each media file. Once the defined quota is reached, the system stops scheduling the media for playback.
    
2.  **Playback Monitoring**  
    Monitor media playback counts using proof of play reports from screens. These reports are collected every 5 minutes. While playback counts might temporarily exceed the quota, they are updated as new reports are synchronized.
    
3.  **Reset Media Playback Counter**  
    Reset the playback counter for a media file to clear its playback count and start fresh.
    

  
  

## How to Set Up

  

### Setting the Quota

1.  Navigate to the playlist, click **Edit** on the desired media, and in the sidebar settings, locate and click on **“Playback Quota.”**

<img src="/kb/media_playback_quota/playback-quota-settings-1.webp" alt="edit digital signage media playback quota" title="Edit digital signage media playback quota" loading="lazy" decoding="async">

2.  Configure the media playback quota settings as shown below:

<img src="/kb/media_playback_quota/playback-quota-settings-2.webp" alt="fill up media playback settings" title="Fill up media playback settings" loading="lazy" decoding="async">

  

### Media Playback Quota Settings Explained

-   **Enable Media Playback Quota:**  
    Toggle this feature on or off globally for the selected media. Turning it off ignores any saved settings. When enabled, proof of play will automatically activate if not already enabled, as it is required for this feature.
    
-   **Playback Quota Limit:**  
    Set the maximum number of times this media can play across all screens. Note that the actual playback might exceed the quota temporarily due to the reliance on proof of play reports collected every 5 minutes.
    
-   **Current Playback Count:**  
    Displays the total global count of how many times this media has played across all screens. This count updates every 5 minutes.
    
-   **Refresh:**  
    Fetch the latest global playback count for this media (with a delay of up to 5 minutes).
    
-   **Reset Counter:**  
    Permanently clears the global playback count reported so far. This action does not clear counts that have not yet been reported by screens.
