<template>
  <div class="c-dashboard">
    <div class="c-filters__container">
      <date-filter-component @response="(msg) => newChartData = msg"/>
    </div>
    <div class="c-dashboard__header">
      <performance-chart-component :newData="newChartData"/>
    </div>
  </div>
</template>

<script>
import PerformanceChartComponent from "../components/vue-components/performance-chart.vue";
import DateFilterComponent from '../components/vue-components/date-filter.vue';

export default {
  name: "AboutPageComponent",
  data() {
    return {
      newChartData: []  
    }
  },
  mounted() {
    this.$store.dispatch("fetchPerformance")
  },
  components: {
    PerformanceChartComponent,
    DateFilterComponent,
  },
};
</script>
