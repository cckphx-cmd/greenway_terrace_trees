// ============================================
// INTERNATIONALIZATION SYSTEM
// Greenway Terrace Trees Site
// ============================================

const translations = {
  en: {
    // Navigation
    'nav.logo': 'Greenway Terrace Trees',
    'nav.checkEligibility': 'Check Eligibility',
    'nav.about': 'About',
    'nav.browseTrees': 'Browse Trees',
    'nav.treePlanner': 'See Your Shade',
    'nav.faq': 'FAQ',

    // Deadline Banner
    'deadline.text': 'Applications close',
    'deadline.date': 'December 31, 2025',
    'deadline.time': 'at midnight',
    'deadline.planting': 'Planting week:',
    'deadline.plantingDate': 'January 24, 2026',

    // Hero Section
    'hero.title': 'Free Trees for Greenway Terrace',
    'hero.subtitle': '& Surrounding Neighborhoods',
    'hero.description': "Hi, I'm Courtney, your neighbor over in Greenway Terrace. I applied for and won a grant for our neighborhood where the city will provide two free shade trees that they plant professionally in your front yard at absolutely no cost to you.",
    'hero.cta': 'Click the Roadrunner to Get Started',

    // Stats Section
    'stats.treesPerHome': 'Free Trees Per Home',
    'stats.freePlanting': 'Free Planting & Delivery',
    'stats.species': 'Species to Choose From',
    'stats.cooler': 'Cooler Under Shade',

    // Eligibility Section
    'eligibility.title': 'Check Your Eligibility',
    'eligibility.description': 'This grant covers Greenway Terrace and surrounding neighborhoods.',
    'eligibility.boundaries': 'Eligible area boundaries: Thomas Rd (South), McDowell Rd (North), 23rd Ave (West), 19th Ave (East).',
    'eligibility.chatbotNote': 'If your house is within this outlined area click the roadrunner icon to confirm your address is included.',
    'eligibility.eligible': 'Great news! Your address is eligible for free trees.',
    'eligibility.applyNow': 'Apply now!',
    'eligibility.maybeEligible': 'Your address appears to be eligible. Please verify the exact address when you apply.',
    'eligibility.notEligible': "We couldn't find your address on the eligible list. Please double-check your address or contact us for assistance.",

    // Trees Section
    'trees.title': 'Browse Trees',
    'trees.description': 'Browse 16 drought-tolerant species perfect for Phoenix. Click any tree to see the full info sheet from the City of Phoenix. Trees marked "Powerline Safe" are suitable for planting near power lines.',
    'trees.native': 'Native',
    'trees.nativeTitle': 'Native Sonoran Desert Trees (Recommended)',
    'trees.nonNative': 'Non-Native',
    'trees.nonNativeTitle': 'Desert-Adapted Non-Native Trees',
    'trees.powerlineSafe': 'Powerline Safe',
    'trees.tall': 'tall',
    'trees.growth': 'growth',
    'trees.water': 'water',
    'trees.fast': 'Fast',
    'trees.moderate': 'Moderate',
    'trees.slow': 'Slow',
    'trees.low': 'Low',
    'trees.mod': 'Mod',
    'trees.lowMod': 'Low-Mod',

    // FAQ Section
    'faq.title': 'Frequently Asked Questions',
    'faq.subtitle': 'Everything you need to know about getting your free trees',

    'faq.q1': 'How much does this cost?',
    'faq.a1': '<strong>Nothing at all!</strong> The trees, professional planting, and supply kit are completely free. This program is funded by the USDA and U.S. Forest Service. Note: Once planted, watering and ongoing maintenance become your responsibility.',

    'faq.q2': 'How many trees can I get?',
    'faq.a2': 'Each household can receive <strong>up to 2 trees</strong>. You can choose from 16 species—8 native and 8 desert-adapted non-native varieties.',

    'faq.q3': 'What about dead trees or stumps in my yard?',
    'faq.a3': 'Great news! For qualifying homes that sign up for free trees, <strong>dead trees or stumps that are blocking where new trees should be planted will be removed</strong> as part of the professional planting service.',

    'faq.q4': 'Who plants the trees?',
    'faq.a4': "Professional arborists and licensed landscape contractors handle all planting. They'll also coordinate with 811 to mark underground utilities before digging. You don't need to lift a finger!",

    'faq.q5': 'Can I plant trees in my backyard?',
    'faq.a5': 'Unfortunately, no. Trees must be planted in your <strong>front yard, within your property lines</strong> (not in the right of way). This maximizes community benefit by shading sidewalks and helping cool our streets.',

    'faq.q6': 'When will trees be planted?',
    'faq.a6': 'Planting is scheduled for the <strong>week of January 24, 2026</strong>. You must apply by December 31, 2025 to be included in this planting round.',

    'faq.q7': 'What size trees will be planted?',
    'faq.a7': 'Typically <strong>15- or 25-gallon trees</strong> depending on nursery availability. The exact height varies by species—click on any tree to see its mature size.',

    'faq.q8': 'Do I need to water the trees?',
    'faq.a8': 'Yes. Once planted, watering is your responsibility. New trees need about <strong>5 gallons every 5-7 days for two years</strong>. You\'ll receive a maintenance supply bag to help. All selected trees are drought-tolerant and need less water once established.',

    'faq.q9': "I'm a renter. Can I still apply?",
    'faq.a9': 'Yes! Renters can apply, but you\'ll need <strong>written permission from the property owner</strong> before trees can be planted.',

    'faq.q10': 'Are fruit trees available?',
    'faq.a10': 'No, fruit trees are not part of this program. All 16 available species are drought-tolerant shade trees selected for Phoenix\'s climate. The Olive Tree variety provided is fruitless.',

    'faq.q11': 'What if I have power lines above my yard?',
    'faq.a11': 'Choose a tree marked <strong>Powerline Safe</strong>. These shorter species won\'t interfere with overhead lines. Tall trees cannot be planted beneath power lines.',

    // Chatbot
    'chatbot.header': 'Tree Grant Assistant',
    'chatbot.subtitle': 'Ask me anything!',
    'chatbot.greetingTitle': "Hi, I'm Roadrunner!",
    'chatbot.greetingText': 'Your neighborhood tree grant specialist. You can ask me questions, take a quiz to find the right trees for your front yard, or submit your request for your trees.',
    'chatbot.greetingButton': "Let's Get Started!",

    // Chatbot Messages
    'chatbot.welcome': "Hi, I'm Roadrunner! 🌳 Your neighborhood tree grant specialist. I'm here to help you get free trees for your front yard through the Greenway Terrace Community Canopy program.",
    'chatbot.apply': "Apply now",
    'chatbot.askQuestion': "Ask a question",
    'chatbot.browseSpecies': "Browse species",
    'chatbot.takeQuiz': "Take quiz",
    'chatbot.privacyTitle': 'Privacy Notice',
    'chatbot.privacyText': "To apply, I'll need to collect your name, address, and contact information. This data goes directly to the City of Phoenix grant administrators. By continuing, you consent to this data collection.",
    'chatbot.agree': "I understand and agree",
    'chatbot.disagree': "No thanks",
    'chatbot.enterAddress': "Enter your Phoenix address (e.g., 1234 N Main St)",
    'chatbot.checkingAddress': "Checking address...",
    'chatbot.addressEligible': "✓ Great news! Your address is eligible.",
    'chatbot.addressNotEligible': "I couldn't find your address on the eligible list.",
    'chatbot.whyNotEligible': "Why isn't my address eligible?",
    'chatbot.alternative Resources': "See alternative resources",
    'chatbot.ownershipQuestion': "Are you the homeowner or renter?",
    'chatbot.homeowner': "Homeowner",
    'chatbot.renter': "Renter",
    'chatbot.landlordPermission': "Do you have your landlord's permission to plant trees?",
    'chatbot.yes': "Yes",
    'chatbot.no': "No",
    'chatbot.needPermission': "You'll need landlord permission to participate. Please get written approval before applying.",
    'chatbot.enterName': "What's your full name?",
    'chatbot.enterEmail': "What's your email address?",
    'chatbot.enterPhone': "What's your phone number?",
    'chatbot.selectTrees': "Great! Now let's select your two free trees. Would you like to:",
    'chatbot.chooseMyself': "Choose them myself",
    'chatbot.needHelp': "Need help choosing?",
    'chatbot.treeSelection': "Browse our 16 species and click two that you'd like:",
    'chatbot.selected': "Selected",
    'chatbot.confirmSelection': "Confirm selection",
    'chatbot.reviewApplication': "Perfect! Let's review your application:",
    'chatbot.submitApp': "Submit Application",
    'chatbot.editInfo': "Edit info",
    'chatbot.submitting': "Submitting your application...",
    'chatbot.success': "🎉 Success! Your application has been submitted.",
    'chatbot.successDetails': "The City of Phoenix will contact you at {email} with next steps. Keep an eye on your inbox!",
    'chatbot.error': "Oops! There was an error submitting your application. Please try again or contact support.",
    'chatbot.startOver': "Start over",

    // About Page
    'about.title': 'About This Project',
    'about.intro': "Hi, I'm Courtney, your neighbor over in Greenway Terrace. I've been here for 10 years and my family has been in this neighborhood since it was built. I put this project together to help us get as many trees as possible to as many homes as possible.",
    'about.backstory': 'I applied for the City of Phoenix Community Canopy grant for the homes in the Greenway Terrace subdivision only. We won. The city then expanded eligibility to over 600 homes in the surrounding area, which means more of our neighbors can benefit.',
    'about.heading1': "Here's why this matters.",
    'about.question1': "Have you ever wondered why our neighborhood isn't built in straight lines? Or why the houses all sit at slightly different angles on their lots?",
    'about.usedToBe': "They don't build them like they used to.",
    'about.sunPath': "Our homes, and more importantly our trees, were strategically placed based on the science of Sun Path Diagrams and Shadow Analysis. These tools map exactly where the sun will be at any time of day, any day of the year, and predict how shadows will move across properties throughout the seasons. Mid-century builders used this science to angle houses and position trees so that a single tree could shade your house in the morning and your neighbor's driveway in the afternoon. It was intentional. It was brilliant.",
    'about.lostIt': "And over time, we've lost it.",
    'about.restoration': "As trees have come down from storms, age, and disease, we've lost the shade that once kept our homes cool. I know that when older homes start showing their age, our first instinct is to slash and burn. Add different windows. Tear things down. But what we should really be doing is reclaiming the heat mitigation strategies that were already here. These gorgeous mid-century ranch homes were designed to stay cool. We just need to restore what made them work.",
    'about.personalReason': "I applied for this grant for one simple reason: my trees died and I'm not in a financial place to replace them. This website, the eligibility bot, and the tree placement tool? I built those to make this process easier for all of us.",
    'about.callToAction': 'Join me in bringing the shade back.',

    // Planner Page
    'planner.title': 'Tree Placement Planner',
    'planner.description': 'Use our interactive tool to plan where to place your trees for maximum shade benefit. Draw your house and neighbors\' houses, place trees, and see realistic shadow simulations throughout the day. Get AI-powered recommendations for optimal placement!',

    // Shade Visualization Section
    'shade.title': 'See Where Your Shade Will Fall',
    'shade.subtitle': 'Pick the perfect spot before you plant',
    'shade.intro': 'Where you plant matters. A few feet in the wrong direction could mean a hot living room instead of a cool one. Our tool lets you see exactly where your tree\'s shadow will land—before you commit.',
    'shade.howItWorks': 'How it works:',
    'shade.step1': 'Find your house on the map',
    'shade.step2': 'Choose a tree height (small, medium, or large)',
    'shade.step3': 'See where the shadow falls throughout a summer day',
    'shade.aiHelp': 'Want help deciding? Let our AI recommend the best placement for maximum shade.',
    'shade.bonus': 'Bonus: While this grant covers front yard trees only, use the tool to explore what backyard trees could do for you down the road—or see how your neighbor\'s trees might help too.',
    'shade.button': 'See Your Shade',

    // Footer
    'footer.title': 'Greenway Terrace Tree Grant',
    'footer.description': 'A Community Canopy initiative through the City of Phoenix Office of Heat Response & Mitigation, funded by the USDA Forest Service.',
    'footer.quickLinks': 'Quick Links',
    'footer.resources': 'Resources',
    'footer.cityGrants': 'City of Phoenix Grants',
    'footer.heatOffice': 'Heat Response Office',
    'footer.treeGuide': 'Arizona Tree Care Guide',
    'footer.courtneyWork': "Courtney's Work",
    'footer.copyright': '© 2025 Greenway Terrace Community Canopy Grant'
  },

  es: {
    // Navigation
    'nav.logo': 'Árboles de Greenway Terrace',
    'nav.checkEligibility': 'Verificar Elegibilidad',
    'nav.about': 'Acerca de',
    'nav.browseTrees': 'Ver Árboles',
    'nav.treePlanner': 'Ver Tu Sombra',
    'nav.faq': 'Preguntas Frecuentes',

    // Deadline Banner
    'deadline.text': 'Las solicitudes cierran el',
    'deadline.date': '31 de diciembre de 2025',
    'deadline.time': 'a medianoche',
    'deadline.planting': 'Semana de plantación:',
    'deadline.plantingDate': '24 de enero de 2026',

    // Hero Section
    'hero.title': 'Árboles Gratis para Greenway Terrace',
    'hero.subtitle': 'y Vecindarios Cercanos',
    'hero.description': 'Hola, soy Courtney, su vecina de Greenway Terrace. Solicité y gané una subvención para nuestro vecindario donde la ciudad proporcionará dos árboles de sombra gratis que plantan profesionalmente en su jardín delantero sin costo alguno para usted.',
    'hero.cta': 'Haga Clic en el Correcaminos para Comenzar',

    // Stats Section
    'stats.treesPerHome': 'Árboles Gratis por Hogar',
    'stats.freePlanting': 'Plantación y Entrega Gratis',
    'stats.species': 'Especies para Elegir',
    'stats.cooler': 'Más Fresco Bajo la Sombra',

    // Eligibility Section
    'eligibility.title': 'Verifique Su Elegibilidad',
    'eligibility.description': 'Esta subvención cubre Greenway Terrace y vecindarios circundantes.',
    'eligibility.boundaries': 'Límites del área elegible: Thomas Rd (Sur), McDowell Rd (Norte), 23rd Ave (Oeste), 19th Ave (Este).',
    'eligibility.chatbotNote': 'Si su casa está dentro de esta área delineada, haga clic en el ícono del correcaminos para confirmar que su dirección está incluida.',
    'eligibility.eligible': '¡Buenas noticias! Su dirección es elegible para árboles gratis.',
    'eligibility.applyNow': '¡Solicite ahora!',
    'eligibility.maybeEligible': 'Su dirección parece ser elegible. Por favor verifique la dirección exacta cuando aplique.',
    'eligibility.notEligible': 'No pudimos encontrar su dirección en la lista de elegibles. Por favor verifique su dirección o contáctenos para obtener asistencia.',

    // Trees Section
    'trees.title': 'Ver Árboles',
    'trees.description': 'Explore 16 especies tolerantes a la sequía perfectas para Phoenix. Haga clic en cualquier árbol para ver la hoja informativa completa de la Ciudad de Phoenix. Los árboles marcados como "Seguros para Líneas Eléctricas" son adecuados para plantar cerca de líneas eléctricas.',
    'trees.native': 'Nativo',
    'trees.nativeTitle': 'Árboles Nativos del Desierto de Sonora (Recomendados)',
    'trees.nonNative': 'No Nativo',
    'trees.nonNativeTitle': 'Árboles No Nativos Adaptados al Desierto',
    'trees.powerlineSafe': 'Seguro para Líneas Eléctricas',
    'trees.tall': 'de altura',
    'trees.growth': 'crecimiento',
    'trees.water': 'agua',
    'trees.fast': 'Rápido',
    'trees.moderate': 'Moderado',
    'trees.slow': 'Lento',
    'trees.low': 'Bajo',
    'trees.mod': 'Mod',
    'trees.lowMod': 'Bajo-Mod',

    // FAQ Section
    'faq.title': 'Preguntas Frecuentes',
    'faq.subtitle': 'Todo lo que necesita saber sobre cómo obtener sus árboles gratis',

    'faq.q1': '¿Cuánto cuesta esto?',
    'faq.a1': '<strong>¡Nada en absoluto!</strong> Los árboles, la plantación profesional y el kit de suministros son completamente gratis. Este programa está financiado por el USDA y el Servicio Forestal de EE. UU. Nota: Una vez plantados, el riego y el mantenimiento continuo son su responsabilidad.',

    'faq.q2': '¿Cuántos árboles puedo obtener?',
    'faq.a2': 'Cada hogar puede recibir <strong>hasta 2 árboles</strong>. Puede elegir entre 16 especies: 8 nativas y 8 variedades no nativas adaptadas al desierto.',

    'faq.q3': '¿Qué pasa con los árboles muertos o tocones en mi jardín?',
    'faq.a3': '¡Buenas noticias! Para las casas calificadas que se inscriban para árboles gratis, <strong>los árboles muertos o tocones que bloqueen donde se deben plantar los nuevos árboles serán removidos</strong> como parte del servicio de plantación profesional.',

    'faq.q4': '¿Quién planta los árboles?',
    'faq.a4': 'Los arboristas profesionales y contratistas de paisajismo con licencia manejan toda la plantación. También coordinarán con el 811 para marcar las utilidades subterráneas antes de excavar. ¡Usted no necesita mover un dedo!',

    'faq.q5': '¿Puedo plantar árboles en mi jardín trasero?',
    'faq.a5': 'Desafortunadamente, no. Los árboles deben plantarse en su <strong>jardín delantero, dentro de los límites de su propiedad</strong> (no en el derecho de paso). Esto maximiza el beneficio comunitario al dar sombra a las aceras y ayudar a enfriar nuestras calles.',

    'faq.q6': '¿Cuándo se plantarán los árboles?',
    'faq.a6': 'La plantación está programada para la <strong>semana del 24 de enero de 2026</strong>. Debe solicitar antes del 31 de diciembre de 2025 para ser incluido en esta ronda de plantación.',

    'faq.q7': '¿Qué tamaño de árboles se plantarán?',
    'faq.a7': 'Típicamente <strong>árboles de 15 o 25 galones</strong> dependiendo de la disponibilidad del vivero. La altura exacta varía según la especie: haga clic en cualquier árbol para ver su tamaño maduro.',

    'faq.q8': '¿Necesito regar los árboles?',
    'faq.a8': 'Sí. Una vez plantados, el riego es su responsabilidad. Los árboles nuevos necesitan aproximadamente <strong>5 galones cada 5-7 días durante dos años</strong>. Recibirá una bolsa de suministros de mantenimiento para ayudar. Todos los árboles seleccionados son tolerantes a la sequía y necesitan menos agua una vez establecidos.',

    'faq.q9': 'Soy inquilino. ¿Aún puedo solicitar?',
    'faq.a9': '¡Sí! Los inquilinos pueden solicitar, pero necesitará <strong>permiso por escrito del dueño de la propiedad</strong> antes de que se puedan plantar los árboles.',

    'faq.q10': '¿Hay árboles frutales disponibles?',
    'faq.a10': 'No, los árboles frutales no son parte de este programa. Las 16 especies disponibles son árboles de sombra tolerantes a la sequía seleccionados para el clima de Phoenix. La variedad de olivo proporcionada no produce frutos.',

    'faq.q11': '¿Qué pasa si tengo líneas eléctricas sobre mi jardín?',
    'faq.a11': 'Elija un árbol marcado como <strong>Seguro para Líneas Eléctricas</strong>. Estas especies más pequeñas no interferirán con las líneas aéreas. Los árboles altos no se pueden plantar debajo de las líneas eléctricas.',

    // Chatbot
    'chatbot.header': 'Asistente de Subvención de Árboles',
    'chatbot.subtitle': '¡Pregúntame lo que quieras!',
    'chatbot.greetingTitle': '¡Hola, soy Correcaminos!',
    'chatbot.greetingText': 'Su especialista en subvenciones de árboles del vecindario. Puede hacerme preguntas, hacer un cuestionario para encontrar los árboles adecuados para su jardín delantero, o enviar su solicitud para sus árboles.',
    'chatbot.greetingButton': '¡Comencemos!',

    // Chatbot Messages
    'chatbot.welcome': "¡Hola, soy Correcaminos! 🌳 Su especialista en subvenciones de árboles del vecindario. Estoy aquí para ayudarle a obtener árboles gratis para su jardín delantero a través del programa Community Canopy de Greenway Terrace.",
    'chatbot.apply': "Solicitar ahora",
    'chatbot.askQuestion': "Hacer una pregunta",
    'chatbot.browseSpecies': "Explorar especies",
    'chatbot.takeQuiz': "Hacer cuestionario",
    'chatbot.privacyTitle': 'Aviso de Privacidad',
    'chatbot.privacyText': "Para solicitar, necesitaré recopilar su nombre, dirección e información de contacto. Estos datos van directamente a los administradores de subvenciones de la Ciudad de Phoenix. Al continuar, usted acepta esta recopilación de datos.",
    'chatbot.agree': "Entiendo y acepto",
    'chatbot.disagree': "No, gracias",
    'chatbot.enterAddress': "Ingrese su dirección en Phoenix (ej., 1234 N Main St)",
    'chatbot.checkingAddress': "Verificando dirección...",
    'chatbot.addressEligible': "✓ ¡Buenas noticias! Su dirección es elegible.",
    'chatbot.addressNotEligible': "No pude encontrar su dirección en la lista de elegibles.",
    'chatbot.whyNotEligible': "¿Por qué mi dirección no es elegible?",
    'chatbot.alternativeResources': "Ver recursos alternativos",
    'chatbot.ownershipQuestion': "¿Es usted propietario o inquilino?",
    'chatbot.homeowner': "Propietario",
    'chatbot.renter': "Inquilino",
    'chatbot.landlordPermission': "¿Tiene permiso de su propietario para plantar árboles?",
    'chatbot.yes': "Sí",
    'chatbot.no': "No",
    'chatbot.needPermission': "Necesitará permiso del propietario para participar. Por favor obtenga aprobación por escrito antes de solicitar.",
    'chatbot.enterName': "¿Cuál es su nombre completo?",
    'chatbot.enterEmail': "¿Cuál es su dirección de correo electrónico?",
    'chatbot.enterPhone': "¿Cuál es su número de teléfono?",
    'chatbot.selectTrees': "¡Excelente! Ahora seleccionemos sus dos árboles gratis. ¿Le gustaría:",
    'chatbot.chooseMyself': "Elegirlos yo mismo",
    'chatbot.needHelp': "¿Necesita ayuda para elegir?",
    'chatbot.treeSelection': "Explore nuestras 16 especies y haga clic en dos que le gustarían:",
    'chatbot.selected': "Seleccionado",
    'chatbot.confirmSelection': "Confirmar selección",
    'chatbot.reviewApplication': "¡Perfecto! Revisemos su solicitud:",
    'chatbot.submitApp': "Enviar Solicitud",
    'chatbot.editInfo': "Editar información",
    'chatbot.submitting': "Enviando su solicitud...",
    'chatbot.success': "🎉 ¡Éxito! Su solicitud ha sido enviada.",
    'chatbot.successDetails': "La Ciudad de Phoenix se comunicará con usted en {email} con los próximos pasos. ¡Esté atento a su bandeja de entrada!",
    'chatbot.error': "¡Ups! Hubo un error al enviar su solicitud. Por favor intente de nuevo o contacte al soporte.",
    'chatbot.startOver': "Empezar de nuevo",

    // About Page
    'about.title': 'Acerca de Este Proyecto',
    'about.intro': 'Hola, soy Courtney, su vecina de Greenway Terrace. He estado aquí durante 10 años y mi familia ha estado en este vecindario desde que se construyó. Armé este proyecto para ayudarnos a obtener tantos árboles como sea posible para la mayor cantidad de hogares posible.',
    'about.backstory': 'Solicité la subvención Community Canopy de la Ciudad de Phoenix solo para las casas de la subdivisión Greenway Terrace. Ganamos. Luego, la ciudad expandió la elegibilidad a más de 600 hogares en el área circundante, lo que significa que más de nuestros vecinos pueden beneficiarse.',
    'about.heading1': 'Por qué esto importa.',
    'about.question1': '¿Alguna vez se ha preguntado por qué nuestro vecindario no está construido en líneas rectas? ¿O por qué todas las casas están en ángulos ligeramente diferentes en sus lotes?',
    'about.usedToBe': 'Ya no los construyen como antes.',
    'about.sunPath': 'Nuestras casas, y más importante aún, nuestros árboles, fueron colocados estratégicamente basándose en la ciencia de los Diagramas de Trayectoria Solar y Análisis de Sombras. Estas herramientas mapean exactamente dónde estará el sol en cualquier momento del día, cualquier día del año, y predicen cómo se moverán las sombras a través de las propiedades durante las estaciones. Los constructores de mediados de siglo usaron esta ciencia para angular las casas y posicionar los árboles para que un solo árbol pudiera dar sombra a su casa por la mañana y al camino de entrada de su vecino por la tarde. Fue intencional. Fue brillante.',
    'about.lostIt': 'Y con el tiempo, lo hemos perdido.',
    'about.restoration': 'A medida que los árboles han caído por tormentas, edad y enfermedades, hemos perdido la sombra que una vez mantuvo frescas nuestras casas. Sé que cuando las casas más viejas comienzan a mostrar su edad, nuestro primer instinto es arrasar y quemar. Agregar ventanas diferentes. Derribar cosas. Pero lo que realmente deberíamos estar haciendo es reclamar las estrategias de mitigación del calor que ya estaban aquí. Estas hermosas casas estilo ranch de mediados de siglo fueron diseñadas para mantenerse frescas. Solo necesitamos restaurar lo que las hacía funcionar.',
    'about.personalReason': 'Solicité esta subvención por una razón simple: mis árboles murieron y no estoy en una situación financiera para reemplazarlos. ¿Este sitio web, el bot de elegibilidad y la herramienta de colocación de árboles? Los construí para hacer este proceso más fácil para todos nosotros.',
    'about.callToAction': 'Únase a mí para traer de vuelta la sombra.',

    // Planner Page
    'planner.title': 'Planificador de Colocación de Árboles',
    'planner.description': 'Use nuestra herramienta interactiva para planificar dónde colocar sus árboles para obtener el máximo beneficio de sombra. Dibuje su casa y las casas de sus vecinos, coloque árboles y vea simulaciones realistas de sombras durante el día. ¡Obtenga recomendaciones impulsadas por IA para una colocación óptima!',

    // Shade Visualization Section
    'shade.title': 'Vea Dónde Caerá Su Sombra',
    'shade.subtitle': 'Elija el lugar perfecto antes de plantar',
    'shade.intro': 'Dónde plante importa. Unos pocos pies en la dirección equivocada podrían significar una sala caliente en lugar de una fresca. Nuestra herramienta le permite ver exactamente dónde caerá la sombra de su árbol, antes de comprometerse.',
    'shade.howItWorks': 'Cómo funciona:',
    'shade.step1': 'Encuentre su casa en el mapa',
    'shade.step2': 'Elija una altura de árbol (pequeño, mediano o grande)',
    'shade.step3': 'Vea dónde cae la sombra durante un día de verano',
    'shade.aiHelp': '¿Quiere ayuda para decidir? Deje que nuestra IA recomiende la mejor ubicación para máxima sombra.',
    'shade.bonus': 'Bono: Si bien esta subvención cubre solo árboles del jardín delantero, use la herramienta para explorar qué podrían hacer los árboles del patio trasero para usted en el futuro, o vea cómo los árboles de su vecino también podrían ayudar.',
    'shade.button': 'Ver Tu Sombra',

    // Footer
    'footer.title': 'Subvención de Árboles de Greenway Terrace',
    'footer.description': 'Una iniciativa de Community Canopy a través de la Oficina de Respuesta y Mitigación del Calor de la Ciudad de Phoenix, financiada por el Servicio Forestal del USDA.',
    'footer.quickLinks': 'Enlaces Rápidos',
    'footer.resources': 'Recursos',
    'footer.cityGrants': 'Subvenciones de la Ciudad de Phoenix',
    'footer.heatOffice': 'Oficina de Respuesta al Calor',
    'footer.treeGuide': 'Guía de Cuidado de Árboles de Arizona',
    'footer.courtneyWork': 'Trabajo de Courtney',
    'footer.copyright': '© 2025 Subvención Community Canopy de Greenway Terrace'
  }
};

