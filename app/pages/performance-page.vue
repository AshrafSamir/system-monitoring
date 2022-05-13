<template>
  <div class="c-dashboard">
    <div class="c-filters__container">
      <table-filter-component />
    </div>
    <div class="c-dashboard__header">
      <performance-chart-component />
    </div>
  </div>
</template>

<script>
import PerformanceChartComponent from "../components/vue-components/performance-chart.vue";
import TableFilterComponent from "../components/vue-components/table-filter.vue";

export default {
  name: "AboutPageComponent",
  components: {
    PerformanceChartComponent,
    TableFilterComponent
  },
};
</script>
