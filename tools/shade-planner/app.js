// ============================================
// GLOBAL STATE
// ============================================

let map;
let drawingManager;
let houses = [];
let trees = [];
let shadowPolygons = [];
let currentMode = null; // 'draw-house', 'draw-neighbor', 'add-tree'
let currentTreeSize = 'medium';
let currentHouseType = 'user';
let animationInterval = null;

// Metro Phoenix center coordinates
const PHOENIX = {
  lat: 33.4484,
  lng: -112.0740
};

// Tree size presets
const TREE_SIZES = {
  small: {
    height: 15,
    canopyRadius: 8,
    label: 'Small - Palo Verde, Desert Willow'
  },
  medium: {
    height: 25,
    canopyRadius: 15,
    label: 'Medium - Mesquite, Texas Ebony'
  },
  large: {
    height: 40,
    canopyRadius: 20,
    label: 'Large - Ash, Elm'
  }
};

// Conversion factors for Phoenix latitude (33.45°N)
// 1 degree latitude ≈ 364,000 feet
// 1 degree longitude at 33.45°N ≈ 303,000 feet
const FEET_TO_LAT = 1 / 364000;
const FEET_TO_LNG = 1 / 303000;

// ============================================
// INITIALIZATION
// ============================================

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: PHOENIX,
    zoom: 19,
    mapTypeId: 'satellite',
    tilt: 0,
    heading: 0,
    mapTypeControl: true,
    mapTypeControlOptions: {
      style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
      position: google.maps.ControlPosition.TOP_RIGHT
    },
    streetViewControl: false,
    fullscreenControl: true
  });

  // Set up drawing manager for polygons
  drawingManager = new google.maps.drawing.DrawingManager({
    drawingMode: null,
    drawingControl: false,
    polygonOptions: {
      fillColor: '#4a7c50',
      fillOpacity: 0.35,
      strokeColor: '#2c5530',
      strokeWeight: 2,
      editable: true,
      draggable: false
    }
  });

  drawingManager.setMap(map);

  // Listen for polygon complete
  google.maps.event.addListener(drawingManager, 'polygoncomplete', handlePolygonComplete);

  // Listen for map clicks (for placing trees)
  map.addListener('click', handleMapClick);
}

function loadAddress() {
  const address = document.getElementById('address-input').value.trim();
  if (!address) {
    alert('Please enter an address.');
    return;
  }

  // Ensure Phoenix area
  const searchAddress = address.includes('AZ') || address.includes('Arizona') || address.includes('Phoenix')
    ? address
    : address + ', Phoenix, AZ';

  const geocoder = new google.maps.Geocoder();
  geocoder.geocode({ address: searchAddress }, (results, status) => {
    if (status === 'OK' && results[0]) {
      const location = results[0].geometry.location;

      // Check if it's in Metro Phoenix area (rough bounds)
      const lat = location.lat();
      const lng = location.lng();

      if (lat < 33.2 || lat > 33.8 || lng < -112.4 || lng > -111.6) {
        alert('Please enter an address in Metro Phoenix, AZ.');
        return;
      }

      map.setCenter(location);
      map.setZoom(20);

      const formattedAddress = results[0].formatted_address;

      // Add a marker for the address
      new google.maps.Marker({
        position: location,
        map: map,
        title: 'Your Address',
        icon: {
          path: google.maps.SymbolPath.CIRCLE,
          scale: 8,
          fillColor: '#FF0000',
          fillOpacity: 0.8,
          strokeColor: '#FFFFFF',
          strokeWeight: 2
        }
      });

      updateInstructions('Great! Now click "Draw My House" and trace your house outline on the satellite image.');
    } else {
      alert('Could not find that address. Please check and try again.');
    }
  });
}

// ============================================
// DRAWING FUNCTIONS
// ============================================

function startDrawHouse() {
  currentMode = 'draw-house';
  currentHouseType = 'user';
  drawingManager.setDrawingMode(google.maps.drawing.OverlayType.POLYGON);
  drawingManager.setOptions({
    polygonOptions: {
      fillColor: '#4a7c50',
      fillOpacity: 0.35,
      strokeColor: '#2c5530',
      strokeWeight: 2,
      editable: true
    }
  });
  updateInstructions('Click on each corner of your house to draw its outline. Double-click to finish.');
  setActiveButton('btn-draw-house');
}

