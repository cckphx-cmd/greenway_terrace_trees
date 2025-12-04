// ============================================
// CHATBOT INTERNATIONALIZATION WRAPPER
// ============================================
// This file provides translation support for the tree-grant.js chatbot
// It must be loaded AFTER i18n.js but BEFORE tree-grant.js

// Translation mapping for common phrases to replace
const translationMap = {
  en: {
    // English is the default - no translation needed
  },
  es: {
    // Full welcome messages
    "Hi there! I'm Roadrunner 🌳, your friendly neighborhood tree grant assistant. I'm so excited to help you get free trees for your front yard through the Greenway Terrace Community Canopy program!": "¡Hola! Soy Correcaminos 🌳, su amigable asistente de subvenciones de árboles del vecindario. ¡Estoy muy emocionado de ayudarle a obtener árboles gratis para su jardín delantero a través del programa Community Canopy de Greenway Terrace!",
    "So, what brings you here today? Would you like to apply for your trees, explore your options, or learn more about the program?": "Entonces, ¿qué le trae aquí hoy? ¿Le gustaría solicitar sus árboles, explorar sus opciones o aprender más sobre el programa?",

    // Navigation buttons
    "Apply for trees": "Solicitar árboles",
    "Take tree quiz": "Hacer cuestionario de árboles",
    "View FAQ": "Ver preguntas frecuentes",
    "Ask a question": "Hacer una pregunta",

    // Common actions
    "Privacy Notice": "Aviso de Privacidad",
    "I understand and agree": "Entiendo y acepto",
    "No thanks": "No, gracias",
    "Yes": "Sí",
    "No": "No",
    "Back": "Atrás",
    "Done": "Listo",
    "Yes, submit!": "¡Sí, enviar!",

    // Ownership
    "Homeowner": "Propietario",
    "I'm the homeowner": "Soy el propietario",
    "Renter": "Inquilino",
    "I'm renting": "Estoy alquilando",
    "Are you the homeowner or renter?": "¿Es usted propietario o inquilino?",

    // Responses
    "Perfect!": "¡Perfecto!",
    "Awesome!": "¡Excelente!",
    "Excellent!": "¡Excelente!",
    "Great choice!": "¡Buena elección!",
    "Got it!": "¡Entendido!",
    "Great news! Your address is eligible": "¡Buenas noticias! Su dirección es elegible",

    // Personal info
    "What's your full name?": "¿Cuál es su nombre completo?",
    "What's your email address?": "¿Cuál es su dirección de correo electrónico?",
    "What's your phone number?": "¿Cuál es su número de teléfono?",

    // Submission
    "Submit Application": "Enviar Solicitud",
    "Start over": "Empezar de nuevo",

    // Tree sizes
    "Small trees": "Árboles pequeños",
    "Medium trees": "Árboles medianos",
    "Large trees": "Árboles grandes",

    // Additional common phrases for partial matching
    "Hi there! I'm Roadrunner": "¡Hola! Soy Correcaminos",
    "your friendly neighborhood tree grant assistant": "su amigable asistente de subvenciones de árboles del vecindario",
    "I'm so excited to help you": "Estoy muy emocionado de ayudarle",
    "get free trees for your front yard": "obtener árboles gratis para su jardín delantero",
    "through the Greenway Terrace Community Canopy program": "a través del programa Community Canopy de Greenway Terrace"
  }
};

// Get current language - default to English, will be updated by parent
let chatbotCurrentLanguage = 'en';
let languageReady = false;
let chatbotStartPending = false;

// Expose to window for tree-grant.js to access
window.languageReady = languageReady;
window.chatbotStartPending = chatbotStartPending;

function getCurrentLanguage() {
  return chatbotCurrentLanguage;
}

// Listen for language changes from parent page
window.addEventListener('message', function(event) {
  if (event.data && event.data.type === 'languageChange') {
    chatbotCurrentLanguage = event.data.language;
    languageReady = true;
    window.languageReady = true;
    console.log('Chatbot language updated to:', chatbotCurrentLanguage);

    // If chatbot was waiting to start, start it now
    if (window.chatbotStartPending && typeof window.startConversation === 'function') {
      console.log('Starting chatbot with language:', chatbotCurrentLanguage);
      window.chatbotStartPending = false;
      window.startConversation();
    }
  }
});

// Request current language from parent on load
window.addEventListener('load', function() {
  if (window.parent !== window) {
    window.parent.postMessage({ type: 'requestLanguage' }, '*');

    // Set a timeout in case parent doesn't respond
    setTimeout(function() {
      if (!languageReady) {
        console.log('Language not received from parent, defaulting to English');
        languageReady = true;
        window.languageReady = true;
        if (window.chatbotStartPending && typeof window.startConversation === 'function') {
          window.chatbotStartPending = false;
          window.startConversation();
        }
      }
    }, 500);
  } else {
    // Not in iframe, language is already set
    languageReady = true;
    window.languageReady = true;
  }
});

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
