import Vue from "vue";
import Vuex from "vuex";
import { loadModules } from "esri-loader";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    censusData: "",
  },
  getters: {
    getCensusData(state) {
      return state.censusData;
    },
  },
  mutations: {
    setCensusData(state, censusData) {
      state.censusData = censusData;
    },
  },
  actions: {
    createMap: function(context) {
      loadModules(
        [
          "esri/layers/FeatureLayer",
          "esri/Map",
          "esri/views/MapView",
          "esri/tasks/support/Query",
          "esri/Graphic",
        ]
        // { url: "https://js.arcgis.com/4.4/" }
      ).then(([FeatureLayer, Map, MapView, Query, Graphic]) => {
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

        // wait for the map view to finish loading
        view.then(function() {
          map.add(fl); // adds the layer to the map
          view.on("click", (e) => {
            let query = fl.createQuery();
            query.geometry = view.toMap(e);
            query.returnGeometry = true;
            // query.outFields = ["*"];
            query.outFields = [
              "POP2000",
              "POP2007",
              "STATE_NAME",
              "MED_AGE",
              "AVE_FAM_SZ",
            ];
            fl.queryFeatures(query).then(function(response) {
              const percentChange = Math.round(
                ((response.features[0].attributes.POP2007 -
                  response.features[0].attributes.POP2000) /
                  response.features[0].attributes.POP2000) *
                  100
              );
              const censusData = {
                state_name: response.features[0].attributes.STATE_NAME,
                pop_2007: response.features[0].attributes.POP2007,
                per_increase_2000: percentChange,
                med_age: response.features[0].attributes.MED_AGE,
                avg_fam_size: response.features[0].attributes.AVE_FAM_SZ,
              };
              context.commit("setCensusData", censusData);
            });
          });
        });
      });
    },
  },
  modules: {},
});
