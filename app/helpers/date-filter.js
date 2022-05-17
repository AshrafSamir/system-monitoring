export default function chartDataFromInput(startDate, endDate, chartData) {
  if (!startDate || !endDate) {
    return chartData;
  }

  let startMilliseconds = new Date(startDate).getTime();
  let endMilliseconds = new Date(endDate).getTime();

  const newChartData = chartData.filter(item => {
    return (item.date_ms >= startMilliseconds) && (item.date_ms <= endMilliseconds);
  });

  return newChartData;
}
