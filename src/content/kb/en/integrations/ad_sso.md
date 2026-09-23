---
title: 'Setup SAML 2.0 SSO for Hexa and Azure Active Directory'
slug: 'ad_sso'
summary: 'Learn how to set up SAML 2.0 SSO for seamless single sign-on, enhancing security and streamlining access to your applications effortlessly.'
category: 'integrations'
order: 112
source: 'integrations/ad_sso'
sourceHash: 'ba00419063a0e02e'
importedAt: '2026-09-23'
---
## Prerequisites:

-   Azure AD is your Identity provider
    
-   SAML 2.0 SSO configuration works with the following Azure Plans:
    
    -   Pro Plus
    -   Enterprise plan
-   You have a sub domain of CloudHexa and you require SAML 2.0 SSO to authenticate your users.
    

### Configurations needed in your Azure AD console

_Important: Login to Azure AD as **admin**_

#### Add an Enterprise Application in your Azure AD portal:

-   Go to **Enterprise applications**.
-   Click on **New Application**.

<img src="/destek/integrations/1-ad-enterprise-application.webp" alt="Enterprise Application" loading="lazy" decoding="async">

-   Click on **Create your own application**.
-   Enter _CloudHexa_ as the name of the app.
-   Choose **Integrate any other application you don’t find in the gallery (Non-gallery)**.
-   Click **Create**.

<img src="/destek/integrations/2-ad-create-app.webp" alt="Create Application" loading="lazy" decoding="async">

-   Click on Setup Single Sign on

<img src="/destek/integrations/3-ad-setup-sso.webp" alt="Setup SSO" loading="lazy" decoding="async">

-   Click on SAML in the Select a single sign-on method step

#### Step 1

-   Click Edit in Basic SAML Configuration, then in the dialog:
    
    -   Click on **Add Identifier** Identifier (Entity ID): this is your unique identifier provided by Hexa support team, paste it here
    -   Click on **Add reply URL** to add Reply URL (Assertion Consumer Service URL): Copy this URL and add it: **[https://cloud-digitalsignage.com/\_\_/auth/handler](https://cloud-digitalsignage.com/__/auth/handler)**
-   Click **Save**
    
-   Your settings will look like the following:
    

<img src="/destek/integrations/4-ad-edit-basic-saml.webp" alt="Edit Basic SAML" loading="lazy" decoding="async">

#### Step 2

-   Under Attributes & Claims, click on Edit

<img src="/destek/integrations/8-attributes-claims.webp" alt="Attributes and Claims" loading="lazy" decoding="async">

-   Click on **Add a group claim**

<img src="/destek/integrations/9-group-claim.webp" alt="Group Claim Settings" loading="lazy" decoding="async">

-   Choose Security Groups
-   Check **Customize the name of the group claim**
-   Type in _groups_
-   Click Save

<img src="/destek/integrations/10-group-claim-settings.webp" alt="Group Claim Settings" loading="lazy" decoding="async">

#### Step 3

-   In **SAML Certificates**,
-   From Certificate (Base64), Click on Download. This file should be sent to Hexa Support Team.

<img src="/destek/integrations/5-ad-download-certificate.webp" alt="Certificate" loading="lazy" decoding="async">

#### Step 4

-   In Setup \[CloudHexa\], copy the 2 below URLs, and send to Hexa support team.

<img src="/destek/integrations/6-ad-setup-urls.webp" alt="Setup URLs" loading="lazy" decoding="async">

## Map AD groups to CloudHexa Accounts

-   We require to create groups and map them to CloudHexa accounts, it is recommended to have seperate AD groups for your digital signage app.
-   Get the Group ID from Azure AD and provide it to Hexa support Team and specify to which CloudHexa user it should be mapped.
-   In Azure AD, go to Groups, locate your group and copy its **Object ID**

<img src="/destek/integrations/7-group-id.webp" alt="Group ID" loading="lazy" decoding="async">

_To manage user roles in CloudHexa, refer to [Teams](/en/support/user-management/teams/)._