function startDrawNeighbor() {
  currentMode = 'draw-neighbor';
  currentHouseType = 'neighbor';
  drawingManager.setDrawingMode(google.maps.drawing.OverlayType.POLYGON);
  drawingManager.setOptions({
    polygonOptions: {
      fillColor: '#7c6650',
      fillOpacity: 0.35,
      strokeColor: '#5c4630',
      strokeWeight: 2,
      editable: true
    }
  });
  updateInstructions('Click on each corner of your neighbor\'s house. Double-click to finish. You can draw multiple neighbors.');
  setActiveButton('btn-draw-neighbor');
}

function startAddTree() {
  currentMode = 'add-tree';
  drawingManager.setDrawingMode(null);
  updateInstructions('Click anywhere on the map to place a tree. You can drag it after placement to adjust position.');
  setActiveButton('btn-add-tree');
}

function handlePolygonComplete(polygon) {
  const height = parseInt(document.getElementById('house-height').value);
  const path = polygon.getPath();
  const corners = [];

  for (let i = 0; i < path.getLength(); i++) {
    const point = path.getAt(i);
    corners.push({ lat: point.lat(), lng: point.lng() });
  }

  const house = {
    id: currentHouseType + '_' + Date.now(),
    corners: corners,
    height: height,
    type: currentHouseType,
    polygon: polygon,
    label: currentHouseType === 'user' ? 'My House' : 'Neighbor ' + (houses.filter(h => h.type === 'neighbor').length + 1)
  };

  houses.push(house);

  // Add delete functionality - right click on polygon
  google.maps.event.addListener(polygon, 'rightclick', function() {
    if (confirm('Delete this building?')) {
      polygon.setMap(null);
      houses = houses.filter(h => h.id !== house.id);
      updateShadows();
    }
  });

  // Update shadows when polygon is edited
  google.maps.event.addListener(path, 'set_at', function() {
    const newCorners = [];
    for (let i = 0; i < path.getLength(); i++) {
      const point = path.getAt(i);
      newCorners.push({ lat: point.lat(), lng: point.lng() });
    }
    house.corners = newCorners;
    updateShadows();
  });

  drawingManager.setDrawingMode(null);
  currentMode = null;
  clearActiveButtons();

  const nextStep = currentHouseType === 'user'
    ? 'Now draw your neighbor\'s house, or place a tree to see shadows.'
    : 'Draw more neighbors or place a tree to see shadow coverage.';

  updateInstructions(nextStep);
  updateShadows();
}

function handleMapClick(event) {
  if (currentMode !== 'add-tree') return;

  const size = TREE_SIZES[currentTreeSize];

  const tree = {
    id: 'tree_' + Date.now(),
    position: { lat: event.latLng.lat(), lng: event.latLng.lng() },
    height: size.height,
    canopyRadius: size.canopyRadius,
    size: currentTreeSize,
    marker: null
  };

  // Add marker for tree with appropriate size
  const markerScale = currentTreeSize === 'small' ? 8 : currentTreeSize === 'medium' ? 12 : 16;

  tree.marker = new google.maps.Marker({
    position: event.latLng,
    map: map,
    icon: {
      path: google.maps.SymbolPath.CIRCLE,
      scale: markerScale,
      fillColor: '#228B22',
      fillOpacity: 0.8,
      strokeColor: '#006400',
      strokeWeight: 2
    },
    draggable: true,
    title: 'Tree (' + size.label + ')'
  });

  // Update tree position when dragged
  tree.marker.addListener('dragend', () => {
    tree.position = {
      lat: tree.marker.getPosition().lat(),
      lng: tree.marker.getPosition().lng()
    };
    updateShadows();
  });

  // Right-click to delete
  tree.marker.addListener('rightclick', () => {
    if (confirm('Delete this tree?')) {
      tree.marker.setMap(null);
      trees = trees.filter(t => t.id !== tree.id);
      updateShadows();
    }
  });

  trees.push(tree);
  updateShadows();
  updateInstructions('Tree placed! Drag it to adjust position, or add more trees. Use the time slider to see shadows.');
}

