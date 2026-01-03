#!/usr/bin/env python3
"""
Tree Grant Confirmation Email Sender
Sends personalized confirmation emails to tree grant applicants
"""

import csv
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from getpass import getpass
import sys

def format_tree_selection(tree1, tree2):
    """Format tree selections for email"""
    trees = []
    if tree1 and tree1.strip():
        trees.append(tree1.strip())
    if tree2 and tree2.strip():
        trees.append(tree2.strip())

    if len(trees) == 0:
        return "No trees selected"
    elif len(trees) == 1:
        return trees[0]
    else:
        return f"{trees[0]} and {trees[1]}"

def create_email_body(first_name, tree_selection):
    """Create personalized email body with HTML formatting"""
    html = f"""<html>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
<p>Hi {first_name},</p>

<p><strong>I need a favor.</strong></p>

<p>We have 30 families signed up. There are 600+ eligible homes. <strong>The deadline is December 31st</strong> and this is the last round of this program. Once it's gone, it's gone.</p>

<p><strong>Will you talk to one neighbor this week?</strong></p>

<p>That's it. Just one. Let them know:</p>

<ul>
<li><strong>It's completely free:</strong> 2 shade trees, planted by professionals</li>
<li>They can apply at <strong><a href="https://trees.courtneykingsbury.com">trees.courtneykingsbury.com</a></strong></li>
<li>Or text/call me directly: <strong>602-463-0759</strong></li>
<li>Paper applications available at <strong>2133 W Edgemont Ave</strong> (my yard)</li>
</ul>

<p>I'm just your neighbor who got this grant for Greenway Terrace. The city let me expand it to 600+ homes, but I can't reach them all alone. My family has knocked on every door. Now I need your help to spread the word.</p>

<p><strong>Let's cool this neighborhood together.</strong></p>

<hr style="border: none; border-top: 1px solid #ccc; margin: 20px 0;">

<p><strong>Your tree is confirmed!</strong><br>
You selected: <strong>{tree_selection}</strong><br>
Planting week: <strong>January 26th</strong><br>
If this looks wrong or you want to change your selection, let me know ASAP.</p>

<p>Thank you for being one of the first to sign up. I'm so excited to make our neighborhood greener with you.</p>

<p>Courtney</p>

<p><em>P.S. If you see a blue Highlander or a brunette with a stroller photographing your yard, that's just me! I'm taking photos for the planting crew.</em></p>
</body>
</html>"""

    # Plain text version for email clients that don't support HTML
    plain = f"""Hi {first_name},

I need a favor.

We have 30 families signed up. There are 600+ eligible homes. The deadline is December 31st and this is the last round of this program. Once it's gone, it's gone.

Will you talk to one neighbor this week?

That's it. Just one. Let them know:

• It's completely free: 2 shade trees, planted by professionals
• They can apply at trees.courtneykingsbury.com
• Or text/call me directly: 602-463-0759
• Paper applications available at 2133 W Edgemont Ave (my yard)

I'm just your neighbor who got this grant for Greenway Terrace. The city let me expand it to 600+ homes, but I can't reach them all alone. My family has knocked on every door. Now I need your help to spread the word.

Let's cool this neighborhood together.

---

Your tree is confirmed!
You selected: {tree_selection}
Planting week: January 26th
If this looks wrong or you want to change your selection, let me know ASAP.

Thank you for being one of the first to sign up. I'm so excited to make our neighborhood greener with you.

Courtney

P.S. If you see a blue Highlander or a brunette with a stroller photographing your yard, that's just me! I'm taking photos for the planting crew."""

    return html, plain

def send_email(smtp_server, from_email, to_email, subject, html_body, plain_body):
    """Send an email via SMTP with HTML and plain text"""
    msg = MIMEMultipart('alternative')
    msg['From'] = from_email
    msg['To'] = to_email
    msg['Subject'] = subject

    # Attach both plain text and HTML versions
    # Email clients will display HTML if supported, otherwise plain text
    msg.attach(MIMEText(plain_body, 'plain'))
    msg.attach(MIMEText(html_body, 'html'))

    smtp_server.send_message(msg)

