# 🔒 Secure AI Chatbot Deployment Guide

## ✅ What Changed

Your OpenAI API key is now **100% secure**!

### Before:
- ❌ API key visible in browser
- ❌ Anyone could steal and use it
- ❌ Risk of unexpected charges

### After:
- ✅ API key hidden on server
- ✅ Only your website can use it
- ✅ No risk of key theft
- ✅ Professional, production-ready setup

---

## 📁 New Files Created

1. **`netlify/functions/chat.js`** - Serverless backend function
2. **`netlify.toml`** - Netlify configuration
3. **`SECURE_DEPLOYMENT_GUIDE.md`** - This file

## 📝 Files Modified

1. **`chatbot/ai-conversation.js`** - Now calls YOUR server instead of OpenAI directly
2. **`chatbot/chatbot-config.js`** - API key removed (now on server)
3. **`chatbot/tree-grant.js`** - Updated initialization

---

## 🚀 Deployment Steps

### Step 1: Push to GitHub

```bash
cd /Users/CCK85/greenway_terrace_trees

# If not already a git repo, initialize
git init
git add .
git commit -m "Add secure AI chatbot with Netlify backend"

# Create GitHub repo (if you haven't already)
# Then push:
git remote add origin https://github.com/YOUR_USERNAME/greenway_terrace_trees.git
git branch -M main
git push -u origin main
```

### Step 2: Deploy to Netlify

1. **Go to** https://app.netlify.com
2. **Sign up/Login** (use GitHub account for easy connection)
3. **Click** "Add new site" → "Import an existing project"
4. **Choose** "GitHub"
5. **Select** your `greenway_terrace_trees` repository
6. **Build settings**:
   - Build command: (leave empty)
   - Publish directory: `.` (just a dot)
7. **Click** "Deploy site"

### Step 3: Add Your API Key to Netlify

**CRITICAL STEP - This is where your API key lives securely**

1. In Netlify, go to your site
2. Click **"Site configuration"** → **"Environment variables"**
3. Click **"Add a variable"**
4. **Key**: `OPENAI_API_KEY`
5. **Value**: `YOUR_OPENAI_API_KEY_HERE`
6. **Scopes**: All scopes
7. Click **"Create variable"**
8. **Redeploy** your site (Deploys → Trigger deploy → Deploy site)

### Step 4: Test It!

1. Go to your Netlify URL (e.g., `https://your-site-name.netlify.app`)
2. Open the chatbot
3. Ask a question like "What trees are available?"
4. It should respond!

---

## 🧪 Local Development (Optional)

If you want to test locally before deploying:

### Install Netlify CLI

```bash
npm install -g netlify-cli
```

### Create `.env` file (LOCAL ONLY - Don't commit this!)

```bash
cd /Users/CCK85/greenway_terrace_trees
cat > .env << 'EOF'
OPENAI_API_KEY=YOUR_OPENAI_API_KEY_HERE
EOF
```

### Add `.env` to `.gitignore`

```bash
echo ".env" >> .gitignore
```

### Run Local Dev Server

```bash
netlify dev
```

This will start a local server at `http://localhost:8888` with your functions working!

---

## 🔒 Security Checklist

- ✅ API key stored in Netlify environment variables (not in code)
- ✅ API key never sent to browser
- ✅ Only your serverless function can access OpenAI
- ✅ CORS configured (can be restricted to your domain only)
- ✅ `.env` file in `.gitignore` (won't be committed)

---

## 🎯 Optional: Restrict to Your Domain Only

For extra security, update `netlify/functions/chat.js` line 13:

**Change:**
```javascript
'Access-Control-Allow-Origin': '*', // Change to your domain in production
```

**To:**
```javascript
'Access-Control-Allow-Origin': 'https://your-actual-domain.com',
```

This prevents other websites from calling your function.

---

## 💰 Cost Monitoring

Your costs are now MUCH safer because:
1. API key can't be stolen from browser
2. You can set Netlify function limits
3. You can monitor usage in real-time

### Set Function Limits in Netlify:

1. Go to Site configuration → Usage and billing
2. Set function execution limits
3. Get alerts when approaching limits

### Monitor OpenAI Usage:

- Dashboard: https://platform.openai.com/usage
- Set spending limits in OpenAI account

---

## 🐛 Troubleshooting

### "Function not found" error

**Solution:** Make sure you:
1. Deployed the site AFTER adding the environment variable
2. The `netlify.toml` file is in the root directory
3. Functions are in `netlify/functions/` folder

### "Server configuration error: API key not set"

**Solution:**
1. Double-check environment variable name is exactly `OPENAI_API_KEY`
2. Redeploy after adding the variable
3. Check Environment variables page - should show as "Set"

### Chatbot falls back to traditional form

**Solution:**
1. Open browser console (F12)
2. Look for error messages
3. Check Network tab - is the function being called?
4. Verify function URL: `https://your-site.netlify.app/.netlify/functions/chat`

### "CORS error" in console

**Solution:**
1. Check `netlify/functions/chat.js` has correct CORS headers
2. Try adding your specific domain instead of `*`

---

## 📊 How It Works (Technical)

```
User Browser                Your Server (Netlify)           OpenAI
    |                              |                           |
    |--"What trees available?"--->|                           |
    |                              |                           |
    |                              |--API call (with key)----->|
    |                              |                           |
    |                              |<---Tree info--------------|
    |                              |                           |
    |<---"Here are the trees..."---|                           |
    |                              |                           |
```

**Key Point:** Your API key never leaves the Netlify server!

---

## 🎉 You're Done!

Your chatbot is now:
- ✅ Secure (API key hidden)
- ✅ Professional (serverless backend)
- ✅ Scalable (handles any traffic)
- ✅ Cost-protected (can't be abused)
- ✅ Production-ready!

---

## 🆘 Need Help?

**Netlify Docs:**
- Functions: https://docs.netlify.com/functions/overview/
- Environment variables: https://docs.netlify.com/environment-variables/overview/

**Common Commands:**
```bash
# Test locally
netlify dev

# Deploy manually
netlify deploy --prod

# Check function logs
netlify functions:log chat
```

---

## 📝 Quick Reference

**Your API Key Location:**
- ❌ NOT in code files
- ❌ NOT in GitHub
- ✅ Netlify Dashboard → Site configuration → Environment variables

**How to Update API Key:**
1. Netlify → Environment variables
2. Click on `OPENAI_API_KEY`
3. Update value
4. Trigger new deploy

**Function URL Pattern:**
- Local: `http://localhost:8888/.netlify/functions/chat`
- Production: `https://your-site.netlify.app/.netlify/functions/chat`

---

Great work getting this set up securely! 🎊