function setTreeSize(size) {
  currentTreeSize = size;

  // Update button styles
  document.querySelectorAll('.tree-size-buttons .btn').forEach(btn => {
    btn.classList.remove('active');
  });

  event.target.classList.add('active');
}

// ============================================
// SHADOW CALCULATIONS
// ============================================

function calculateShadowLength(objectHeight, sunAltitudeRadians) {
  if (sunAltitudeRadians <= 0) return 1000; // Sun below horizon
  return objectHeight / Math.tan(sunAltitudeRadians);
}

function calculateShadowDirection(sunAzimuthRadians) {
  // SunCalc azimuth: 0 = south, positive = west, negative = east
  // Shadow points opposite to sun
  return sunAzimuthRadians + Math.PI;
}

function getCanopyShadowPolygon(tree, datetime) {
  const sunPosition = SunCalc.getPosition(datetime, PHOENIX.lat, PHOENIX.lng);

  if (sunPosition.altitude <= 0) return null; // Sun below horizon

  const shadowLength = calculateShadowLength(tree.height, sunPosition.altitude);
  const shadowDirection = calculateShadowDirection(sunPosition.azimuth);

  // Calculate shadow center offset from tree base
  // Higher offset means shadow stretches further
  const centerOffset = shadowLength * 0.5;

  // Generate ellipse points for canopy shadow
  const points = [];
  const numPoints = 32; // More points for smoother shadow

  // Stretch factor for ellipse based on sun angle
  // Lower sun = more stretched shadow
  const stretchFactor = Math.max(1, shadowLength / tree.canopyRadius * 0.4);

  for (let i = 0; i < numPoints; i++) {
    const angle = (i / numPoints) * 2 * Math.PI;

    // Ellipse in local coordinates
    let x = tree.canopyRadius * Math.cos(angle);
    let y = tree.canopyRadius * stretchFactor * Math.sin(angle);

    // Rotate to shadow direction
    const rotatedX = x * Math.cos(shadowDirection) - y * Math.sin(shadowDirection);
    const rotatedY = x * Math.sin(shadowDirection) + y * Math.cos(shadowDirection);

    // Offset by shadow center and convert to lat/lng
    const lat = tree.position.lat + (rotatedY + centerOffset * Math.cos(shadowDirection)) * FEET_TO_LAT;
    const lng = tree.position.lng + (rotatedX + centerOffset * Math.sin(shadowDirection)) * FEET_TO_LNG;

    points.push({ lat, lng });
  }

  return points;
}

function updateShadows() {
  // Clear existing shadow polygons
  shadowPolygons.forEach(p => p.setMap(null));
  shadowPolygons = [];

  if (trees.length === 0) {
    analyzeShade(null);
    return;
  }

  // Get current time from slider
  const hour = parseFloat(document.getElementById('time-slider').value);
  const dateStr = document.getElementById('date-select').value;

  // Construct datetime
  const hourInt = Math.floor(hour);
  const minutes = (hour % 1) * 60;
  const timeStr = hourInt.toString().padStart(2, '0') + ':' + minutes.toString().padStart(2, '0') + ':00';
  const datetime = new Date(dateStr + 'T' + timeStr);

  // Calculate and draw shadow for each tree
  trees.forEach(tree => {
    const shadowPoints = getCanopyShadowPolygon(tree, datetime);

    if (shadowPoints) {
      const shadowPolygon = new google.maps.Polygon({
        paths: shadowPoints,
        fillColor: '#000000',
        fillOpacity: 0.4,
        strokeColor: '#333333',
        strokeWeight: 1,
        map: map,
        clickable: false
      });

      shadowPolygons.push(shadowPolygon);
    }
  });

  // Analyze shade coverage
  analyzeShade(datetime);
}

function updateTime(value) {
  const hour = parseFloat(value);
  const hourInt = Math.floor(hour);
  const minutes = Math.round((hour % 1) * 60);

  const ampm = hourInt >= 12 ? 'PM' : 'AM';
  const displayHour = hourInt > 12 ? hourInt - 12 : (hourInt === 0 ? 12 : hourInt);
  const displayMinutes = minutes > 0 ? ':' + minutes.toString().padStart(2, '0') : ':00';

  document.getElementById('time-display').textContent = displayHour + displayMinutes + ' ' + ampm;
  updateShadows();
}