// Current language (stored in localStorage)
let currentLanguage = localStorage.getItem('language') || 'en';

// Translation function
function t(key) {
  return translations[currentLanguage][key] || translations['en'][key] || key;
}

// Set language
function setLanguage(lang) {
  currentLanguage = lang;
  window.currentLanguage = lang;
  localStorage.setItem('language', lang);
  updatePageText();

  // Update language buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  document.querySelector(`[data-lang="${lang}"]`)?.classList.add('active');

  // Notify all iframes (chatbot and planner) of language change
  const chatbotIframe = document.querySelector('.chatbot-widget-iframe');
  if (chatbotIframe && chatbotIframe.contentWindow) {
    chatbotIframe.contentWindow.postMessage({
      type: 'languageChange',
      language: lang
    }, '*');
  }

  const plannerIframe = document.querySelector('.planner-embed iframe');
  if (plannerIframe && plannerIframe.contentWindow) {
    plannerIframe.contentWindow.postMessage({
      type: 'languageChange',
      language: lang
    }, '*');
  }
}

// Update all text on the page
function updatePageText() {
  // Update deadline banner
  const deadlineBanner = document.querySelector('.deadline-banner');
  if (deadlineBanner) {
    deadlineBanner.innerHTML = `${t('deadline.text')} <span>${t('deadline.date')}</span> ${t('deadline.time')} · ${t('deadline.planting')} <span>${t('deadline.plantingDate')}</span>`;
  }

  // Update navigation
  const navLinks = document.querySelectorAll('.nav-links a');
  if (navLinks.length >= 5) {
    navLinks[0].textContent = t('nav.checkEligibility');
    navLinks[1].textContent = t('nav.about');
    navLinks[2].textContent = t('nav.browseTrees');
    navLinks[3].textContent = t('nav.treePlanner');
    navLinks[4].textContent = t('nav.faq');
  }

  // Update hero section
  const heroTitle = document.querySelector('.hero h1');
  const heroSubtitle = document.querySelector('.hero-subtitle');
  const heroDescription = document.querySelector('.hero p');
  const heroCTA = document.querySelector('.hero .btn-primary');

  if (heroTitle) heroTitle.textContent = t('hero.title');
  if (heroSubtitle) heroSubtitle.textContent = t('hero.subtitle');
  if (heroDescription) heroDescription.textContent = t('hero.description');
  if (heroCTA) heroCTA.textContent = t('hero.cta');

  // Update stats
  const statLabels = document.querySelectorAll('.stat-label');
  if (statLabels.length >= 4) {
    statLabels[0].textContent = t('stats.treesPerHome');
    statLabels[1].textContent = t('stats.freePlanting');
    statLabels[2].textContent = t('stats.species');
    statLabels[3].textContent = t('stats.cooler');
  }

  // Update eligibility section
  const eligibilityTitle = document.querySelector('#eligibility .section-header h2');
  const eligibilityDesc = document.querySelector('#eligibility .section-header p');
  const eligibilityNote = document.querySelector('.map-container p');

  if (eligibilityTitle) eligibilityTitle.textContent = t('eligibility.title');
  if (eligibilityDesc) {
    eligibilityDesc.innerHTML = `${t('eligibility.description')} <strong>${t('eligibility.boundaries')}</strong>`;
  }
  if (eligibilityNote) eligibilityNote.textContent = t('eligibility.chatbotNote');

  // Update trees section
  const treesTitle = document.querySelector('#trees .section-header h2');
  const treesDesc = document.querySelector('#trees .section-header p');

  if (treesTitle) treesTitle.textContent = t('trees.title');
  if (treesDesc) treesDesc.textContent = t('trees.description');

  // Update tree categories
  const nativeBadge = document.querySelector('.category-badge:not(.non-native)');
  const nativeTitle = document.querySelector('.category-header:not(.non-native) h3');
  if (nativeBadge) nativeBadge.textContent = t('trees.native');
  if (nativeTitle) nativeTitle.textContent = t('trees.nativeTitle');

  const nonNativeBadge = document.querySelector('.category-badge.non-native');
  const nonNativeTitle = document.querySelector('.category-header.non-native h3');
  if (nonNativeBadge) nonNativeBadge.textContent = t('trees.nonNative');
  if (nonNativeTitle) nonNativeTitle.textContent = t('trees.nonNativeTitle');

  // Update powerline badges
  document.querySelectorAll('.powerline-badge').forEach(badge => {
    badge.textContent = t('trees.powerlineSafe');
  });

  // Update FAQ section
  const faqTitle = document.querySelector('#faq .section-header h2');
  const faqSubtitle = document.querySelector('#faq .section-header p');

  if (faqTitle) faqTitle.textContent = t('faq.title');
  if (faqSubtitle) faqSubtitle.textContent = t('faq.subtitle');

  // Update FAQ items
  const faqQuestions = document.querySelectorAll('.faq-question span');
  const faqAnswers = document.querySelectorAll('.faq-answer-content');

  for (let i = 0; i < Math.min(faqQuestions.length, 11); i++) {
    const qNum = i + 1;
    if (faqQuestions[i]) faqQuestions[i].textContent = t(`faq.q${qNum}`);
    if (faqAnswers[i]) faqAnswers[i].innerHTML = t(`faq.a${qNum}`);
  }

  // Update chatbot
  const chatbotHeader = document.querySelector('.chatbot-widget-header h3');
  const chatbotSubtitle = document.querySelector('.chatbot-widget-header p');
  const greetingTitle = document.querySelector('.chatbot-greeting h4');
  const greetingText = document.querySelector('.chatbot-greeting p');
  const greetingButton = document.querySelector('.chatbot-greeting-button');

  if (chatbotHeader) chatbotHeader.textContent = t('chatbot.header');
  if (chatbotSubtitle) chatbotSubtitle.textContent = t('chatbot.subtitle');
  if (greetingTitle) greetingTitle.textContent = t('chatbot.greetingTitle');
  if (greetingText) greetingText.textContent = t('chatbot.greetingText');
  if (greetingButton) greetingButton.textContent = t('chatbot.greetingButton');

  // Update footer
  const footerTitle = document.querySelector('.footer-brand h3');
  const footerDesc = document.querySelector('.footer-brand p');

  if (footerTitle) footerTitle.textContent = t('footer.title');
  if (footerDesc) footerDesc.textContent = t('footer.description');

  const footerHeaders = document.querySelectorAll('.footer-links h4');
  if (footerHeaders.length >= 2) {
    footerHeaders[0].textContent = t('footer.quickLinks');
    footerHeaders[1].textContent = t('footer.resources');
  }

  const footerResourceLinks = document.querySelectorAll('.footer-links:last-of-type a');
  if (footerResourceLinks.length >= 4) {
    footerResourceLinks[0].textContent = t('footer.cityGrants');
    footerResourceLinks[1].textContent = t('footer.heatOffice');
    footerResourceLinks[2].textContent = t('footer.treeGuide');
    footerResourceLinks[3].textContent = t('footer.courtneyWork');
  }

  const copyright = document.querySelector('.footer-bottom p');
  if (copyright) copyright.textContent = t('footer.copyright');

  // Update shade section (on index.html)
  const shadeAiHelp = document.getElementById('shade-ai-help');
  if (shadeAiHelp) {
    const aiHelpText = t('shade.aiHelp');
    const parts = aiHelpText.split('?');
    if (parts.length === 2) {
      shadeAiHelp.innerHTML = `<strong>${parts[0]}?</strong> ${parts[1]}`;
    } else {
      shadeAiHelp.innerHTML = aiHelpText;
    }
  }

  const shadeBonus = document.getElementById('shade-bonus');
  if (shadeBonus) {
    const bonusText = t('shade.bonus');
    // Extract the text to bold from the translation
    const boldMatch = bonusText.match(/Bonus:(.+?)(this grant covers front yard trees only|esta subvención cubre solo árboles del jardín delantero)(.+)/i);
    if (boldMatch) {
      shadeBonus.innerHTML = `<strong>Bonus:</strong>${boldMatch[1]}<strong>${boldMatch[2]}</strong>${boldMatch[3]}`;
    } else {
      shadeBonus.innerHTML = bonusText;
    }
  }

  // Update about page content (on about.html)
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (key && key.startsWith('about.')) {
      element.textContent = t(key);
    } else if (key && key.startsWith('shade.')) {
      // Skip shade-ai-help and shade-bonus as they're handled above
      if (element.id !== 'shade-ai-help' && element.id !== 'shade-bonus') {
        element.textContent = t(key);
      }
    } else if (key && key.startsWith('planner.')) {
      element.textContent = t(key);
    }
  });

  // Update address checker results if visible
  updateAddressCheckerIfVisible();
}

