// Solution 2 - Q1
const ownerDataQ1 = [
  { week: 1, women: 125, men: 265, children: 50 },
  { week: 2, women: 100, men: 250, children: 55 },
  // Add more data entries as needed
];

const seriesQ1 = Object.entries(ownerDataQ1[0]).map(([key, value]) => {
  if (key !== "week") {
    return { name: key, data: ownerDataQ1.map(entry => entry[key]) };
  }
});

const labelsQ1 = ownerDataQ1.map(entry => "W" + entry.week);

console.log("Solution 2 - Q1:");
console.log("Series:", seriesQ1);
console.log("Labels:", labelsQ1);

// Solution 2 - Q2
const weeksQ2 = "Weeks: " + labelsQ1.join(", ");
console.log("Solution 2 - Q2:");
console.log(weeksQ2);

// Solution 2 - Q3
const ownerDataQ3 = [
  { week: 1, visits: 125, sex: 'women' },
  { week: 1, visits: 200, sex: 'men' },
  { week: 2, visits: 150, sex: 'men' },
  // Add more data entries as needed
];

const dataBySexQ3 = ownerDataQ3.reduce((acc, entry) => {
  const { week, visits, sex } = entry;
  
  if (!acc.sexMap.has(sex)) {
    acc.sexMap.set(sex, []);
  }
  
  acc.sexMap.get(sex).push(visits);
  acc.weekSet.add(week);
  
  return acc;
}, { sexMap: new Map(), weekSet: new Set() });

const seriesQ3 = Array.from(dataBySexQ3.sexMap, ([name, data]) => ({ name, data }));
const labelsQ3 = Array.from(dataBySexQ3.weekSet).map(week => `W${week}`);

console.log("Solution 2 - Q3:");
console.log("Series:", seriesQ3);
console.log("Labels:", labelsQ3);