<template>
  <div class="header-wrapper">
    <h1 class="header-title">ESRI - Vue 2x Example App</h1>
    <div style="margin-left:auto;">
      <router-link to="/">Home</router-link>
      <router-link to="/living-shorelines">Living Shorelines</router-link>
      <router-link to="/community-planner">Community Planner</router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.header-wrapper {
  display: flex;
  text-align: left;
  width: 100%;
  height: 60px;
  border-bottom: 1px solid #ccc;
  align-items: center;
  color: #3e6080 !important;
}
.header-title {
  margin-left: 20px;
}
.header-wrapper a {
  font-size: 16px;
  font-weight: bold;
  text-decoration: none;
  margin-right: 10px;
  color: #3e6080 !important;
}
.router-link-exact-active {
  text-decoration: underline !important;
}
</style>
