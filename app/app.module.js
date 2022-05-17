import Vue from 'vue';
import 'ngVue';
import 'ngVue/build/plugins.js';
import store from './store/store.js';

import PerformancePageComponent from './pages/performance-page.vue';
import PerformanceChartComponent from './components/vue-components/performance-chart.vue';
import DateFilterComponent from './components/vue-components/date-filter.vue';
import TableFilterComponent from './components/vue-components/table-filter.vue';

angular.module('appModule', [
  'ui.router',
  'ngVue',
  'ngVue.plugins',
])
  .config(($ngVueProvider) => {
    $ngVueProvider.setRootVueInstanceProps({
      store: store,
    });
  });

angular.module('appModule').directive('vPerformancePage', (createVueComponent) => {
  return createVueComponent(Vue.component('performancePageComponent', PerformancePageComponent));
});

angular.module('appModule').directive('vPerformanceChart', (createVueComponent) => {
  return createVueComponent(Vue.component('performanceChartComponent', PerformanceChartComponent));
});

angular.module('appModule').directive('vDateFilter', (createVueComponent) => {
  return createVueComponent(Vue.component('dateFilterComponent', DateFilterComponent));
});

angular.module('appModule').directive('vTableFilter', (createVueComponent) => {
  return createVueComponent(Vue.component('TableFilterComponent', TableFilterComponent));
});
