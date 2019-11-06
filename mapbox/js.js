mapboxgl.accessToken = 'pk.eyJ1Ijoic2wxbWVuZXQiLCJhIjoiY2syYzZ2MnoxMDJ3azNvcWJoY2N0c2FrOSJ9.w0PEr3iSc-e84IafDBe1Ew';
// This adds the map to your page
var map = new mapboxgl.Map({
  // container id specified in the HTML
  container: 'map',
  // style URL
  style: 'mapbox://styles/mapbox/light-v10',
  // initial position in [lon, lat] format
  center: [-77.034084, 38.909671],
  // initial zoom
  zoom: 14
});
var stores = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -77.034084142948,
          38.909671288923
        ]
      },
      "properties": {
        "address": "1471 P St NW",
        'marker-symbol': 1

      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -77.049766,
          38.900772
        ]
      },
      "properties": {
        "address": "2221 I St NW",
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -77.043929,
          38.910525
        ]
      },
      "properties": {
        "address": "1512 Connecticut Ave NW",
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -77.0672,
          38.90516896
        ]
      },
      "properties": {
        "address": "3333 M St NW",
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -77.002583742142,
          38.887041080933
        ]
      },
      "properties": {
        "address": "221 Pennsylvania Ave SE",
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -76.933492720127,
          38.99225245786
        ]
      },
      "properties": {
        "address": "8204 Baltimore Ave",
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -77.097083330154,
          38.980979
        ]
      },
      "properties": {
        "address": "4831 Bethesda Ave",
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -77.359425054188,
          38.958058116661
        ]
      },
      "properties": {
        "address": "11935 Democracy Dr",
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -77.10853099823,
          38.880100922392
        ]
      },
      "properties": {
        "address": "4075 Wilson Blvd",
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -75.28784,
          40.008008
        ]
      },
      "properties": {
        "address": "68 Coulter Ave",
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -75.20121216774,
          39.954030175164
        ]
      },
      "properties": {
        "address": "3925 Walnut St",
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -77.043959498405,
          38.903883387232
        ]
      },
      "properties": {
        "marker-color": "#red",
        "address": "1901 L St. NW",
      }
    }
  ]
};

map.on('load', function(e) {
  // Add the data to your map as a layer
  map.addLayer({
    id: 'locations',
    type: 'symbol',
    // Add a GeoJSON source containing place coordinates and information.
    source: {
      type: 'geojson',
      data: stores
    },
    layout: {
      'icon-image': 'restaurant-15',
      'icon-allow-overlap': true,
    }
  });
});

buildLocationList(stores)

function buildLocationList(data) {
  // Iterate through the list of stores
  for (i = 0; i < data.features.length; i++) {
    var currentFeature = data.features[i];
    // Shorten data.feature.properties to `prop` so we're not
    // writing this long form over and over again.
    var prop = currentFeature.properties;
    // Select the listing container in the HTML and append a div
    // with the class 'item' for each store
    var listings = document.getElementById('listings');
    var listing = listings.appendChild(document.createElement('div'));
    listing.className = 'item';
    listing.id = 'listing-' + i;

    // Create a new link with the class 'title' for each store
    // and fill it with the store address
    var link = listing.appendChild(document.createElement('a'));
    link.href = '#';
    link.className = 'title';
    link.dataPosition = i;
    link.innerHTML = prop.address;

    // Add an event listener for the links in the sidebar listing
    link.addEventListener('click', function(e) {
      // Update the currentFeature to the store associated with the clicked link
      var clickedListing = data.features[this.dataPosition];
      // 1. Fly to the point associated with the clicked link
      flyToStore(clickedListing);
      // 2. Close all other popups and display popup for clicked store

      // 3. Highlight listing in sidebar (and remove highlight for all other listings)
      var activeItem = document.getElementsByClassName('active');
      if (activeItem[0]) {
        activeItem[0].classList.remove('active');
      }
      this.parentNode.classList.add('active');
    });
  }
}

function flyToStore(currentFeature) {
  map.flyTo({
    center: currentFeature.geometry.coordinates,
    zoom: 15
  });
}


// Add an event listener for when a user clicks on the map
map.on('click', function(e) {
  // Query all the rendered points in the view
  var features = map.queryRenderedFeatures(e.point, { layers: ['locations'] });
  if (features.length) {
    var clickedPoint = features[0];
    // 1. Fly to the point
    flyToStore(clickedPoint);
    // 2. Close all other popups and display popup for clicked store

    // 3. Highlight listing in sidebar (and remove highlight for all other listings)
    var activeItem = document.getElementsByClassName('active');
    if (activeItem[0]) {
      activeItem[0].classList.remove('active');
    }
    // Find the index of the store.features that corresponds to the clickedPoint that fired the event listener
    var selectedFeature = clickedPoint.properties.address;

    for (var i = 0; i < stores.features.length; i++) {
      if (stores.features[i].properties.address === selectedFeature) {
        selectedFeatureIndex = i;
      }
    }
    // Select the correct list item using the found index and add the active class
    var listing = document.getElementById('listing-' + selectedFeatureIndex);
    listing.classList.add('active');
  }
});
