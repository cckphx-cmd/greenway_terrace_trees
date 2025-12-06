// ============================================
// PLANNER INTERNATIONALIZATION
// ============================================
// Provides translation support for the shade planner tool

// Translation mapping
const translations = {
  en: {
    // Header
    'header.title': 'Midtown Grand District',
    'header.subtitle': 'Tree Placement Planner',

    // Disclaimer
    'disclaimer': '⚠️ IMPORTANT: Trees must be placed in your front yard (toward the street) to qualify for the grant program.',

    // Address bar
    'address.placeholder': 'Enter your Phoenix address (e.g., 1234 E Main St, Phoenix, AZ)',
    'address.loadBtn': 'Load Map',

    // Instructions
    'instructions': "Enter your address above to get started. We'll show you the best places to plant trees that shade both your house and your neighbors'.",

    // Step 1
    'step1.title': 'Step 1: Draw Buildings',
    'step1.drawHouse': 'Draw My House',
    'step1.drawNeighbor': 'Draw Neighbor',
    'step1.height': 'Building Height:',
    'step1.singleStory': 'Single Story (12 ft)',
    'step1.twoStory': 'Two Story (24 ft)',
    'step1.oneHalfStory': '1.5 Story (18 ft)',
    'step1.info': 'Click corners of buildings to trace them. Double-click to finish.',

    // Step 2
    'step2.title': 'Step 2: Place Trees',
    'step2.addTree': 'Add Tree',
    'step2.treeSize': 'Tree Size:',
    'step2.small': 'Small<br>15ft',
    'step2.medium': 'Medium<br>25ft',
    'step2.large': 'Large<br>40ft',
    'step2.info': 'Click on the map to place a tree. Trees are draggable after placement.',

    // Step 3
    'step3.title': 'Step 3: See Shadows',
    'step3.timeOfDay': 'Time of Day:',
    'step3.date': 'Date:',
    'step3.june21': 'June 21 (Summer Solstice)',
    'step3.aug1': 'August 1 (Peak Heat)',
    'step3.july15': 'July 15 (Mid-Summer)',
    'step3.sept15': 'September 15 (Late Summer)',
    'step3.animate': '▶ Animate Shadows Through Day',

    // Shade Coverage
    'shade.title': 'Shade Coverage',
    'shade.placeholder': 'Place trees and buildings to see shade analysis.',

    // Recommendation
    'recommendation.title': 'Recommendation',
    'recommendation.button': 'Find Best Tree Placement'
  },

  es: {
    // Header
    'header.title': 'Distrito Midtown Grand',
    'header.subtitle': 'Planificador de Colocación de Árboles',

    // Disclaimer
    'disclaimer': '⚠️ IMPORTANTE: Los árboles deben colocarse en su jardín delantero (hacia la calle) para calificar para el programa de subvención.',

    // Address bar
    'address.placeholder': 'Ingrese su dirección en Phoenix (ej., 1234 E Main St, Phoenix, AZ)',
    'address.loadBtn': 'Cargar Mapa',

    // Instructions
    'instructions': 'Ingrese su dirección arriba para comenzar. Le mostraremos los mejores lugares para plantar árboles que den sombra tanto a su casa como a las de sus vecinos.',

    // Step 1
    'step1.title': 'Paso 1: Dibujar Edificios',
    'step1.drawHouse': 'Dibujar Mi Casa',
    'step1.drawNeighbor': 'Dibujar Vecino',
    'step1.height': 'Altura del Edificio:',
    'step1.singleStory': 'Un Piso (12 ft)',
    'step1.twoStory': 'Dos Pisos (24 ft)',
    'step1.oneHalfStory': '1.5 Pisos (18 ft)',
    'step1.info': 'Haga clic en las esquinas de los edificios para trazarlos. Doble clic para terminar.',

    // Step 2
    'step2.title': 'Paso 2: Colocar Árboles',
    'step2.addTree': 'Agregar Árbol',
    'step2.treeSize': 'Tamaño del Árbol:',
    'step2.small': 'Pequeño<br>15ft',
    'step2.medium': 'Mediano<br>25ft',
    'step2.large': 'Grande<br>40ft',
    'step2.info': 'Haga clic en el mapa para colocar un árbol. Los árboles se pueden arrastrar después de la colocación.',

    // Step 3
    'step3.title': 'Paso 3: Ver Sombras',
    'step3.timeOfDay': 'Hora del Día:',
    'step3.date': 'Fecha:',
    'step3.june21': '21 de junio (Solsticio de Verano)',
    'step3.aug1': '1 de agosto (Calor Máximo)',
    'step3.july15': '15 de julio (Mediados de Verano)',
    'step3.sept15': '15 de septiembre (Fin de Verano)',
    'step3.animate': '▶ Animar Sombras Durante el Día',

    // Shade Coverage
    'shade.title': 'Cobertura de Sombra',
    'shade.placeholder': 'Coloque árboles y edificios para ver el análisis de sombra.',

    // Recommendation
    'recommendation.title': 'Recomendación',
    'recommendation.button': 'Encontrar Mejor Ubicación para Árboles'
  }
};

// Current language
let currentLanguage = 'en';

