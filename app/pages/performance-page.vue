<template>
  <div class="c-dashboard">
    <div class="c-filters__container">
      [Search Component Goes Here]
    </div>
    <div class="c-dashboard__header">
      <performance-chart-component />
    </div>
  </div>
</template>

<script>
import PerformanceChartComponent from "../components/vue-components/performance-chart.vue";

export default {
  name: "AboutPageComponent",
  mounted() {
    this.$store.dispatch("fetchPerformance")
  },
  components: {
    PerformanceChartComponent,
  },
};
</script>
