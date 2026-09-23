---
title: 'Pre-Provision Devices'
slug: 'pre-provision-devices-digital-signage'
summary: 'Learn how to pre-provision devices in to simplify installations and bulk screen deployments. Configure screens ahead of time and auto-assign playlists and tags before they come online!'
category: 'screens'
order: 8
source: 'screens/pre-provision-devices-digital-signage'
sourceHash: '73adc2a6afbfd6d0'
importedAt: '2026-09-23'
---
Pre-provisioning allows you to prepare screens **before** they come online. This is useful when deploying many screens at once, sending pre-configured devices to clients, or working with installers.

When a pre-provisioned device connects for the first time, it will automatically link to the account and apply the settings you configured.

> **Note:** You must have enough available licences to pre-provision screens. For example, if you want to pre-provision 10 screens, your account must have at least 10 unused screen licences.

> You can bulk pre-provision **up to 50 players at a time** using the CSV upload tool.

* * *

## Benefits of Pre-Provisioning

-   Bulk deploy devices faster
-   Assign playlists and tags before installation
-   Simplify onboarding for clients or installers
-   No need to manually activate every screen
-   Supports Android, WebOS, Tizen, Windows, macOS, Linux and Brightsign

* * *

## How It Works

1.  Add your screen’s **Serial Number** before installation
2.  Assign a **Name**, **Playlist**, and optional **Tags**
3.  Ship or install devices
4.  When the device connects, it auto-registers and applies its settings

* * *

## Typical Workflow

<div class="table-scroll"><table><thead><tr><th>Step</th><th>Action</th></tr></thead><tbody><tr><td>1</td><td>Generate or collect device serial numbers</td></tr><tr><td>2</td><td>Pre-provision devices</td></tr><tr><td>3</td><td>Install screens on-site</td></tr><tr><td>4</td><td>Devices auto-link to the account and apply settings</td></tr></tbody></table></div>

* * *

## Adding a Device

You can add devices in two ways, manually or upload a CSV file:

### 1\. Manual Entry

-   Go to Screens tab
-   Click on “Add Screen”
-   Click “Provision Devices”

<img src="/destek/screens/pre-provision-devices-digital-signage.webp" alt="Pre-Provision Devices" loading="lazy" decoding="async">

-   Click “Add Devices”

<img src="/destek/screens/add-device-manual.webp" alt="Add provision device" loading="lazy" decoding="async">

-   Paste the serial number of your device. (You can add more than on serial number, one per line, or separated by commas or spaces)

<img src="/destek/screens/add-serial-number.webp" alt="Add serial number" loading="lazy" decoding="async">

-   Click “Save”
-   Enter the following:
    -   **Name** (optional)
    -   **Playlist** (optional)
    -   **Tags** (optional)

<img src="/destek/screens/add-name-playlist.webp" alt="Enter device details" loading="lazy" decoding="async">

Now, when the device connects, it auto-registers and applies the settings.

### 2\. Bulk Import via CSV

Upload a CSV file to add multiple devices at once.

> Maximum **50 devices per CSV upload**

**CSV Format Example:**

```
serial,name,playlist,tags
SN001,Reception TV,Welcome Playlist,frontdesk;reception
SN002,Menu Board,Menu Playlist,restaurant;menu
```

> Tags support `,` or `;` separators

-   Click on the “Add Screen” button
-   Click “Provision Devices”
-   Go to “Upload CSV File” tab

<img src="/destek/screens/add-csv-file.webp" alt="Upload CSV File" loading="lazy" decoding="async">

-   Choose CSV file to upload devices.

<img src="/destek/screens/upload-devices.webp" alt="Upload CSV file" loading="lazy" decoding="async">

-   Click “Confirm” to save data

When installed devices connect, they will automatically register and apply the settings.

* * *

## Tags

Tags help group screens and automate content assignment.

Examples:

-   `reception`
-   `menu`
-   `gym`
-   `store-123`

<img src="/destek/screens/tags.webp" alt="Screen Tags" loading="lazy" decoding="async">

_Read more about [](/en/support/playlists/3.7-control-media-playback-by-tags/)Tags_.

* * *

## Device Activation

When the device connects for the first time:

-   It checks for matching serial number
-   Applies assigned Playlist/Tags
-   Appears in the **Players** page

<img src="/destek/screens/screens-on-dashboard.webp" alt="Players on Dashboard" loading="lazy" decoding="async">

* * *

## Tips

-   Use CSV for large deployments
-   Keep serial numbers consistent (case insensitive)
-   Use tags for organization and automation
-   Test with one screen before mass rollout

* * *

## FAQs

<div class="table-scroll"><table><thead><tr><th>Question</th><th>Answer</th></tr></thead><tbody><tr><td>What if a serial number already exists?</td><td>The new one will not override an active screen</td></tr><tr><td>Can I change settings after provision?</td><td>Yes, you can edit anytime</td></tr><tr><td>Do devices need internet?</td><td>Yes, for initial activation and updates</td></tr><tr><td>Can I bulk delete provisions?</td><td>Yes via the UI</td></tr></tbody></table></div>