// ============================================
// SHADE ANALYSIS
// ============================================

function analyzeShade(datetime) {
  if (trees.length === 0 || houses.length === 0) {
    document.getElementById('results').innerHTML = '<p>Add buildings and trees to see shade analysis.</p>';
    return;
  }

  if (!datetime) {
    document.getElementById('results').innerHTML = '<p>No shadows to display.</p>';
    return;
  }

  const sunPosition = SunCalc.getPosition(datetime, PHOENIX.lat, PHOENIX.lng);

  if (sunPosition.altitude <= 0) {
    document.getElementById('results').innerHTML = '<p>Sun is below horizon at this time.</p>';
    return;
  }

  let resultsHTML = '<div style="font-size: 13px;">';

  trees.forEach(tree => {
    const shadowPoints = getCanopyShadowPolygon(tree, datetime);
    if (!shadowPoints) return;

    resultsHTML += '<div style="margin-bottom: 12px; padding: 8px; background: #f5f5f5; border-radius: 4px;">';
    resultsHTML += '<strong>' + tree.size.charAt(0).toUpperCase() + tree.size.slice(1) + ' Tree</strong><br>';

    let hasShade = false;

    houses.forEach(house => {
      const overlap = checkPolygonOverlap(shadowPoints, house.corners);

      if (overlap) {
        resultsHTML += '<span class="shade-good">✓ Shading ' + house.label + '</span><br>';
        hasShade = true;
      }
    });

    if (!hasShade) {
      resultsHTML += '<span class="shade-none">○ Not shading any buildings</span><br>';
    }

    resultsHTML += '</div>';
  });

  resultsHTML += '</div>';

  document.getElementById('results').innerHTML = resultsHTML;
}

function checkPolygonOverlap(polygon1, polygon2) {
  // Check if any point of polygon1 is inside polygon2
  for (const point of polygon1) {
    if (isPointInPolygon(point, polygon2)) {
      return true;
    }
  }

  // Check if any point of polygon2 is inside polygon1
  for (const point of polygon2) {
    if (isPointInPolygon(point, polygon1)) {
      return true;
    }
  }

  // Check edge intersections (simplified - may miss some edge cases)
  for (let i = 0; i < polygon1.length; i++) {
    const p1 = polygon1[i];
    const p2 = polygon1[(i + 1) % polygon1.length];

    for (let j = 0; j < polygon2.length; j++) {
      const p3 = polygon2[j];
      const p4 = polygon2[(j + 1) % polygon2.length];

      if (lineSegmentsIntersect(p1, p2, p3, p4)) {
        return true;
      }
    }
  }

  return false;
}

function lineSegmentsIntersect(p1, p2, p3, p4) {
  const ccw = (A, B, C) => {
    return (C.lat - A.lat) * (B.lng - A.lng) > (B.lat - A.lat) * (C.lng - A.lng);
  };

  return ccw(p1, p3, p4) !== ccw(p2, p3, p4) && ccw(p1, p2, p3) !== ccw(p1, p2, p4);
}

function isPointInPolygon(point, polygon) {
  // Ray casting algorithm
  let inside = false;
  const n = polygon.length;

  for (let i = 0, j = n - 1; i < n; j = i++) {
    const xi = polygon[i].lng, yi = polygon[i].lat;
    const xj = polygon[j].lng, yj = polygon[j].lat;

    if (((yi > point.lat) !== (yj > point.lat)) &&
        (point.lng < (xj - xi) * (point.lat - yi) / (yj - yi) + xi)) {
      inside = !inside;
    }
  }

  return inside;
}

// ============================================
// ANIMATION
// ============================================

function animateShadows() {
  // Clear any existing animation
  if (animationInterval) {
    clearInterval(animationInterval);
    animationInterval = null;
  }

  let hour = 6;
  const slider = document.getElementById('time-slider');

  animationInterval = setInterval(() => {
    if (hour > 20) {
      clearInterval(animationInterval);
      animationInterval = null;
      return;
    }

    slider.value = hour;
    updateTime(hour);
    hour += 0.25; // 15-minute increments
  }, 150); // Faster animation
}

// ============================================
// RECOMMENDATION ENGINE
// ============================================

