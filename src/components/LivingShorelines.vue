<template>
  <div>
    <h3>Living Shorelines Example</h3>
    <p>Click anywhere on the map to query some basic census data.</p>

    <div v-if="censusData" class="census-wrapper">
      <h4>Census Data:</h4>
      <div>State Name: {{ censusData.state_name }}</div>
      <div>2007 Pop: {{ censusData.pop_2007 }}</div>
      <div>2007 Increase over 2000: {{ censusData.per_increase_2000 }}%</div>
      <div>Median Age: {{ censusData.med_age }}</div>
      <div>Average Family Size: {{ censusData.avg_fam_size }}</div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    censusData() {
      return this.$store.getters.getCensusData;
    },
  },
};
</script>

<style>
.census-wrapper {
  margin-left: 20px;
  text-align: left;
}
</style>
