---
title: 'Integrate Google Sheets with Digital Signage Templates'
urlSlug: 'google-sheet-digital-signage'
summary: 'Learn how to use Google Sheets to dynamically update data in your digital signage templates. Perfect for menus, schedules, events, and more.'
category: 'dynamic-data'
order: 999
source: 'dynamic-data/google-sheet-digital-signage'
sourceHash: '9375852ec0320af8'
importedAt: '2026-09-23'
---
## Using Google Sheets for Dynamic Data in Digital Signage Templates

You can integrate Google Sheets to make parts of your digital signage templates dynamic. This feature is perfect for frequently updated content, such as menus, rosters, or event schedules.

Dynamic data updates are triggered by the Google Drive API, which does not guarantee live updates. Typically, updates are reflected on the screen within **seconds to minutes** after a change, depending on Google’s API caching and processing intervals. Additionally, you can manually refresh data (**limited to once per minute**) for immediate updates through the template editor.

### Steps to Enable Dynamic Data with Google Sheets

#### Step 1: Create or Choose a Template

-   Start with a blank template or use an existing one from the available library.
    
    <img src="/kb/dynamic-data/add-templates-1.webp" alt="Add Digital Signage Template" loading="lazy" decoding="async">
    
-   Open the template editor.
    
    <img src="/kb/dynamic-data/open-templates-editor-2.webp" alt="Open Digital Signage Template" loading="lazy" decoding="async">
    

#### Step 2: Design Your Template

-   Upload images and arrange placeholders for dynamic data.
-   Leave empty spaces in your design where the dynamic data will appear.

#### Step 3: Connect Google Sheets

1.  Select **GOOGLE SHEETS** from the left menu in the template editor.

<img src="/kb/dynamic-data/choose-google-sheets-3.webp" alt="Choose Google Sheet Digital Signage" loading="lazy" decoding="async">

2.  Share your Google Sheet with the provided user as a viewer.
    
    -   Copy the provided user email.
    
    <img src="/kb/dynamic-data/copy-google-sheet-user-4.webp" alt="Copy Viewer Email" loading="lazy" decoding="async">
    

-   Share your Google Sheet by granting Viewer access.
    
    Note: The Google Sheet must be formatted as a plain table with uniform row and column sizes.
    
    <img src="/kb/dynamic-data/gogole-sheets-share-digital-signage-5.webp" alt="Share your google sheet with digital signage user" loading="lazy" decoding="async">
    

<img src="/kb/dynamic-data/gogole-sheets-share-user-6.webp" alt="Grand viewer access" loading="lazy" decoding="async">

3.  Copy the Google Sheet URL and paste it into the designated field in editor.
4.  Click **Add** to link the sheet.

<img src="/kb/dynamic-data/paste-google-sheet-url-7.webp" alt="Copy google sheet url and add it to digital signage" loading="lazy" decoding="async">

#### Step 4: Verify and Choose Your Data

-   After adding the Google Sheet:
    -   The sheet name and available tabs should appear. If not, click **Refresh Data**.
    -   Data will load within a few seconds.
-   Select the sheet you want to use for dynamic data (only one sheet per template).
-   Click **ADD TO TEMPLATE** to add the data to your template and open the Data Editor.

<img src="/kb/dynamic-data/add-sheet-8.webp" alt="Select one sheet" loading="lazy" decoding="async">

#### Step 5: Configure Your Data

-   Use the Data Editor to choose which fields or rows to display in the template.
-   Add multiple data blocks if needed, selecting different data from the same sheet.
-   Adjust text alignment to organize your content.

### Styling Your Dynamic Data

-   Customize font style, color, and size to match your design.
-   Customize the grid to ensure the dynamic data fits seamlessly into your template’s layout.

### Automatic Data Refresh

-   Data automatically updates based on the Google Drive API, typically within seconds to minutes
-   To force a refresh, click **Refresh Data** inside the template.  
    Note: Manual refresh is limited to once per minute.

### Use Cases

This integration is ideal for:

-   Restaurant menus with daily specials
-   Employee rosters
-   Event schedules
-   Any template requiring frequent data updates

By leveraging this feature, you can ensure your digital signage remains accurate and relevant, saving time and effort on manual updates.
