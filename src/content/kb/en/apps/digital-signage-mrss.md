---
title: 'MRSS Integration'
urlSlug: 'digital-signage-mrss'
summary: 'Automate your screen content using MRSS feeds. Learn how to connect external image and video feeds with your digital signage for seamless, scheduled updates.'
category: 'apps'
order: 67
source: 'apps/digital-signage-mrss'
sourceHash: '28a18c8c4b54af04'
importedAt: '2026-09-23'
---
## What is MRSS?

**MRSS** stands for **Media RSS**, an extension of the standard RSS format specifically designed to deliver **multimedia content** like **images and videos**.  
It’s widely used for automatically updating playlists and digital signage screens with dynamic content pulled from external feeds.

* * *

## Why Use MRSS in Digital Signage?

With MRSS, you can **automate the content updates** of your screens by pointing them to an external feed. No need to manually upload or rearrange files — changes in the feed are reflected on your screens automatically.

Perfect for:

-   Retail promotions
-   News and announcements
-   Menu boards
-   Dynamic image or video campaigns

* * *

## How to Use the MRSS App

-   Open the management console.
-   Select the playlist and then the layer where you want to add the MRSS file.
-   If the layer has no media, the apps dialogue will open automatically. Otherwise, click on **Add New**.
-   You can find **MRSS** under **General Apps**, **Video Apps**, and **News Apps**.
-   Click on **MRSS** to proceed.
-   Enter the URL of the MRSS file.
-   Choose how many media items you want to display by selecting a media count.
-   Select the media type from the dropdown list. You can choose to display images, videos, or both.
-   Click “Save” to apply your changes.

<video width="90%" src="/kb/apps/mrss-app.mp4" controls="" preload="metadata" playsinline=""></video>

* * *

## Feed Requirements

Your MRSS file must be:

-   Hosted on a valid **HTTPS** server
-   Or returned as the **response from an API call**

### Example of MRSS Format:

```xml
<rss xmlns:media="http://search.yahoo.com/mrss/" version="2.0">
  <channel>
    <title>Media RSS</title>
    <description>Media RSS Feed</description>
    <item>
      <title>Image 1</title>
      <media:content
        url="https://your-domain.com/path/image1.jpg"
        type="image/jpeg"
        medium="image"
        key_change="hash1"
        duration="10"/>
    </item>
    <item>
      <title>Video 1</title>
      <media:content
        url="https://your-domain.com/path/video1.mp4"
        type="video/mp4"
        medium="video"
        key_change="hash2"
        duration="10"/>
    </item>
  </channel>
</rss>
```

Download feed file example: [https://files.cloud-digitalsignage.com/mrss/mrss-feed.xml](https://files.cloud-digitalsignage.com/mrss/mrss-feed.xml)

* * *

## MRSS XML Field Guide

Understanding the various fields in your MRSS feed is crucial for ensuring that your media is updated correctly on your screens.  
Below is a detailed guide for each field and attribute:

### Root and Structure

<div class="table-scroll"><table><thead><tr><th>Field</th><th>Required</th><th>Description</th></tr></thead><tbody><tr><td><code>&lt;rss&gt;</code></td><td>✅</td><td>Root element of the feed. Must include <code>xmlns:media="http://search.yahoo.com/mrss/"</code> and <code>version="2.0"</code>.</td></tr><tr><td><code>&lt;channel&gt;</code></td><td>✅</td><td>Contains metadata about the feed and the list of media items.</td></tr><tr><td><code>&lt;title&gt;</code></td><td>✅</td><td>Title of the channel or item (used for identification, not necessarily displayed on screen).</td></tr><tr><td><code>&lt;description&gt;</code></td><td>✅</td><td>Description of the feed or item content.</td></tr></tbody></table></div>

### `<item>` (Repeated per media entry)

Each `<item>` represents a piece of media content (image or video).

<div class="table-scroll"><table><thead><tr><th>Field</th><th>Required</th><th>Description</th></tr></thead><tbody><tr><td><code>&lt;title&gt;</code></td><td>✅</td><td>Title of the media item. Useful for internal reference and organization.</td></tr><tr><td><code>&lt;media:content&gt;</code></td><td>✅</td><td>Contains details about the media file. Must include essential attributes like URL, type, and medium.</td></tr></tbody></table></div>

### `<media:content>` Attributes

<div class="table-scroll"><table><thead><tr><th>Attribute</th><th>Required</th><th>Description</th></tr></thead><tbody><tr><td><code>url</code></td><td>✅</td><td>Direct link to the media file (must be HTTPS). Example: <code>https://yourdomain.com/media/image.jpg</code>.</td></tr><tr><td><code>type</code></td><td>✅</td><td>The MIME type of the file. Examples: <code>image/jpeg</code> for images, <code>video/mp4</code> for videos.</td></tr><tr><td><code>medium</code></td><td>✅</td><td>Specifies the type of media, either <code>image</code> or <code>video</code>. This helps the system correctly process and display the file.</td></tr><tr><td><code>duration</code></td><td>✅</td><td>Duration (in seconds) for which the media is displayed or played.</td></tr><tr><td><code>key_change</code></td><td>❌ (Recommended)</td><td>A unique identifier (e.g., an MD5 hash) of the media file. Changing this value forces the system to update the file even if the URL remains unchanged.</td></tr></tbody></table></div>

### Example Entry

```xml
<item>
  <title>Video 1</title>
  <media:content
    url="https://yourdomain.com/media/video1.mp4"
    type="video/mp4"
    medium="video"
    duration="15"
    key_change="abc123xyz456def789"/>
</item>
```

This entry plays `video1.mp4` for 15 seconds and will only trigger a re-download if either the URL or `key_change` attribute changes.

* * *

## How Updates Work

-   **URL or `key_change` field** must be modified to detect a change.
-   If **no changes** are detected, the system will skip re-downloading to conserve bandwidth.
-   The `key_change` attribute should be updated with a new unique string (like an MD5 hash) when the media file changes, even if the URL remains the same.

* * *

## Update Frequency

-   Feeds are checked **every 15 minutes**
-   **Only active playlists assigned to online players** will trigger update checks
-   If a player is **offline**, no updates will be pushed
-   When the player **comes back online**, it may take up to **15 minutes** to refresh the content

* * *

## Media Storage

-   All media files from the MRSS feed are **downloaded to our cloud storage**
-   Files are then **synced to your player** for reliable **offline playback**

* * *

## Supported Media Types

-   **Images:** `image/jpeg`, `image/png`
-   **Videos:** `video/mp4`, `video/webm`

Each `<media:content>` must include:

-   `url` (link to the file)
-   `type` (MIME type)
-   `medium` (either `image` or `video`)
-   `duration` (in seconds)
-   `key_change` (optional but recommended)

* * *

## Tips

-   Keep your MRSS feed lightweight and quick to load.
-   Host your media files on a reliable CDN or cloud server.
-   Always update the `key_change` value to force updates when the media content changes, even if the URL remains unchanged.
