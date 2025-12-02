# 🤖 AI-Powered Conversational Chatbot - Setup Guide

## ✅ What's Been Built

Your chatbot now has **TWO MODES**:

### 1. **Conversational Mode** (NEW! 🎉)
- Powered by OpenAI GPT-4o-mini
- Roadrunner can answer questions naturally about the program
- Users can ask anything: "What's the deadline?", "Tell me about shade trees", "Can renters apply?", etc.
- Seamlessly transitions to application form when user is ready

### 2. **Application Mode** (Existing - Enhanced)
- Your existing structured form with all validations
- Privacy compliance (GDPR/California)
- Tree selection quiz
- Dual submission (email + Google Sheets)
- All improvements from the audit implemented

---

## 🚀 How It Works

1. **User Opens Chatbot** → Starts with conversational AI
2. **User Chats with Roadrunner** → Asks questions, learns about trees
3. **User Clicks "Apply Now"** → Switches to structured application form
4. **User Completes Form** → Submits via email & Google Sheets

---

## 📁 New Files Created

1. **`chatbot-config.js`** - Contains OpenAI API key and knowledge base
2. **`ai-conversation.js`** - AI conversation handler class
3. **`AI_CHATBOT_README.md`** - This file

## 📝 Modified Files

1. **`chatbot/index.html`** - Added script imports for AI modules
2. **`chatbot/tree-grant.js`** - Added conversational mode + mode switching

---

## 🔑 API Key Configuration

Your OpenAI API key is currently stored in `chatbot-config.js`:

```javascript
OPENAI_API_KEY: 'YOUR_OPENAI_API_KEY_HERE'
```

### ⚠️ SECURITY NOTES:

**Current Setup (Client-Side API Key)**:
- ✅ Simple to use - no server needed
- ❌ API key is visible in browser
- ⚠️ Anyone can see your key if they inspect the page

**How to Secure It**:

#### Option 1: API Key Restrictions (Recommended for now)
1. Go to https://platform.openai.com/api-keys
2. Click on your API key settings
3. Add **HTTP Referer restrictions**:
   - Allow only: `https://yourdomain.com/*` and `http://localhost/*`
4. This prevents unauthorized use from other websites