def main():
    # Configuration
    csv_file = "/Users/CCK85/Downloads/Tree Grant Applications - Sheet1.csv"
    subject = "Your FREE Tree is Confirmed! Now Help Us Spread the Word"

    # Get Gmail credentials
    print("=== Tree Grant Confirmation Email Sender ===\n")
    from_email = input("Enter your Gmail address: ").strip()
    print("\nYou'll need a Gmail App Password (not your regular password).")
    print("Get one at: https://myaccount.google.com/apppasswords")
    print("(You may need to enable 2-factor authentication first)\n")
    password = getpass("Enter your Gmail App Password: ")

    # Ask for test mode
    print("\n" + "="*50)
    test_mode = input("Test mode? Send only to yourself first? (y/n): ").strip().lower()

    # Read CSV and prepare emails
    emails_to_send = []
    with open(csv_file, 'r', encoding='utf-8') as f:
        reader = csv.DictReader(f)
        for row in reader:
            first_name = row['First Name'].strip()
            email = row['Email'].strip()
            tree1 = row['Tree 1']
            tree2 = row['Tree 2']

            # Skip if no email
            if not email:
                print(f"⚠️  Skipping {first_name} - no email address")
                continue

            tree_selection = format_tree_selection(tree1, tree2)
            html_body, plain_body = create_email_body(first_name, tree_selection)

            emails_to_send.append({
                'name': first_name,
                'email': email,
                'html_body': html_body,
                'plain_body': plain_body,
                'trees': tree_selection
            })

    # In test mode, only send to test email address
    if test_mode == 'y':
        test_email_address = "cckphx@gmail.com"
        print(f"\n📧 TEST MODE: Sending test email to {test_email_address}")
        if emails_to_send:
            test_email = emails_to_send[0].copy()
            test_email['email'] = test_email_address
            emails_to_send = [test_email]
            print(f"   Using {test_email['name']}'s data as example")
        else:
            print("❌ No emails to send!")
            return

    print(f"\n📊 Total emails to send: {len(emails_to_send)}")
    print("\nPreview of first email:")
    print("="*50)
    print(f"To: {emails_to_send[0]['email']}")
    print(f"Subject: {subject}")
    print("-"*50)
    print(emails_to_send[0]['plain_body'][:300] + "...")
    print("="*50)

    confirm = input(f"\nSend {len(emails_to_send)} email(s)? (yes/no): ").strip().lower()
    if confirm != 'yes':
        print("❌ Cancelled.")
        return

    # Connect to Gmail SMTP
    print("\n🔌 Connecting to Gmail...")
    try:
        smtp_server = smtplib.SMTP('smtp.gmail.com', 587)
        smtp_server.starttls()
        smtp_server.login(from_email, password)
        print("✅ Connected successfully!")
    except Exception as e:
        print(f"❌ Failed to connect: {e}")
        print("\nTroubleshooting:")
        print("1. Make sure you're using an App Password, not your regular Gmail password")
        print("2. Enable 2-factor authentication on your Google account")
        print("3. Generate an App Password at: https://myaccount.google.com/apppasswords")
        return

    # Send emails
    print(f"\n📤 Sending emails...")
    sent = 0
    failed = 0

    for email_data in emails_to_send:
        try:
            send_email(smtp_server, from_email, email_data['email'], subject,
                      email_data['html_body'], email_data['plain_body'])
            print(f"✅ Sent to {email_data['name']} ({email_data['email']}) - {email_data['trees']}")
            sent += 1
        except Exception as e:
            print(f"❌ Failed to send to {email_data['name']} ({email_data['email']}): {e}")
            failed += 1

    smtp_server.quit()

    # Summary
    print("\n" + "="*50)
    print(f"✅ Successfully sent: {sent}")
    if failed > 0:
        print(f"❌ Failed: {failed}")
    print("="*50)
    print("\n✨ Done!")

if __name__ == "__main__":
    main()
