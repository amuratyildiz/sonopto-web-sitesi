---
title: 'Support for LED board screens'
urlSlug: 'digital-signage-led-support'
summary: 'Discover how sonopto.signage supports LED screens for seamless digital signage. Learn setup tips, troubleshooting, and get the most from your LED display today!'
category: 'screens'
order: 5
source: 'screens/digital-signage-led-support'
sourceHash: 'cae1e45e11437797'
importedAt: '2026-09-23'
---
**IMPORTANT:** Before proceeding with the steps below, make sure that you have already installed your player. The process of installing the LED player is the same as the standard player installation. To get detailed instructions on how to install the player, refer to the **installation** section of this manual and choose the type of player you have.

You can use our digital signage CMS to display content on LED screens and billboards. Proper calculations and configurations are necessary for optimal use.

#### Step 1: Identify the content area resolution

LED displays often have a lower resolution than the expected input resolution, especially large displays. Typically, only the top-left corner of the input is used to display content. In order for a CMS to effectively manage the LED display, it is necessary to obtain its resolution and use it to calculate the appropriate configuration parameters.

Refer to your LED supplier for the content area resolution; in the below example, we will assume the resolution is 320x320px.

<img src="/kb/screens/led-layout.webp" alt="LED Layout" loading="lazy" decoding="async">

#### Step 2: Create a playlist

Create a playlist and choose a name that you can refer to it later.

<img src="/kb/screens/create_led_playlist.webp" alt="Create LED Playlist" loading="lazy" decoding="async">

Choose a layout with more than one layer, for example, layout 2

<img src="/kb/screens/led-playlist-choose-layout.webp" alt="Choose Layout" loading="lazy" decoding="async">

#### Step 3: Edit Layout

Click edit layout to optimise the layers to fit the LED resolution.

<img src="/kb/screens/led-playlist-edit-layout.webp" alt="Edit Layout" loading="lazy" decoding="async">

Resize the layer to 320x320px; ensure it starts at the top left corner by setting x=0, y=0 as in the screenshot below.

Delete the 2nd layer, as it will not be used in this example.

<img src="/kb/screens/led-playlist-set-layers.webp" alt="Set layers" loading="lazy" decoding="async">

The final layout should look like the one below.

<img src="/kb/screens/led-playlist-layer.webp" alt="LED layer" loading="lazy" decoding="async">

Click back, then click on the layer configured to upload your content.

<img src="/kb/screens/led-playlist-select-layer.webp" alt="Click on Layer" loading="lazy" decoding="async">

#### Step 4: Upload content

To upload your content, click upload media and choose the source of your files.

You can also use Canva App to use one of their existing templates.

<img src="/kb/screens/led-playlist-upload-content.webp" alt="Upload Content" loading="lazy" decoding="async">

Once you upload your content, you should end up with something like the one below.

<img src="/kb/screens/led-playlist-content.webp" alt="Playlist content" loading="lazy" decoding="async">

#### Step 5: Assign the playlist to the LED screen.

Now that your playlist is ready, go to the screens page and click on media sources. Select the playlist you created and assign it to your LED.

<img src="/kb/screens/led-playlist-media-source.webp" alt="Select screen media source" loading="lazy" decoding="async">

Make sure you click on publish to send your content to your screen; you should see your content playing on your LED within seconds.

<img src="/kb/screens/led-playlist-publish.webp" alt="Publish changes to the screen" loading="lazy" decoding="async">

If you want to display multiple content on your LED, you can split it into multiple zones by adding two layers, as shown in the example below. This is useful if you have all your LED content in one controller, but still need to display different content on your LED.

<img src="/kb/screens/led-playlist-2-layers.webp" alt="LED with two layers" loading="lazy" decoding="async">
