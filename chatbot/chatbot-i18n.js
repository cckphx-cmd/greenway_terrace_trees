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

    // Privacy notice buttons
    "I agree, continue": "Acepto, continuar",
    "I decline": "Rechazo",

    // Common actions
    "Privacy Notice": "Aviso de Privacidad",
    "I understand and agree": "Entiendo y acepto",
    "No thanks": "No, gracias",
    "Yes": "Sí",
    "No": "No",
    "Back": "Atrás",
    "Done": "Listo",
    "Yes, submit!": "¡Sí, enviar!",

    // Address verification
    "Perfect! Let's see if your home is in the eligible area. This will just take a second.": "¡Perfecto! Veamos si su casa está en el área elegible. Esto solo tomará un segundo.",
    "Go ahead and enter your street address below:": "Adelante e ingrese su dirección de la calle a continuación:",
    "and enter your street address below:": "e ingrese su dirección de la calle a continuación:",
    "GOOD EXAMPLES:": "BUENOS EJEMPLOS:",
    "IMPORTANT:": "IMPORTANTE:",
    "Single-family homes or duplexes/triplexes only": "Solo casas unifamiliares o dúplex/tríplex",
    "No apartments or condos with 4+ units": "No apartamentos o condominios con 4+ unidades",
    "Enter your address...": "Ingrese su dirección...",
    "Submit": "Enviar",

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

    // Privacy notice content
    "Welcome to the Greenway Terrace Tree Grant Submission!": "¡Bienvenido a la Solicitud de Subvención de Árboles de Greenway Terrace!",
    "Before we begin, please review our data privacy policy.": "Antes de comenzar, revise nuestra política de privacidad de datos.",
    "DATA PRIVACY NOTICE": "AVISO DE PRIVACIDAD DE DATOS",
    "What We Collect:": "Lo Que Recopilamos:",
    "Your name, address, email, and phone number": "Su nombre, dirección, correo electrónico y número de teléfono",
    "Tree preferences and property information": "Preferencias de árboles e información de la propiedad",
    "How We Use It:": "Cómo Lo Usamos:",
    "To process your tree grant submission": "Para procesar su solicitud de subvención de árboles",
    "To coordinate tree planting with the City of Phoenix and Canopy Tree Care": "Para coordinar la plantación de árboles con la Ciudad de Phoenix y Canopy Tree Care",
    "To contact you about this program": "Para contactarle sobre este programa",
    "Your Rights (GDPR & California Privacy Law):": "Sus Derechos (GDPR y Ley de Privacidad de California):",
    "You have the right to access, correct, or delete your data": "Tiene derecho a acceder, corregir o eliminar sus datos",
    "You can withdraw consent at any time": "Puede retirar su consentimiento en cualquier momento",
    "We will not sell or share your data with third parties except as required for program administration": "No venderemos ni compartiremos sus datos con terceros excepto según sea necesario para la administración del programa",
    "Data Retention:": "Retención de Datos:",
    "Your information will be stored for the duration of the program and up to one year after for record-keeping purposes.": "Su información se almacenará durante la duración del programa y hasta un año después con fines de mantenimiento de registros.",
    "Contact:": "Contacto:",
    "For privacy questions, email": "Para preguntas de privacidad, envíe un correo electrónico a",
    "Do you agree to these terms and wish to continue with the online submission?": "¿Está de acuerdo con estos términos y desea continuar con la solicitud en línea?",

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

    // If chatbot was waiting to start, INSTALL OVERRIDES FIRST, then start
    if (window.chatbotStartPending && typeof window.startConversation === 'function') {
      console.log('Installing overrides before starting chatbot...');

      // Force override installation NOW before starting
      installOverrides();

      // Verify both overrides are installed
      if (originalAddMessage && originalShowButtons) {
        console.log('Overrides confirmed installed, starting chatbot with language:', chatbotCurrentLanguage);
        window.chatbotStartPending = false;
        window.startConversation();
      } else {
        console.error('ERROR: Could not install overrides! Functions not available.');
        // Try anyway after a brief delay
        setTimeout(() => {
          installOverrides();
          window.chatbotStartPending = false;
          window.startConversation();
        }, 100);
      }
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
          // Install overrides before starting
          installOverrides();
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

  console.log('[Translation] Attempting to translate, language:', lang, 'text length:', text?.length);

  // If language is English, return as-is
  if (lang === 'en') {
    console.log('[Translation] Language is English, no translation needed');
    return text;
  }

  // Check if translationMap exists for this language
  if (!translationMap[lang]) {
    console.error('[Translation] No translation map found for language:', lang);
    return text;
  }

  // Trim the text for comparison
  const trimmedText = text.trim();

  // Look for exact match first (for short phrases and buttons)
  if (translationMap[lang][trimmedText]) {
    console.log('[Translation] Found exact match!');
    return translationMap[lang][trimmedText];
  }

  // For longer text, do multiple substring replacements
  let translatedText = text;
  let madeChanges = false;

  // Sort keys by length (longest first) to avoid partial replacements
  const sortedKeys = Object.keys(translationMap[lang]).sort((a, b) => b.length - a.length);

  console.log('[Translation] Trying substring replacements with', sortedKeys.length, 'keys');

  for (const key of sortedKeys) {
    if (translatedText.includes(key)) {
      translatedText = translatedText.split(key).join(translationMap[lang][key]);
      madeChanges = true;
      console.log('[Translation] Replaced:', key.substring(0, 50) + '...');
    }
  }

  if (madeChanges) {
    console.log('[Translation] Translation successful!');
  } else {
    console.log('[Translation] No matches found for text:', text.substring(0, 100) + '...');
  }

  return madeChanges ? translatedText : text;
}

// Store original functions
let originalAddMessage = null;
let originalShowButtons = null;

// Install overrides immediately when functions become available
function installOverrides() {
  // Override addMessage to translate content
  if (typeof window.addMessage === 'function' && !originalAddMessage) {
    originalAddMessage = window.addMessage;

    window.addMessage = function(text, isUser = false, skipScroll = false) {
      // Only translate bot messages, not user messages
      if (!isUser) {
        const originalText = text;
        text = translateText(text);
        if (originalText !== text) {
          console.log('Translated message from', getCurrentLanguage());
        }
      }
      return originalAddMessage(text, isUser, skipScroll);
    };
    console.log('Chatbot addMessage override installed');
  }

  // Override showButtons to translate button text
  if (typeof window.showButtons === 'function' && !originalShowButtons) {
    originalShowButtons = window.showButtons;

    window.showButtons = function(buttons) {
      // Translate button text
      const translatedButtons = buttons.map(btn => ({
        ...btn,
        text: translateText(btn.text)
      }));
      return originalShowButtons(translatedButtons);
    };
    console.log('Chatbot showButtons override installed');
  }
}

// Try to install overrides immediately
installOverrides();

// Also try after DOM loads
document.addEventListener('DOMContentLoaded', installOverrides);

// And keep trying every 50ms until both are installed (max 10 attempts)
let attempts = 0;
const installInterval = setInterval(() => {
  installOverrides();
  attempts++;
  if ((originalAddMessage && originalShowButtons) || attempts >= 10) {
    clearInterval(installInterval);
  }
}, 50);

// Helper functions for direct translation access
window.tc = function(key) {
  if (window.t) {
    return window.t(key);
  }
  return key;
};

window.getChatbotLanguage = getCurrentLanguage;
window.translateChatbotText = translateText;
