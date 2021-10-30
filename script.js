const sample = [
  {
    language: "Rust",
    value: 78.9,
    color: "#000000",
  },
  {
    language: "Kotlin",
    value: 75.1,
    color: "#00a2ee",
  },
  {
    language: "Python",
    value: 68.0,
    color: "#fbcb39",
  },
  {
    language: "TypeScript",
    value: 67.0,
    color: "#007bc8",
  },
  {
    language: "Go",
    value: 65.6,
    color: "#65cedb",
  },
  {
    language: "Swift",
    value: 65.1,
    color: "#ff6e52",
  },
  {
    language: "JavaScript",
    value: 61.9,
    color: "#f9de3f",
  },
  {
    language: "C#",
    value: 60.4,
    color: "#5d2f8e",
  },
  {
    language: "F#",
    value: 59.6,
    color: "#008fc9",
  },
  {
    language: "Clojure",
    value: 59.6,
    color: "#507dca",
  },
];

const colors = [
  "#63b598",
  "#ce7d78",
  "#ea9e70",
  "#a48a9e",
  "#c6e1e8",
  "#648177",
  "#0d5ac1",
  "#f205e6",
  "#1c0365",
  "#14a9ad",
  "#4ca2f9",
  "#a4e43f",
  "#d298e2",
  "#6119d0",
  "#d2737d",
  "#c0a43c",
  "#f2510e",
  "#651be6",
  "#79806e",
  "#61da5e",
  "#cd2f00",
  "#9348af",
  "#01ac53",
  "#c5a4fb",
  "#996635",
  "#b11573",
  "#4bb473",
  "#75d89e",
  "#2f3f94",
  "#2f7b99",
  "#da967d",
  "#34891f",
  "#b0d87b",
  "#ca4751",
  "#7e50a8",
  "#c4d647",
  "#e0eeb8",
  "#11dec1",
  "#289812",
  "#566ca0",
  "#ffdbe1",
  "#2f1179",
  "#935b6d",
  "#916988",
  "#513d98",
  "#aead3a",
  "#9e6d71",
  "#4b5bdc",
  "#0cd36d",
  "#250662",
  "#cb5bea",
  "#228916",
  "#ac3e1b",
  "#df514a",
  "#539397",
  "#880977",
  "#f697c1",
  "#ba96ce",
  "#679c9d",
  "#c6c42c",
  "#5d2c52",
  "#48b41b",
  "#e1cf3b",
  "#5be4f0",
  "#57c4d8",
  "#a4d17a",
  "#225b8",
  "#be608b",
  "#96b00c",
  "#088baf",
  "#f158bf",
  "#e145ba",
  "#ee91e3",
  "#05d371",
  "#5426e0",
  "#4834d0",
  "#802234",
  "#6749e8",
  "#0971f0",
  "#8fb413",
  "#b2b4f0",
  "#c3c89d",
  "#c9a941",
  "#41d158",
  "#fb21a3",
  "#51aed9",
  "#5bb32d",
  "#807fb",
  "#21538e",
  "#89d534",
  "#d36647",
  "#7fb411",
  "#0023b8",
  "#3b8c2a",
  "#986b53",
  "#f50422",
  "#983f7a",
  "#ea24a3",
  "#79352c",
  "#521250",
  "#c79ed2",
  "#d6dd92",
  "#e33e52",
  "#b2be57",
  "#fa06ec",
  "#1bb699",
  "#6b2e5f",
  "#64820f",
  "#1c271",
  "#21538e",
  "#89d534",
  "#d36647",
  "#7fb411",
  "#0023b8",
  "#3b8c2a",
  "#986b53",
  "#f50422",
  "#983f7a",
  "#ea24a3",
  "#79352c",
  "#521250",
  "#c79ed2",
  "#d6dd92",
  "#e33e52",
  "#b2be57",
  "#fa06ec",
  "#1bb699",
  "#6b2e5f",
  "#64820f",
  "#1c271",
  "#9cb64a",
  "#996c48",
  "#9ab9b7",
  "#06e052",
  "#e3a481",
  "#0eb621",
  "#fc458e",
  "#b2db15",
  "#aa226d",
  "#792ed8",
  "#73872a",
  "#520d3a",
  "#cefcb8",
  "#a5b3d9",
  "#7d1d85",
  "#c4fd57",
  "#f1ae16",
  "#8fe22a",
  "#ef6e3c",
  "#243eeb",
  "#1dc18",
  "#dd93fd",
  "#3f8473",
  "#e7dbce",
  "#421f79",
  "#7a3d93",
  "#635f6d",
  "#93f2d7",
  "#9b5c2a",
  "#15b9ee",
  "#0f5997",
  "#409188",
  "#911e20",
  "#1350ce",
  "#10e5b1",
  "#fff4d7",
  "#cb2582",
  "#ce00be",
  "#32d5d6",
  "#17232",
  "#608572",
  "#c79bc2",
  "#00f87c",
  "#77772a",
  "#6995ba",
  "#fc6b57",
  "#f07815",
  "#8fd883",
  "#060e27",
  "#96e591",
  "#21d52e",
  "#d00043",
  "#b47162",
  "#1ec227",
  "#4f0f6f",
  "#1d1d58",
  "#947002",
  "#bde052",
  "#e08c56",
  "#28fcfd",
  "#bb09b",
  "#36486a",
  "#d02e29",
  "#1ae6db",
  "#3e464c",
  "#a84a8f",
  "#911e7e",
  "#3f16d9",
  "#0f525f",
  "#ac7c0a",
  "#b4c086",
  "#c9d730",
  "#30cc49",
  "#3d6751",
  "#fb4c03",
  "#640fc1",
  "#62c03e",
  "#d3493a",
  "#88aa0b",
  "#406df9",
  "#615af0",
  "#4be47",
  "#2a3434",
  "#4a543f",
  "#79bca0",
  "#a8b8d4",
  "#00efd4",
  "#7ad236",
  "#7260d8",
  "#1deaa7",
  "#06f43a",
  "#823c59",
  "#e3d94c",
  "#dc1c06",
  "#f53b2a",
  "#b46238",
  "#2dfff6",
  "#a82b89",
  "#1a8011",
  "#436a9f",
  "#1a806a",
  "#4cf09d",
  "#c188a2",
  "#67eb4b",
  "#b308d3",
  "#fc7e41",
  "#af3101",
  "#ff065",
  "#71b1f4",
  "#a2f8a5",
  "#e23dd0",
  "#d3486d",
  "#00f7f9",
  "#474893",
  "#3cec35",
  "#1c65cb",
  "#5d1d0c",
  "#2d7d2a",
  "#ff3420",
  "#5cdd87",
  "#a259a4",
  "#e4ac44",
  "#1bede6",
  "#8798a4",
  "#d7790f",
  "#b2c24f",
  "#de73c2",
  "#d70a9c",
  "#25b67",
  "#88e9b8",
  "#c2b0e2",
  "#86e98f",
  "#ae90e2",
  "#1a806b",
  "#436a9e",
  "#0ec0ff",
  "#f812b3",
  "#b17fc9",
  "#8d6c2f",
  "#d3277a",
  "#2ca1ae",
  "#9685eb",
  "#8a96c6",
  "#dba2e6",
  "#76fc1b",
  "#608fa4",
  "#20f6ba",
  "#07d7f6",
  "#dce77a",
  "#77ecca",
];