function showRecommendation() {
  if (houses.length === 0) {
    document.getElementById('recommendation').innerHTML = '<div class="results-box" style="margin-top: 10px;"><p>Please draw your house first.</p></div>';
    return;
  }

  const userHouse = houses.find(h => h.type === 'user');
  if (!userHouse) {
    document.getElementById('recommendation').innerHTML = '<div class="results-box" style="margin-top: 10px;"><p>Please draw your house first.</p></div>';
    return;
  }

  document.getElementById('recommendation').innerHTML = '<div class="results-box" style="margin-top: 10px;"><p>Analyzing positions... This may take a moment.</p></div>';

  // Small delay to let UI update
  setTimeout(() => {
    findBestTreePlacement(userHouse);
  }, 100);
}

function findBestTreePlacement(userHouse) {
  // Calculate centroid of user's house
  const centroid = getPolygonCentroid(userHouse.corners);

  // Test positions in a grid pattern around the property
  const testPositions = [];
  const testDistances = [20, 30, 40, 50]; // feet from house center
  const angleStep = 30; // degrees

  testDistances.forEach(distance => {
    for (let angle = 0; angle < 360; angle += angleStep) {
      const radians = angle * Math.PI / 180;
      testPositions.push({
        lat: centroid.lat + distance * Math.cos(radians) * FEET_TO_LAT,
        lng: centroid.lng + distance * Math.sin(radians) * FEET_TO_LNG,
        angle: angle,
        distance: distance
      });
    }
  });

  // Score each position based on shade coverage during peak hours
  let bestPosition = null;
  let bestScore = 0;
  let bestDetails = null;

  const dateStr = document.getElementById('date-select').value;

  testPositions.forEach(pos => {
    const testTree = {
      position: { lat: pos.lat, lng: pos.lng },
      height: 25,
      canopyRadius: 15
    };

    let score = 0;
    let userHouseHours = [];
    let neighborHours = [];

    // Check coverage at key hours throughout the day
    for (let hour = 7; hour <= 19; hour += 1) {
      const datetime = new Date(dateStr + 'T' + hour.toString().padStart(2, '0') + ':00:00');
      const shadowPoints = getCanopyShadowPolygon(testTree, datetime);

      if (shadowPoints) {
        houses.forEach(house => {
          if (checkPolygonOverlap(shadowPoints, house.corners)) {
            // Peak afternoon hours (2pm-6pm) weighted heavily
            const hourWeight = (hour >= 14 && hour <= 18) ? 3 : 1;

            if (house.type === 'user') {
              score += 2 * hourWeight; // User's house weighted higher
              if (hour >= 14 && hour <= 18) {
                userHouseHours.push(hour);
              }
            } else {
              score += 1 * hourWeight;
              if (hour >= 14 && hour <= 18) {
                neighborHours.push(hour);
              }
            }
          }
        });
      }
    }

    if (score > bestScore) {
      bestScore = score;
      bestPosition = pos;
      bestDetails = {
        userHours: userHouseHours,
        neighborHours: neighborHours
      };
    }
  });

  if (bestPosition && bestScore > 0) {
    const direction = getCompassDirection(bestPosition.angle);
    const distance = Math.round(bestPosition.distance);

    let resultsHTML = '<div class="results-box" style="margin-top: 10px;">';
    resultsHTML += '<p style="margin-bottom: 8px;"><strong>Recommended Placement:</strong></p>';
    resultsHTML += '<p style="margin-bottom: 8px;">Plant a medium tree approximately <strong>' + distance + ' feet</strong> to the <strong>' + direction + '</strong> of your house.</p>';

    if (bestDetails.userHours.length > 0) {
      const hours = bestDetails.userHours.map(h => formatHour(h)).join(', ');
      resultsHTML += '<p style="margin-bottom: 8px;" class="shade-good">✓ Your house: Peak shade at ' + hours + '</p>';
    }

    if (bestDetails.neighborHours.length > 0) {
      const hours = bestDetails.neighborHours.map(h => formatHour(h)).join(', ');
      resultsHTML += '<p style="margin-bottom: 12px;" class="shade-good">✓ Neighbor: Peak shade at ' + hours + '</p>';
    }

    resultsHTML += '<button class="btn" onclick="placeRecommendedTree(' + bestPosition.lat + ',' + bestPosition.lng + ')" style="width: 100%; margin-top: 8px;">Place Tree Here</button>';
    resultsHTML += '</div>';

    document.getElementById('recommendation').innerHTML = resultsHTML;
  } else {
    document.getElementById('recommendation').innerHTML = '<div class="results-box" style="margin-top: 10px;"><p>Try drawing your neighbor\'s house to find positions that benefit both properties.</p></div>';
  }
}

