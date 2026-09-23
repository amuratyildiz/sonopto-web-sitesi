---
title: 'Power BI App'
urlSlug: 'digital-signage-powerbi'
summary: 'Learn how to integrate Microsoft Power BI with sonopto.signage for seamless digital signage. Display real-time data insights on your screens effortlessly!'
category: 'apps'
order: 64
source: 'apps/digital-signage-powerbi'
sourceHash: '0dd733d07f2a6972'
importedAt: '2026-09-23'
---
## How to Use Power BI App with your digital signage

The Power BI app allows users to display their Power BI reports on digital signage screens seamlessly. This is ideal for sharing real-time data and dashboards with your audience.

### How to Share Power BI Reports

There are two ways to share Power BI reports: **Public Reports** and **Protected Reports**.

* * *

#### 1\. Public Reports

Public reports are accessible via a public link without the need to signin with your Microsoft account. Follow these steps to add a public Power BI report to your screen:

1.  **Generate the Public Link**
    
    -   Open your Power BI report.
    -   Go to **File** > **Embed Report** > **Publish to Web**.

<img src="/kb/apps/digital-signage-powerbi-1.webp" alt="Digital Signage - Power BI - Share to web" loading="lazy" decoding="async">

-   Copy the provided public URL.

<img src="/kb/apps/digital-signage-powerbi-2.2.webp" alt="Digital Signage - Power BI - copy URL" loading="lazy" decoding="async">

-   The URL should look simiar to the below
    
    `https://app.powerbi.com/view?r=XXXX`
    

2.  **Add the Report to your sonopto.signage**
    
    -   Go to the your **sonopto.signage**.
    -   Navigate to your **playlist** and select the layer where you want to add Power BI.
        -   If the layer has no media, the apps dialog will open automatically.
        -   If it already has media, click **Add New**.
    -   Select **Business Intelligence** > **Power BI**.

<img src="/kb/apps/digital-signage-powerbi-3.webp" alt="Digital Signage - Power BI - select business IntelligenceL" loading="lazy" decoding="async"> <img src="/kb/apps/digital-signage-powerbi-4.webp" alt="Digital Signage - Power BI - select powerbi" loading="lazy" decoding="async">

-   Paste the copied URL into the box.
-   Check the **Public** checkbox.

3.  **Set the Refresh Rate**
    
    -   Choose a refresh rate to update the dashboard’s data. Options range from **15 to 60 minutes**.
4.  **Save**
    
    -   Click **Save** to display the report on your screen.

<img src="/kb/apps/digital-signage-powerbi-5.webp" alt="Digital Signage - Power BI - paste url" loading="lazy" decoding="async">

* * *

#### 2\. Protected Reports

Protected reports require user authentication and are more secure than public reports. Here’s how to add them to your portal: 

1.  **Copy the Report URL**
    
    -   Open your report in Power BI.
        
    -   Copy the URL from the browser. It should look similar to this:
        
        `https://app.powerbi.com/groups/XXXX/reports/XXX/ReportSection2?experience=power-bi`
        

<img src="/kb/apps/digital-signage-powerbi-2.webp" alt="Digital Signage - Power BI - copy url" loading="lazy" decoding="async">

2.  **Add the Report to your sonopto.signage**
    
    -   Follow the same steps as for public reports, but **uncheck the Public checkbox**.
3.  **Sign in with Microsoft**
    
    -   When prompted, sign in using your Microsoft account.
    -   This will grant the digital signage portal **read-only access** to your dashboard.
4.  **Select Your Account**
    
    -   Ensure your email is displayed in the **account list** and selected before saving.
5.  **Save**
    
    -   Click **Save** to display the protected report.

<img src="/kb/apps/digital-signage-powerbi-6.webp" alt="Digital Signage - Power BI - copy url" loading="lazy" decoding="async">

##### Note:

You can add multiple Microsoft accounts to share reports from different Power BI workspaces.

* * *

### How Microsoft Sign-In Works and Ensures Security

When you sign in with Microsoft, we implements a secure process to manage your data:

1.  **Long-Life Token**:
    
    -   Upon signing in, Microsoft provides a long-life token (known as a **refresh token**) that is securely saved and encrypted in our database.
    -   This token is never shared with users or sent to screens.
2.  **Short-Life Access Token**:
    
    -   The system uses the refresh token to request a short-life **access token**, valid only for 1 hour.
    -   The access token is securely sent to the screens to display the dashboard.
3.  **Secure Token Renewal**:
    
    -   Screens securely request a new access token every hour to keep the dashboard updated.

This process ensures that your data is protected while maintaining seamless access to your Power BI reports.

* * *
