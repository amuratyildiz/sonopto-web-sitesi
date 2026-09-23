---
title: 'Tableau Dashboard App'
urlSlug: 'digital-signage-tableau'
summary: 'Learn how to securely display your Tableau dashboards on sonopto.signage. Follow our step-by-step guide to integrate and showcase your data with ease.'
category: 'apps'
order: 71
source: 'apps/digital-signage-tableau'
sourceHash: '123a0bd774e5c9e1'
importedAt: '2026-09-23'
---
Welcome to the **Tableau Dashboard App** guide for Digital Signage. This document provides step-by-step instructions on how to use public and secure dashboards through Digital Signage.

* * *

## Table of Contents

1.  [Overview](#overview)
2.  [Public vs. Secure Tableau Dashboards](#public-vs-secure-tableau-dashboards)
3.  [Setting Up a Tableau Connected App](#setting-up-a-tableau-connected-app)
4.  [Configuring Digital Signage with Tableau](#configuring-digital-signage-with-tableau)

* * *

## 1\. Overview

The Tableau Dashboard App for Digital Signage allows you to display Tableau dashboards on your digital signage screens.

-   **Public Dashboards:** No authentication required.
-   **Secure Dashboards:** Requires **Connected App** (direct trust) configuration to provide secure access.

* * *

## 2\. Public vs. Secure Tableau Dashboards

-   **Public Dashboards:**
    
    -   Available for anyone to access.
    -   No credentials or configuration are needed to use these dashboards within Digital Signage.
-   **Secure Dashboards:**
    
    -   Also known as Embedded Dashboards with Authentication
    -   Accessible only to authenticated users.
    -   Requires creating a **Connected App** in Tableau and providing relevant credentials to Digital Signage for secure access.
    -   **Supports multiple connected apps** from different Tableau accounts, allowing seamless dashboard integration.

* * *

## 3\. Setting Up a Tableau Connected App

To access secure Tableau dashboards with Digital Signage, follow the steps below to create a Connected App and obtain the required credentials.

### Step 1: Create and Enable a Connected App in Tableau

1.  Log in to **Tableau Cloud** using your admin account.
    
2.  Navigate to **Settings** → **Connected Apps**.
    
3.  Click **New Connected App**, and choose **Direct Trust**. <img src="/kb/apps/connected-app-direct-trust.webp" alt="digital signage create connected app" loading="lazy" decoding="async">
    
4.  Name your connected app (e.g., “Digital Signage”), and setting access level required.
    
    <img src="/kb/apps/create-connected-app.webp" alt="Add new connected app" loading="lazy" decoding="async">
    
5.  Click **Create** to generate the credentials.
    

#### Enabling the Connected App

6.  After creating the app, **scroll back to the list of connected apps**.
7.  Select the newly created app and from the **Actions** drop down list, click the **Enable** button.  
    <img src="/kb/apps/enable-tableau-connected-app.webp" alt="Enable connected app" loading="lazy" decoding="async">

### Step 2: Obtain the Connected App Credentials

1.  Click on the newly created app
    
2.  Click on **Generate New Secret** and you will see the following details:
    
    -   **Secret ID**
    -   **Secret Value**
    -   **Client ID**
    
    <img src="/kb/apps/connected-app-copy-details.webp" alt="tableau dashboard onnected app credentials" loading="lazy" decoding="async">
    
3.  You will use these values to integrate the Tableau dashboards with Digital Signage.
    

* * *

## 4\. Configuring Digital Signage with Tableau

Follow these steps to add the Tableau dashboard to your Digital Signage app.

### Step 1: Open Digital Signage Admin Panel

1.  Log in to your **Digital Signage** account.
    
2.  Navigate to the **Playlists** choose existing playlist or create a new one
    
3.  Follow the steps to reach the apps list and choose “business Intelligence”
    
    <img src="/kb/apps/select-bi.webp" alt="select BI apps" loading="lazy" decoding="async">
    
4.  Navigate to the **Tableau** from the apps section.
    
    <img src="/kb/apps/digital-signage-tableau.webp" alt="choose Tableau App" loading="lazy" decoding="async">
    
5.  Go back to Tableau accout, navigate to the dashboard you want to use, click share and copy the URL.
    
    <img src="/kb/apps/tableau-dashboard-get-dashboard-link.webp" alt="choose Tableau App" loading="lazy" decoding="async">
    
6.  Enter the URL, uncheck **Public Dashboard** checkbox, and click on **ADD CONNECTED APP**..
    
    <img src="/kb/apps/digital-signage-connected-app-add.webp" alt="choose Tableau App" loading="lazy" decoding="async">
    
7.  Fill in the connected app details acquired in Step 2:
    

-   Enter the App Name.
    
-   To copy the Secret ID, click on the **Actions** drop down list and click on **Copy ID**. Paste it in the Secret ID field.
    
-   To copy the Secret Value, Click on the **Actions** drop down list and click on Copy Value. Paste it in the Secret Value field.
    
-   Copy the client ID by clicking on the **Copy Client ID** button, and paste it in the Client ID field.
    
-   Enter the User Email used in the Tableau Dashboard.
    
-   Click ADD.
    
    <img src="/kb/apps/edit-connected-app.webp" alt="choose Tableau App" loading="lazy" decoding="async">
    

8.  Make sure the newly added app is selected and click save.
    
    <img src="/kb/apps/select-connected-app.webp" alt="choose Tableau App" loading="lazy" decoding="async">
    
9.  You should be able to see your dashboard in the media preview.
    
10.  You can add multiple **Connected App** by repeating the above steps for each Tableau Connected App you want to add.
     
11.  Assign the playlist to your screen and click publish.
     

* * *