function formatHour(hour) {
  const ampm = hour >= 12 ? 'PM' : 'AM';
  const displayHour = hour > 12 ? hour - 12 : hour;
  return displayHour + ampm;
}

function getPolygonCentroid(corners) {
  let latSum = 0, lngSum = 0;
  corners.forEach(c => {
    latSum += c.lat;
    lngSum += c.lng;
  });
  return {
    lat: latSum / corners.length,
    lng: lngSum / corners.length
  };
}

function getCompassDirection(angle) {
  const directions = ['North', 'North-East', 'East', 'South-East', 'South', 'South-West', 'West', 'North-West'];
  const index = Math.round(angle / 45) % 8;
  return directions[index];
}

function placeRecommendedTree(lat, lng) {
  const size = TREE_SIZES.medium;

  const tree = {
    id: 'tree_' + Date.now(),
    position: { lat, lng },
    height: size.height,
    canopyRadius: size.canopyRadius,
    size: 'medium',
    marker: new google.maps.Marker({
      position: { lat, lng },
      map: map,
      icon: {
        path: google.maps.SymbolPath.CIRCLE,
        scale: 14,
        fillColor: '#32CD32', // Brighter green for recommended tree
        fillOpacity: 0.9,
        strokeColor: '#006400',
        strokeWeight: 3
      },
      draggable: true,
      title: 'Recommended Tree (Medium)',
      animation: google.maps.Animation.DROP
    })
  };

  tree.marker.addListener('dragend', () => {
    tree.position = {
      lat: tree.marker.getPosition().lat(),
      lng: tree.marker.getPosition().lng()
    };
    updateShadows();
  });

  tree.marker.addListener('rightclick', () => {
    if (confirm('Delete this tree?')) {
      tree.marker.setMap(null);
      trees = trees.filter(t => t.id !== tree.id);
      updateShadows();
    }
  });

  trees.push(tree);
  updateShadows();

  // Pan map to show the tree
  map.panTo({ lat, lng });

  updateInstructions('Recommended tree placed! Drag it to fine-tune the position.');
}

// ============================================
// HELPERS
// ============================================

function updateInstructions(text) {
  document.getElementById('instructions').textContent = text;
}

function setActiveButton(buttonId) {
  clearActiveButtons();
  const button = document.getElementById(buttonId);
  if (button) {
    button.classList.add('active');
  }
}

function clearActiveButtons() {
  document.querySelectorAll('.tool-section .btn').forEach(btn => {
    if (!btn.classList.contains('btn-small')) {
      btn.classList.remove('active');
    }
  });
}

// ============================================
// FRONT YARD BOUNDARY FUNCTIONS (DISABLED)
// ============================================
// These functions were part of the automatic front yard detection system
// that has been replaced with a simple disclaimer banner.
// Code is preserved for reference but no longer used.

/*
function loadBoundariesFromStorage() {
  // ... function code removed ...
}

function loadFrontYardBoundary(address) {
  // ... function code removed ...
}

function findMatchingStreet(address) {
  // ... function code removed ...
}

function displayFrontYardBoundary() {
  // ... function code removed ...
}

function isPointInFrontYard(point) {
  // ... function code removed ...
}

function setFrontYardDirection(direction) {
  // ... function code removed ...
}
*/

// ============================================
// INITIALIZE WHEN GOOGLE MAPS LOADS
// ============================================

window.onload = function() {
  // Check if Google Maps loaded
  if (typeof google === 'undefined') {
    document.getElementById('map').innerHTML = '<div style="display: flex; align-items: center; justify-content: center; height: 100%; background: #f5f5f5; padding: 20px; text-align: center;"><div><h2 style="color: #c00;">Google Maps API Key Required</h2><p>Please add your Google Maps API key to index.html</p></div></div>';
    return;
  }

  initMap();
};