const svg = d3.select("svg");
const svgContainer = d3.select("#container");

const margin = 80;
const width = 1400 - 2 * margin;
const height = 600 - 2 * margin;

const chart = svg
  .append("g")
  .attr("transform", `translate(${margin}, ${margin})`);

AvgAgeByRegion();

// // vertical grid lines
// // const makeXLines = () => d3.axisBottom()
// //   .scale(xScale)

// // vertical grid lines
// // chart.append('g')
// //   .attr('class', 'grid')
// //   .attr('transform', `translate(0, ${height})`)
// //   .call(makeXLines()
// //     .tickSize(-height, 0, 0)
// //     .tickFormat('')
// //   )

("use strict");

const range = document.querySelector("input[type=range]");
const output = document.querySelector("output");
if (range.value == 1) {
  output.value = "Diabète";
} else {
  if (range.value == 2) {
    output.value = "Asthme";
  } else {
    output.value = "Tension";
  }
}
range.oninput = function () {
  if (range.value == 1) {
    output.value = "Diabète";
  } else {
    if (range.value == 2) {
      output.value = "Asthme";
    } else {
      output.value = "Tension";
    }
  }
};

$('input[type="checkbox"]').on("change", function () {
  $('input[name="' + this.name + '"]')
    .not(this)
    .prop("checked", false);
});

