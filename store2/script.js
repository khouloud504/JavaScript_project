// Solution 1 - Q1
const ownerDataQ1 = [
  { week: 1, women: 125, men: 265, children: 50 },
  { week: 2, women: 100, men: 250, children: 55 },
  // Add more data entries as needed
];

const seriesQ1 = [
  { name: "women", data: [] },
  { name: "men", data: [] },
  { name: "children", data: [] },
];
const labelsQ1 = [];

ownerDataQ1.forEach((entry) => {
  seriesQ1[0].data.push(entry.women);
  seriesQ1[1].data.push(entry.men);
  seriesQ1[2].data.push(entry.children);
  labelsQ1.push("W" + entry.week);
});

// Create the chart using Highcharts library
Highcharts.chart('chart', {
  chart: {
    type: 'bar'
  },
  title: {
    text: 'Sales Data by Week'
  },
  xAxis: {
    categories: labelsQ1,
    title: {
      text: 'Week'
    }
  },
  yAxis: {
    title: {
      text: 'Sales'
    }
  },
  series: seriesQ1
});