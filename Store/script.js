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

console.log("Solution 1 - Q1:");
console.log("Series:", seriesQ1);
console.log("Labels:", labelsQ1);

// Solution 1 - Q2
const weeksQ2 = "Weeks: " + labelsQ1.join(", ");
console.log("Solution 1 - Q2:");
console.log(weeksQ2);

// Solution 1 - Q3
const ownerDataQ3 = [
  { week: 1, visits: 125, sex: 'women' },
  { week: 1, visits: 200, sex: 'men' },
  { week: 2, visits: 150, sex: 'men' },
  // Add more data entries as needed
];

const dataBySexQ3 = ownerDataQ3.reduce((acc, entry) => {
  const { week, visits, sex } = entry;
  
  if (!acc[sex]) {
    acc[sex] = { name: sex, data: [] };
  }
  
  acc[sex].data.push(visits);
  
  if (!acc.labels.includes(`W${week}`)) {
    acc.labels.push(`W${week}`);
  }
  
  return acc;
}, { labels: [] });

const seriesQ3 = Object.values(dataBySexQ3);
const labelsQ3 = dataBySexQ3.labels;

console.log("Solution 1 - Q3:");
console.log("Series:", seriesQ3);
console.log("Labels:", labelsQ3);

// Create the bar chart using Highcharts
Highcharts.chart('chart', {
  chart: {
    type: 'bar'
  },
  title: {
    text: 'Bar Chart'
  },
  xAxis: {
    categories: labelsQ1
  },
  yAxis: {
    title: {
      text: 'Value'
    }
  },
  series: seriesQ1
});