function AvgAgeByRegion() {
  d3.csv("MNT.csv").then(function (data) {
    // let sumH = 0;
    // let sumF = 0;
    // let sumAH = 0;
    // let sumAF = 0;
    // let avrgH = 0;
    // let avrgF = 0;
    let regionsDup1D = [];
    let regions2D = [];

    // if (d["1.sexe"] == "homme") {
    //     sumH = sumH + 1;
    //     sumAH = sumAH + parseInt(d["2.Quel âge avez-vous ?"]);
    //   } else {
    //     sumF = sumF + 1;
    //     sumAF = sumAF + parseInt(d["2.Quel âge avez-vous ?"]);

    data.forEach(function (d) {
      regionsDup1D.push(d["2.wilaya"]);
    });
    let regions1D = Array.from(new Set(regionsDup1D));
    regions1D.forEach(function (w) {
      regions2D.push([
        w,
        0,
        0,
        0,
        colors[Math.floor(Math.random() * colors.length)],
      ]);
    });

    regions2D.forEach(function (w) {
      data.forEach(function (d) {
        if (d["2.wilaya"] == w[0]) {
          w[1] = w[1] + 1;
          w[2] = w[2] + parseInt(d["2.Quel âge avez-vous ?"]);
        }
        w[3] = (w[2] / w[1]).toFixed(2);
      });
    });

    const keys = ["wilaya", "sum", "sumAge", "avrg", "color"];
    const values = regions2D;
    const objects = values.map((array) => {
      const object = {};

      keys.forEach((key, i) => (object[key] = array[i]));

      return object;
    });
    //JSON.stringify(objects);
    console.log(objects);

    const xScale = d3
      .scaleBand()
      .range([0, width])
      .domain(objects.map((obj) => obj.wilaya))
      .padding(0.4);

    const yScale = d3.scaleLinear().range([height, 0]).domain([0, 50]);

    const makeYLines = () => d3.axisLeft().scale(yScale);

    chart
      .append("g")
      .attr("transform", `translate(0, ${height})`)
      .call(d3.axisBottom(xScale));

    chart.append("g").call(d3.axisLeft(yScale));

    chart
      .append("g")
      .attr("class", "grid")
      .call(makeYLines().tickSize(-width, 0, 0).tickFormat(""));

    const barGroups = chart.selectAll().data(objects).enter().append("g");

    barGroups
      .append("rect")
      .attr("class", "bar")
      .attr("x", (g) => xScale(g.wilaya))
      .attr("y", (g) => yScale(g.avrg))
      .style("fill", (g) => g.color)
      .attr("height", (g) => height - yScale(g.avrg))
      .attr("width", xScale.bandwidth())
      .on("mouseenter", function (actual, i) {
        d3.selectAll(".avrg").attr("opacity", 0);

        d3.select(this)
          .transition()
          .duration(300)
          .attr("opacity", 0.6)
          .attr("x", (a) => xScale(a.wilaya) - 5)
          .attr("width", xScale.bandwidth() + 10);

        const y = yScale(actual.avrg);

        line = chart
          .append("line")
          .attr("id", "limit")
          .attr("x1", 0)
          .attr("y1", y)
          .attr("x2", width)
          .attr("y2", y);

        barGroups
          .append("text")
          .attr("class", "divergence")
          .attr("x", (a) => xScale(a.wilaya) + xScale.bandwidth() / 2)
          .attr("y", (a) => yScale(a.avrg) + 30)
          .attr("fill", "white")
          .attr("text-anchor", "middle")
          .text((a, idx) => {
            const divergence = (a.avrg - actual.avrg).toFixed(2);

            let text = "";
            if (divergence > 0) text += "+";
            text += `${divergence}`;

            return idx !== i ? text : "";
          });
      })
      .on("mouseleave", function () {
        d3.selectAll(".avrg").attr("opacity", 1);

        d3.select(this)
          .transition()
          .duration(300)
          .attr("opacity", 1)
          .attr("x", (a) => xScale(a.wilaya))
          .attr("width", xScale.bandwidth());

        chart.selectAll("#limit").remove();
        chart.selectAll(".divergence").remove();
      });

    barGroups
      .append("text")
      .attr("class", "avrg")
      .attr("x", (a) => xScale(a.wilaya) + xScale.bandwidth() / 2)
      .attr("y", (a) => yScale(a.avrg) + 30)
      .attr("text-anchor", "middle")
      .text((a) => `${a.avrg}`);

    svg
      .append("text")
      .attr("class", "label")
      .attr("x", -(height / 2) - margin)
      .attr("y", margin / 2.4)
      .attr("transform", "rotate(-90)")
      .attr("text-anchor", "middle")
      .text("La moyenne d'Âge ");

    svg
      .append("text")
      .attr("class", "label")
      .attr("x", width / 2 + margin)
      .attr("y", height + margin * 1.7)
      .attr("text-anchor", "middle")
      .text("Les wilayas");

    svg
      .append("text")
      .attr("class", "title")
      .attr("x", width / 2 + margin)
      .attr("y", 40)
      .attr("text-anchor", "middle")
      .text("Les moyennes d'âge par wilaya");

    svg
      .append("text")
      .attr("class", "source")
      .attr("x", width - margin / 2)
      .attr("y", height + margin * 1.7)
      .attr("text-anchor", "start")
      .text("Source: MNT, 2020");
  });
}

function valid() {
  AvgAgeByRegion();
}
