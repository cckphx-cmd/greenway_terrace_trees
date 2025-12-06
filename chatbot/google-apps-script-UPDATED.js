function doPost(e) {
  try {
    // Get the active spreadsheet
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    // Parse the incoming JSON data
    var data = JSON.parse(e.postData.contents);

    // Split trees into Tree 1 and Tree 2
    var tree1 = '';
    var tree2 = '';
    if (data.trees) {
      var treesText = data.trees;
      // Check if it's 2 of the same tree (e.g., "Blue Palo Verde (2)")
      if (treesText.includes('(2)')) {
        tree1 = treesText.replace(' (2)', '');
        tree2 = treesText.replace(' (2)', '');
      } else {
        // Split by comma for different trees
        var treesArray = treesText.split(',').map(function(t) { return t.trim(); });
        tree1 = treesArray[0] || '';
        tree2 = treesArray[1] || '';
      }
    }

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
      tree1,
      tree2,
      data.stumpRemoval || '',
      data.complexInstall || '',
      data.tshirtSize || '',
      data.landlordName || '',
      data.landlordEmail || '',
      data.landlordPhone || ''
    ];

    // Append the row to the sheet
    sheet.appendRow(row);

    // ===== SEND CONFIRMATION EMAIL TO APPLICANT =====
    var applicantEmail = data.email;
    var applicantName = data.firstName;

    var confirmationSubject = "✅ Tree Grant Application Received - Greenway Terrace";
    var confirmationBody =
      "Hi " + applicantName + ",\n\n" +
      "Great news! We've received your tree grant application. 🌳\n\n" +

      "YOUR SUBMISSION DETAILS:\n" +
      "━━━━━━━━━━━━━━━━━━━━━━━━\n" +
      "Address: " + (data.address || '') + "\n" +
      "Name: " + (data.firstName || '') + " " + (data.lastName || '') + "\n" +
      "Email: " + (data.email || '') + "\n" +
      "Phone: " + (data.phone || '') + "\n" +
      "Status: " + (data.homeownerStatus || '') + "\n" +
      (data.landlordPermissionStatus && data.landlordPermissionStatus.includes('PENDING')
        ? "⚠️ IMPORTANT: " + data.landlordPermissionStatus + "\n"
        : "") +
      "\nTREE SELECTION:\n" +
      "Tree 1: " + tree1 + "\n" +
      (tree2 ? "Tree 2: " + tree2 + "\n" : "") +
      "\nPROPERTY INFO:\n" +
      "Stump Removal: " + (data.stumpRemoval || 'No') + "\n" +
      "Complex Install: " + (data.complexInstall || 'No') + "\n" +
      "T-Shirt Size: " + (data.tshirtSize || '') + "\n\n" +

      "NEXT STEPS:\n" +
      "━━━━━━━━━━━━━━━━━━━━━━━━\n" +
      "• You'll receive yard flags to mark where you want your trees planted\n" +
      "• Your free t-shirt (size " + (data.tshirtSize || '') + ") will be included\n" +
      "• We'll contact you within 5-7 business days\n" +
      "• Planting week: January 24, 2026\n\n" +

      "Questions? Contact Kayla Killoren at kayla.killoren@phoenix.gov\n\n" +

      "Thank you for helping make Phoenix greener!\n\n" +
      "- Greenway Terrace Community Canopy Team";

    MailApp.sendEmail(applicantEmail, confirmationSubject, confirmationBody);


    // ===== SEND NOTIFICATION EMAIL TO ADMIN =====
    var adminEmail = "cckphx@gmail.com"; // <<< CHANGE THIS TO YOUR EMAIL

    var notificationSubject = "🌳 New Tree Grant Submission - " + (data.firstName || '') + " " + (data.lastName || '');
    var notificationBody =
      "NEW TREE GRANT APPLICATION RECEIVED\n" +
      "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n" +

      "Submitted: " + (data.submittedAt || new Date().toISOString()) + "\n\n" +

      "APPLICANT INFO:\n" +
      "Name: " + (data.firstName || '') + " " + (data.lastName || '') + "\n" +
      "Email: " + (data.email || '') + "\n" +
      "Phone: " + (data.phone || '') + "\n" +
      "Address: " + (data.address || '') + "\n" +
      "Status: " + (data.homeownerStatus || '') + "\n" +
      (data.landlordPermissionStatus && data.landlordPermissionStatus.includes('PENDING')
        ? "\n⚠️ LANDLORD PERMISSION: " + data.landlordPermissionStatus + "\n"
        : "") +

      "\nLANDLORD INFO (if applicable):\n" +
      "Name: " + (data.landlordName || 'N/A') + "\n" +
      "Email: " + (data.landlordEmail || 'N/A') + "\n" +
      "Phone: " + (data.landlordPhone || 'N/A') + "\n" +

      "\nTREE SELECTION:\n" +
      "Tree 1: " + tree1 + "\n" +
      (tree2 ? "Tree 2: " + tree2 : "Tree 2: (none)") + "\n" +

      "\nPROPERTY INFO:\n" +
      "Stump Removal: " + (data.stumpRemoval || 'No') + "\n" +
      "Complex Install: " + (data.complexInstall || 'No') + "\n" +

      "\nT-SHIRT SIZE: " + (data.tshirtSize || '') + "\n\n" +

      "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n" +
      "View all submissions in your Google Sheet:\n" +
      SpreadsheetApp.getActiveSpreadsheet().getUrl() + "\n\n" +

      "Row #" + sheet.getLastRow();

    MailApp.sendEmail(adminEmail, notificationSubject, notificationBody);


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
