import filterFun from '../helpers/date-filter';

let output = [{ date_ms: 1641859200000, performance: 0.33 },
  { date_ms: 1641945600000, performance: 0.83 },
  { date_ms: 1642032000000, performance: 0.31 },
  { date_ms: 1642118400000, performance: 0.65 }];

const startDate = '2022-01-11';
const endDate = '2022-01-14';
const chartData = [{ date_ms: 1641772800000, performance: 0.2 },
  { date_ms: 1641859200000, performance: 0.33 },
  { date_ms: 1641945600000, performance: 0.83 },
  { date_ms: 1642032000000, performance: 0.31 },
  { date_ms: 1642118400000, performance: 0.65 },
  { date_ms: 1642204800000, performance: 0.88 },
  { date_ms: 1642291200000, performance: 0.9 }];

// eslint-disable-next-line no-undef
test('Response message =>', () => {
  expect(filterFun(startDate, endDate, chartData)).toEqual(output);
});