// Listen for language changes from parent page
window.addEventListener('message', function(event) {
  if (event.data && event.data.type === 'languageChange') {
    currentLanguage = event.data.language;
    console.log('Planner language updated to:', currentLanguage);
    updatePageText();
  }
});

// Request current language from parent on load
window.addEventListener('load', function() {
  if (window.parent !== window) {
    window.parent.postMessage({ type: 'requestLanguage' }, '*');
  }
});

// Translation function
function t(key) {
  return translations[currentLanguage][key] || translations['en'][key] || key;
}

// Update all text on the page
function updatePageText() {
  // Header
  const headerTitle = document.querySelector('.header h1');
  const headerSubtitle = document.querySelector('.header p');
  if (headerTitle) headerTitle.textContent = t('header.title');
  if (headerSubtitle) headerSubtitle.textContent = t('header.subtitle');

  // Disclaimer
  const disclaimer = document.querySelector('.disclaimer-banner strong');
  if (disclaimer) disclaimer.innerHTML = t('disclaimer');

  // Address bar
  const addressInput = document.getElementById('address-input');
  const loadBtn = document.querySelector('.address-bar button');
  if (addressInput) addressInput.placeholder = t('address.placeholder');
  if (loadBtn) loadBtn.textContent = t('address.loadBtn');

  // Instructions
  const instructions = document.getElementById('instructions');
  if (instructions) instructions.textContent = t('instructions');

  // Step 1
  const step1Title = document.querySelector('.tool-section:nth-of-type(1) h3');
  const drawHouseBtn = document.getElementById('btn-draw-house');
  const drawNeighborBtn = document.getElementById('btn-draw-neighbor');
  const heightLabel = document.querySelector('.tool-section:nth-of-type(1) label');
  const step1Info = document.querySelector('.tool-section:nth-of-type(1) .info-text');

  if (step1Title) step1Title.textContent = t('step1.title');
  if (drawHouseBtn) drawHouseBtn.textContent = t('step1.drawHouse');
  if (drawNeighborBtn) drawNeighborBtn.textContent = t('step1.drawNeighbor');
  if (heightLabel) heightLabel.textContent = t('step1.height');
  if (step1Info) step1Info.textContent = t('step1.info');

  // Building height options
  const heightSelect = document.getElementById('house-height');
  if (heightSelect && heightSelect.options.length >= 3) {
    heightSelect.options[0].text = t('step1.singleStory');
    heightSelect.options[1].text = t('step1.twoStory');
    heightSelect.options[2].text = t('step1.oneHalfStory');
  }

  // Step 2
  const step2Title = document.querySelector('.tool-section:nth-of-type(2) h3');
  const addTreeBtn = document.getElementById('btn-add-tree');
  const treeSizeLabel = document.querySelector('.tool-section:nth-of-type(2) label');
  const step2Info = document.querySelector('.tool-section:nth-of-type(2) .info-text');

  if (step2Title) step2Title.textContent = t('step2.title');
  if (addTreeBtn) addTreeBtn.textContent = t('step2.addTree');
  if (treeSizeLabel) treeSizeLabel.textContent = t('step2.treeSize');
  if (step2Info) step2Info.textContent = t('step2.info');

  // Tree size buttons
  const treeSizeButtons = document.querySelectorAll('.tree-size-buttons button');
  if (treeSizeButtons.length >= 3) {
    treeSizeButtons[0].innerHTML = t('step2.small');
    treeSizeButtons[1].innerHTML = t('step2.medium');
    treeSizeButtons[2].innerHTML = t('step2.large');
  }

  // Step 3
  const step3Title = document.querySelector('.tool-section:nth-of-type(3) h3');
  const timeLabel = document.querySelector('.tool-section:nth-of-type(3) label:first-of-type');
  const dateLabel = document.querySelector('.tool-section:nth-of-type(3) label:nth-of-type(2)');

  if (step3Title) step3Title.textContent = t('step3.title');
  if (timeLabel) timeLabel.textContent = t('step3.timeOfDay');
  if (dateLabel) dateLabel.textContent = t('step3.date');

  // Date options
  const dateSelect = document.getElementById('date-select');
  if (dateSelect && dateSelect.options.length >= 4) {
    dateSelect.options[0].text = t('step3.june21');
    dateSelect.options[1].text = t('step3.aug1');
    dateSelect.options[2].text = t('step3.july15');
    dateSelect.options[3].text = t('step3.sept15');
  }

  // Animate button
  const animateBtn = document.querySelector('.animate-btn');
  if (animateBtn) animateBtn.textContent = t('step3.animate');

  // Shade Coverage section
  const shadeCoverageTitle = document.querySelector('.tool-section:nth-of-type(4) h3');
  const shadePlaceholder = document.querySelector('#results p');
  if (shadeCoverageTitle) shadeCoverageTitle.textContent = t('shade.title');
  if (shadePlaceholder) shadePlaceholder.textContent = t('shade.placeholder');

  // Recommendation section
  const recommendationTitle = document.querySelector('.tool-section:nth-of-type(5) h3');
  const recommendationBtn = document.querySelector('.tool-section:nth-of-type(5) .btn');
  if (recommendationTitle) recommendationTitle.textContent = t('recommendation.title');
  if (recommendationBtn) recommendationBtn.textContent = t('recommendation.button');
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', updatePageText);