// Update address checker results with current language
function updateAddressCheckerIfVisible() {
  const result = document.getElementById('address-result');
  if (!result || !result.classList.contains('eligible') && !result.classList.contains('ineligible')) {
    return;
  }

  if (result.classList.contains('eligible')) {
    if (result.innerHTML.includes('appears to be eligible')) {
      result.innerHTML = `${t('eligibility.maybeEligible')} <a href="#roadrunner">${t('eligibility.applyNow')}</a>`;
    } else {
      result.innerHTML = `${t('eligibility.eligible')} <a href="#roadrunner">${t('eligibility.applyNow')}</a>`;
    }
  } else if (result.classList.contains('ineligible')) {
    result.innerHTML = t('eligibility.notEligible');
  }
}

// Make translation function globally available for chatbot
window.t = t;
window.currentLanguage = currentLanguage;
window.getChatbotLanguage = () => currentLanguage;

// Listen for language requests from iframes (chatbot and planner)
window.addEventListener('message', function(event) {
  if (event.data && event.data.type === 'requestLanguage') {
    // Send to chatbot iframe
    const chatbotIframe = document.querySelector('.chatbot-widget-iframe');
    if (chatbotIframe && chatbotIframe.contentWindow) {
      chatbotIframe.contentWindow.postMessage({
        type: 'languageChange',
        language: currentLanguage
      }, '*');
    }

    // Send to planner iframe
    const plannerIframe = document.querySelector('.planner-embed iframe');
    if (plannerIframe && plannerIframe.contentWindow) {
      plannerIframe.contentWindow.postMessage({
        type: 'languageChange',
        language: currentLanguage
      }, '*');
    }
  }
});

// Initialize language on page load
document.addEventListener('DOMContentLoaded', () => {
  console.log('Page loaded with language:', currentLanguage);

  // Update the language button states to reflect current language
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  document.querySelector(`[data-lang="${currentLanguage}"]`)?.classList.add('active');

  // Update the page text
  updatePageText();

  // Update global reference
  window.currentLanguage = currentLanguage;

  console.log('Language initialization complete. Current language:', currentLanguage);
});
