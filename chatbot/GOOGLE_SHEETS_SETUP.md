# Google Sheets Integration Setup Guide

This guide will walk you through setting up Google Sheets to automatically collect tree grant applications.

## Step 1: Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Click **+ Blank** to create a new spreadsheet
3. Name it "Tree Grant Applications" (or whatever you prefer)

## Step 2: Set Up Column Headers

In the first row of your spreadsheet, add these column headers (in this exact order):

| A | B | C | D | E | F | G | H | I | J | K | L | M | N | O |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Timestamp | Address | Status | Landlord Permission Status | First Name | Last Name | Email | Phone | Trees | Stump Removal | Complex Install | T-Shirt Size | Landlord Name | Landlord Email | Landlord Phone |

## Step 3: Create Google Apps Script

1. In your Google Sheet, click **Extensions** → **Apps Script**
2. Delete any existing code in the editor
3. Copy and paste this code:

```javascript
function doPost(e) {
  try {
    // Get the active spreadsheet
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    // Parse the incoming JSON data
    var data = JSON.parse(e.postData.contents);

    // Prepare the row data in the same order as your headers
    var row = [
      data.submittedAt || new Date().toISOString(),
      data.address || '',
      data.homeownerStatus || '',
      data.landlordPermissionStatus || 'N/A',
      data.firstName || '',
      data.lastName || '',
      data.email || '',
      data.phone || '',
      data.trees || '',
      data.stumpRemoval || '',
      data.complexInstall || '',
      data.tshirtSize || '',
      data.landlordName || '',
      data.landlordEmail || '',
      data.landlordPhone || ''
    ];

    // Append the row to the sheet
    sheet.appendRow(row);

    // Return success response
    return ContentService.createTextOutput(JSON.stringify({
      'result': 'success',
      'row': sheet.getLastRow()
    })).setMimeType(ContentService.MimeType.JSON);

  } catch(error) {
    // Return error response
    return ContentService.createTextOutput(JSON.stringify({
      'result': 'error',
      'error': error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}
```

4. Click **Save** (💾 icon)
5. Name your project (e.g., "Tree Grant Submission Handler")

## Step 4: Deploy as Web App

1. Click **Deploy** → **New deployment**
2. Click the gear icon (⚙️) next to "Select type"
3. Select **Web app**
4. Configure settings:
   - **Description**: "Tree Grant Form Handler" (or any description)
   - **Execute as**: **Me** (your email)
   - **Who has access**: **Anyone** (this is safe - it only accepts data)
5. Click **Deploy**
6. **Authorize access** when prompted:
   - Click **Review permissions**
   - Choose your Google account
   - Click **Advanced** → **Go to [Your Project Name] (unsafe)** (it's safe, Google just flags custom scripts)
   - Click **Allow**
7. **Copy the Web App URL** (it looks like: `https://script.google.com/macros/s/...../exec`)

## Step 5: Add URL to Chatbot

1. Open `chatbot/tree-grant.js` in your repository
2. Search for `GOOGLE_SHEETS_URL` and find the line that says:
   ```javascript
   const GOOGLE_SHEETS_URL = ''; // Paste your Google Apps Script Web App URL here
   ```
3. Paste your Web App URL between the quotes:
   ```javascript
   const GOOGLE_SHEETS_URL = 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec';
   ```
4. Save the file

## Step 6: Test It!

1. Open your chatbot and submit a test application
2. Check your Google Sheet - you should see a new row with the test data!
3. If it doesn't work:
   - Check the browser console (F12 → Console tab) for errors
   - Make sure you copied the full Web App URL
   - Verify the deployment is set to "Anyone" can access

## Sharing the Sheet with the City

Once applications start coming in:

1. Click **Share** in the top-right of your Google Sheet
2. Add the city contact's email with **Viewer** or **Editor** access
3. Or click **Copy link** and send them the link (make sure "Anyone with the link can view" is enabled)

## Optional: Email Notifications

If you want to get notified every time someone submits:

1. In your Google Sheet, click **Tools** → **Notification rules**
2. Select "Any changes are made"
3. Choose notification frequency (immediately, daily digest, etc.)
4. Click **Save**

## Troubleshooting

**Applications not showing up?**
- Check that the Web App URL is correct in tree-grant.js
- Make sure you clicked "Deploy" (not just "Test deployment")
- Verify the script has permission to write to the sheet

**Getting errors?**
- Open Apps Script editor → **Execution log** to see errors
- Make sure column headers match exactly (case-sensitive)

**Need help?**
Contact Claude Code or check the [Google Apps Script documentation](https://developers.google.com/apps-script)
