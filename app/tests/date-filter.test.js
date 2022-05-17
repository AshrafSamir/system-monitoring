import comp from '../components/vue-components/table-filter';
import Vue from 'vue';

describe('TestFilterFuction', () => {
  let cmp;
  let vm;

  beforeEach(() => {
    cmp = Vue.extend(comp); // Create a copy of the original component
    vm = new cmp({
      data: {
        // Replace data value with this fake data
        startDate: '2022-01-11',
        endDate: '2022-01-14',
      },
      computed: {
        chartData() {
          return [{ date_ms: 1641772800000, performance: 0.2 },
            { date_ms: 1641859200000, performance: 0.33 },
            { date_ms: 1641945600000, performance: 0.83 },
            { date_ms: 1642032000000, performance: 0.31 },
            { date_ms: 1642118400000, performance: 0.65 },
            { date_ms: 1642204800000, performance: 0.88 },
            { date_ms: 1642291200000, performance: 0.9 }];
        },
      },
    }).$mount();
  });

  let output = [{ date_ms: 1641859200000, performance: 0.33 },
    { date_ms: 1641945600000, performance: 0.83 },
    { date_ms: 1642032000000, performance: 0.31 },
    { date_ms: 1642118400000, performance: 0.65 }];

  it('Response message =>', () => {
    expect(vm.computed.chartDataFromInput).toEqual([output]);
  });
});

// We can use api request instead of hardcoding the inputs

/*
    return axios.get(url).then((res) => res);
*/
