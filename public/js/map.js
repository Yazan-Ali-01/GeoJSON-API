mapboxgl.accessToken =
  "pk.eyJ1IjoieWF6YW4tYWxpIiwiYSI6ImNsZDBwNXIwZTA0cXkzdnFxdWlrbnY0dmoifQ.vyHPLbToZzIsa1RCCVt8Zw";

const map = new mapboxgl.Map({
  container: "map", // container ID
  style: "mapbox://styles/mapbox/streets-v12", // style URL
  center: [-77.0323, 38.9131], // starting position [lng, lat]
  zoom: 9, // starting zoom
});

//fetch stores from api
async function getStores() {
  const res = await fetch("/api/v1/stores");
  const data = await res.json();

  const stores = data.data.map((store) => {
    return {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [
          store.location.coordinates[0],
          store.location.coordinates[1],
        ],
      },
      properties: {
        storeId: store.storeId,
        "marker-symbol": "monument",
      },
    };
  });
  loadMap(stores);
}

function loadMap(stores) {
  map.on("load", () => {
    // Load an image from an external URL.
    map.loadImage("../shop.469x512.png", (error, image) => {
      if (error) throw error;

      // Add the image to the map style.
      map.addImage("cat", image);
    });

    // Add a data source containing one point feature.
    map.addSource("point", {
      type: "geojson",
      data: {
        type: "FeatureCollection",
        features: stores,
      },
    });

    // Add a layer to use the image to represent the data.
    map.addLayer({
      id: "points",
      type: "symbol",
      source: "point", // reference the data source
      layout: {
        "icon-image": "cat", // reference the image
        "icon-size": 0.05,
        "text-field": "{storeId}",
        "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
        "text-offset": [0, 0.9],
        "text-anchor": "top",
      },
    });
  });
}
getStores();
