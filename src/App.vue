<template>
  <div id="app">
    <Header />
    <div class="map-sidebar-wrapper">
      <EsriMap class="esri-map-wrapper" />
      <Sidebar class="sidebar-wrapper" />
    </div>
  </div>
</template>

<script>
// bring in the create map function from the esriapi
import { createMap } from "./esriapi.js";
import EsriMap from "./components/EsriMap.vue";
import Header from "./components/Header.vue";
import Sidebar from "./components/Sidebar.vue";

export default {
  name: "App",
  components: {
    EsriMap,
    Header,
    Sidebar,
  },
  mounted() {
    this.$store.dispatch("createMap");
    // createMap();
  },
};
</script>

<style>
@import url("https://js.arcgis.com/4.4/esri/themes/light/main.css");
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
.map-sidebar-wrapper {
  position: absolute;
  height: calc(100% - 61px);
  display: flex;
  width: 100%;
}
.esri-map-wrapper {
  width: 70%;
}
.sidebar-wrapper {
  width: 30%;
}
</style>
