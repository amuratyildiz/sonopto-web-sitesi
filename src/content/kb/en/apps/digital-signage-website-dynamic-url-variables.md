---
title: 'Website Dynamic URL Variables'
urlSlug: 'digital-signage-website-dynamic-url-variables'
summary: 'Learn how to use dynamic URL variables to automatically pass player information and custom tags to external systems, APIs, and data sources.'
category: 'apps'
order: 84
source: 'apps/digital-signage-website-dynamic-url-variables'
sourceHash: '35bdc02edc6d6a30'
importedAt: '2026-09-23'
---
> **Note:** This feature is used with the **Website/URL** app. See [](/en/support/apps/digital-signage-website/)Website/URL App.

Dynamic URL variables let you insert player‑specific values into URLs automatically.  
Use them to send device information to APIs, content feeds, analytics systems, or custom dashboards.

This allows you to:

-   Pass player attributes dynamically without manual input
-   Personalize data requests per device
-   Trigger content rules or API workflows based on screen metadata
-   Use custom tags to define business logic (store ID, zone, region, channel, etc.)

* * *

## Available Variables

<div class="table-scroll"><table><thead><tr><th>Variable</th><th>Description</th></tr></thead><tbody><tr><td><code>{player.id}</code></td><td>Unique digital signage player ID</td></tr><tr><td><code>{player.serial}</code></td><td>Device serial number (if available)</td></tr><tr><td><code>{player.name}</code></td><td>Player name</td></tr><tr><td><code>{player.manufacturer}</code></td><td>Device manufacturer (Samsung, LG, Android, etc.)</td></tr><tr><td><code>{player.osPlatform}</code></td><td>Operating system / platform</td></tr><tr><td><code>{player.tags.all}</code></td><td>All tags in <code>key:value</code> format, comma‑separated</td></tr><tr><td><code>{player.tags.key}</code></td><td>Tag value by key (example below)</td></tr></tbody></table></div>

> Tags are case‑sensitive. Use lowercase keys when possible.

* * *

## Using Tags

Tags allow you to set custom metadata for each player.

Example tags added to a player:

```
store:AU‑001
zone:MenuBoard
city:Sydney
```

<div class="table-scroll"><table><thead><tr><th>Template</th><th>Output</th></tr></thead><tbody><tr><td><code>{player.tags.store}</code></td><td><code>AU‑001</code></td></tr><tr><td><code>{player.tags.zone}</code></td><td><code>MenuBoard</code></td></tr><tr><td><code>{player.tags.city}</code></td><td><code>Sydney</code></td></tr><tr><td><code>{player.tags.all}</code></td><td><code>store:AU‑001,zone:MenuBoard,city:Sydney</code></td></tr></tbody></table></div>

> Tags are written as `key:value`. You can add multiple tags per player.

<img src="/kb/apps/dynamic-variables-tags.webp" alt="Digital Signage - dynamic-variables-tags" loading="lazy" decoding="async">

* * *

## Example URL Usage

```
https://example.com/sync?player={player.id}&store={player.tags.store}
```

### Use multiple tag variables

```
https://example.com/{player.tags.store}/{player.tags.zone}
```

### Send all tags

```
https://example.com?tags={player.tags.all}
```

* * *

## Test Your Variables

You can preview how variables expand using our testing tool:

[https://url-variable-tester.ds-apps.net](https://url-variable-tester.ds-apps.net)

### Example Testing

Template:

```
https://url-variable-tester.ds-apps.net?device={player.id}&store={player.tags.store}
```

Tester Output Example:

```
https://url-variable-tester.ds-apps.net?device=PL12345&store=AU‑001
```

Use this tool to verify URL formats before publishing.

* * *

## Best Practices

-   Use lowercase tag keys: `store`, `zone`, `channel`
-   Avoid spaces — use `-` or `_`: `store‑id:001`
-   Keep tag values short and clean
-   Test URLs using the online tool
