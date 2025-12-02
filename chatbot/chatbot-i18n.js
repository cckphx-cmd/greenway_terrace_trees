// ============================================
// CHATBOT INTERNATIONALIZATION WRAPPER
// ============================================
// This file provides translation support for the tree-grant.js chatbot
// It must be loaded AFTER i18n.js but BEFORE tree-grant.js

// Translation mapping for common phrases to replace
const translationMap = {
  en: {
    "Hi, I'm Roadrunner! 🌳 Your neighborhood tree grant specialist": "Hi, I'm Roadrunner! 🌳 Your neighborhood tree grant specialist",
    "Apply now": "Apply now",
    "Ask a question": "Ask a question",
    "Browse species": "Browse species",
    "Take quiz": "Take quiz",
    "Privacy Notice": "Privacy Notice",
    "I understand and agree": "I understand and agree",
    "No thanks": "No thanks",
    "Are you the homeowner or renter?": "Are you the homeowner or renter?",
    "Homeowner": "Homeowner",
    "Renter": "Renter",
    "Yes": "Yes",
    "No": "No",
    "Great news! Your address is eligible": "Great news! Your address is eligible",
    "What's your full name?": "What's your full name?",
    "What's your email address?": "What's your email address?",
    "What's your phone number?": "What's your phone number?",
    "Submit Application": "Submit Application",
    "Start over": "Start over"
  },
  es: {
    "Hi, I'm Roadrunner! 🌳 Your neighborhood tree grant specialist": "¡Hola, soy Correcaminos! 🌳 Su especialista en subvenciones de árboles del vecindario",
    "Apply now": "Solicitar ahora",
    "Ask a question": "Hacer una pregunta",
    "Browse species": "Explorar especies",
    "Take quiz": "Hacer cuestionario",
    "Privacy Notice": "Aviso de Privacidad",
    "I understand and agree": "Entiendo y acepto",
    "No thanks": "No, gracias",
    "Are you the homeowner or renter?": "¿Es usted propietario o inquilino?",
    "Homeowner": "Propietario",
    "Renter": "Inquilino",
    "Yes": "Sí",
    "No": "No",
    "Great news! Your address is eligible": "¡Buenas noticias! Su dirección es elegible",
    "What's your full name?": "¿Cuál es su nombre completo?",
    "What's your email address?": "¿Cuál es su dirección de correo electrónico?",
    "What's your phone number?": "¿Cuál es su número de teléfono?",
    "Submit Application": "Enviar Solicitud",
    "Start over": "Empezar de nuevo"
  }
};

// Get current language from parent page's i18n system
function getCurrentLanguage() {
  return (window.parent && window.parent.currentLanguage) ||
         (typeof currentLanguage !== 'undefined' ? currentLanguage : 'en');
}

// Translate text using translation map
function translateText(text, lang = null) {
  if (!lang) lang = getCurrentLanguage();

  // If language is English, return as-is
  if (lang === 'en') return text;

  // Trim the text for comparison
  const trimmedText = text.trim();

  // Look for exact match first (for short phrases and buttons)
  if (translationMap[lang] && translationMap[lang][trimmedText]) {
    return translationMap[lang][trimmedText];
  }

  // For longer phrases, look for partial matches
  // But skip very short words (3 chars or less) to avoid false matches
  if (trimmedText.length > 10) {
    for (const key in translationMap[lang]) {
      // Only do substring replacement for longer keys (more than 10 chars)
      if (key.length > 10 && text.includes(key)) {
        return text.replace(key, translationMap[lang][key]);
      }
    }
  }

  return text;
}

// Store original functions
let originalAddMessage = null;
let originalShowButtons = null;

// Wait for chatbot to load
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    // Override addMessage to translate content
    if (typeof window.addMessage === 'function') {
      originalAddMessage = window.addMessage;

      window.addMessage = function(text, isUser = false, skipScroll = false) {
        // Only translate bot messages, not user messages
        if (!isUser) {
          text = translateText(text);
        }
        return originalAddMessage(text, isUser, skipScroll);
      };
    }

    // Override showButtons to translate button text
    if (typeof window.showButtons === 'function') {
      originalShowButtons = window.showButtons;

      window.showButtons = function(buttons) {
        // Translate button text
        const translatedButtons = buttons.map(btn => ({
          ...btn,
          text: translateText(btn.text)
        }));
        return originalShowButtons(translatedButtons);
      };
    }
  }, 200);
});

// Helper functions for direct translation access
window.tc = function(key) {
  if (window.t) {
    return window.t(key);
  }
  return key;
};

window.getChatbotLanguage = getCurrentLanguage;
window.translateChatbotText = translateText;