#### Option 2: Environment Variables (If using a build tool)
- Move API key to `.env` file (don't commit to git!)
- Use build tools (Vite, Webpack) to inject at build time

#### Option 3: Backend Proxy (Most Secure)
- Create a simple server (Node.js, Python, etc.)
- Store API key on server
- Chatbot calls YOUR server, server calls OpenAI
- Requires hosting a backend

---

## 💰 Cost Estimates

**Model Used**: `gpt-4o-mini` (fast & affordable)

**Pricing**:
- Input: $0.150 per 1M tokens (~$0.00015 per conversation)
- Output: $0.600 per 1M tokens (~$0.0006 per response)

**Realistic Costs**:
- Average conversation: $0.01 - $0.03
- 100 users chatting: ~$1-3
- 1,000 users: ~$10-30

**Very affordable!** Even with 1,000 applicants, you'd spend less than $30.

---

## 🧠 What Roadrunner Knows

The AI has been trained with ALL program details:

### Program Information
- Deadline: December 31, 2025
- Planting date: January 24, 2026
- Eligibility: Greenway Terrace boundaries
- Cost: Completely free
- Contact info: cckphx@gmail.com

### Tree Details
- All 16 species (8 native, 8 non-native)
- Sizes, growth rates, water needs
- Benefits (shade, wildlife, beauty)
- Mature heights and characteristics

### Application Process
- Step-by-step requirements
- Landlord permission details
- Stump removal info
- T-shirt sizes
- Paper vs. online application

### Special Features
- Free stump removal (if blocking)
- Professional planting
- Care supplies included
- 5-7 day review timeframe

---

## 🎭 Roadrunner's Personality

Programmed to be:
- Warm and enthusiastic
- Neighborly (not formal/government-y)
- Concise (2-4 sentences unless complex)
- Helpful and encouraging
- Honest (won't make things up)

---

## 🎯 Example Conversations

**Example 1: Learning About Trees**
```
User: What's a good tree for shade?
Roadrunner: For excellent shade, I'd recommend the Chinese Elm (grows 40-50 ft!), Blue Palo Verde (Arizona's state tree, 30+ ft), or Thornless Mesquite (fast-growing, 30 ft). All provide great coverage. Would you like to know more about any of these?

User: Tell me about the Blue Palo Verde
Roadrunner: Blue Palo Verde is Arizona's state tree! It grows 30+ feet tall, has beautiful yellow flowers in spring, and is super drought-tolerant. It's fast-growing, great for shade, and attracts wildlife. Plus, it's a native tree, so it's perfectly adapted to Phoenix heat. Ready to apply?
```

**Example 2: Eligibility Questions**
```
User: I'm a renter, can I still apply?
Roadrunner: Yes! Renters can absolutely apply, but you'll need written permission from your landlord. During the application, I'll collect your landlord's contact info so we can verify with them. Would you like to start your application?

User: Yes
[Switches to application form]
```

**Example 3: Program Details**
```
User: What's the deadline?
Roadrunner: The deadline is December 31, 2025 at 11:59 PM. Trees will be planted on January 24, 2026. You've got time, but I'd recommend applying soon so you can get your top tree choices!

User: How much does it cost?
Roadrunner: It's completely FREE! No cost for the trees, planting, or even optional stump removal if needed. This program is funded by a USDA and U.S. Forest Service grant. Pretty amazing, right? Want to apply?
```

---

## 🔧 Testing the Chatbot

1. **Open the chatbot** on your website
2. **Test conversational mode**:
   - Ask: "What trees are good for hummingbirds?"
   - Ask: "When is the deadline?"
   - Ask: "Can I get 3 trees?"
3. **Test transition to form**:
   - Click "Apply now" button OR
   - Say "I want to apply"
4. **Complete the form** to ensure everything still works

---

## 🐛 Troubleshooting

**Issue: AI not responding**
- Check browser console (F12) for errors
- Verify API key is correct in `chatbot-config.js`
- Check OpenAI account has credit: https://platform.openai.com/usage

**Issue: "I'm having trouble connecting"**
- API key may be invalid or expired
- Check internet connection
- OpenAI may be experiencing outages

**Issue: Chatbot falls back to traditional form immediately**
- AI initialization failed
- Check console for JavaScript errors
- Verify all 3 files are loaded (chatbot-config.js, ai-conversation.js, tree-grant.js)

**Issue: Conversations seem off or inaccurate**
- AI system prompt is in `ai-conversation.js` line 12
- You can modify the knowledge base there
- Add more details or correct information as needed

---

## 📊 Monitoring Usage

Track your OpenAI usage here:
https://platform.openai.com/usage

You'll see:
- Number of API calls
- Tokens used
- Cost per day
- Total spend

Set up spending limits in your OpenAI account to avoid surprises!

---

## 🎨 Customizing Roadrunner

Want to change Roadrunner's personality or knowledge?

**Edit** `/chatbot/ai-conversation.js` starting at line 12:

```javascript
this.systemPrompt = `You are Roadrunner...`
```

You can:
- Change the tone (more formal, more casual, etc.)
- Add new information
- Remove details
- Adjust response length
- Add specific phrases or policies

---

## 🚀 Next Steps

1. **Test thoroughly** - Try lots of different questions
2. **Set API restrictions** - Limit to your domain only
3. **Monitor costs** - Check usage after first few users
4. **Gather feedback** - See what users ask about
5. **Refine knowledge** - Update system prompt based on common questions

---

## 📞 Need Help?

- **OpenAI Docs**: https://platform.openai.com/docs
- **API Key Management**: https://platform.openai.com/api-keys
- **Usage Dashboard**: https://platform.openai.com/usage

---

## 🎉 You're All Set!

Your chatbot can now:
- ✅ Have natural conversations
- ✅ Answer questions about the program
- ✅ Recommend trees based on user needs
- ✅ Seamlessly transition to application form
- ✅ Collect and validate data
- ✅ Submit to email + Google Sheets

**This is a HUGE upgrade from a simple form!** 🌳

Users can now get their questions answered instantly, learn about trees conversationally, and apply when they're ready - all in one smooth experience.

Great work! 🎊
