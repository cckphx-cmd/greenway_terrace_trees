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
    "Awesome! Just one quick question - do you own this home, or are you renting?": "¡Excelente! Solo una pregunta rápida: ¿es usted propietario de esta casa o está alquilando?",
    "I rent and have landlord permission": "Alquilo y tengo permiso del propietario",
    "I rent but don't have permission yet": "Alquilo pero aún no tengo permiso",
    "← Go back": "← Regresar",

    // Responses
    "Perfect!": "¡Perfecto!",
    "Awesome!": "¡Excelente!",
    "Excellent!": "¡Excelente!",
    "Great choice!": "¡Buena elección!",
    "Got it!": "¡Entendido!",
    "Great news! Your address is eligible": "¡Buenas noticias! Su dirección es elegible",
    "Great news! I found your address in our system:": "¡Buenas noticias! Encontré su dirección en nuestro sistema:",
    "Does this look right?": "¿Se ve correcto esto?",
    "Yes, that's correct": "Sí, es correcto",
    "No, try again": "No, intentar de nuevo",
    "No problem! Let's try that again.": "¡No hay problema! Intentémoslo de nuevo.",
    "Perfect! ✓": "¡Perfecto! ✓",

    // Tree selection
    "Excellent! Now for the fun part - picking your trees! 🌳": "¡Excelente! Ahora viene la parte divertida: ¡elegir sus árboles! 🌳",
    "I can help you in two ways: I can ask you a few quick questions to recommend the perfect trees for your yard, or you can browse through all our beautiful options yourself. Which sounds better to you?": "Puedo ayudarle de dos maneras: puedo hacerle algunas preguntas rápidas para recomendar los árboles perfectos para su jardín, o puede explorar todas nuestras hermosas opciones usted mismo. ¿Qué le parece mejor?",
    "Great choice! This will only take a minute, and I'll find the perfect trees for your space.": "¡Buena elección! Esto solo tomará un minuto y encontraré los árboles perfectos para su espacio.",
    "Perfect! Let me show you all the amazing options we have available.": "¡Perfecto! Déjeme mostrarle todas las opciones increíbles que tenemos disponibles.",
    "Browse all trees": "Explorar todos los árboles",

    // Landlord section
    "Great! Please have your landlord complete and sign the": "¡Genial! Por favor pídale a su propietario que complete y firme el",
    "landlord permission form": "formulario de permiso del propietario",
    "formulario de permiso del propietario": "formulario de permiso del propietario",
    "before proceeding.<br><br>Once signed, I'll need your landlord's contact information to verify.<br><br>Please provide their name:": "antes de continuar.<br><br>Una vez firmado, necesitaré la información de contacto de su propietario para verificar.<br><br>Proporcione su nombre:",
    "Great! I'll need your landlord's contact information to verify.<br><br>Please provide their name:": "¡Genial! Necesitaré la información de contacto de su propietario para verificar.<br><br>Proporcione su nombre:",
    "And their email address (required):": "Y su dirección de correo electrónico (requerido):",
    "Finally, their phone number (required):": "Finalmente, su número de teléfono (requerido):",
    "Perfect! We'll verify with": "¡Perfecto! Verificaremos con",
    "before proceeding.": "antes de continuar.",
    "No problem! Here's a letter template you can send to your landlord:": "¡No hay problema! Aquí hay una plantilla de carta que puede enviar a su propietario:",
    "Please enter your email address:": "Por favor ingrese su dirección de correo electrónico:",
    "Great! I'll send the letter template to": "¡Genial! Enviaré la plantilla de carta a",
    ". Once you have landlord approval, come back and start over!": ". Una vez que tenga la aprobación del propietario, ¡regrese y comience de nuevo!",
    "Thank you for your interest in making Phoenix greener.": "Gracias por su interés en hacer Phoenix más verde.",
    "Sounds good! Come back once you have landlord approval. Thanks for your interest!": "¡Suena bien! Regrese una vez que tenga la aprobación del propietario. ¡Gracias por su interés!",
    "Yes, email it to me": "Sí, envíemelo por correo electrónico",
    "I'll handle it myself": "Lo manejaré yo mismo",

    // Landlord letter content
    "Subject: Permission Request - Phoenix Free Tree Grant": "Asunto: Solicitud de Permiso - Beca de Árboles Gratis de Phoenix",
    "Dear [Landlord Name],": "Estimado/a [Nombre del Propietario],",
    "I'm writing to request permission to participate in the Phoenix Free Tree Grant - Canopy Tree Care Program.": "Le escribo para solicitar permiso para participar en el Programa de Beca de Árboles Gratis de Phoenix - Community Canopy.",
    "This is a FREE program that plants trees at no cost. Benefits:": "Este es un programa GRATUITO que planta árboles sin costo. Beneficios:",
    "Free planting (January 24, 2026)": "Plantación gratuita (24 de enero, 2026)",
    "Increased property value": "Aumento del valor de la propiedad",
    "Reduced cooling costs": "Reducción de costos de enfriamiento",
    "Deadline: December 31, 2025": "Fecha límite: 31 de diciembre, 2025",
    "Learn more:": "Aprenda más:",
    "Phoenix Heat Response Programs": "Programas de Respuesta al Calor de Phoenix",
    "If you approve, please reply to": "Si aprueba, por favor responda a",
    "with your confirmation.": "con su confirmación.",
    "Thank you,": "Gracias,",
    "[Your Name]": "[Su Nombre]",
    "Would you like me to email this to you?": "¿Le gustaría que le enviara esto por correo electrónico?",

    // Personal info
    "What's your full name?": "¿Cuál es su nombre completo?",
    "What's your email address?": "¿Cuál es su dirección de correo electrónico?",
    "What's your phone number?": "¿Cuál es su número de teléfono?",

    // Front yard confirmation
    "Perfect! Just to confirm:<br><br><strong>The tree(s) will be planted in your FRONT YARD, correct?</strong><br><br>This is a requirement of the program.": "¡Perfecto! Solo para confirmar:<br><br><strong>¿Los árboles se plantarán en su JARDÍN DELANTERO, correcto?</strong><br><br>Este es un requisito del programa.",
    "Yes, front yard": "Sí, jardín delantero",
    "No, I need backyard": "No, necesito jardín trasero",
    "I'm sorry, but this program only covers trees planted in the <strong>front yard</strong>. This helps with neighborhood beautification and heat reduction.": "Lo siento, pero este programa solo cubre árboles plantados en el <strong>jardín delantero</strong>. Esto ayuda con el embellecimiento del vecindario y la reducción del calor.",

    // Not eligible
    "We're sorry, but your address isn't in our current grant area.": "Lo sentimos, pero su dirección no está en nuestra área de subvención actual.",
    "What would you like to do?": "¿Qué le gustaría hacer?",
    "Apply now": "Solicitar ahora",
    "Try again": "Intentar de nuevo",

    // Common phrases
    "Thanks for your question! Here are some helpful resources:": "¡Gracias por su pregunta! Aquí hay algunos recursos útiles:",
    "I'm having trouble with my AI connection. Let me connect you with the application form instead.": "Tengo problemas con mi conexión de IA. Déjeme conectarlo con el formulario de solicitud en su lugar.",
    "I'm having a connection issue. Would you like to start your application instead?": "Tengo un problema de conexión. ¿Le gustaría comenzar su solicitud en su lugar?",
    "Yes, start application": "Sí, comenzar solicitud",

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
    const previousLanguage = chatbotCurrentLanguage;
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
    } else if (previousLanguage !== chatbotCurrentLanguage && typeof window.startConversation === 'function') {
      // Language changed while chatbot is already running - restart it
      console.log('Language switched from', previousLanguage, 'to', chatbotCurrentLanguage, '- restarting chatbot');

      // Clear the chat
      const messagesDiv = document.getElementById('chatMessages');
      if (messagesDiv) {
        messagesDiv.innerHTML = '';
      }

      // Restart conversation
      installOverrides();
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
  // Check for addMessage in both window scope and global scope
  const addMessageFunc = window.addMessage || (typeof addMessage !== 'undefined' ? addMessage : null);
  const showButtonsFunc = window.showButtons || (typeof showButtons !== 'undefined' ? showButtons : null);

  // Override addMessage to translate content
  if (addMessageFunc && typeof addMessageFunc === 'function' && !originalAddMessage) {
    originalAddMessage = addMessageFunc;

    const translatedAddMessage = function(text, isUser = false, skipScroll = false) {
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

    // Override on window (which is the global scope in browser)
    window.addMessage = translatedAddMessage;
    console.log('Chatbot addMessage override installed');
  }

  // Override showButtons to translate button text
  if (showButtonsFunc && typeof showButtonsFunc === 'function' && !originalShowButtons) {
    originalShowButtons = showButtonsFunc;

    const translatedShowButtons = function(buttons) {
      // Translate button text AND wrap action to use translated text
      const translatedButtons = buttons.map(btn => {
        const originalText = btn.text;
        const translatedText = translateText(btn.text);
        const originalAction = btn.action;

        return {
          ...btn,
          text: translatedText,
          action: function() {
            // Temporarily override addMessage to replace English text with translated
            const tempOriginalAddMessage = window.addMessage;
            window.addMessage = function(text, isUser, skipScroll) {
              // If this is a user message and matches the original button text, use translated
              if (isUser && text === originalText) {
                text = translatedText;
              }
              return tempOriginalAddMessage(text, isUser, skipScroll);
            };

            // Call original action
            const result = originalAction();

            // Restore addMessage
            window.addMessage = tempOriginalAddMessage;

            return result;
          }
        };
      });
      return originalShowButtons(translatedButtons);
    };

    // Override on window (which is the global scope in browser)
    window.showButtons = translatedShowButtons;
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
