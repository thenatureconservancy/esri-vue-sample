// import { codePointAt } from "core-js/fn/string";
import { loadModules } from "esri-loader";
// bring the store in
import store from "./store";

const app = {};

export const createMap = function() {
  loadModules(
    ["esri/layers/FeatureLayer", "esri/Map", "esri/views/MapView"]
    // { url: "https://js.arcgis.com/4.4/" }
  ).then(([FeatureLayer, Map, MapView]) => {
    const map = new Map({
      basemap: "streets", // Basemap layer service
    });
    const view = new MapView({
      map: map,
      center: [-97.805, 39.027], // Longitude, latitude
      zoom: 4, // Zoom level
      container: "map", // Div element
    });
    // points to the states layer in a service storing U.S. census data
    var fl = new FeatureLayer({
      url:
        "https://sampleserver6.arcgisonline.com/arcgis/rest/services/Census/MapServer/3",
    });
    map.add(fl); // adds the layer to the map
  });
};
