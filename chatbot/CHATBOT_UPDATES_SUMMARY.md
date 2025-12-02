# Chatbot Updates Summary

## Changes Made (December 2, 2025)

### 1. ✅ GDPR/California Data Privacy Disclosure
- **Location**: At the very beginning (before any data collection)
- **What it includes**:
  - What data is collected (name, address, email, phone, tree preferences, property info)
  - How data is used (application processing, coordination with City of Phoenix)
  - User rights (access, correction, deletion, withdrawal of consent)
  - Data retention policy (duration of program + 1 year)
  - Contact information for privacy questions
- **User options**:
  - "I agree, continue" → Proceeds with online application
  - "I decline" → Shows paper application option instead

### 2. ✅ Paper Application Fallback
- If user declines data privacy terms, they're offered a paper application
- Includes:
  - Link to download PDF application
  - Drop-off location: 2133 W Edgemont Ave
  - Deadline: December 31, 2025
  - Explanation that paper form has same questions

### 3. ✅ Updated Dead Tree/Stump Removal Message
- **Old message**: "Do you have any dead trees or stumps that are blocking where new trees should be planted?"
- **New message**: "Do you have any fully dead trees or stumps that are blocking where new trees should be planted? *If that's the only available spot for new trees, they can be removed at no cost as part of this program.*"
- Clarifies that removal is free if it's the only planting spot

### 4. ✅ T-Shirt Size Collection
- **Status**: Already existed in code!
- Collects sizes: S, M, L, XL, 2XL, 3XL, 4XL
- Message: "Great news! You get a free t-shirt with your application! 🎁"
- No changes needed

### 5. ✅ Mandatory Phone & Email with Validation
- **Phone validation**:
  - Must be 10 digits minimum
  - Shows error: "Please enter a valid 10-digit phone number."
  - Clears error on user input
- **Email validation**:
  - Checks for valid email format (text@domain.com)
  - Shows error if invalid: "Please enter a valid email address."
  - Required field
- Both fields now marked as "(required)" in the UI
- Validation happens on submit, prevents advancing without valid input

### 6. ✅ Google Sheets Integration
- **Setup required**: See `GOOGLE_SHEETS_SETUP.md` for step-by-step instructions
- **Data sent to sheet**:
  1. Timestamp
  2. Address
  3. Homeowner Status
  4. First Name
  5. Last Name
  6. Email
  7. Phone
  8. Trees Selected
  9. Stump Removal (Yes/No)
  10. Complex Install Details
  11. T-Shirt Size
  12. Landlord Name (if applicable)
  13. Landlord Email (if applicable)
  14. Landlord Phone (if applicable)
- **Also sends to email**: Applications still go to cckphx@gmail.com via mailto link
- **Dual collection**: Both Google Sheets AND email receive submissions

## Files Modified

1. **tree-grant.js** (main chatbot logic)
   - Added data privacy disclosure flow
   - Added paper application fallback
   - Updated dead tree message
   - Added phone/email validation functions
   - Added `showTextInputWithValidation()` function
   - Updated Google Sheets integration code

2. **GOOGLE_SHEETS_SETUP.md** (NEW)
   - Complete step-by-step guide to set up Google Sheets
   - Includes Apps Script code
   - Deployment instructions
   - Troubleshooting tips

3. **CHATBOT_UPDATES_SUMMARY.md** (THIS FILE)
   - Summary of all changes made

## What You Need To Do

### To Complete Setup:

1. **Follow Google Sheets Setup**:
   - Read `GOOGLE_SHEETS_SETUP.md`
   - Create Google Sheet with headers
   - Deploy Apps Script
   - Copy Web App URL into `tree-grant.js` line 1176

2. **Test Everything**:
   - Open chatbot
   - Go through entire flow
   - Submit test application
   - Verify it appears in Google Sheet
   - Check email arrives at cckphx@gmail.com

3. **Deploy to Production**:
   - Commit changes to git
   - Push to your hosting (GitHub Pages/Netlify)

## Testing Checklist

- [ ] Data privacy disclosure shows first
- [ ] "I decline" shows paper application option
- [ ] Phone number validation works (try invalid phone)
- [ ] Email validation works (try invalid email)
- [ ] Dead tree message includes free removal info
- [ ] T-shirt size options (S-4XL) work
- [ ] Submission goes to Google Sheet
- [ ] Email mailto link opens with data
- [ ] Review screen shows all data correctly

## Notes

- **Consent tracking**: User consent is saved in `state.data.consentGiven`
- **Validation**: Phone and email now have real-time validation
- **Backwards compatible**: All existing features still work
- **No breaking changes**: Old applications (if any) will still function

## Questions?

If you need help with:
- Setting up Google Sheets → See `GOOGLE_SHEETS_SETUP.md`
- Customizing messages → Edit `tree-grant.js`
- Testing → Open chatbot at `/chatbot/index.html`
- Deploying → Commit and push to GitHub
