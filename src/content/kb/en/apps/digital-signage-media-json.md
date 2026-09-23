---
title: 'Media JSON Integration'
urlSlug: 'digital-signage-media-json'
summary: 'Automate your screen content using Media JSON feeds. Learn how to connect external image and video feeds with your digital signage for seamless, scheduled updates.'
category: 'apps'
order: 66
source: 'apps/digital-signage-media-json'
sourceHash: '994d8484db067ecf'
importedAt: '2026-09-23'
---
## What is Media JSON?

**Media JSON** is a lightweight JSON structure designed to deliver **multimedia content** like **images and videos**.  
It serves as a modern alternative to MRSS, optimized for API integration and easy content automation.

* * *

## Why Use Media JSON in Digital Signage?

With Media JSON, you can **automate content updates** by pointing your screen to an external JSON feed.  
No need to manually upload files — any changes in the feed reflect instantly on your screens.

Perfect for:

-   Retail promotions
-   News and announcements
-   Menu boards
-   Dynamic image or video campaigns

* * *

## How to Use the Media JSON App

-   Open the management console.
-   Select the playlist and then the layer where you want to add the feed.
-   If the layer is empty, the apps dialogue will open automatically. Otherwise, click **Add New**.
-   Look for **Media JSON** under **General Apps**, **Video Apps**, and **News Apps**.
-   Click on **Media JSON** to proceed.
-   Enter the feed URL.
-   Choose the number of items to display using the media count option.
-   Select the media type: images, videos, or both.
-   Click **Save** to apply your changes.

<video width="90%" src="/kb/apps/media-json-video.mp4" controls="" preload="metadata" playsinline=""></video>

* * *

## Feed Requirements

Your Media JSON feed must be:

-   Hosted on a valid **HTTPS** server
-   Or returned from a public **API endpoint**

### Example Media JSON Format:

```json
{
  "channel": {
    "items": [
      {
        "title": "Image 1",
        "mediaContent": {
          "url": "https://files.cloud-digitalsignage.com/mrss/files/1.jpg",
          "type": "image/jpeg",
          "medium": "image",
          "duration": "10",
          "changeKey": "a077ae97dfe45af878f0e0fafdc05c85"
        }
      },
      {
        "title": "Video 1",
        "mediaContent": {
          "url": "https://files.cloud-digitalsignage.com/mrss/files/a.mp4",
          "type": "video/mp4",
          "medium": "video",
          "duration": "10",
          "changeKey": "f11b8c8d750d2087e0a6c0478840063d"
        }
      }
    ]
  }
}
```

Download feed file example: [https://files.cloud-digitalsignage.com/media-json/media-json.json](https://files.cloud-digitalsignage.com/media-json/media-json.json)

* * *

## Media JSON Field Guide

Understanding each field ensures your content displays correctly on your digital signage screens.

### Root Structure

<div class="table-scroll"><table><thead><tr><th>Field</th><th>Required</th><th>Description</th></tr></thead><tbody><tr><td><code>channel</code></td><td>✅</td><td>Container for all items in the feed</td></tr><tr><td><code>items</code></td><td>✅</td><td>Array of media entries</td></tr></tbody></table></div>

* * *

### Each `item`

<div class="table-scroll"><table><thead><tr><th>Field</th><th>Required</th><th>Description</th></tr></thead><tbody><tr><td><code>title</code></td><td>✅</td><td>Title of the media item</td></tr><tr><td><code>mediaContent</code></td><td>✅</td><td>Object containing the media file details</td></tr></tbody></table></div>

* * *

### `mediaContent` Attributes

<div class="table-scroll"><table><thead><tr><th>Attribute</th><th>Required</th><th>Description</th></tr></thead><tbody><tr><td><code>url</code></td><td>✅</td><td>Direct HTTPS URL to the media file</td></tr><tr><td><code>type</code></td><td>✅</td><td>MIME type, e.g. <code>image/jpeg</code> or <code>video/mp4</code></td></tr><tr><td><code>medium</code></td><td>✅</td><td>Either <code>image</code> or <code>video</code></td></tr><tr><td><code>duration</code></td><td>✅</td><td>Display duration in seconds</td></tr><tr><td><code>changeKey</code></td><td>❌ (Recommended)</td><td>Unique identifier (e.g., MD5 hash) that forces refresh if media content changes at same URL</td></tr></tbody></table></div>

* * *

## Example Entry

```json
{
  "title": "Video 1",
  "mediaContent": {
    "url": "https://yourdomain.com/media/video1.mp4",
    "type": "video/mp4",
    "medium": "video",
    "duration": "15",
    "changeKey": "abc123xyz456def789"
  }
}
```

This entry will display `video1.mp4` for 15 seconds. The content will refresh only if the `url` or `changeKey` changes.

* * *

## How Updates Work

-   Content is updated if the **URL** or `changeKey` changes.
-   If nothing changes, media is not re-downloaded.
-   Update the `changeKey` (e.g., new hash) when media content is replaced without changing its URL.

* * *

## Update Frequency

-   Feeds are checked **every 15 minutes**
-   Only **online players** with active playlists trigger feed checks
-   Offline players will update when they reconnect — may take up to **15 minutes**

* * *

## Media Storage

-   Files are downloaded from the JSON feed to **cloud storage**
-   Synced to your players for **offline playback**

* * *

## Supported Media Types

-   **Images:** `image/jpeg`, `image/png`
-   **Videos:** `video/mp4`, `video/webm`

Each `mediaContent` object must include:

-   `url`
-   `type`
-   `medium`
-   `duration`
-   `changeKey` (optional, but recommended)

* * *

## Tips

-   Keep feeds small for faster loading.
-   Use a CDN or fast host for media files.
-   Always update `changeKey` when replacing files using the same URL.
