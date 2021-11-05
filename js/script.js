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
// colors[Math.floor(Math.random() * colors.length)

const svg = d3.select("svg");
const svgContainer = d3.select("#container");

const margin = 80;
var margins = { top: 20, right: 20, bottom: 30, left: 40 },
  width2 = 1400 - margins.left - margins.right,
  height2 = 600 - margins.top - margins.bottom;
const width = 1400 - 2 * margin;
const height = 600 - 2 * margin;

Draw("NbrResp", "Region");

("use strict");

const range = document.querySelector("input[type=range]");
const output = document.querySelector("output");
if (range.value == 1) {
  output.value = "Le diabète";
} else {
  if (range.value == 2) {
    output.value = "L'asthme";
  } else {
    output.value = "La tension (HTA)";
  }
}
range.oninput = function () {
  if (range.value == 1) {
    output.value = "Le diabète";
  } else {
    if (range.value == 2) {
      output.value = "L'asthme";
    } else {
      output.value = "La tension (HTA)";
    }
  }
};

$('input[type="checkbox"]').on("change", function () {
  $('input[name="' + this.name + '"]')
    .not(this)
    .prop("checked", false);
});

function Draw(what, by, grouped) {
  svg.selectAll("*").remove();
  const chart = svg
    .append("g")
    .attr("transform", `translate(${margin}, ${margin})`);

  if (!grouped) {
    if (what == "AvgAge") {
      if (by == "Region") {
        d3.csv("MNT.csv").then(function (data) {
          let regionsDup1D = [];
          let regions2D = [];
          let maxheight = 0;

          data.forEach(function (d) {
            regionsDup1D.push(d["2.wilaya"]);
          });
          let regions1D = Array.from(new Set(regionsDup1D));
          regions1D.forEach(function (w) {
            regions2D.push([w, 0, 0, 0, "#4ea8de"]);
          });

          regions2D.forEach(function (w) {
            data.forEach(function (d) {
              if (d["2.wilaya"] == w[0]) {
                w[1] = w[1] + 1;
                w[2] = w[2] + parseInt(d["2.Quel âge avez-vous ?"]);
              }
              w[3] = (w[2] / w[1]).toFixed(1);
            });
            if (w[3] > maxheight) {
              maxheight = Math.ceil(w[3] / 5) * 5;
            }
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

          const yScale = d3
            .scaleLinear()
            .range([height, 0])
            .domain([0, maxheight]);

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
                .attr("y", (a) => yScale(a.avrg) - 10)
                .attr("fill", "white")
                .attr("text-anchor", "middle")
                .text((a, idx) => {
                  const divergence = (a.avrg - actual.avrg).toFixed(1);

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
            .attr("y", (a) => yScale(a.avrg) - 10)
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
      } else {
        if (by == "Sexe") {
          d3.csv("MNT.csv").then(function (data) {
            let sexesDup1D = [];
            let sexes2D = [];
            let maxheight = 0;

            data.forEach(function (d) {
              sexesDup1D.push(d["1.sexe"]);
            });
            let sexes1D = Array.from(new Set(sexesDup1D));
            sexes1D.forEach(function (s) {
              sexes2D.push([s, 0, 0, 0, "#4ea8de"]);
            });

            sexes2D.forEach(function (s) {
              data.forEach(function (d) {
                if (d["1.sexe"] == s[0]) {
                  s[1] = s[1] + 1;
                  s[2] = s[2] + parseInt(d["2.Quel âge avez-vous ?"]);
                }
                s[3] = (s[2] / s[1]).toFixed(1);
              });
              if (s[3] > maxheight) {
                maxheight = Math.ceil(s[3] / 2) * 2;
              }
            });

            const keys = ["sexe", "sum", "sumAge", "avrg", "color"];
            const values = sexes2D;
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
              .domain(objects.map((obj) => obj.sexe))
              .padding(0.4);

            const yScale = d3
              .scaleLinear()
              .range([height, 0])
              .domain([0, maxheight]);

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

            const barGroups = chart
              .selectAll()
              .data(objects)
              .enter()
              .append("g");

            barGroups
              .append("rect")
              .attr("class", "bar")
              .attr("x", (g) => xScale(g.sexe))
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
                  .attr("x", (a) => xScale(a.sexe) - 5)
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
                  .attr("x", (a) => xScale(a.sexe) + xScale.bandwidth() / 2)
                  .attr("y", (a) => yScale(a.avrg) - 10)
                  .attr("fill", "white")
                  .attr("text-anchor", "middle")
                  .text((a, idx) => {
                    const divergence = (a.avrg - actual.avrg).toFixed(1);

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
                  .attr("x", (a) => xScale(a.sexe))
                  .attr("width", xScale.bandwidth());

                chart.selectAll("#limit").remove();
                chart.selectAll(".divergence").remove();
              });

            barGroups
              .append("text")
              .attr("class", "avrg")
              .attr("x", (a) => xScale(a.sexe) + xScale.bandwidth() / 2)
              .attr("y", (a) => yScale(a.avrg) - 10)
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
              .text("Sexe");

            svg
              .append("text")
              .attr("class", "title")
              .attr("x", width / 2 + margin)
              .attr("y", 40)
              .attr("text-anchor", "middle")
              .text("Les moyennes d'âge par sexe");

            svg
              .append("text")
              .attr("class", "source")
              .attr("x", width - margin / 2)
              .attr("y", height + margin * 1.7)
              .attr("text-anchor", "start")
              .text("Source: MNT, 2020");
          });
        } else {
          if (by == "NivEtud") {
            d3.csv("MNT.csv").then(function (data) {
              let nivsDup1D = [];
              let nivs2D = [];
              let maxheight = 0;

              data.forEach(function (d) {
                nivsDup1D.push(d["3.Quel est votre niveau d'étude"]);
              });
              let nivs1D = Array.from(new Set(nivsDup1D));
              nivs1D.forEach(function (n) {
                nivs2D.push([n, 0, 0, 0, "#4ea8de"]);
              });

              nivs2D.forEach(function (n) {
                data.forEach(function (d) {
                  if (d["3.Quel est votre niveau d'étude"] == n[0]) {
                    n[1] = n[1] + 1;
                    n[2] = n[2] + parseInt(d["2.Quel âge avez-vous ?"]);
                  }
                  n[3] = (n[2] / n[1]).toFixed(1);
                });
                if (n[3] > maxheight) {
                  maxheight = Math.ceil(n[3] / 5) * 5;
                }
              });

              const keys = ["niv", "sum", "sumAge", "avrg", "color"];
              const values = nivs2D;
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
                .domain(objects.map((obj) => obj.niv))
                .padding(0.4);

              const yScale = d3
                .scaleLinear()
                .range([height, 0])
                .domain([0, maxheight]);

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

              const barGroups = chart
                .selectAll()
                .data(objects)
                .enter()
                .append("g");

              barGroups
                .append("rect")
                .attr("class", "bar")
                .attr("x", (g) => xScale(g.niv))
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
                    .attr("x", (a) => xScale(a.niv) - 5)
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
                    .attr("x", (a) => xScale(a.niv) + xScale.bandwidth() / 2)
                    .attr("y", (a) => yScale(a.avrg) - 10)
                    .attr("fill", "white")
                    .attr("text-anchor", "middle")
                    .text((a, idx) => {
                      const divergence = (a.avrg - actual.avrg).toFixed(1);

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
                    .attr("x", (a) => xScale(a.niv))
                    .attr("width", xScale.bandwidth());

                  chart.selectAll("#limit").remove();
                  chart.selectAll(".divergence").remove();
                });

              barGroups
                .append("text")
                .attr("class", "avrg")
                .attr("x", (a) => xScale(a.niv) + xScale.bandwidth() / 2)
                .attr("y", (a) => yScale(a.avrg) - 10)
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
                .text("les niveaux d'études");

              svg
                .append("text")
                .attr("class", "title")
                .attr("x", width / 2 + margin)
                .attr("y", 40)
                .attr("text-anchor", "middle")
                .text("Les moyennes d'âge par niveaux d'études");

              svg
                .append("text")
                .attr("class", "source")
                .attr("x", width - margin / 2)
                .attr("y", height + margin * 1.7)
                .attr("text-anchor", "start")
                .text("Source: MNT, 2020");
            });
          } else {
            if (by == "Activity") {
              d3.csv("MNT.csv").then(function (data) {
                let actsDup1D = [];
                let acts2D = [];
                let maxheight = 0;

                data.forEach(function (d) {
                  actsDup1D.push(
                    d["4.Quelles est votre activité  professionnelle"]
                  );
                });
                let acts1D = Array.from(new Set(actsDup1D));
                acts1D.forEach(function (a) {
                  acts2D.push([a, 0, 0, 0, "#4ea8de"]);
                });

                acts2D.forEach(function (a) {
                  data.forEach(function (d) {
                    if (
                      d["4.Quelles est votre activité  professionnelle"] == a[0]
                    ) {
                      a[1] = a[1] + 1;
                      a[2] = a[2] + parseInt(d["2.Quel âge avez-vous ?"]);
                    }
                    a[3] = (a[2] / a[1]).toFixed(1);
                  });
                  if (a[3] > maxheight) {
                    maxheight = Math.ceil(a[3] / 5) * 5;
                  }
                });

                const keys = ["act", "sum", "sumAge", "avrg", "color"];
                const values = acts2D;
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
                  .domain(objects.map((obj) => obj["act"]))
                  .padding(0.4);

                const yScale = d3
                  .scaleLinear()
                  .range([height, 0])
                  .domain([0, maxheight]);

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

                const barGroups = chart
                  .selectAll()
                  .data(objects)
                  .enter()
                  .append("g");

                barGroups
                  .append("rect")
                  .attr("class", "bar")
                  .attr("x", (g) => xScale(g.act))
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
                      .attr("x", (a) => xScale(a.act) - 5)
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
                      .attr("x", (a) => xScale(a.act) + xScale.bandwidth() / 2)
                      .attr("y", (a) => yScale(a.avrg) - 10)
                      .attr("fill", "white")
                      .attr("text-anchor", "middle")
                      .text((a, idx) => {
                        const divergence = (a.avrg - actual.avrg).toFixed(1);

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
                      .attr("x", (a) => xScale(a.act))
                      .attr("width", xScale.bandwidth());

                    chart.selectAll("#limit").remove();
                    chart.selectAll(".divergence").remove();
                  });

                barGroups
                  .append("text")
                  .attr("class", "avrg")
                  .attr("x", (a) => xScale(a.act) + xScale.bandwidth() / 2)
                  .attr("y", (a) => yScale(a.avrg) - 10)
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
                  .text("Activité professionnelle");

                svg
                  .append("text")
                  .attr("class", "title")
                  .attr("x", width / 2 + margin)
                  .attr("y", 40)
                  .attr("text-anchor", "middle")
                  .text("Les moyennes d'âge par activité profesionnelle");

                svg
                  .append("text")
                  .attr("class", "source")
                  .attr("x", width - margin / 2)
                  .attr("y", height + margin * 1.7)
                  .attr("text-anchor", "start")
                  .text("Source: MNT, 2020");
              });
            }
          }
        }
      }
    }

    if (what == "NbrResp") {
      if (by == "Region") {
        d3.csv("MNT.csv").then(function (data) {
          let regionsDup1D = [];
          let regions2D = [];
          let maxheight = 0;

          data.forEach(function (d) {
            regionsDup1D.push(d["2.wilaya"]);
          });
          let regions1D = Array.from(new Set(regionsDup1D));
          regions1D.forEach(function (w) {
            regions2D.push([w, 0, "#4ea8de"]);
          });

          regions2D.forEach(function (w) {
            data.forEach(function (d) {
              if (d["2.wilaya"] == w[0]) {
                w[1] = w[1] + 1;
              }
            });
            if (w[1] > maxheight) {
              maxheight = Math.ceil(w[1] / 5) * 5;
            }
          });

          const keys = ["wilaya", "sum", "color"];
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

          const yScale = d3
            .scaleLinear()
            .range([height, 0])
            .domain([0, maxheight]);

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
            .attr("y", (g) => yScale(g.sum))
            .style("fill", (g) => g.color)
            .attr("height", (g) => height - yScale(g.sum))
            .attr("width", xScale.bandwidth())
            .on("mouseenter", function (actual, i) {
              d3.selectAll(".sum").attr("opacity", 0);

              d3.select(this)
                .transition()
                .duration(300)
                .attr("opacity", 0.6)
                .attr("x", (a) => xScale(a.wilaya) - 5)
                .attr("width", xScale.bandwidth() + 10);

              const y = yScale(actual.sum);

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
                .attr("y", (a) => yScale(a.sum) - 10)
                .attr("fill", "white")
                .attr("text-anchor", "middle")
                .text((a, idx) => {
                  const divergence = (a.sum - actual.sum).toFixed(1);

                  let text = "";
                  if (divergence > 0) text += "+";
                  text += `${divergence}`;

                  return idx !== i ? text : "";
                });
            })
            .on("mouseleave", function () {
              d3.selectAll(".sum").attr("opacity", 1);

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
            .attr("class", "sum")
            .attr("x", (a) => xScale(a.wilaya) + xScale.bandwidth() / 2)
            .attr("y", (a) => yScale(a.sum) - 10)
            .attr("text-anchor", "middle")
            .text((a) => `${a.sum}`);

          svg
            .append("text")
            .attr("class", "label")
            .attr("x", -(height / 2) - margin)
            .attr("y", margin / 2.4)
            .attr("transform", "rotate(-90)")
            .attr("text-anchor", "middle")
            .text("Le nombre de réponse ");

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
            .text("Le nombre de résponse par wilaya");

          svg
            .append("text")
            .attr("class", "source")
            .attr("x", width - margin / 2)
            .attr("y", height + margin * 1.7)
            .attr("text-anchor", "start")
            .text("Source: MNT, 2020");
        });
      } else {
        if (by == "Sexe") {
          d3.csv("MNT.csv").then(function (data) {
            let sexesDup1D = [];
            let sexes2D = [];
            let maxheight = 0;

            data.forEach(function (d) {
              sexesDup1D.push(d["1.sexe"]);
            });
            let sexes1D = Array.from(new Set(sexesDup1D));
            sexes1D.forEach(function (s) {
              sexes2D.push([s, 0, "#4ea8de"]);
            });

            sexes2D.forEach(function (s) {
              data.forEach(function (d) {
                if (d["1.sexe"] == s[0]) {
                  s[1] = s[1] + 1;
                }
              });
              if (s[1] > maxheight) {
                maxheight = Math.ceil(s[1] / 5) * 5;
              }
            });

            const keys = ["sexe", "sum", "color"];
            const values = sexes2D;
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
              .domain(objects.map((obj) => obj.sexe))
              .padding(0.4);

            const yScale = d3
              .scaleLinear()
              .range([height, 0])
              .domain([0, maxheight]);

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

            const barGroups = chart
              .selectAll()
              .data(objects)
              .enter()
              .append("g");

            barGroups
              .append("rect")
              .attr("class", "bar")
              .attr("x", (g) => xScale(g.sexe))
              .attr("y", (g) => yScale(g.sum))
              .style("fill", (g) => g.color)
              .attr("height", (g) => height - yScale(g.sum))
              .attr("width", xScale.bandwidth())
              .on("mouseenter", function (actual, i) {
                d3.selectAll(".sum").attr("opacity", 0);

                d3.select(this)
                  .transition()
                  .duration(300)
                  .attr("opacity", 0.6)
                  .attr("x", (a) => xScale(a.sexe) - 5)
                  .attr("width", xScale.bandwidth() + 10);

                const y = yScale(actual.sum);

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
                  .attr("x", (a) => xScale(a.sexe) + xScale.bandwidth() / 2)
                  .attr("y", (a) => yScale(a.sum) - 10)
                  .attr("fill", "white")
                  .attr("text-anchor", "middle")
                  .text((a, idx) => {
                    const divergence = (a.sum - actual.sum).toFixed(1);

                    let text = "";
                    if (divergence > 0) text += "+";
                    text += `${divergence}`;

                    return idx !== i ? text : "";
                  });
              })
              .on("mouseleave", function () {
                d3.selectAll(".sum").attr("opacity", 1);

                d3.select(this)
                  .transition()
                  .duration(300)
                  .attr("opacity", 1)
                  .attr("x", (a) => xScale(a.sexe))
                  .attr("width", xScale.bandwidth());

                chart.selectAll("#limit").remove();
                chart.selectAll(".divergence").remove();
              });

            barGroups
              .append("text")
              .attr("class", "sum")
              .attr("x", (a) => xScale(a.sexe) + xScale.bandwidth() / 2)
              .attr("y", (a) => yScale(a.sum) - 10)
              .attr("text-anchor", "middle")
              .text((a) => `${a.sum}`);

            svg
              .append("text")
              .attr("class", "label")
              .attr("x", -(height / 2) - margin)
              .attr("y", margin / 2.4)
              .attr("transform", "rotate(-90)")
              .attr("text-anchor", "middle")
              .text("Le nombre de réponse ");

            svg
              .append("text")
              .attr("class", "label")
              .attr("x", width / 2 + margin)
              .attr("y", height + margin * 1.7)
              .attr("text-anchor", "middle")
              .text("Sexe");

            svg
              .append("text")
              .attr("class", "title")
              .attr("x", width / 2 + margin)
              .attr("y", 40)
              .attr("text-anchor", "middle")
              .text("Le nombre de réponse par sexe");

            svg
              .append("text")
              .attr("class", "source")
              .attr("x", width - margin / 2)
              .attr("y", height + margin * 1.7)
              .attr("text-anchor", "start")
              .text("Source: MNT, 2020");
          });
        } else {
          if (by == "NivEtud") {
            d3.csv("MNT.csv").then(function (data) {
              let nivsDup1D = [];
              let nivs2D = [];
              let maxheight = 0;

              data.forEach(function (d) {
                nivsDup1D.push(d["3.Quel est votre niveau d'étude"]);
              });
              let nivs1D = Array.from(new Set(nivsDup1D));
              nivs1D.forEach(function (n) {
                nivs2D.push([n, 0, "#4ea8de"]);
              });

              nivs2D.forEach(function (n) {
                data.forEach(function (d) {
                  if (d["3.Quel est votre niveau d'étude"] == n[0]) {
                    n[1] = n[1] + 1;
                  }
                });
                if (n[1] > maxheight) {
                  maxheight = Math.ceil(n[1] / 5) * 5;
                }
              });

              const keys = ["niv", "sum", "color"];
              const values = nivs2D;
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
                .domain(objects.map((obj) => obj.niv))
                .padding(0.4);

              const yScale = d3
                .scaleLinear()
                .range([height, 0])
                .domain([0, maxheight]);

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

              const barGroups = chart
                .selectAll()
                .data(objects)
                .enter()
                .append("g");

              barGroups
                .append("rect")
                .attr("class", "bar")
                .attr("x", (g) => xScale(g.niv))
                .attr("y", (g) => yScale(g.sum))
                .style("fill", (g) => g.color)
                .attr("height", (g) => height - yScale(g.sum))
                .attr("width", xScale.bandwidth())
                .on("mouseenter", function (actual, i) {
                  d3.selectAll(".sum").attr("opacity", 0);

                  d3.select(this)
                    .transition()
                    .duration(300)
                    .attr("opacity", 0.6)
                    .attr("x", (a) => xScale(a.niv) - 5)
                    .attr("width", xScale.bandwidth() + 10);

                  const y = yScale(actual.sum);

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
                    .attr("x", (a) => xScale(a.niv) + xScale.bandwidth() / 2)
                    .attr("y", (a) => yScale(a.sum) - 10)
                    .attr("fill", "white")
                    .attr("text-anchor", "middle")
                    .text((a, idx) => {
                      const divergence = (a.sum - actual.sum).toFixed(1);

                      let text = "";
                      if (divergence > 0) text += "+";
                      text += `${divergence}`;

                      return idx !== i ? text : "";
                    });
                })
                .on("mouseleave", function () {
                  d3.selectAll(".sum").attr("opacity", 1);

                  d3.select(this)
                    .transition()
                    .duration(300)
                    .attr("opacity", 1)
                    .attr("x", (a) => xScale(a.niv))
                    .attr("width", xScale.bandwidth());

                  chart.selectAll("#limit").remove();
                  chart.selectAll(".divergence").remove();
                });

              barGroups
                .append("text")
                .attr("class", "sum")
                .attr("x", (a) => xScale(a.niv) + xScale.bandwidth() / 2)
                .attr("y", (a) => yScale(a.sum) - 10)
                .attr("text-anchor", "middle")
                .text((a) => `${a.sum}`);

              svg
                .append("text")
                .attr("class", "label")
                .attr("x", -(height / 2) - margin)
                .attr("y", margin / 2.4)
                .attr("transform", "rotate(-90)")
                .attr("text-anchor", "middle")
                .text("Le nombre de réponse ");

              svg
                .append("text")
                .attr("class", "label")
                .attr("x", width / 2 + margin)
                .attr("y", height + margin * 1.7)
                .attr("text-anchor", "middle")
                .text("les niveaux d'études");

              svg
                .append("text")
                .attr("class", "title")
                .attr("x", width / 2 + margin)
                .attr("y", 40)
                .attr("text-anchor", "middle")
                .text("Le nombre de réponse par niveaux d'études");

              svg
                .append("text")
                .attr("class", "source")
                .attr("x", width - margin / 2)
                .attr("y", height + margin * 1.7)
                .attr("text-anchor", "start")
                .text("Source: MNT, 2020");
            });
          } else {
            if (by == "Activity") {
              d3.csv("MNT.csv").then(function (data) {
                let actsDup1D = [];
                let acts2D = [];
                let maxheight = 0;

                data.forEach(function (d) {
                  actsDup1D.push(
                    d["4.Quelles est votre activité  professionnelle"]
                  );
                });
                let acts1D = Array.from(new Set(actsDup1D));
                acts1D.forEach(function (a) {
                  acts2D.push([a, 0, "#4ea8de"]);
                });

                acts2D.forEach(function (a) {
                  data.forEach(function (d) {
                    if (
                      d["4.Quelles est votre activité  professionnelle"] == a[0]
                    ) {
                      a[1] = a[1] + 1;
                    }
                  });
                  if (a[1] > maxheight) {
                    maxheight = Math.ceil(a[1] / 5) * 5;
                  }
                });

                const keys = ["act", "sum", "color"];
                const values = acts2D;
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
                  .domain(objects.map((obj) => obj["act"]))
                  .padding(0.4);

                const yScale = d3
                  .scaleLinear()
                  .range([height, 0])
                  .domain([0, maxheight]);

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

                const barGroups = chart
                  .selectAll()
                  .data(objects)
                  .enter()
                  .append("g");

                barGroups
                  .append("rect")
                  .attr("class", "bar")
                  .attr("x", (g) => xScale(g.act))
                  .attr("y", (g) => yScale(g.sum))
                  .style("fill", (g) => g.color)
                  .attr("height", (g) => height - yScale(g.sum))
                  .attr("width", xScale.bandwidth())
                  .on("mouseenter", function (actual, i) {
                    d3.selectAll(".sum").attr("opacity", 0);

                    d3.select(this)
                      .transition()
                      .duration(300)
                      .attr("opacity", 0.6)
                      .attr("x", (a) => xScale(a.act) - 5)
                      .attr("width", xScale.bandwidth() + 10);

                    const y = yScale(actual.sum);

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
                      .attr("x", (a) => xScale(a.act) + xScale.bandwidth() / 2)
                      .attr("y", (a) => yScale(a.sum) - 10)
                      .attr("fill", "white")
                      .attr("text-anchor", "middle")
                      .text((a, idx) => {
                        const divergence = (a.sum - actual.sum).toFixed(1);

                        let text = "";
                        if (divergence > 0) text += "+";
                        text += `${divergence}`;

                        return idx !== i ? text : "";
                      });
                  })
                  .on("mouseleave", function () {
                    d3.selectAll(".sum").attr("opacity", 1);

                    d3.select(this)
                      .transition()
                      .duration(300)
                      .attr("opacity", 1)
                      .attr("x", (a) => xScale(a.act))
                      .attr("width", xScale.bandwidth());

                    chart.selectAll("#limit").remove();
                    chart.selectAll(".divergence").remove();
                  });

                barGroups
                  .append("text")
                  .attr("class", "sum")
                  .attr("x", (a) => xScale(a.act) + xScale.bandwidth() / 2)
                  .attr("y", (a) => yScale(a.sum) - 10)
                  .attr("text-anchor", "middle")
                  .text((a) => `${a.sum}`);

                svg
                  .append("text")
                  .attr("class", "label")
                  .attr("x", -(height / 2) - margin)
                  .attr("y", margin / 2.4)
                  .attr("transform", "rotate(-90)")
                  .attr("text-anchor", "middle")
                  .text("Le nombre de réponse ");

                svg
                  .append("text")
                  .attr("class", "label")
                  .attr("x", width / 2 + margin)
                  .attr("y", height + margin * 1.7)
                  .attr("text-anchor", "middle")
                  .text("Activité professionnelle");

                svg
                  .append("text")
                  .attr("class", "title")
                  .attr("x", width / 2 + margin)
                  .attr("y", 40)
                  .attr("text-anchor", "middle")
                  .text("Le nombre de réponse par activité profesionnelle");

                svg
                  .append("text")
                  .attr("class", "source")
                  .attr("x", width - margin / 2)
                  .attr("y", height + margin * 1.7)
                  .attr("text-anchor", "start")
                  .text("Source: MNT, 2020");
              });
            }
          }
        }
      }
    }

    if (what == "PropDis") {
      if (by == "Region") {
        d3.csv("MNT.csv").then(function (data) {
          let regionsDup1D = [];
          let regions2D = [];
          let maxheight = 0;

          data.forEach(function (d) {
            regionsDup1D.push(d["2.wilaya"]);
          });
          let regions1D = Array.from(new Set(regionsDup1D));
          regions1D.forEach(function (w) {
            regions2D.push([w, 0, 0, 0, "#4ea8de"]);
          });

          regions2D.forEach(function (w) {
            data.forEach(function (d) {
              if (d["2.wilaya"] == w[0]) {
                if (d["25.si oui c'est quoi la maladies?"] == output.value) {
                  w[1] = w[1] + 1;
                }
                w[2] = w[2] + 1;
              }
              w[3] = ((w[1] / w[2]) * 100).toFixed(1);
            });
            if (w[3] > maxheight) {
              maxheight = Math.ceil(w[3] / 5) * 5;
            }
          });

          const keys = ["wilaya", "sumDis", "sumReg", "prct", "color"];
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

          const yScale = d3
            .scaleLinear()
            .range([height, 0])
            .domain([0, maxheight]);

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
            .attr("y", (g) => yScale(g.prct))
            .style("fill", (g) => g.color)
            .attr("height", (g) => height - yScale(g.prct))
            .attr("width", xScale.bandwidth())
            .on("mouseenter", function (actual, i) {
              d3.selectAll(".prct").attr("opacity", 0);

              d3.select(this)
                .transition()
                .duration(300)
                .attr("opacity", 0.6)
                .attr("x", (a) => xScale(a.wilaya) - 5)
                .attr("width", xScale.bandwidth() + 10);

              const y = yScale(actual.prct);

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
                .attr("y", (a) => yScale(a.prct) - 10)
                .attr("fill", "white")
                .attr("text-anchor", "middle")
                .text((a, idx) => {
                  const divergence = (a.prct - actual.prct).toFixed(1);

                  let text = "";
                  if (divergence > 0) text += "+";
                  text += `${divergence} %`;

                  return idx !== i ? text : "";
                });
            })
            .on("mouseleave", function () {
              d3.selectAll(".prct").attr("opacity", 1);

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
            .attr("class", "prct")
            .attr("x", (a) => xScale(a.wilaya) + xScale.bandwidth() / 2)
            .attr("y", (a) => yScale(a.prct) - 10)
            .attr("text-anchor", "middle")
            .text((a) => `${a.prct} %`);

          svg
            .append("text")
            .attr("class", "label")
            .attr("x", -(height / 2) - margin)
            .attr("y", margin / 2.4)
            .attr("transform", "rotate(-90)")
            .attr("text-anchor", "middle")
            .text("Pourcentage de la maladie : " + output.value + " (%)");

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
            .text(
              "Pourcentage de la maladie (" + output.value + ") par wilaya"
            );

          svg
            .append("text")
            .attr("class", "source")
            .attr("x", width - margin / 2)
            .attr("y", height + margin * 1.7)
            .attr("text-anchor", "start")
            .text("Source: MNT, 2020");
        });
      } else {
        if (by == "Sexe") {
          d3.csv("MNT.csv").then(function (data) {
            let sexesDup1D = [];
            let sexes2D = [];
            let maxheight = 0;

            data.forEach(function (d) {
              sexesDup1D.push(d["1.sexe"]);
            });
            let sexes1D = Array.from(new Set(sexesDup1D));
            sexes1D.forEach(function (s) {
              sexes2D.push([s, 0, 0, 0, "#4ea8de"]);
            });

            sexes2D.forEach(function (s) {
              data.forEach(function (d) {
                if (d["1.sexe"] == s[0]) {
                  if (d["25.si oui c'est quoi la maladies?"] == output.value) {
                    s[1] = s[1] + 1;
                  }
                  s[2] = s[2] + 1;
                }
                s[3] = ((s[1] / s[2]) * 100).toFixed(1);
              });
              if (s[3] > maxheight) {
                maxheight = Math.ceil(s[3] / 2) * 2;
              }
            });

            const keys = ["sexe", "sumDis", "sumS", "prct", "color"];
            const values = sexes2D;
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
              .domain(objects.map((obj) => obj.sexe))
              .padding(0.4);

            const yScale = d3
              .scaleLinear()
              .range([height, 0])
              .domain([0, maxheight]);

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

            const barGroups = chart
              .selectAll()
              .data(objects)
              .enter()
              .append("g");

            barGroups
              .append("rect")
              .attr("class", "bar")
              .attr("x", (g) => xScale(g.sexe))
              .attr("y", (g) => yScale(g.prct))
              .style("fill", (g) => g.color)
              .attr("height", (g) => height - yScale(g.prct))
              .attr("width", xScale.bandwidth())
              .on("mouseenter", function (actual, i) {
                d3.selectAll(".prct").attr("opacity", 0);

                d3.select(this)
                  .transition()
                  .duration(300)
                  .attr("opacity", 0.6)
                  .attr("x", (a) => xScale(a.sexe) - 5)
                  .attr("width", xScale.bandwidth() + 10);

                const y = yScale(actual.prct);

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
                  .attr("x", (a) => xScale(a.sexe) + xScale.bandwidth() / 2)
                  .attr("y", (a) => yScale(a.prct) - 10)
                  .attr("fill", "white")
                  .attr("text-anchor", "middle")
                  .text((a, idx) => {
                    const divergence = (a.prct - actual.prct).toFixed(1);

                    let text = "";
                    if (divergence > 0) text += "+";
                    text += `${divergence} %`;

                    return idx !== i ? text : "";
                  });
              })
              .on("mouseleave", function () {
                d3.selectAll(".prct").attr("opacity", 1);

                d3.select(this)
                  .transition()
                  .duration(300)
                  .attr("opacity", 1)
                  .attr("x", (a) => xScale(a.sexe))
                  .attr("width", xScale.bandwidth());

                chart.selectAll("#limit").remove();
                chart.selectAll(".divergence").remove();
              });

            barGroups
              .append("text")
              .attr("class", "prct")
              .attr("x", (a) => xScale(a.sexe) + xScale.bandwidth() / 2)
              .attr("y", (a) => yScale(a.prct) - 10)
              .attr("text-anchor", "middle")
              .text((a) => `${a.prct} %`);

            svg
              .append("text")
              .attr("class", "label")
              .attr("x", -(height / 2) - margin)
              .attr("y", margin / 2.4)
              .attr("transform", "rotate(-90)")
              .attr("text-anchor", "middle")
              .text("Pourcentage de la maladie : " + output.value + " (%)");

            svg
              .append("text")
              .attr("class", "label")
              .attr("x", width / 2 + margin)
              .attr("y", height + margin * 1.7)
              .attr("text-anchor", "middle")
              .text("Sexe");

            svg
              .append("text")
              .attr("class", "title")
              .attr("x", width / 2 + margin)
              .attr("y", 40)
              .attr("text-anchor", "middle")
              .text(
                "Pourcentage de la maladie (" + output.value + ") par sexe"
              );

            svg
              .append("text")
              .attr("class", "source")
              .attr("x", width - margin / 2)
              .attr("y", height + margin * 1.7)
              .attr("text-anchor", "start")
              .text("Source: MNT, 2020");
          });
        } else {
          if (by == "NivEtud") {
            d3.csv("MNT.csv").then(function (data) {
              let nivsDup1D = [];
              let nivs2D = [];
              let maxheight = 0;

              data.forEach(function (d) {
                nivsDup1D.push(d["3.Quel est votre niveau d'étude"]);
              });
              let nivs1D = Array.from(new Set(nivsDup1D));
              nivs1D.forEach(function (n) {
                nivs2D.push([n, 0, 0, 0, "#4ea8de"]);
              });

              nivs2D.forEach(function (n) {
                data.forEach(function (d) {
                  if (d["3.Quel est votre niveau d'étude"] == n[0]) {
                    if (
                      d["25.si oui c'est quoi la maladies?"] == output.value
                    ) {
                      n[1] = n[1] + 1;
                    }
                    n[2] = n[2] + 1;
                  }
                  n[3] = ((n[1] / n[2]) * 100).toFixed(1);
                });
                if (n[3] > maxheight) {
                  maxheight = Math.ceil(n[3] / 5) * 5;
                }
              });

              const keys = ["niv", "sumDis", "sumN", "prct", "color"];
              const values = nivs2D;
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
                .domain(objects.map((obj) => obj.niv))
                .padding(0.4);

              const yScale = d3
                .scaleLinear()
                .range([height, 0])
                .domain([0, maxheight]);

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

              const barGroups = chart
                .selectAll()
                .data(objects)
                .enter()
                .append("g");

              barGroups
                .append("rect")
                .attr("class", "bar")
                .attr("x", (g) => xScale(g.niv))
                .attr("y", (g) => yScale(g.prct))
                .style("fill", (g) => g.color)
                .attr("height", (g) => height - yScale(g.prct))
                .attr("width", xScale.bandwidth())
                .on("mouseenter", function (actual, i) {
                  d3.selectAll(".prct").attr("opacity", 0);

                  d3.select(this)
                    .transition()
                    .duration(300)
                    .attr("opacity", 0.6)
                    .attr("x", (a) => xScale(a.niv) - 5)
                    .attr("width", xScale.bandwidth() + 10);

                  const y = yScale(actual.prct);

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
                    .attr("x", (a) => xScale(a.niv) + xScale.bandwidth() / 2)
                    .attr("y", (a) => yScale(a.prct) - 10)
                    .attr("fill", "white")
                    .attr("text-anchor", "middle")
                    .text((a, idx) => {
                      const divergence = (a.prct - actual.prct).toFixed(1);

                      let text = "";
                      if (divergence > 0) text += "+";
                      text += `${divergence} %`;

                      return idx !== i ? text : "";
                    });
                })
                .on("mouseleave", function () {
                  d3.selectAll(".prct").attr("opacity", 1);

                  d3.select(this)
                    .transition()
                    .duration(300)
                    .attr("opacity", 1)
                    .attr("x", (a) => xScale(a.niv))
                    .attr("width", xScale.bandwidth());

                  chart.selectAll("#limit").remove();
                  chart.selectAll(".divergence").remove();
                });

              barGroups
                .append("text")
                .attr("class", "prct")
                .attr("x", (a) => xScale(a.niv) + xScale.bandwidth() / 2)
                .attr("y", (a) => yScale(a.prct) - 10)
                .attr("text-anchor", "middle")
                .text((a) => `${a.prct} %`);

              svg
                .append("text")
                .attr("class", "label")
                .attr("x", -(height / 2) - margin)
                .attr("y", margin / 2.4)
                .attr("transform", "rotate(-90)")
                .attr("text-anchor", "middle")
                .text("Pourcentage de la maladie : " + output.value + " (%)");

              svg
                .append("text")
                .attr("class", "label")
                .attr("x", width / 2 + margin)
                .attr("y", height + margin * 1.7)
                .attr("text-anchor", "middle")
                .text("les niveaux d'études");

              svg
                .append("text")
                .attr("class", "title")
                .attr("x", width / 2 + margin)
                .attr("y", 40)
                .attr("text-anchor", "middle")
                .text(
                  "Pourcentage de la maladie (" +
                    output.value +
                    ") par niveaux d'études"
                );

              svg
                .append("text")
                .attr("class", "source")
                .attr("x", width - margin / 2)
                .attr("y", height + margin * 1.7)
                .attr("text-anchor", "start")
                .text("Source: MNT, 2020");
            });
          } else {
            if (by == "Activity") {
              d3.csv("MNT.csv").then(function (data) {
                let actsDup1D = [];
                let acts2D = [];
                let maxheight = 0;

                data.forEach(function (d) {
                  actsDup1D.push(
                    d["4.Quelles est votre activité  professionnelle"]
                  );
                });
                let acts1D = Array.from(new Set(actsDup1D));
                acts1D.forEach(function (a) {
                  acts2D.push([a, 0, 0, 0, "#4ea8de"]);
                });

                acts2D.forEach(function (a) {
                  data.forEach(function (d) {
                    if (
                      d["4.Quelles est votre activité  professionnelle"] == a[0]
                    ) {
                      if (
                        d["25.si oui c'est quoi la maladies?"] == output.value
                      ) {
                        a[1] = a[1] + 1;
                      }
                      a[2] = a[2] + 1;
                    }
                    a[3] = ((a[1] / a[2]) * 100).toFixed(1);
                  });
                  if (a[3] > maxheight) {
                    maxheight = Math.ceil(a[3] / 5) * 5;
                  }
                });

                const keys = ["act", "sum", "sumAge", "prct", "color"];
                const values = acts2D;
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
                  .domain(objects.map((obj) => obj["act"]))
                  .padding(0.4);

                const yScale = d3
                  .scaleLinear()
                  .range([height, 0])
                  .domain([0, maxheight]);

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

                const barGroups = chart
                  .selectAll()
                  .data(objects)
                  .enter()
                  .append("g");

                barGroups
                  .append("rect")
                  .attr("class", "bar")
                  .attr("x", (g) => xScale(g.act))
                  .attr("y", (g) => yScale(g.prct))
                  .style("fill", (g) => g.color)
                  .attr("height", (g) => height - yScale(g.prct))
                  .attr("width", xScale.bandwidth())
                  .on("mouseenter", function (actual, i) {
                    d3.selectAll(".prct").attr("opacity", 0);

                    d3.select(this)
                      .transition()
                      .duration(300)
                      .attr("opacity", 0.6)
                      .attr("x", (a) => xScale(a.act) - 5)
                      .attr("width", xScale.bandwidth() + 10);

                    const y = yScale(actual.prct);

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
                      .attr("x", (a) => xScale(a.act) + xScale.bandwidth() / 2)
                      .attr("y", (a) => yScale(a.prct) - 10)
                      .attr("fill", "white")
                      .attr("text-anchor", "middle")
                      .text((a, idx) => {
                        const divergence = (a.prct - actual.prct).toFixed(1);

                        let text = "";
                        if (divergence > 0) text += "+";
                        text += `${divergence} %`;

                        return idx !== i ? text : "";
                      });
                  })
                  .on("mouseleave", function () {
                    d3.selectAll(".prct").attr("opacity", 1);

                    d3.select(this)
                      .transition()
                      .duration(300)
                      .attr("opacity", 1)
                      .attr("x", (a) => xScale(a.act))
                      .attr("width", xScale.bandwidth());

                    chart.selectAll("#limit").remove();
                    chart.selectAll(".divergence").remove();
                  });

                barGroups
                  .append("text")
                  .attr("class", "prct")
                  .attr("x", (a) => xScale(a.act) + xScale.bandwidth() / 2)
                  .attr("y", (a) => yScale(a.prct) - 10)
                  .attr("text-anchor", "middle")
                  .text((a) => `${a.prct} %`);

                svg
                  .append("text")
                  .attr("class", "label")
                  .attr("x", -(height / 2) - margin)
                  .attr("y", margin / 2.4)
                  .attr("transform", "rotate(-90)")
                  .attr("text-anchor", "middle")
                  .text("Pourcentage de la maladie : " + output.value + " (%)");

                svg
                  .append("text")
                  .attr("class", "label")
                  .attr("x", width / 2 + margin)
                  .attr("y", height + margin * 1.7)
                  .attr("text-anchor", "middle")
                  .text("Activité professionnelle");

                svg
                  .append("text")
                  .attr("class", "title")
                  .attr("x", width / 2 + margin)
                  .attr("y", 40)
                  .attr("text-anchor", "middle")
                  .text(
                    "Pourcentage de la maladie (" +
                      output.value +
                      ") par activité profesionnelle"
                  );

                svg
                  .append("text")
                  .attr("class", "source")
                  .attr("x", width - margin / 2)
                  .attr("y", height + margin * 1.7)
                  .attr("text-anchor", "start")
                  .text("Source: MNT, 2020");
              });
            }
          }
        }
      }
    }
  } else {
    if (what == "Tabac") {
      if (by == "Region") {
        d3.csv("MNT.csv").then(function (data) {
          let regionsDup1D = [];
          let regions2D = [];
          let maxheight = 0;

          data.forEach(function (d) {
            regionsDup1D.push(d["2.wilaya"]);
          });
          let regions1D = Array.from(new Set(regionsDup1D));
          regions1D.forEach(function (w) {
            regions2D.push([
              w,
              [
                [0, 0, 0, "Oui"],
                [0, 0, 0, "Non"],
              ],
            ]);
          });

          regions2D.forEach(function (w) {
            data.forEach(function (d) {
              if (d["2.wilaya"] == w[0]) {
                if (
                  d[
                    "5.Fumez-vous actuellement des produits à base de tabac tels que cigarettes, cigares ?"
                  ] == "oui"
                ) {
                  w[1][0][0] = w[1][0][0] + 1;
                } else {
                  w[1][1][0] = w[1][1][0] + 1;
                }
                w[1][0][1] = w[1][0][1] + 1;
                w[1][1][1] = w[1][1][1] + 1;
              }
              w[1][0][2] = ((w[1][0][0] / w[1][0][1]) * 100).toFixed(1);
              w[1][1][2] = ((w[1][1][0] / w[1][1][1]) * 100).toFixed(1);
            });
            if (w[1][0][2] > maxheight) {
              maxheight = Math.ceil(w[1][0][2] / 5) * 5;
            }
            if (w[1][1][2] > maxheight) {
              maxheight = Math.ceil(w[1][1][2] / 5) * 5;
            }
          });

          const keys = ["wilaya", "values"];
          const subkeys = ["sum", "sumW", "prct", "rate"];
          const values = regions2D;
          const objects = values.map((array) => {
            const object = {};

            object[keys[0]] = array[0];
            const values2 = array[1];
            const objects2 = values2.map((array2) => {
              const object2 = {};

              subkeys.forEach((subkey, i) => {
                object2[subkey] = array2[i];
              });

              return object2;
            });

            object[keys[1]] = objects2;

            return object;
          });

          var x0 = d3
            .scaleBand()
            .domain(objects.map((obj) => obj.wilaya))
            .range([0, width])
            .padding(0.1);

          var x1 = d3
            .scaleBand()
            .domain(objects[0].values.map((obj) => obj.rate))
            .range([0, x0.bandwidth()])
            .padding(0.05);

          var y = d3.scaleLinear().domain([0, maxheight]).range([height, 0]);

          const makeYLines = () => d3.axisLeft().scale(y);

          var color = d3
            .scaleOrdinal()
            .domain(objects[0].values.map((obj) => obj.rate))
            .range([
              "#7400b8",
              "#5390d9",
              "#6930c3",
              "#5e60ce",
              "#4ea8de",
              "#48bfe3",
            ]);

          chart
            .append("g")
            .attr("transform", `translate(0, ${height})`)
            .call(d3.axisBottom(x0));

          chart.append("g").call(d3.axisLeft(y));

          chart
            .append("g")
            .attr("class", "grid")
            .call(makeYLines().tickSize(-width, 0, 0).tickFormat(""));

          var slice = chart
            .selectAll(".slice")
            .data(objects)
            .enter()
            .append("g")
            .attr("class", "g")
            .attr("transform", function (d) {
              return "translate(" + x0(d.wilaya) + ",0)";
            });

          slice
            .selectAll("rect")
            .data(function (d) {
              return d.values;
            })
            .enter()
            .append("rect")
            .attr("width", x1.bandwidth())
            .attr("x", function (d) {
              return x1(d.rate);
            })
            .style("fill", function (d) {
              return color(d.rate);
            })
            .attr("y", function (d) {
              return y(0);
            })
            .attr("height", function (d) {
              return height - y(0);
            })
            .on("mouseover", function (d) {
              d3.select(this).style("fill", d3.rgb(color(d.rate)).darker(2));
            })
            .on("mouseout", function (d) {
              d3.select(this).style("fill", color(d.rate));
            });

          slice
            .selectAll("rect")
            .transition()
            .delay(function (d) {
              return Math.random() * 1000;
            })
            .duration(1000)
            .attr("y", function (d) {
              return y(d.prct);
            })
            .attr("height", function (d) {
              return height - y(d.prct);
            });

          //Legend
          var legend = svg
            .selectAll(".legend")
            .data(
              objects[0].values
                .map(function (d) {
                  return d.rate;
                })
                .reverse()
            )
            .enter()
            .append("g")
            .attr("class", "legend")
            .attr("transform", function (d, i) {
              return "translate(0," + i * 20 + ")";
            })
            .style("opacity", "0");

          legend
            .append("rect")
            .attr("x", width + margin - 18)
            .attr("width", 18)
            .attr("height", 18)
            .style("fill", function (d) {
              return color(d);
            });

          legend
            .append("text")
            .attr("x", width + margin - 24)
            .attr("y", 9)
            .attr("dy", ".35em")
            .style("text-anchor", "end")
            .text(function (d) {
              return d;
            });

          legend
            .transition()
            .duration(500)
            .delay(function (d, i) {
              return 1300 + 100 * i;
            })
            .style("opacity", "1");

          svg
            .append("text")
            .attr("class", "label")
            .attr("x", -(height / 2) - margin)
            .attr("y", margin / 2.4)
            .attr("transform", "rotate(-90)")
            .attr("text-anchor", "middle")
            .text("Le pourcentage des fumeurs (%)");

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
            .text("Les pourcentages des fumeurs par wilaya");

          svg
            .append("text")
            .attr("class", "source")
            .attr("x", width - margin / 2)
            .attr("y", height + margin * 1.7)
            .attr("text-anchor", "start")
            .text("Source: MNT, 2020");
        });
      } else {
        if (by == "Sexe") {
          d3.csv("MNT.csv").then(function (data) {
            let regionsDup1D = [];
            let regions2D = [];
            let maxheight = 0;

            data.forEach(function (d) {
              regionsDup1D.push(d["1.sexe"]);
            });
            let regions1D = Array.from(new Set(regionsDup1D));
            regions1D.forEach(function (w) {
              regions2D.push([
                w,
                [
                  [0, 0, 0, "Oui"],
                  [0, 0, 0, "Non"],
                ],
              ]);
            });

            regions2D.forEach(function (w) {
              data.forEach(function (d) {
                if (d["1.sexe"] == w[0]) {
                  if (
                    d[
                      "5.Fumez-vous actuellement des produits à base de tabac tels que cigarettes, cigares ?"
                    ] == "oui"
                  ) {
                    w[1][0][0] = w[1][0][0] + 1;
                  } else {
                    w[1][1][0] = w[1][1][0] + 1;
                  }
                  w[1][0][1] = w[1][0][1] + 1;
                  w[1][1][1] = w[1][1][1] + 1;
                }
                w[1][0][2] = ((w[1][0][0] / w[1][0][1]) * 100).toFixed(1);
                w[1][1][2] = ((w[1][1][0] / w[1][1][1]) * 100).toFixed(1);
              });
              if (w[1][0][2] > maxheight) {
                maxheight = Math.ceil(w[1][0][2] / 5) * 5;
              }
              if (w[1][1][2] > maxheight) {
                maxheight = Math.ceil(w[1][1][2] / 5) * 5;
              }
            });

            const keys = ["wilaya", "values"];
            const subkeys = ["sum", "sumW", "prct", "rate"];
            const values = regions2D;
            const objects = values.map((array) => {
              const object = {};

              object[keys[0]] = array[0];
              const values2 = array[1];
              const objects2 = values2.map((array2) => {
                const object2 = {};

                subkeys.forEach((subkey, i) => {
                  object2[subkey] = array2[i];
                });

                return object2;
              });

              object[keys[1]] = objects2;

              return object;
            });

            var x0 = d3
              .scaleBand()
              .domain(objects.map((obj) => obj.wilaya))
              .range([0, width])
              .padding(0.1);

            var x1 = d3
              .scaleBand()
              .domain(objects[0].values.map((obj) => obj.rate))
              .range([0, x0.bandwidth()])
              .padding(0.05);

            var y = d3.scaleLinear().domain([0, maxheight]).range([height, 0]);

            const makeYLines = () => d3.axisLeft().scale(y);

            var color = d3
              .scaleOrdinal()
              .domain(objects[0].values.map((obj) => obj.rate))
              .range([
                "#7400b8",
                "#5390d9",
                "#6930c3",
                "#5e60ce",
                "#4ea8de",
                "#48bfe3",
              ]);

            chart
              .append("g")
              .attr("transform", `translate(0, ${height})`)
              .call(d3.axisBottom(x0));

            chart.append("g").call(d3.axisLeft(y));

            chart
              .append("g")
              .attr("class", "grid")
              .call(makeYLines().tickSize(-width, 0, 0).tickFormat(""));

            var slice = chart
              .selectAll(".slice")
              .data(objects)
              .enter()
              .append("g")
              .attr("class", "g")
              .attr("transform", function (d) {
                return "translate(" + x0(d.wilaya) + ",0)";
              });

            slice
              .selectAll("rect")
              .data(function (d) {
                return d.values;
              })
              .enter()
              .append("rect")
              .attr("width", x1.bandwidth())
              .attr("x", function (d) {
                return x1(d.rate);
              })
              .style("fill", function (d) {
                return color(d.rate);
              })
              .attr("y", function (d) {
                return y(0);
              })
              .attr("height", function (d) {
                return height - y(0);
              })
              .on("mouseover", function (d) {
                d3.select(this).style("fill", d3.rgb(color(d.rate)).darker(2));
              })
              .on("mouseout", function (d) {
                d3.select(this).style("fill", color(d.rate));
              });

            slice
              .selectAll("rect")
              .transition()
              .delay(function (d) {
                return Math.random() * 1000;
              })
              .duration(1000)
              .attr("y", function (d) {
                return y(d.prct);
              })
              .attr("height", function (d) {
                return height - y(d.prct);
              });

            //Legend
            var legend = svg
              .selectAll(".legend")
              .data(
                objects[0].values
                  .map(function (d) {
                    return d.rate;
                  })
                  .reverse()
              )
              .enter()
              .append("g")
              .attr("class", "legend")
              .attr("transform", function (d, i) {
                return "translate(0," + i * 20 + ")";
              })
              .style("opacity", "0");

            legend
              .append("rect")
              .attr("x", width + margin - 18)
              .attr("width", 18)
              .attr("height", 18)
              .style("fill", function (d) {
                return color(d);
              });

            legend
              .append("text")
              .attr("x", width + margin - 24)
              .attr("y", 9)
              .attr("dy", ".35em")
              .style("text-anchor", "end")
              .text(function (d) {
                return d;
              });

            legend
              .transition()
              .duration(500)
              .delay(function (d, i) {
                return 1300 + 100 * i;
              })
              .style("opacity", "1");

            svg
              .append("text")
              .attr("class", "label")
              .attr("x", -(height / 2) - margin)
              .attr("y", margin / 2.4)
              .attr("transform", "rotate(-90)")
              .attr("text-anchor", "middle")
              .text("Le pourcentage des fumeurs (%)");

            svg
              .append("text")
              .attr("class", "label")
              .attr("x", width / 2 + margin)
              .attr("y", height + margin * 1.7)
              .attr("text-anchor", "middle")
              .text("Sexe");

            svg
              .append("text")
              .attr("class", "title")
              .attr("x", width / 2 + margin)
              .attr("y", 40)
              .attr("text-anchor", "middle")
              .text("Les pourcentages des fumeurs par sexe");

            svg
              .append("text")
              .attr("class", "source")
              .attr("x", width - margin / 2)
              .attr("y", height + margin * 1.7)
              .attr("text-anchor", "start")
              .text("Source: MNT, 2020");
          });
        } else {
          if (by == "NivEtud") {
            d3.csv("MNT.csv").then(function (data) {
              let regionsDup1D = [];
              let regions2D = [];
              let maxheight = 0;

              data.forEach(function (d) {
                regionsDup1D.push(d["3.Quel est votre niveau d'étude"]);
              });
              let regions1D = Array.from(new Set(regionsDup1D));
              regions1D.forEach(function (w) {
                regions2D.push([
                  w,
                  [
                    [0, 0, 0, "Oui"],
                    [0, 0, 0, "Non"],
                  ],
                ]);
              });

              regions2D.forEach(function (w) {
                data.forEach(function (d) {
                  if (d["3.Quel est votre niveau d'étude"] == w[0]) {
                    if (
                      d[
                        "5.Fumez-vous actuellement des produits à base de tabac tels que cigarettes, cigares ?"
                      ] == "oui"
                    ) {
                      w[1][0][0] = w[1][0][0] + 1;
                    } else {
                      w[1][1][0] = w[1][1][0] + 1;
                    }
                    w[1][0][1] = w[1][0][1] + 1;
                    w[1][1][1] = w[1][1][1] + 1;
                  }
                  w[1][0][2] = ((w[1][0][0] / w[1][0][1]) * 100).toFixed(1);
                  w[1][1][2] = ((w[1][1][0] / w[1][1][1]) * 100).toFixed(1);
                });
                if (w[1][0][2] > maxheight) {
                  maxheight = Math.ceil(w[1][0][2] / 5) * 5;
                }
                if (w[1][1][2] > maxheight) {
                  maxheight = Math.ceil(w[1][1][2] / 5) * 5;
                }
              });

              const keys = ["wilaya", "values"];
              const subkeys = ["sum", "sumW", "prct", "rate"];
              const values = regions2D;
              const objects = values.map((array) => {
                const object = {};

                object[keys[0]] = array[0];
                const values2 = array[1];
                const objects2 = values2.map((array2) => {
                  const object2 = {};

                  subkeys.forEach((subkey, i) => {
                    object2[subkey] = array2[i];
                  });

                  return object2;
                });

                object[keys[1]] = objects2;

                return object;
              });

              var x0 = d3
                .scaleBand()
                .domain(objects.map((obj) => obj.wilaya))
                .range([0, width])
                .padding(0.1);

              var x1 = d3
                .scaleBand()
                .domain(objects[0].values.map((obj) => obj.rate))
                .range([0, x0.bandwidth()])
                .padding(0.05);

              var y = d3
                .scaleLinear()
                .domain([0, maxheight])
                .range([height, 0]);

              const makeYLines = () => d3.axisLeft().scale(y);

              var color = d3
                .scaleOrdinal()
                .domain(objects[0].values.map((obj) => obj.rate))
                .range([
                  "#7400b8",
                  "#5390d9",
                  "#6930c3",
                  "#5e60ce",
                  "#4ea8de",
                  "#48bfe3",
                ]);

              chart
                .append("g")
                .attr("transform", `translate(0, ${height})`)
                .call(d3.axisBottom(x0));

              chart.append("g").call(d3.axisLeft(y));

              chart
                .append("g")
                .attr("class", "grid")
                .call(makeYLines().tickSize(-width, 0, 0).tickFormat(""));

              var slice = chart
                .selectAll(".slice")
                .data(objects)
                .enter()
                .append("g")
                .attr("class", "g")
                .attr("transform", function (d) {
                  return "translate(" + x0(d.wilaya) + ",0)";
                });

              slice
                .selectAll("rect")
                .data(function (d) {
                  return d.values;
                })
                .enter()
                .append("rect")
                .attr("width", x1.bandwidth())
                .attr("x", function (d) {
                  return x1(d.rate);
                })
                .style("fill", function (d) {
                  return color(d.rate);
                })
                .attr("y", function (d) {
                  return y(0);
                })
                .attr("height", function (d) {
                  return height - y(0);
                })
                .on("mouseover", function (d) {
                  d3.select(this).style(
                    "fill",
                    d3.rgb(color(d.rate)).darker(2)
                  );
                })
                .on("mouseout", function (d) {
                  d3.select(this).style("fill", color(d.rate));
                });

              slice
                .selectAll("rect")
                .transition()
                .delay(function (d) {
                  return Math.random() * 1000;
                })
                .duration(1000)
                .attr("y", function (d) {
                  return y(d.prct);
                })
                .attr("height", function (d) {
                  return height - y(d.prct);
                });

              //Legend
              var legend = svg
                .selectAll(".legend")
                .data(
                  objects[0].values
                    .map(function (d) {
                      return d.rate;
                    })
                    .reverse()
                )
                .enter()
                .append("g")
                .attr("class", "legend")
                .attr("transform", function (d, i) {
                  return "translate(0," + i * 20 + ")";
                })
                .style("opacity", "0");

              legend
                .append("rect")
                .attr("x", width + margin - 18)
                .attr("width", 18)
                .attr("height", 18)
                .style("fill", function (d) {
                  return color(d);
                });

              legend
                .append("text")
                .attr("x", width + margin - 24)
                .attr("y", 9)
                .attr("dy", ".35em")
                .style("text-anchor", "end")
                .text(function (d) {
                  return d;
                });

              legend
                .transition()
                .duration(500)
                .delay(function (d, i) {
                  return 1300 + 100 * i;
                })
                .style("opacity", "1");

              svg
                .append("text")
                .attr("class", "label")
                .attr("x", -(height / 2) - margin)
                .attr("y", margin / 2.4)
                .attr("transform", "rotate(-90)")
                .attr("text-anchor", "middle")
                .text("Le pourcentage des fumeurs (%)");

              svg
                .append("text")
                .attr("class", "label")
                .attr("x", width / 2 + margin)
                .attr("y", height + margin * 1.7)
                .attr("text-anchor", "middle")
                .text("Les niveaux d'étude");

              svg
                .append("text")
                .attr("class", "title")
                .attr("x", width / 2 + margin)
                .attr("y", 40)
                .attr("text-anchor", "middle")
                .text("Les pourcentages des fumeurs par niveau d'étude");

              svg
                .append("text")
                .attr("class", "source")
                .attr("x", width - margin / 2)
                .attr("y", height + margin * 1.7)
                .attr("text-anchor", "start")
                .text("Source: MNT, 2020");
            });
          } else {
            if (by == "Activity") {
              d3.csv("MNT.csv").then(function (data) {
                let regionsDup1D = [];
                let regions2D = [];
                let maxheight = 0;

                data.forEach(function (d) {
                  regionsDup1D.push(
                    d["4.Quelles est votre activité  professionnelle"]
                  );
                });
                let regions1D = Array.from(new Set(regionsDup1D));
                regions1D.forEach(function (w) {
                  regions2D.push([
                    w,
                    [
                      [0, 0, 0, "Oui"],
                      [0, 0, 0, "Non"],
                    ],
                  ]);
                });

                regions2D.forEach(function (w) {
                  data.forEach(function (d) {
                    if (
                      d["4.Quelles est votre activité  professionnelle"] == w[0]
                    ) {
                      if (
                        d[
                          "5.Fumez-vous actuellement des produits à base de tabac tels que cigarettes, cigares ?"
                        ] == "oui"
                      ) {
                        w[1][0][0] = w[1][0][0] + 1;
                      } else {
                        w[1][1][0] = w[1][1][0] + 1;
                      }
                      w[1][0][1] = w[1][0][1] + 1;
                      w[1][1][1] = w[1][1][1] + 1;
                    }
                    w[1][0][2] = ((w[1][0][0] / w[1][0][1]) * 100).toFixed(1);
                    w[1][1][2] = ((w[1][1][0] / w[1][1][1]) * 100).toFixed(1);
                  });
                  if (w[1][0][2] > maxheight) {
                    maxheight = Math.ceil(w[1][0][2] / 5) * 5;
                  }
                  if (w[1][1][2] > maxheight) {
                    maxheight = Math.ceil(w[1][1][2] / 5) * 5;
                  }
                });

                const keys = ["wilaya", "values"];
                const subkeys = ["sum", "sumW", "prct", "rate"];
                const values = regions2D;
                const objects = values.map((array) => {
                  const object = {};

                  object[keys[0]] = array[0];
                  const values2 = array[1];
                  const objects2 = values2.map((array2) => {
                    const object2 = {};

                    subkeys.forEach((subkey, i) => {
                      object2[subkey] = array2[i];
                    });

                    return object2;
                  });

                  object[keys[1]] = objects2;

                  return object;
                });

                var x0 = d3
                  .scaleBand()
                  .domain(objects.map((obj) => obj.wilaya))
                  .range([0, width])
                  .padding(0.1);

                var x1 = d3
                  .scaleBand()
                  .domain(objects[0].values.map((obj) => obj.rate))
                  .range([0, x0.bandwidth()])
                  .padding(0.05);

                var y = d3
                  .scaleLinear()
                  .domain([0, maxheight])
                  .range([height, 0]);

                const makeYLines = () => d3.axisLeft().scale(y);

                var color = d3
                  .scaleOrdinal()
                  .domain(objects[0].values.map((obj) => obj.rate))
                  .range([
                    "#7400b8",
                    "#5390d9",
                    "#6930c3",
                    "#5e60ce",
                    "#4ea8de",
                    "#48bfe3",
                  ]);

                chart
                  .append("g")
                  .attr("transform", `translate(0, ${height})`)
                  .call(d3.axisBottom(x0));

                chart.append("g").call(d3.axisLeft(y));

                chart
                  .append("g")
                  .attr("class", "grid")
                  .call(makeYLines().tickSize(-width, 0, 0).tickFormat(""));

                var slice = chart
                  .selectAll(".slice")
                  .data(objects)
                  .enter()
                  .append("g")
                  .attr("class", "g")
                  .attr("transform", function (d) {
                    return "translate(" + x0(d.wilaya) + ",0)";
                  });

                slice
                  .selectAll("rect")
                  .data(function (d) {
                    return d.values;
                  })
                  .enter()
                  .append("rect")
                  .attr("width", x1.bandwidth())
                  .attr("x", function (d) {
                    return x1(d.rate);
                  })
                  .style("fill", function (d) {
                    return color(d.rate);
                  })
                  .attr("y", function (d) {
                    return y(0);
                  })
                  .attr("height", function (d) {
                    return height - y(0);
                  })
                  .on("mouseover", function (d) {
                    d3.select(this).style(
                      "fill",
                      d3.rgb(color(d.rate)).darker(2)
                    );
                  })
                  .on("mouseout", function (d) {
                    d3.select(this).style("fill", color(d.rate));
                  });

                slice
                  .selectAll("rect")
                  .transition()
                  .delay(function (d) {
                    return Math.random() * 1000;
                  })
                  .duration(1000)
                  .attr("y", function (d) {
                    return y(d.prct);
                  })
                  .attr("height", function (d) {
                    return height - y(d.prct);
                  });

                //Legend
                var legend = svg
                  .selectAll(".legend")
                  .data(
                    objects[0].values
                      .map(function (d) {
                        return d.rate;
                      })
                      .reverse()
                  )
                  .enter()
                  .append("g")
                  .attr("class", "legend")
                  .attr("transform", function (d, i) {
                    return "translate(0," + i * 20 + ")";
                  })
                  .style("opacity", "0");

                legend
                  .append("rect")
                  .attr("x", width + margin - 18)
                  .attr("width", 18)
                  .attr("height", 18)
                  .style("fill", function (d) {
                    return color(d);
                  });

                legend
                  .append("text")
                  .attr("x", width + margin - 24)
                  .attr("y", 9)
                  .attr("dy", ".35em")
                  .style("text-anchor", "end")
                  .text(function (d) {
                    return d;
                  });

                legend
                  .transition()
                  .duration(500)
                  .delay(function (d, i) {
                    return 1300 + 100 * i;
                  })
                  .style("opacity", "1");

                svg
                  .append("text")
                  .attr("class", "label")
                  .attr("x", -(height / 2) - margin)
                  .attr("y", margin / 2.4)
                  .attr("transform", "rotate(-90)")
                  .attr("text-anchor", "middle")
                  .text("Le pourcentage des fumeurs (%)");

                svg
                  .append("text")
                  .attr("class", "label")
                  .attr("x", width / 2 + margin)
                  .attr("y", height + margin * 1.7)
                  .attr("text-anchor", "middle")
                  .text("Les activités  professionnelles");

                svg
                  .append("text")
                  .attr("class", "title")
                  .attr("x", width / 2 + margin)
                  .attr("y", 40)
                  .attr("text-anchor", "middle")
                  .text(
                    "Les pourcentages des fumeurs par activité  professionnelle"
                  );

                svg
                  .append("text")
                  .attr("class", "source")
                  .attr("x", width - margin / 2)
                  .attr("y", height + margin * 1.7)
                  .attr("text-anchor", "start")
                  .text("Source: MNT, 2020");
              });
            }
          }
        }
      }
    }

    if (what == "Alchool") {
      if (by == "Region") {
        d3.csv("MNT.csv").then(function (data) {
          let regionsDup1D = [];
          let regions2D = [];
          let maxheight = 0;

          data.forEach(function (d) {
            regionsDup1D.push(d["2.wilaya"]);
          });
          let regions1D = Array.from(new Set(regionsDup1D));
          regions1D.forEach(function (w) {
            regions2D.push([
              w,
              [
                [0, 0, 0, "Oui"],
                [0, 0, 0, "Non"],
              ],
            ]);
          });

          regions2D.forEach(function (w) {
            data.forEach(function (d) {
              if (d["2.wilaya"] == w[0]) {
                if (
                  d["9.avez-vous consommé une boisson alcoolisée?"] == "oui"
                ) {
                  w[1][0][0] = w[1][0][0] + 1;
                } else {
                  w[1][1][0] = w[1][1][0] + 1;
                }
                w[1][0][1] = w[1][0][1] + 1;
                w[1][1][1] = w[1][1][1] + 1;
              }
              w[1][0][2] = ((w[1][0][0] / w[1][0][1]) * 100).toFixed(1);
              w[1][1][2] = ((w[1][1][0] / w[1][1][1]) * 100).toFixed(1);
            });
            if (w[1][0][2] > maxheight) {
              maxheight = Math.ceil(w[1][0][2] / 5) * 5;
            }
            if (w[1][1][2] > maxheight) {
              maxheight = Math.ceil(w[1][1][2] / 5) * 5;
            }
          });

          const keys = ["wilaya", "values"];
          const subkeys = ["sum", "sumW", "prct", "rate"];
          const values = regions2D;
          const objects = values.map((array) => {
            const object = {};

            object[keys[0]] = array[0];
            const values2 = array[1];
            const objects2 = values2.map((array2) => {
              const object2 = {};

              subkeys.forEach((subkey, i) => {
                object2[subkey] = array2[i];
              });

              return object2;
            });

            object[keys[1]] = objects2;

            return object;
          });

          var x0 = d3
            .scaleBand()
            .domain(objects.map((obj) => obj.wilaya))
            .range([0, width])
            .padding(0.1);

          var x1 = d3
            .scaleBand()
            .domain(objects[0].values.map((obj) => obj.rate))
            .range([0, x0.bandwidth()])
            .padding(0.05);

          var y = d3.scaleLinear().domain([0, maxheight]).range([height, 0]);

          const makeYLines = () => d3.axisLeft().scale(y);

          var color = d3
            .scaleOrdinal()
            .domain(objects[0].values.map((obj) => obj.rate))
            .range([
              "#7400b8",
              "#5390d9",
              "#6930c3",
              "#5e60ce",
              "#4ea8de",
              "#48bfe3",
            ]);

          chart
            .append("g")
            .attr("transform", `translate(0, ${height})`)
            .call(d3.axisBottom(x0));

          chart.append("g").call(d3.axisLeft(y));

          chart
            .append("g")
            .attr("class", "grid")
            .call(makeYLines().tickSize(-width, 0, 0).tickFormat(""));

          var slice = chart
            .selectAll(".slice")
            .data(objects)
            .enter()
            .append("g")
            .attr("class", "g")
            .attr("transform", function (d) {
              return "translate(" + x0(d.wilaya) + ",0)";
            });

          slice
            .selectAll("rect")
            .data(function (d) {
              return d.values;
            })
            .enter()
            .append("rect")
            .attr("width", x1.bandwidth())
            .attr("x", function (d) {
              return x1(d.rate);
            })
            .style("fill", function (d) {
              return color(d.rate);
            })
            .attr("y", function (d) {
              return y(0);
            })
            .attr("height", function (d) {
              return height - y(0);
            })
            .on("mouseover", function (d) {
              d3.select(this).style("fill", d3.rgb(color(d.rate)).darker(2));
            })
            .on("mouseout", function (d) {
              d3.select(this).style("fill", color(d.rate));
            });

          slice
            .selectAll("rect")
            .transition()
            .delay(function (d) {
              return Math.random() * 1000;
            })
            .duration(1000)
            .attr("y", function (d) {
              return y(d.prct);
            })
            .attr("height", function (d) {
              return height - y(d.prct);
            });

          //Legend
          var legend = svg
            .selectAll(".legend")
            .data(
              objects[0].values
                .map(function (d) {
                  return d.rate;
                })
                .reverse()
            )
            .enter()
            .append("g")
            .attr("class", "legend")
            .attr("transform", function (d, i) {
              return "translate(0," + i * 20 + ")";
            })
            .style("opacity", "0");

          legend
            .append("rect")
            .attr("x", width + margin - 18)
            .attr("width", 18)
            .attr("height", 18)
            .style("fill", function (d) {
              return color(d);
            });

          legend
            .append("text")
            .attr("x", width + margin - 24)
            .attr("y", 9)
            .attr("dy", ".35em")
            .style("text-anchor", "end")
            .text(function (d) {
              return d;
            });

          legend
            .transition()
            .duration(500)
            .delay(function (d, i) {
              return 1300 + 100 * i;
            })
            .style("opacity", "1");

          svg
            .append("text")
            .attr("class", "label")
            .attr("x", -(height / 2) - margin)
            .attr("y", margin / 2.4)
            .attr("transform", "rotate(-90)")
            .attr("text-anchor", "middle")
            .text(
              "Le pourcentage des consomateurs de boissons alchooliques (%)"
            );

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
            .text(
              "Les pourcentages de consomateurs de boissons alchooliques par wilaya"
            );

          svg
            .append("text")
            .attr("class", "source")
            .attr("x", width - margin / 2)
            .attr("y", height + margin * 1.7)
            .attr("text-anchor", "start")
            .text("Source: MNT, 2020");
        });
      } else {
        if (by == "Sexe") {
          d3.csv("MNT.csv").then(function (data) {
            let regionsDup1D = [];
            let regions2D = [];
            let maxheight = 0;

            data.forEach(function (d) {
              regionsDup1D.push(d["1.sexe"]);
            });
            let regions1D = Array.from(new Set(regionsDup1D));
            regions1D.forEach(function (w) {
              regions2D.push([
                w,
                [
                  [0, 0, 0, "Oui"],
                  [0, 0, 0, "Non"],
                ],
              ]);
            });

            regions2D.forEach(function (w) {
              data.forEach(function (d) {
                if (d["1.sexe"] == w[0]) {
                  if (
                    d["9.avez-vous consommé une boisson alcoolisée?"] == "oui"
                  ) {
                    w[1][0][0] = w[1][0][0] + 1;
                  } else {
                    w[1][1][0] = w[1][1][0] + 1;
                  }
                  w[1][0][1] = w[1][0][1] + 1;
                  w[1][1][1] = w[1][1][1] + 1;
                }
                w[1][0][2] = ((w[1][0][0] / w[1][0][1]) * 100).toFixed(1);
                w[1][1][2] = ((w[1][1][0] / w[1][1][1]) * 100).toFixed(1);
              });
              if (w[1][0][2] > maxheight) {
                maxheight = Math.ceil(w[1][0][2] / 5) * 5;
              }
              if (w[1][1][2] > maxheight) {
                maxheight = Math.ceil(w[1][1][2] / 5) * 5;
              }
            });

            const keys = ["wilaya", "values"];
            const subkeys = ["sum", "sumW", "prct", "rate"];
            const values = regions2D;
            const objects = values.map((array) => {
              const object = {};

              object[keys[0]] = array[0];
              const values2 = array[1];
              const objects2 = values2.map((array2) => {
                const object2 = {};

                subkeys.forEach((subkey, i) => {
                  object2[subkey] = array2[i];
                });

                return object2;
              });

              object[keys[1]] = objects2;

              return object;
            });

            var x0 = d3
              .scaleBand()
              .domain(objects.map((obj) => obj.wilaya))
              .range([0, width])
              .padding(0.1);

            var x1 = d3
              .scaleBand()
              .domain(objects[0].values.map((obj) => obj.rate))
              .range([0, x0.bandwidth()])
              .padding(0.05);

            var y = d3.scaleLinear().domain([0, maxheight]).range([height, 0]);

            const makeYLines = () => d3.axisLeft().scale(y);

            var color = d3
              .scaleOrdinal()
              .domain(objects[0].values.map((obj) => obj.rate))
              .range([
                "#7400b8",
                "#5390d9",
                "#6930c3",
                "#5e60ce",
                "#4ea8de",
                "#48bfe3",
              ]);

            chart
              .append("g")
              .attr("transform", `translate(0, ${height})`)
              .call(d3.axisBottom(x0));

            chart.append("g").call(d3.axisLeft(y));

            chart
              .append("g")
              .attr("class", "grid")
              .call(makeYLines().tickSize(-width, 0, 0).tickFormat(""));

            var slice = chart
              .selectAll(".slice")
              .data(objects)
              .enter()
              .append("g")
              .attr("class", "g")
              .attr("transform", function (d) {
                return "translate(" + x0(d.wilaya) + ",0)";
              });

            slice
              .selectAll("rect")
              .data(function (d) {
                return d.values;
              })
              .enter()
              .append("rect")
              .attr("width", x1.bandwidth())
              .attr("x", function (d) {
                return x1(d.rate);
              })
              .style("fill", function (d) {
                return color(d.rate);
              })
              .attr("y", function (d) {
                return y(0);
              })
              .attr("height", function (d) {
                return height - y(0);
              })
              .on("mouseover", function (d) {
                d3.select(this).style("fill", d3.rgb(color(d.rate)).darker(2));
              })
              .on("mouseout", function (d) {
                d3.select(this).style("fill", color(d.rate));
              });

            slice
              .selectAll("rect")
              .transition()
              .delay(function (d) {
                return Math.random() * 1000;
              })
              .duration(1000)
              .attr("y", function (d) {
                return y(d.prct);
              })
              .attr("height", function (d) {
                return height - y(d.prct);
              });

            //Legend
            var legend = svg
              .selectAll(".legend")
              .data(
                objects[0].values
                  .map(function (d) {
                    return d.rate;
                  })
                  .reverse()
              )
              .enter()
              .append("g")
              .attr("class", "legend")
              .attr("transform", function (d, i) {
                return "translate(0," + i * 20 + ")";
              })
              .style("opacity", "0");

            legend
              .append("rect")
              .attr("x", width + margin - 18)
              .attr("width", 18)
              .attr("height", 18)
              .style("fill", function (d) {
                return color(d);
              });

            legend
              .append("text")
              .attr("x", width + margin - 24)
              .attr("y", 9)
              .attr("dy", ".35em")
              .style("text-anchor", "end")
              .text(function (d) {
                return d;
              });

            legend
              .transition()
              .duration(500)
              .delay(function (d, i) {
                return 1300 + 100 * i;
              })
              .style("opacity", "1");

            svg
              .append("text")
              .attr("class", "label")
              .attr("x", -(height / 2) - margin)
              .attr("y", margin / 2.4)
              .attr("transform", "rotate(-90)")
              .attr("text-anchor", "middle")
              .text(
                "Le pourcentage des consomateurs de boissons alchooliques (%)"
              );

            svg
              .append("text")
              .attr("class", "label")
              .attr("x", width / 2 + margin)
              .attr("y", height + margin * 1.7)
              .attr("text-anchor", "middle")
              .text("Sexe");

            svg
              .append("text")
              .attr("class", "title")
              .attr("x", width / 2 + margin)
              .attr("y", 40)
              .attr("text-anchor", "middle")
              .text(
                "Les pourcentages de consomateurs de boissons alchooliques par sexe"
              );

            svg
              .append("text")
              .attr("class", "source")
              .attr("x", width - margin / 2)
              .attr("y", height + margin * 1.7)
              .attr("text-anchor", "start")
              .text("Source: MNT, 2020");
          });
        } else {
          if (by == "NivEtud") {
            d3.csv("MNT.csv").then(function (data) {
              let regionsDup1D = [];
              let regions2D = [];
              let maxheight = 0;

              data.forEach(function (d) {
                regionsDup1D.push(d["3.Quel est votre niveau d'étude"]);
              });
              let regions1D = Array.from(new Set(regionsDup1D));
              regions1D.forEach(function (w) {
                regions2D.push([
                  w,
                  [
                    [0, 0, 0, "Oui"],
                    [0, 0, 0, "Non"],
                  ],
                ]);
              });

              regions2D.forEach(function (w) {
                data.forEach(function (d) {
                  if (d["3.Quel est votre niveau d'étude"] == w[0]) {
                    if (
                      d["9.avez-vous consommé une boisson alcoolisée?"] == "oui"
                    ) {
                      w[1][0][0] = w[1][0][0] + 1;
                    } else {
                      w[1][1][0] = w[1][1][0] + 1;
                    }
                    w[1][0][1] = w[1][0][1] + 1;
                    w[1][1][1] = w[1][1][1] + 1;
                  }
                  w[1][0][2] = ((w[1][0][0] / w[1][0][1]) * 100).toFixed(1);
                  w[1][1][2] = ((w[1][1][0] / w[1][1][1]) * 100).toFixed(1);
                });
                if (w[1][0][2] > maxheight) {
                  maxheight = Math.ceil(w[1][0][2] / 5) * 5;
                }
                if (w[1][1][2] > maxheight) {
                  maxheight = Math.ceil(w[1][1][2] / 5) * 5;
                }
              });

              const keys = ["wilaya", "values"];
              const subkeys = ["sum", "sumW", "prct", "rate"];
              const values = regions2D;
              const objects = values.map((array) => {
                const object = {};

                object[keys[0]] = array[0];
                const values2 = array[1];
                const objects2 = values2.map((array2) => {
                  const object2 = {};

                  subkeys.forEach((subkey, i) => {
                    object2[subkey] = array2[i];
                  });

                  return object2;
                });

                object[keys[1]] = objects2;

                return object;
              });

              var x0 = d3
                .scaleBand()
                .domain(objects.map((obj) => obj.wilaya))
                .range([0, width])
                .padding(0.1);

              var x1 = d3
                .scaleBand()
                .domain(objects[0].values.map((obj) => obj.rate))
                .range([0, x0.bandwidth()])
                .padding(0.05);

              var y = d3
                .scaleLinear()
                .domain([0, maxheight])
                .range([height, 0]);

              const makeYLines = () => d3.axisLeft().scale(y);

              var color = d3
                .scaleOrdinal()
                .domain(objects[0].values.map((obj) => obj.rate))
                .range([
                  "#7400b8",
                  "#5390d9",
                  "#6930c3",
                  "#5e60ce",
                  "#4ea8de",
                  "#48bfe3",
                ]);

              chart
                .append("g")
                .attr("transform", `translate(0, ${height})`)
                .call(d3.axisBottom(x0));

              chart.append("g").call(d3.axisLeft(y));

              chart
                .append("g")
                .attr("class", "grid")
                .call(makeYLines().tickSize(-width, 0, 0).tickFormat(""));

              var slice = chart
                .selectAll(".slice")
                .data(objects)
                .enter()
                .append("g")
                .attr("class", "g")
                .attr("transform", function (d) {
                  return "translate(" + x0(d.wilaya) + ",0)";
                });

              slice
                .selectAll("rect")
                .data(function (d) {
                  return d.values;
                })
                .enter()
                .append("rect")
                .attr("width", x1.bandwidth())
                .attr("x", function (d) {
                  return x1(d.rate);
                })
                .style("fill", function (d) {
                  return color(d.rate);
                })
                .attr("y", function (d) {
                  return y(0);
                })
                .attr("height", function (d) {
                  return height - y(0);
                })
                .on("mouseover", function (d) {
                  d3.select(this).style(
                    "fill",
                    d3.rgb(color(d.rate)).darker(2)
                  );
                })
                .on("mouseout", function (d) {
                  d3.select(this).style("fill", color(d.rate));
                });

              slice
                .selectAll("rect")
                .transition()
                .delay(function (d) {
                  return Math.random() * 1000;
                })
                .duration(1000)
                .attr("y", function (d) {
                  return y(d.prct);
                })
                .attr("height", function (d) {
                  return height - y(d.prct);
                });

              //Legend
              var legend = svg
                .selectAll(".legend")
                .data(
                  objects[0].values
                    .map(function (d) {
                      return d.rate;
                    })
                    .reverse()
                )
                .enter()
                .append("g")
                .attr("class", "legend")
                .attr("transform", function (d, i) {
                  return "translate(0," + i * 20 + ")";
                })
                .style("opacity", "0");

              legend
                .append("rect")
                .attr("x", width + margin - 18)
                .attr("width", 18)
                .attr("height", 18)
                .style("fill", function (d) {
                  return color(d);
                });

              legend
                .append("text")
                .attr("x", width + margin - 24)
                .attr("y", 9)
                .attr("dy", ".35em")
                .style("text-anchor", "end")
                .text(function (d) {
                  return d;
                });

              legend
                .transition()
                .duration(500)
                .delay(function (d, i) {
                  return 1300 + 100 * i;
                })
                .style("opacity", "1");

              svg
                .append("text")
                .attr("class", "label")
                .attr("x", -(height / 2) - margin)
                .attr("y", margin / 2.4)
                .attr("transform", "rotate(-90)")
                .attr("text-anchor", "middle")
                .text(
                  "Le pourcentage des consomateurs de boissons alchooliques (%)"
                );

              svg
                .append("text")
                .attr("class", "label")
                .attr("x", width / 2 + margin)
                .attr("y", height + margin * 1.7)
                .attr("text-anchor", "middle")
                .text("Les niveaux d'étude");

              svg
                .append("text")
                .attr("class", "title")
                .attr("x", width / 2 + margin)
                .attr("y", 40)
                .attr("text-anchor", "middle")
                .text(
                  "Les pourcentages de consomateurs de boissons alchooliques par niveau d'étude"
                );

              svg
                .append("text")
                .attr("class", "source")
                .attr("x", width - margin / 2)
                .attr("y", height + margin * 1.7)
                .attr("text-anchor", "start")
                .text("Source: MNT, 2020");
            });
          } else {
            if (by == "Activity") {
              d3.csv("MNT.csv").then(function (data) {
                let regionsDup1D = [];
                let regions2D = [];
                let maxheight = 0;

                data.forEach(function (d) {
                  regionsDup1D.push(
                    d["4.Quelles est votre activité  professionnelle"]
                  );
                });
                let regions1D = Array.from(new Set(regionsDup1D));
                regions1D.forEach(function (w) {
                  regions2D.push([
                    w,
                    [
                      [0, 0, 0, "Oui"],
                      [0, 0, 0, "Non"],
                    ],
                  ]);
                });

                regions2D.forEach(function (w) {
                  data.forEach(function (d) {
                    if (
                      d["4.Quelles est votre activité  professionnelle"] == w[0]
                    ) {
                      if (
                        d["9.avez-vous consommé une boisson alcoolisée?"] ==
                        "oui"
                      ) {
                        w[1][0][0] = w[1][0][0] + 1;
                      } else {
                        w[1][1][0] = w[1][1][0] + 1;
                      }
                      w[1][0][1] = w[1][0][1] + 1;
                      w[1][1][1] = w[1][1][1] + 1;
                    }
                    w[1][0][2] = ((w[1][0][0] / w[1][0][1]) * 100).toFixed(1);
                    w[1][1][2] = ((w[1][1][0] / w[1][1][1]) * 100).toFixed(1);
                  });
                  if (w[1][0][2] > maxheight) {
                    maxheight = Math.ceil(w[1][0][2] / 5) * 5;
                  }
                  if (w[1][1][2] > maxheight) {
                    maxheight = Math.ceil(w[1][1][2] / 5) * 5;
                  }
                });

                const keys = ["wilaya", "values"];
                const subkeys = ["sum", "sumW", "prct", "rate"];
                const values = regions2D;
                const objects = values.map((array) => {
                  const object = {};

                  object[keys[0]] = array[0];
                  const values2 = array[1];
                  const objects2 = values2.map((array2) => {
                    const object2 = {};

                    subkeys.forEach((subkey, i) => {
                      object2[subkey] = array2[i];
                    });

                    return object2;
                  });

                  object[keys[1]] = objects2;

                  return object;
                });

                var x0 = d3
                  .scaleBand()
                  .domain(objects.map((obj) => obj.wilaya))
                  .range([0, width])
                  .padding(0.1);

                var x1 = d3
                  .scaleBand()
                  .domain(objects[0].values.map((obj) => obj.rate))
                  .range([0, x0.bandwidth()])
                  .padding(0.05);

                var y = d3
                  .scaleLinear()
                  .domain([0, maxheight])
                  .range([height, 0]);

                const makeYLines = () => d3.axisLeft().scale(y);

                var color = d3
                  .scaleOrdinal()
                  .domain(objects[0].values.map((obj) => obj.rate))
                  .range([
                    "#7400b8",
                    "#5390d9",
                    "#6930c3",
                    "#5e60ce",
                    "#4ea8de",
                    "#48bfe3",
                  ]);

                chart
                  .append("g")
                  .attr("transform", `translate(0, ${height})`)
                  .call(d3.axisBottom(x0));

                chart.append("g").call(d3.axisLeft(y));

                chart
                  .append("g")
                  .attr("class", "grid")
                  .call(makeYLines().tickSize(-width, 0, 0).tickFormat(""));

                var slice = chart
                  .selectAll(".slice")
                  .data(objects)
                  .enter()
                  .append("g")
                  .attr("class", "g")
                  .attr("transform", function (d) {
                    return "translate(" + x0(d.wilaya) + ",0)";
                  });

                slice
                  .selectAll("rect")
                  .data(function (d) {
                    return d.values;
                  })
                  .enter()
                  .append("rect")
                  .attr("width", x1.bandwidth())
                  .attr("x", function (d) {
                    return x1(d.rate);
                  })
                  .style("fill", function (d) {
                    return color(d.rate);
                  })
                  .attr("y", function (d) {
                    return y(0);
                  })
                  .attr("height", function (d) {
                    return height - y(0);
                  })
                  .on("mouseover", function (d) {
                    d3.select(this).style(
                      "fill",
                      d3.rgb(color(d.rate)).darker(2)
                    );
                  })
                  .on("mouseout", function (d) {
                    d3.select(this).style("fill", color(d.rate));
                  });

                slice
                  .selectAll("rect")
                  .transition()
                  .delay(function (d) {
                    return Math.random() * 1000;
                  })
                  .duration(1000)
                  .attr("y", function (d) {
                    return y(d.prct);
                  })
                  .attr("height", function (d) {
                    return height - y(d.prct);
                  });

                //Legend
                var legend = svg
                  .selectAll(".legend")
                  .data(
                    objects[0].values
                      .map(function (d) {
                        return d.rate;
                      })
                      .reverse()
                  )
                  .enter()
                  .append("g")
                  .attr("class", "legend")
                  .attr("transform", function (d, i) {
                    return "translate(0," + i * 20 + ")";
                  })
                  .style("opacity", "0");

                legend
                  .append("rect")
                  .attr("x", width + margin - 18)
                  .attr("width", 18)
                  .attr("height", 18)
                  .style("fill", function (d) {
                    return color(d);
                  });

                legend
                  .append("text")
                  .attr("x", width + margin - 24)
                  .attr("y", 9)
                  .attr("dy", ".35em")
                  .style("text-anchor", "end")
                  .text(function (d) {
                    return d;
                  });

                legend
                  .transition()
                  .duration(500)
                  .delay(function (d, i) {
                    return 1300 + 100 * i;
                  })
                  .style("opacity", "1");

                svg
                  .append("text")
                  .attr("class", "label")
                  .attr("x", -(height / 2) - margin)
                  .attr("y", margin / 2.4)
                  .attr("transform", "rotate(-90)")
                  .attr("text-anchor", "middle")
                  .text(
                    "Le pourcentage des consomateurs de boissons alchooliques (%)"
                  );

                svg
                  .append("text")
                  .attr("class", "label")
                  .attr("x", width / 2 + margin)
                  .attr("y", height + margin * 1.7)
                  .attr("text-anchor", "middle")
                  .text("Les activités  professionnelles");

                svg
                  .append("text")
                  .attr("class", "title")
                  .attr("x", width / 2 + margin)
                  .attr("y", 40)
                  .attr("text-anchor", "middle")
                  .text(
                    "Les pourcentages de consomateurs de boissons alchooliques par activité  professionnelle"
                  );

                svg
                  .append("text")
                  .attr("class", "source")
                  .attr("x", width - margin / 2)
                  .attr("y", height + margin * 1.7)
                  .attr("text-anchor", "start")
                  .text("Source: MNT, 2020");
              });
            }
          }
        }
      }
    }

    if (what == "Sport") {
      if (by == "Region") {
        d3.csv("MNT.csv").then(function (data) {
          let regionsDup1D = [];
          let regions2D = [];
          let maxheight = 0;

          data.forEach(function (d) {
            regionsDup1D.push(d["2.wilaya"]);
          });
          let regions1D = Array.from(new Set(regionsDup1D));
          regions1D.forEach(function (w) {
            regions2D.push([
              w,
              [
                [0, 0, 0, "0", "Jamais"],
                [0, 0, 0, "1", "Rarement"],
                [0, 0, 0, "2", "Parfois"],
                [0, 0, 0, "3", "Quelquefois"],
                [0, 0, 0, "4", "Souvent"],
                [0, 0, 0, "5", "Toujours"],
              ],
            ]);
          });

          regions2D.forEach(function (w) {
            data.forEach(function (d) {
              if (d["2.wilaya"] == w[0]) {
                if (
                  d[
                    "17.Habituellement, combien de jours par semaine effectuez-vous des activités physiques?"
                  ] == "0"
                ) {
                  w[1][0][0] = w[1][0][0] + 1;
                } else {
                  if (
                    d[
                      "17.Habituellement, combien de jours par semaine effectuez-vous des activités physiques?"
                    ] == "1"
                  ) {
                    w[1][1][0] = w[1][1][0] + 1;
                  } else {
                    if (
                      d[
                        "17.Habituellement, combien de jours par semaine effectuez-vous des activités physiques?"
                      ] == "2"
                    ) {
                      w[1][2][0] = w[1][2][0] + 1;
                    } else {
                      if (
                        d[
                          "17.Habituellement, combien de jours par semaine effectuez-vous des activités physiques?"
                        ] == "3"
                      ) {
                        w[1][3][0] = w[1][3][0] + 1;
                      } else {
                        if (
                          d[
                            "17.Habituellement, combien de jours par semaine effectuez-vous des activités physiques?"
                          ] == "4"
                        ) {
                          w[1][4][0] = w[1][4][0] + 1;
                        } else {
                          if (
                            d[
                              "17.Habituellement, combien de jours par semaine effectuez-vous des activités physiques?"
                            ] == "5"
                          ) {
                            w[1][5][0] = w[1][5][0] + 1;
                          }
                        }
                      }
                    }
                  }
                }
                w[1][0][1] = w[1][0][1] + 1;
                w[1][1][1] = w[1][1][1] + 1;
                w[1][2][1] = w[1][2][1] + 1;
                w[1][3][1] = w[1][3][1] + 1;
                w[1][4][1] = w[1][4][1] + 1;
                w[1][5][1] = w[1][5][1] + 1;
              }
              w[1][0][2] = ((w[1][0][0] / w[1][0][1]) * 100).toFixed(1);
              w[1][1][2] = ((w[1][1][0] / w[1][1][1]) * 100).toFixed(1);
              w[1][2][2] = ((w[1][2][0] / w[1][2][1]) * 100).toFixed(1);
              w[1][3][2] = ((w[1][3][0] / w[1][3][1]) * 100).toFixed(1);
              w[1][4][2] = ((w[1][4][0] / w[1][4][1]) * 100).toFixed(1);
              w[1][5][2] = ((w[1][5][0] / w[1][5][1]) * 100).toFixed(1);
            });
            if (w[1][0][2] > maxheight) {
              maxheight = Math.ceil(w[1][0][2] / 5) * 5;
            }
            if (w[1][1][2] > maxheight) {
              maxheight = Math.ceil(w[1][1][2] / 5) * 5;
            }
            if (w[1][2][2] > maxheight) {
              maxheight = Math.ceil(w[1][2][2] / 5) * 5;
            }
            if (w[1][3][2] > maxheight) {
              maxheight = Math.ceil(w[1][3][2] / 5) * 5;
            }
            if (w[1][4][2] > maxheight) {
              maxheight = Math.ceil(w[1][4][2] / 5) * 5;
            }
            if (w[1][5][2] > maxheight) {
              maxheight = Math.ceil(w[1][5][2] / 5) * 5;
            }
          });

          const keys = ["wilaya", "values"];
          const subkeys = ["sum", "sumW", "prct", "rateN", "rate"];
          const values = regions2D;
          const objects = values.map((array) => {
            const object = {};

            object[keys[0]] = array[0];
            const values2 = array[1];
            const objects2 = values2.map((array2) => {
              const object2 = {};

              subkeys.forEach((subkey, i) => {
                object2[subkey] = array2[i];
              });

              return object2;
            });

            object[keys[1]] = objects2;

            return object;
          });

          var x0 = d3
            .scaleBand()
            .domain(objects.map((obj) => obj.wilaya))
            .range([0, width])
            .padding(0.1);

          var x1 = d3
            .scaleBand()
            .domain(objects[0].values.map((obj) => obj.rate))
            .range([0, x0.bandwidth()])
            .padding(0.05);

          var y = d3.scaleLinear().domain([0, maxheight]).range([height, 0]);

          const makeYLines = () => d3.axisLeft().scale(y);

          var color = d3
            .scaleOrdinal()
            .domain(objects[0].values.map((obj) => obj.rate))
            .range([
              "#7400b8",
              "#6930c3",
              "#5e60ce",
              "#5390d9",
              "#4ea8de",
              "#48bfe3",
            ]);

          chart
            .append("g")
            .attr("transform", `translate(0, ${height})`)
            .call(d3.axisBottom(x0));

          chart.append("g").call(d3.axisLeft(y));

          chart
            .append("g")
            .attr("class", "grid")
            .call(makeYLines().tickSize(-width, 0, 0).tickFormat(""));

          var slice = chart
            .selectAll(".slice")
            .data(objects)
            .enter()
            .append("g")
            .attr("class", "g")
            .attr("transform", function (d) {
              return "translate(" + x0(d.wilaya) + ",0)";
            });

          slice
            .selectAll("rect")
            .data(function (d) {
              return d.values;
            })
            .enter()
            .append("rect")
            .attr("width", x1.bandwidth())
            .attr("x", function (d) {
              return x1(d.rate);
            })
            .style("fill", function (d) {
              return color(d.rate);
            })
            .attr("y", function (d) {
              return y(0);
            })
            .attr("height", function (d) {
              return height - y(0);
            })
            .on("mouseover", function (d) {
              d3.select(this).style("fill", d3.rgb(color(d.rate)).darker(2));
            })
            .on("mouseout", function (d) {
              d3.select(this).style("fill", color(d.rate));
            });

          slice
            .selectAll("rect")
            .transition()
            .delay(function (d) {
              return Math.random() * 1000;
            })
            .duration(1000)
            .attr("y", function (d) {
              return y(d.prct);
            })
            .attr("height", function (d) {
              return height - y(d.prct);
            });

          //Legend
          var legend = svg
            .selectAll(".legend")
            .data(
              objects[0].values
                .map(function (d) {
                  return d.rate;
                })
                .reverse()
            )
            .enter()
            .append("g")
            .attr("class", "legend")
            .attr("transform", function (d, i) {
              return "translate(0," + i * 20 + ")";
            })
            .style("opacity", "0");

          legend
            .append("rect")
            .attr("x", width + margin - 18)
            .attr("width", 18)
            .attr("height", 18)
            .style("fill", function (d) {
              return color(d);
            });

          legend
            .append("text")
            .attr("x", width + margin - 24)
            .attr("y", 9)
            .attr("dy", ".35em")
            .style("text-anchor", "end")
            .text(function (d) {
              return d;
            });

          legend
            .transition()
            .duration(500)
            .delay(function (d, i) {
              return 1300 + 100 * i;
            })
            .style("opacity", "1");

          svg
            .append("text")
            .attr("class", "label")
            .attr("x", -(height / 2) - margin)
            .attr("y", margin / 2.4)
            .attr("transform", "rotate(-90)")
            .attr("text-anchor", "middle")
            .text("Le pourcentage de fréquence d'activité physique (%)");

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
            .text(
              "Les pourcentages des fréquences d'activité physique par wilaya"
            );

          svg
            .append("text")
            .attr("class", "source")
            .attr("x", width - margin / 2)
            .attr("y", height + margin * 1.7)
            .attr("text-anchor", "start")
            .text("Source: MNT, 2020");
        });
      } else {
        if (by == "Sexe") {
          d3.csv("MNT.csv").then(function (data) {
            let regionsDup1D = [];
            let regions2D = [];
            let maxheight = 0;

            data.forEach(function (d) {
              regionsDup1D.push(d["1.sexe"]);
            });
            let regions1D = Array.from(new Set(regionsDup1D));
            regions1D.forEach(function (w) {
              regions2D.push([
                w,
                [
                  [0, 0, 0, "0", "Jamais"],
                  [0, 0, 0, "1", "Rarement"],
                  [0, 0, 0, "2", "Parfois"],
                  [0, 0, 0, "3", "Quelquefois"],
                  [0, 0, 0, "4", "Souvent"],
                  [0, 0, 0, "5", "Toujours"],
                ],
              ]);
            });

            regions2D.forEach(function (w) {
              data.forEach(function (d) {
                if (d["1.sexe"] == w[0]) {
                  if (
                    d[
                      "17.Habituellement, combien de jours par semaine effectuez-vous des activités physiques?"
                    ] == "0"
                  ) {
                    w[1][0][0] = w[1][0][0] + 1;
                  } else {
                    if (
                      d[
                        "17.Habituellement, combien de jours par semaine effectuez-vous des activités physiques?"
                      ] == "1"
                    ) {
                      w[1][1][0] = w[1][1][0] + 1;
                    } else {
                      if (
                        d[
                          "17.Habituellement, combien de jours par semaine effectuez-vous des activités physiques?"
                        ] == "2"
                      ) {
                        w[1][2][0] = w[1][2][0] + 1;
                      } else {
                        if (
                          d[
                            "17.Habituellement, combien de jours par semaine effectuez-vous des activités physiques?"
                          ] == "3"
                        ) {
                          w[1][3][0] = w[1][3][0] + 1;
                        } else {
                          if (
                            d[
                              "17.Habituellement, combien de jours par semaine effectuez-vous des activités physiques?"
                            ] == "4"
                          ) {
                            w[1][4][0] = w[1][4][0] + 1;
                          } else {
                            if (
                              d[
                                "17.Habituellement, combien de jours par semaine effectuez-vous des activités physiques?"
                              ] == "5"
                            ) {
                              w[1][5][0] = w[1][5][0] + 1;
                            }
                          }
                        }
                      }
                    }
                  }
                  w[1][0][1] = w[1][0][1] + 1;
                  w[1][1][1] = w[1][1][1] + 1;
                  w[1][2][1] = w[1][2][1] + 1;
                  w[1][3][1] = w[1][3][1] + 1;
                  w[1][4][1] = w[1][4][1] + 1;
                  w[1][5][1] = w[1][5][1] + 1;
                }
                w[1][0][2] = ((w[1][0][0] / w[1][0][1]) * 100).toFixed(1);
                w[1][1][2] = ((w[1][1][0] / w[1][1][1]) * 100).toFixed(1);
                w[1][2][2] = ((w[1][2][0] / w[1][2][1]) * 100).toFixed(1);
                w[1][3][2] = ((w[1][3][0] / w[1][3][1]) * 100).toFixed(1);
                w[1][4][2] = ((w[1][4][0] / w[1][4][1]) * 100).toFixed(1);
                w[1][5][2] = ((w[1][5][0] / w[1][5][1]) * 100).toFixed(1);
              });
              if (w[1][0][2] > maxheight) {
                maxheight = Math.ceil(w[1][0][2] / 5) * 5;
              }
              if (w[1][1][2] > maxheight) {
                maxheight = Math.ceil(w[1][1][2] / 5) * 5;
              }
              if (w[1][2][2] > maxheight) {
                maxheight = Math.ceil(w[1][2][2] / 5) * 5;
              }
              if (w[1][3][2] > maxheight) {
                maxheight = Math.ceil(w[1][3][2] / 5) * 5;
              }
              if (w[1][4][2] > maxheight) {
                maxheight = Math.ceil(w[1][4][2] / 5) * 5;
              }
              if (w[1][5][2] > maxheight) {
                maxheight = Math.ceil(w[1][5][2] / 5) * 5;
              }
            });

            const keys = ["wilaya", "values"];
            const subkeys = ["sum", "sumW", "prct", "rateN", "rate"];
            const values = regions2D;
            const objects = values.map((array) => {
              const object = {};

              object[keys[0]] = array[0];
              const values2 = array[1];
              const objects2 = values2.map((array2) => {
                const object2 = {};

                subkeys.forEach((subkey, i) => {
                  object2[subkey] = array2[i];
                });

                return object2;
              });

              object[keys[1]] = objects2;

              return object;
            });

            var x0 = d3
              .scaleBand()
              .domain(objects.map((obj) => obj.wilaya))
              .range([0, width])
              .padding(0.1);

            var x1 = d3
              .scaleBand()
              .domain(objects[0].values.map((obj) => obj.rate))
              .range([0, x0.bandwidth()])
              .padding(0.05);

            var y = d3.scaleLinear().domain([0, maxheight]).range([height, 0]);

            const makeYLines = () => d3.axisLeft().scale(y);

            var color = d3
              .scaleOrdinal()
              .domain(objects[0].values.map((obj) => obj.rate))
              .range([
                "#7400b8",
                "#6930c3",
                "#5e60ce",
                "#5390d9",
                "#4ea8de",
                "#48bfe3",
              ]);

            chart
              .append("g")
              .attr("transform", `translate(0, ${height})`)
              .call(d3.axisBottom(x0));

            chart.append("g").call(d3.axisLeft(y));

            chart
              .append("g")
              .attr("class", "grid")
              .call(makeYLines().tickSize(-width, 0, 0).tickFormat(""));

            var slice = chart
              .selectAll(".slice")
              .data(objects)
              .enter()
              .append("g")
              .attr("class", "g")
              .attr("transform", function (d) {
                return "translate(" + x0(d.wilaya) + ",0)";
              });

            slice
              .selectAll("rect")
              .data(function (d) {
                return d.values;
              })
              .enter()
              .append("rect")
              .attr("width", x1.bandwidth())
              .attr("x", function (d) {
                return x1(d.rate);
              })
              .style("fill", function (d) {
                return color(d.rate);
              })
              .attr("y", function (d) {
                return y(0);
              })
              .attr("height", function (d) {
                return height - y(0);
              })
              .on("mouseover", function (d) {
                d3.select(this).style("fill", d3.rgb(color(d.rate)).darker(2));
              })
              .on("mouseout", function (d) {
                d3.select(this).style("fill", color(d.rate));
              });

            slice
              .selectAll("rect")
              .transition()
              .delay(function (d) {
                return Math.random() * 1000;
              })
              .duration(1000)
              .attr("y", function (d) {
                return y(d.prct);
              })
              .attr("height", function (d) {
                return height - y(d.prct);
              });

            //Legend
            var legend = svg
              .selectAll(".legend")
              .data(
                objects[0].values
                  .map(function (d) {
                    return d.rate;
                  })
                  .reverse()
              )
              .enter()
              .append("g")
              .attr("class", "legend")
              .attr("transform", function (d, i) {
                return "translate(0," + i * 20 + ")";
              })
              .style("opacity", "0");

            legend
              .append("rect")
              .attr("x", width + margin - 18)
              .attr("width", 18)
              .attr("height", 18)
              .style("fill", function (d) {
                return color(d);
              });

            legend
              .append("text")
              .attr("x", width + margin - 24)
              .attr("y", 9)
              .attr("dy", ".35em")
              .style("text-anchor", "end")
              .text(function (d) {
                return d;
              });

            legend
              .transition()
              .duration(500)
              .delay(function (d, i) {
                return 1300 + 100 * i;
              })
              .style("opacity", "1");

            svg
              .append("text")
              .attr("class", "label")
              .attr("x", -(height / 2) - margin)
              .attr("y", margin / 2.4)
              .attr("transform", "rotate(-90)")
              .attr("text-anchor", "middle")
              .text("Le pourcentage de fréquence d'activité physique (%)");

            svg
              .append("text")
              .attr("class", "label")
              .attr("x", width / 2 + margin)
              .attr("y", height + margin * 1.7)
              .attr("text-anchor", "middle")
              .text("Sexe");

            svg
              .append("text")
              .attr("class", "title")
              .attr("x", width / 2 + margin)
              .attr("y", 40)
              .attr("text-anchor", "middle")
              .text(
                "Les pourcentages des fréquences d'activité physique par sexe"
              );

            svg
              .append("text")
              .attr("class", "source")
              .attr("x", width - margin / 2)
              .attr("y", height + margin * 1.7)
              .attr("text-anchor", "start")
              .text("Source: MNT, 2020");
          });
        } else {
          if (by == "NivEtud") {
            d3.csv("MNT.csv").then(function (data) {
              let regionsDup1D = [];
              let regions2D = [];
              let maxheight = 0;

              data.forEach(function (d) {
                regionsDup1D.push(d["3.Quel est votre niveau d'étude"]);
              });
              let regions1D = Array.from(new Set(regionsDup1D));
              regions1D.forEach(function (w) {
                regions2D.push([
                  w,
                  [
                    [0, 0, 0, "0", "Jamais"],
                    [0, 0, 0, "1", "Rarement"],
                    [0, 0, 0, "2", "Parfois"],
                    [0, 0, 0, "3", "Quelquefois"],
                    [0, 0, 0, "4", "Souvent"],
                    [0, 0, 0, "5", "Toujours"],
                  ],
                ]);
              });

              regions2D.forEach(function (w) {
                data.forEach(function (d) {
                  if (d["3.Quel est votre niveau d'étude"] == w[0]) {
                    if (
                      d[
                        "17.Habituellement, combien de jours par semaine effectuez-vous des activités physiques?"
                      ] == "0"
                    ) {
                      w[1][0][0] = w[1][0][0] + 1;
                    } else {
                      if (
                        d[
                          "17.Habituellement, combien de jours par semaine effectuez-vous des activités physiques?"
                        ] == "1"
                      ) {
                        w[1][1][0] = w[1][1][0] + 1;
                      } else {
                        if (
                          d[
                            "17.Habituellement, combien de jours par semaine effectuez-vous des activités physiques?"
                          ] == "2"
                        ) {
                          w[1][2][0] = w[1][2][0] + 1;
                        } else {
                          if (
                            d[
                              "17.Habituellement, combien de jours par semaine effectuez-vous des activités physiques?"
                            ] == "3"
                          ) {
                            w[1][3][0] = w[1][3][0] + 1;
                          } else {
                            if (
                              d[
                                "17.Habituellement, combien de jours par semaine effectuez-vous des activités physiques?"
                              ] == "4"
                            ) {
                              w[1][4][0] = w[1][4][0] + 1;
                            } else {
                              if (
                                d[
                                  "17.Habituellement, combien de jours par semaine effectuez-vous des activités physiques?"
                                ] == "5"
                              ) {
                                w[1][5][0] = w[1][5][0] + 1;
                              }
                            }
                          }
                        }
                      }
                    }
                    w[1][0][1] = w[1][0][1] + 1;
                    w[1][1][1] = w[1][1][1] + 1;
                    w[1][2][1] = w[1][2][1] + 1;
                    w[1][3][1] = w[1][3][1] + 1;
                    w[1][4][1] = w[1][4][1] + 1;
                    w[1][5][1] = w[1][5][1] + 1;
                  }
                  w[1][0][2] = ((w[1][0][0] / w[1][0][1]) * 100).toFixed(1);
                  w[1][1][2] = ((w[1][1][0] / w[1][1][1]) * 100).toFixed(1);
                  w[1][2][2] = ((w[1][2][0] / w[1][2][1]) * 100).toFixed(1);
                  w[1][3][2] = ((w[1][3][0] / w[1][3][1]) * 100).toFixed(1);
                  w[1][4][2] = ((w[1][4][0] / w[1][4][1]) * 100).toFixed(1);
                  w[1][5][2] = ((w[1][5][0] / w[1][5][1]) * 100).toFixed(1);
                });
                if (w[1][0][2] > maxheight) {
                  maxheight = Math.ceil(w[1][0][2] / 5) * 5;
                }
                if (w[1][1][2] > maxheight) {
                  maxheight = Math.ceil(w[1][1][2] / 5) * 5;
                }
                if (w[1][2][2] > maxheight) {
                  maxheight = Math.ceil(w[1][2][2] / 5) * 5;
                }
                if (w[1][3][2] > maxheight) {
                  maxheight = Math.ceil(w[1][3][2] / 5) * 5;
                }
                if (w[1][4][2] > maxheight) {
                  maxheight = Math.ceil(w[1][4][2] / 5) * 5;
                }
                if (w[1][5][2] > maxheight) {
                  maxheight = Math.ceil(w[1][5][2] / 5) * 5;
                }
              });

              const keys = ["wilaya", "values"];
              const subkeys = ["sum", "sumW", "prct", "rateN", "rate"];
              const values = regions2D;
              const objects = values.map((array) => {
                const object = {};

                object[keys[0]] = array[0];
                const values2 = array[1];
                const objects2 = values2.map((array2) => {
                  const object2 = {};

                  subkeys.forEach((subkey, i) => {
                    object2[subkey] = array2[i];
                  });

                  return object2;
                });

                object[keys[1]] = objects2;

                return object;
              });

              var x0 = d3
                .scaleBand()
                .domain(objects.map((obj) => obj.wilaya))
                .range([0, width])
                .padding(0.1);

              var x1 = d3
                .scaleBand()
                .domain(objects[0].values.map((obj) => obj.rate))
                .range([0, x0.bandwidth()])
                .padding(0.05);

              var y = d3
                .scaleLinear()
                .domain([0, maxheight])
                .range([height, 0]);

              const makeYLines = () => d3.axisLeft().scale(y);

              var color = d3
                .scaleOrdinal()
                .domain(objects[0].values.map((obj) => obj.rate))
                .range([
                  "#7400b8",
                  "#6930c3",
                  "#5e60ce",
                  "#5390d9",
                  "#4ea8de",
                  "#48bfe3",
                ]);

              chart
                .append("g")
                .attr("transform", `translate(0, ${height})`)
                .call(d3.axisBottom(x0));

              chart.append("g").call(d3.axisLeft(y));

              chart
                .append("g")
                .attr("class", "grid")
                .call(makeYLines().tickSize(-width, 0, 0).tickFormat(""));

              var slice = chart
                .selectAll(".slice")
                .data(objects)
                .enter()
                .append("g")
                .attr("class", "g")
                .attr("transform", function (d) {
                  return "translate(" + x0(d.wilaya) + ",0)";
                });

              slice
                .selectAll("rect")
                .data(function (d) {
                  return d.values;
                })
                .enter()
                .append("rect")
                .attr("width", x1.bandwidth())
                .attr("x", function (d) {
                  return x1(d.rate);
                })
                .style("fill", function (d) {
                  return color(d.rate);
                })
                .attr("y", function (d) {
                  return y(0);
                })
                .attr("height", function (d) {
                  return height - y(0);
                })
                .on("mouseover", function (d) {
                  d3.select(this).style(
                    "fill",
                    d3.rgb(color(d.rate)).darker(2)
                  );
                })
                .on("mouseout", function (d) {
                  d3.select(this).style("fill", color(d.rate));
                });

              slice
                .selectAll("rect")
                .transition()
                .delay(function (d) {
                  return Math.random() * 1000;
                })
                .duration(1000)
                .attr("y", function (d) {
                  return y(d.prct);
                })
                .attr("height", function (d) {
                  return height - y(d.prct);
                });

              //Legend
              var legend = svg
                .selectAll(".legend")
                .data(
                  objects[0].values
                    .map(function (d) {
                      return d.rate;
                    })
                    .reverse()
                )
                .enter()
                .append("g")
                .attr("class", "legend")
                .attr("transform", function (d, i) {
                  return "translate(0," + i * 20 + ")";
                })
                .style("opacity", "0");

              legend
                .append("rect")
                .attr("x", width + margin - 18)
                .attr("width", 18)
                .attr("height", 18)
                .style("fill", function (d) {
                  return color(d);
                });

              legend
                .append("text")
                .attr("x", width + margin - 24)
                .attr("y", 9)
                .attr("dy", ".35em")
                .style("text-anchor", "end")
                .text(function (d) {
                  return d;
                });

              legend
                .transition()
                .duration(500)
                .delay(function (d, i) {
                  return 1300 + 100 * i;
                })
                .style("opacity", "1");

              svg
                .append("text")
                .attr("class", "label")
                .attr("x", -(height / 2) - margin)
                .attr("y", margin / 2.4)
                .attr("transform", "rotate(-90)")
                .attr("text-anchor", "middle")
                .text("Le pourcentage de fréquence d'activité physique (%)");

              svg
                .append("text")
                .attr("class", "label")
                .attr("x", width / 2 + margin)
                .attr("y", height + margin * 1.7)
                .attr("text-anchor", "middle")
                .text("Les niveaux d'étude");

              svg
                .append("text")
                .attr("class", "title")
                .attr("x", width / 2 + margin)
                .attr("y", 40)
                .attr("text-anchor", "middle")
                .text(
                  "Les pourcentages des fréquences d'activité physique par niveau d'étude"
                );

              svg
                .append("text")
                .attr("class", "source")
                .attr("x", width - margin / 2)
                .attr("y", height + margin * 1.7)
                .attr("text-anchor", "start")
                .text("Source: MNT, 2020");
            });
          } else {
            if (by == "Activity") {
              d3.csv("MNT.csv").then(function (data) {
                let regionsDup1D = [];
                let regions2D = [];
                let maxheight = 0;

                data.forEach(function (d) {
                  regionsDup1D.push(
                    d["4.Quelles est votre activité  professionnelle"]
                  );
                });
                let regions1D = Array.from(new Set(regionsDup1D));
                regions1D.forEach(function (w) {
                  regions2D.push([
                    w,
                    [
                      [0, 0, 0, "0", "Jamais"],
                      [0, 0, 0, "1", "Rarement"],
                      [0, 0, 0, "2", "Parfois"],
                      [0, 0, 0, "3", "Quelquefois"],
                      [0, 0, 0, "4", "Souvent"],
                      [0, 0, 0, "5", "Toujours"],
                    ],
                  ]);
                });

                regions2D.forEach(function (w) {
                  data.forEach(function (d) {
                    if (
                      d["4.Quelles est votre activité  professionnelle"] == w[0]
                    ) {
                      if (
                        d[
                          "17.Habituellement, combien de jours par semaine effectuez-vous des activités physiques?"
                        ] == "0"
                      ) {
                        w[1][0][0] = w[1][0][0] + 1;
                      } else {
                        if (
                          d[
                            "17.Habituellement, combien de jours par semaine effectuez-vous des activités physiques?"
                          ] == "1"
                        ) {
                          w[1][1][0] = w[1][1][0] + 1;
                        } else {
                          if (
                            d[
                              "17.Habituellement, combien de jours par semaine effectuez-vous des activités physiques?"
                            ] == "2"
                          ) {
                            w[1][2][0] = w[1][2][0] + 1;
                          } else {
                            if (
                              d[
                                "17.Habituellement, combien de jours par semaine effectuez-vous des activités physiques?"
                              ] == "3"
                            ) {
                              w[1][3][0] = w[1][3][0] + 1;
                            } else {
                              if (
                                d[
                                  "17.Habituellement, combien de jours par semaine effectuez-vous des activités physiques?"
                                ] == "4"
                              ) {
                                w[1][4][0] = w[1][4][0] + 1;
                              } else {
                                if (
                                  d[
                                    "17.Habituellement, combien de jours par semaine effectuez-vous des activités physiques?"
                                  ] == "5"
                                ) {
                                  w[1][5][0] = w[1][5][0] + 1;
                                }
                              }
                            }
                          }
                        }
                      }
                      w[1][0][1] = w[1][0][1] + 1;
                      w[1][1][1] = w[1][1][1] + 1;
                      w[1][2][1] = w[1][2][1] + 1;
                      w[1][3][1] = w[1][3][1] + 1;
                      w[1][4][1] = w[1][4][1] + 1;
                      w[1][5][1] = w[1][5][1] + 1;
                    }
                    w[1][0][2] = ((w[1][0][0] / w[1][0][1]) * 100).toFixed(1);
                    w[1][1][2] = ((w[1][1][0] / w[1][1][1]) * 100).toFixed(1);
                    w[1][2][2] = ((w[1][2][0] / w[1][2][1]) * 100).toFixed(1);
                    w[1][3][2] = ((w[1][3][0] / w[1][3][1]) * 100).toFixed(1);
                    w[1][4][2] = ((w[1][4][0] / w[1][4][1]) * 100).toFixed(1);
                    w[1][5][2] = ((w[1][5][0] / w[1][5][1]) * 100).toFixed(1);
                  });
                  if (w[1][0][2] > maxheight) {
                    maxheight = Math.ceil(w[1][0][2] / 5) * 5;
                  }
                  if (w[1][1][2] > maxheight) {
                    maxheight = Math.ceil(w[1][1][2] / 5) * 5;
                  }
                  if (w[1][2][2] > maxheight) {
                    maxheight = Math.ceil(w[1][2][2] / 5) * 5;
                  }
                  if (w[1][3][2] > maxheight) {
                    maxheight = Math.ceil(w[1][3][2] / 5) * 5;
                  }
                  if (w[1][4][2] > maxheight) {
                    maxheight = Math.ceil(w[1][4][2] / 5) * 5;
                  }
                  if (w[1][5][2] > maxheight) {
                    maxheight = Math.ceil(w[1][5][2] / 5) * 5;
                  }
                });

                const keys = ["wilaya", "values"];
                const subkeys = ["sum", "sumW", "prct", "rateN", "rate"];
                const values = regions2D;
                const objects = values.map((array) => {
                  const object = {};

                  object[keys[0]] = array[0];
                  const values2 = array[1];
                  const objects2 = values2.map((array2) => {
                    const object2 = {};

                    subkeys.forEach((subkey, i) => {
                      object2[subkey] = array2[i];
                    });

                    return object2;
                  });

                  object[keys[1]] = objects2;

                  return object;
                });

                var x0 = d3
                  .scaleBand()
                  .domain(objects.map((obj) => obj.wilaya))
                  .range([0, width])
                  .padding(0.1);

                var x1 = d3
                  .scaleBand()
                  .domain(objects[0].values.map((obj) => obj.rate))
                  .range([0, x0.bandwidth()])
                  .padding(0.05);

                var y = d3
                  .scaleLinear()
                  .domain([0, maxheight])
                  .range([height, 0]);

                const makeYLines = () => d3.axisLeft().scale(y);

                var color = d3
                  .scaleOrdinal()
                  .domain(objects[0].values.map((obj) => obj.rate))
                  .range([
                    "#7400b8",
                    "#6930c3",
                    "#5e60ce",
                    "#5390d9",
                    "#4ea8de",
                    "#48bfe3",
                  ]);

                chart
                  .append("g")
                  .attr("transform", `translate(0, ${height})`)
                  .call(d3.axisBottom(x0));

                chart.append("g").call(d3.axisLeft(y));

                chart
                  .append("g")
                  .attr("class", "grid")
                  .call(makeYLines().tickSize(-width, 0, 0).tickFormat(""));

                var slice = chart
                  .selectAll(".slice")
                  .data(objects)
                  .enter()
                  .append("g")
                  .attr("class", "g")
                  .attr("transform", function (d) {
                    return "translate(" + x0(d.wilaya) + ",0)";
                  });

                slice
                  .selectAll("rect")
                  .data(function (d) {
                    return d.values;
                  })
                  .enter()
                  .append("rect")
                  .attr("width", x1.bandwidth())
                  .attr("x", function (d) {
                    return x1(d.rate);
                  })
                  .style("fill", function (d) {
                    return color(d.rate);
                  })
                  .attr("y", function (d) {
                    return y(0);
                  })
                  .attr("height", function (d) {
                    return height - y(0);
                  })
                  .on("mouseover", function (d) {
                    d3.select(this).style(
                      "fill",
                      d3.rgb(color(d.rate)).darker(2)
                    );
                  })
                  .on("mouseout", function (d) {
                    d3.select(this).style("fill", color(d.rate));
                  });

                slice
                  .selectAll("rect")
                  .transition()
                  .delay(function (d) {
                    return Math.random() * 1000;
                  })
                  .duration(1000)
                  .attr("y", function (d) {
                    return y(d.prct);
                  })
                  .attr("height", function (d) {
                    return height - y(d.prct);
                  });

                //Legend
                var legend = svg
                  .selectAll(".legend")
                  .data(
                    objects[0].values
                      .map(function (d) {
                        return d.rate;
                      })
                      .reverse()
                  )
                  .enter()
                  .append("g")
                  .attr("class", "legend")
                  .attr("transform", function (d, i) {
                    return "translate(0," + i * 20 + ")";
                  })
                  .style("opacity", "0");

                legend
                  .append("rect")
                  .attr("x", width + margin - 18)
                  .attr("width", 18)
                  .attr("height", 18)
                  .style("fill", function (d) {
                    return color(d);
                  });

                legend
                  .append("text")
                  .attr("x", width + margin - 24)
                  .attr("y", 9)
                  .attr("dy", ".35em")
                  .style("text-anchor", "end")
                  .text(function (d) {
                    return d;
                  });

                legend
                  .transition()
                  .duration(500)
                  .delay(function (d, i) {
                    return 1300 + 100 * i;
                  })
                  .style("opacity", "1");

                svg
                  .append("text")
                  .attr("class", "label")
                  .attr("x", -(height / 2) - margin)
                  .attr("y", margin / 2.4)
                  .attr("transform", "rotate(-90)")
                  .attr("text-anchor", "middle")
                  .text("Le pourcentage de fréquence d'activité physique (%)");

                svg
                  .append("text")
                  .attr("class", "label")
                  .attr("x", width / 2 + margin)
                  .attr("y", height + margin * 1.7)
                  .attr("text-anchor", "middle")
                  .text("Les activités professionnelles");

                svg
                  .append("text")
                  .attr("class", "title")
                  .attr("x", width / 2 + margin)
                  .attr("y", 40)
                  .attr("text-anchor", "middle")
                  .text(
                    "Les pourcentages des fréquences d'activité physique par activité professionnelle"
                  );

                svg
                  .append("text")
                  .attr("class", "source")
                  .attr("x", width - margin / 2)
                  .attr("y", height + margin * 1.7)
                  .attr("text-anchor", "start")
                  .text("Source: MNT, 2020");
              });
            }
          }
        }
      }
    }

    if (what == "ConsoFruit") {
      if (by == "Region") {
        d3.csv("MNT.csv").then(function (data) {
          let regionsDup1D = [];
          let regions2D = [];
          let maxheight = 0;

          data.forEach(function (d) {
            regionsDup1D.push(d["2.wilaya"]);
          });
          let regions1D = Array.from(new Set(regionsDup1D));
          regions1D.forEach(function (w) {
            regions2D.push([
              w,
              [
                [0, 0, 0, "0", "Jamais"],
                [0, 0, 0, "1", "Rarement"],
                [0, 0, 0, "2", "Parfois"],
                [0, 0, 0, "3", "Quelquefois"],
                [0, 0, 0, "4", "Souvent"],
                [0, 0, 0, "5", "Toujours"],
              ],
            ]);
          });

          regions2D.forEach(function (w) {
            data.forEach(function (d) {
              if (d["2.wilaya"] == w[0]) {
                if (
                  d[
                    "14.Habituellement, combien de jours par semaine consommez-vous des fruits ?"
                  ] == "0"
                ) {
                  w[1][0][0] = w[1][0][0] + 1;
                } else {
                  if (
                    d[
                      "14.Habituellement, combien de jours par semaine consommez-vous des fruits ?"
                    ] == "1"
                  ) {
                    w[1][1][0] = w[1][1][0] + 1;
                  } else {
                    if (
                      d[
                        "14.Habituellement, combien de jours par semaine consommez-vous des fruits ?"
                      ] == "2"
                    ) {
                      w[1][2][0] = w[1][2][0] + 1;
                    } else {
                      if (
                        d[
                          "14.Habituellement, combien de jours par semaine consommez-vous des fruits ?"
                        ] == "3"
                      ) {
                        w[1][3][0] = w[1][3][0] + 1;
                      } else {
                        if (
                          d[
                            "14.Habituellement, combien de jours par semaine consommez-vous des fruits ?"
                          ] == "4"
                        ) {
                          w[1][4][0] = w[1][4][0] + 1;
                        } else {
                          if (
                            d[
                              "14.Habituellement, combien de jours par semaine consommez-vous des fruits ?"
                            ] == "5"
                          ) {
                            w[1][5][0] = w[1][5][0] + 1;
                          }
                        }
                      }
                    }
                  }
                }
                w[1][0][1] = w[1][0][1] + 1;
                w[1][1][1] = w[1][1][1] + 1;
                w[1][2][1] = w[1][2][1] + 1;
                w[1][3][1] = w[1][3][1] + 1;
                w[1][4][1] = w[1][4][1] + 1;
                w[1][5][1] = w[1][5][1] + 1;
              }
              w[1][0][2] = ((w[1][0][0] / w[1][0][1]) * 100).toFixed(1);
              w[1][1][2] = ((w[1][1][0] / w[1][1][1]) * 100).toFixed(1);
              w[1][2][2] = ((w[1][2][0] / w[1][2][1]) * 100).toFixed(1);
              w[1][3][2] = ((w[1][3][0] / w[1][3][1]) * 100).toFixed(1);
              w[1][4][2] = ((w[1][4][0] / w[1][4][1]) * 100).toFixed(1);
              w[1][5][2] = ((w[1][5][0] / w[1][5][1]) * 100).toFixed(1);
            });
            if (w[1][0][2] > maxheight) {
              maxheight = Math.ceil(w[1][0][2] / 5) * 5;
            }
            if (w[1][1][2] > maxheight) {
              maxheight = Math.ceil(w[1][1][2] / 5) * 5;
            }
            if (w[1][2][2] > maxheight) {
              maxheight = Math.ceil(w[1][2][2] / 5) * 5;
            }
            if (w[1][3][2] > maxheight) {
              maxheight = Math.ceil(w[1][3][2] / 5) * 5;
            }
            if (w[1][4][2] > maxheight) {
              maxheight = Math.ceil(w[1][4][2] / 5) * 5;
            }
            if (w[1][5][2] > maxheight) {
              maxheight = Math.ceil(w[1][5][2] / 5) * 5;
            }
          });

          const keys = ["wilaya", "values"];
          const subkeys = ["sum", "sumW", "prct", "rateN", "rate"];
          const values = regions2D;
          const objects = values.map((array) => {
            const object = {};

            object[keys[0]] = array[0];
            const values2 = array[1];
            const objects2 = values2.map((array2) => {
              const object2 = {};

              subkeys.forEach((subkey, i) => {
                object2[subkey] = array2[i];
              });

              return object2;
            });

            object[keys[1]] = objects2;

            return object;
          });

          var x0 = d3
            .scaleBand()
            .domain(objects.map((obj) => obj.wilaya))
            .range([0, width])
            .padding(0.1);

          var x1 = d3
            .scaleBand()
            .domain(objects[0].values.map((obj) => obj.rate))
            .range([0, x0.bandwidth()])
            .padding(0.05);

          var y = d3.scaleLinear().domain([0, maxheight]).range([height, 0]);

          const makeYLines = () => d3.axisLeft().scale(y);

          var color = d3
            .scaleOrdinal()
            .domain(objects[0].values.map((obj) => obj.rate))
            .range([
              "#7400b8",
              "#6930c3",
              "#5e60ce",
              "#5390d9",
              "#4ea8de",
              "#48bfe3",
            ]);

          chart
            .append("g")
            .attr("transform", `translate(0, ${height})`)
            .call(d3.axisBottom(x0));

          chart.append("g").call(d3.axisLeft(y));

          chart
            .append("g")
            .attr("class", "grid")
            .call(makeYLines().tickSize(-width, 0, 0).tickFormat(""));

          var slice = chart
            .selectAll(".slice")
            .data(objects)
            .enter()
            .append("g")
            .attr("class", "g")
            .attr("transform", function (d) {
              return "translate(" + x0(d.wilaya) + ",0)";
            });

          slice
            .selectAll("rect")
            .data(function (d) {
              return d.values;
            })
            .enter()
            .append("rect")
            .attr("width", x1.bandwidth())
            .attr("x", function (d) {
              return x1(d.rate);
            })
            .style("fill", function (d) {
              return color(d.rate);
            })
            .attr("y", function (d) {
              return y(0);
            })
            .attr("height", function (d) {
              return height - y(0);
            })
            .on("mouseover", function (d) {
              d3.select(this).style("fill", d3.rgb(color(d.rate)).darker(2));
            })
            .on("mouseout", function (d) {
              d3.select(this).style("fill", color(d.rate));
            });

          slice
            .selectAll("rect")
            .transition()
            .delay(function (d) {
              return Math.random() * 1000;
            })
            .duration(1000)
            .attr("y", function (d) {
              return y(d.prct);
            })
            .attr("height", function (d) {
              return height - y(d.prct);
            });

          //Legend
          var legend = svg
            .selectAll(".legend")
            .data(
              objects[0].values
                .map(function (d) {
                  return d.rate;
                })
                .reverse()
            )
            .enter()
            .append("g")
            .attr("class", "legend")
            .attr("transform", function (d, i) {
              return "translate(0," + i * 20 + ")";
            })
            .style("opacity", "0");

          legend
            .append("rect")
            .attr("x", width + margin - 18)
            .attr("width", 18)
            .attr("height", 18)
            .style("fill", function (d) {
              return color(d);
            });

          legend
            .append("text")
            .attr("x", width + margin - 24)
            .attr("y", 9)
            .attr("dy", ".35em")
            .style("text-anchor", "end")
            .text(function (d) {
              return d;
            });

          legend
            .transition()
            .duration(500)
            .delay(function (d, i) {
              return 1300 + 100 * i;
            })
            .style("opacity", "1");

          svg
            .append("text")
            .attr("class", "label")
            .attr("x", -(height / 2) - margin)
            .attr("y", margin / 2.4)
            .attr("transform", "rotate(-90)")
            .attr("text-anchor", "middle")
            .text("Le pourcentage de fréquence de consomation de fruits (%)");

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
            .text(
              "Les pourcentages des fréquences de consomation de fruits par wilaya"
            );

          svg
            .append("text")
            .attr("class", "source")
            .attr("x", width - margin / 2)
            .attr("y", height + margin * 1.7)
            .attr("text-anchor", "start")
            .text("Source: MNT, 2020");
        });
      } else {
        if (by == "Sexe") {
          d3.csv("MNT.csv").then(function (data) {
            let regionsDup1D = [];
            let regions2D = [];
            let maxheight = 0;

            data.forEach(function (d) {
              regionsDup1D.push(d["1.sexe"]);
            });
            let regions1D = Array.from(new Set(regionsDup1D));
            regions1D.forEach(function (w) {
              regions2D.push([
                w,
                [
                  [0, 0, 0, "0", "Jamais"],
                  [0, 0, 0, "1", "Rarement"],
                  [0, 0, 0, "2", "Parfois"],
                  [0, 0, 0, "3", "Quelquefois"],
                  [0, 0, 0, "4", "Souvent"],
                  [0, 0, 0, "5", "Toujours"],
                ],
              ]);
            });

            regions2D.forEach(function (w) {
              data.forEach(function (d) {
                if (d["1.sexe"] == w[0]) {
                  if (
                    d[
                      "14.Habituellement, combien de jours par semaine consommez-vous des fruits ?"
                    ] == "0"
                  ) {
                    w[1][0][0] = w[1][0][0] + 1;
                  } else {
                    if (
                      d[
                        "14.Habituellement, combien de jours par semaine consommez-vous des fruits ?"
                      ] == "1"
                    ) {
                      w[1][1][0] = w[1][1][0] + 1;
                    } else {
                      if (
                        d[
                          "14.Habituellement, combien de jours par semaine consommez-vous des fruits ?"
                        ] == "2"
                      ) {
                        w[1][2][0] = w[1][2][0] + 1;
                      } else {
                        if (
                          d[
                            "14.Habituellement, combien de jours par semaine consommez-vous des fruits ?"
                          ] == "3"
                        ) {
                          w[1][3][0] = w[1][3][0] + 1;
                        } else {
                          if (
                            d[
                              "14.Habituellement, combien de jours par semaine consommez-vous des fruits ?"
                            ] == "4"
                          ) {
                            w[1][4][0] = w[1][4][0] + 1;
                          } else {
                            if (
                              d[
                                "14.Habituellement, combien de jours par semaine consommez-vous des fruits ?"
                              ] == "5"
                            ) {
                              w[1][5][0] = w[1][5][0] + 1;
                            }
                          }
                        }
                      }
                    }
                  }
                  w[1][0][1] = w[1][0][1] + 1;
                  w[1][1][1] = w[1][1][1] + 1;
                  w[1][2][1] = w[1][2][1] + 1;
                  w[1][3][1] = w[1][3][1] + 1;
                  w[1][4][1] = w[1][4][1] + 1;
                  w[1][5][1] = w[1][5][1] + 1;
                }
                w[1][0][2] = ((w[1][0][0] / w[1][0][1]) * 100).toFixed(1);
                w[1][1][2] = ((w[1][1][0] / w[1][1][1]) * 100).toFixed(1);
                w[1][2][2] = ((w[1][2][0] / w[1][2][1]) * 100).toFixed(1);
                w[1][3][2] = ((w[1][3][0] / w[1][3][1]) * 100).toFixed(1);
                w[1][4][2] = ((w[1][4][0] / w[1][4][1]) * 100).toFixed(1);
                w[1][5][2] = ((w[1][5][0] / w[1][5][1]) * 100).toFixed(1);
              });
              if (w[1][0][2] > maxheight) {
                maxheight = Math.ceil(w[1][0][2] / 5) * 5;
              }
              if (w[1][1][2] > maxheight) {
                maxheight = Math.ceil(w[1][1][2] / 5) * 5;
              }
              if (w[1][2][2] > maxheight) {
                maxheight = Math.ceil(w[1][2][2] / 5) * 5;
              }
              if (w[1][3][2] > maxheight) {
                maxheight = Math.ceil(w[1][3][2] / 5) * 5;
              }
              if (w[1][4][2] > maxheight) {
                maxheight = Math.ceil(w[1][4][2] / 5) * 5;
              }
              if (w[1][5][2] > maxheight) {
                maxheight = Math.ceil(w[1][5][2] / 5) * 5;
              }
            });

            const keys = ["wilaya", "values"];
            const subkeys = ["sum", "sumW", "prct", "rateN", "rate"];
            const values = regions2D;
            const objects = values.map((array) => {
              const object = {};

              object[keys[0]] = array[0];
              const values2 = array[1];
              const objects2 = values2.map((array2) => {
                const object2 = {};

                subkeys.forEach((subkey, i) => {
                  object2[subkey] = array2[i];
                });

                return object2;
              });

              object[keys[1]] = objects2;

              return object;
            });

            var x0 = d3
              .scaleBand()
              .domain(objects.map((obj) => obj.wilaya))
              .range([0, width])
              .padding(0.1);

            var x1 = d3
              .scaleBand()
              .domain(objects[0].values.map((obj) => obj.rate))
              .range([0, x0.bandwidth()])
              .padding(0.05);

            var y = d3.scaleLinear().domain([0, maxheight]).range([height, 0]);

            const makeYLines = () => d3.axisLeft().scale(y);

            var color = d3
              .scaleOrdinal()
              .domain(objects[0].values.map((obj) => obj.rate))
              .range([
                "#7400b8",
                "#6930c3",
                "#5e60ce",
                "#5390d9",
                "#4ea8de",
                "#48bfe3",
              ]);

            chart
              .append("g")
              .attr("transform", `translate(0, ${height})`)
              .call(d3.axisBottom(x0));

            chart.append("g").call(d3.axisLeft(y));

            chart
              .append("g")
              .attr("class", "grid")
              .call(makeYLines().tickSize(-width, 0, 0).tickFormat(""));

            var slice = chart
              .selectAll(".slice")
              .data(objects)
              .enter()
              .append("g")
              .attr("class", "g")
              .attr("transform", function (d) {
                return "translate(" + x0(d.wilaya) + ",0)";
              });

            slice
              .selectAll("rect")
              .data(function (d) {
                return d.values;
              })
              .enter()
              .append("rect")
              .attr("width", x1.bandwidth())
              .attr("x", function (d) {
                return x1(d.rate);
              })
              .style("fill", function (d) {
                return color(d.rate);
              })
              .attr("y", function (d) {
                return y(0);
              })
              .attr("height", function (d) {
                return height - y(0);
              })
              .on("mouseover", function (d) {
                d3.select(this).style("fill", d3.rgb(color(d.rate)).darker(2));
              })
              .on("mouseout", function (d) {
                d3.select(this).style("fill", color(d.rate));
              });

            slice
              .selectAll("rect")
              .transition()
              .delay(function (d) {
                return Math.random() * 1000;
              })
              .duration(1000)
              .attr("y", function (d) {
                return y(d.prct);
              })
              .attr("height", function (d) {
                return height - y(d.prct);
              });

            //Legend
            var legend = svg
              .selectAll(".legend")
              .data(
                objects[0].values
                  .map(function (d) {
                    return d.rate;
                  })
                  .reverse()
              )
              .enter()
              .append("g")
              .attr("class", "legend")
              .attr("transform", function (d, i) {
                return "translate(0," + i * 20 + ")";
              })
              .style("opacity", "0");

            legend
              .append("rect")
              .attr("x", width + margin - 18)
              .attr("width", 18)
              .attr("height", 18)
              .style("fill", function (d) {
                return color(d);
              });

            legend
              .append("text")
              .attr("x", width + margin - 24)
              .attr("y", 9)
              .attr("dy", ".35em")
              .style("text-anchor", "end")
              .text(function (d) {
                return d;
              });

            legend
              .transition()
              .duration(500)
              .delay(function (d, i) {
                return 1300 + 100 * i;
              })
              .style("opacity", "1");

            svg
              .append("text")
              .attr("class", "label")
              .attr("x", -(height / 2) - margin)
              .attr("y", margin / 2.4)
              .attr("transform", "rotate(-90)")
              .attr("text-anchor", "middle")
              .text("Le pourcentage de fréquence de consomation de fruits (%)");

            svg
              .append("text")
              .attr("class", "label")
              .attr("x", width / 2 + margin)
              .attr("y", height + margin * 1.7)
              .attr("text-anchor", "middle")
              .text("Sexe");

            svg
              .append("text")
              .attr("class", "title")
              .attr("x", width / 2 + margin)
              .attr("y", 40)
              .attr("text-anchor", "middle")
              .text(
                "Les pourcentages des fréquences de consomation de fruits par sexe"
              );

            svg
              .append("text")
              .attr("class", "source")
              .attr("x", width - margin / 2)
              .attr("y", height + margin * 1.7)
              .attr("text-anchor", "start")
              .text("Source: MNT, 2020");
          });
        } else {
          if (by == "NivEtud") {
            d3.csv("MNT.csv").then(function (data) {
              let regionsDup1D = [];
              let regions2D = [];
              let maxheight = 0;

              data.forEach(function (d) {
                regionsDup1D.push(d["3.Quel est votre niveau d'étude"]);
              });
              let regions1D = Array.from(new Set(regionsDup1D));
              regions1D.forEach(function (w) {
                regions2D.push([
                  w,
                  [
                    [0, 0, 0, "0", "Jamais"],
                    [0, 0, 0, "1", "Rarement"],
                    [0, 0, 0, "2", "Parfois"],
                    [0, 0, 0, "3", "Quelquefois"],
                    [0, 0, 0, "4", "Souvent"],
                    [0, 0, 0, "5", "Toujours"],
                  ],
                ]);
              });

              regions2D.forEach(function (w) {
                data.forEach(function (d) {
                  if (d["3.Quel est votre niveau d'étude"] == w[0]) {
                    if (
                      d[
                        "14.Habituellement, combien de jours par semaine consommez-vous des fruits ?"
                      ] == "0"
                    ) {
                      w[1][0][0] = w[1][0][0] + 1;
                    } else {
                      if (
                        d[
                          "14.Habituellement, combien de jours par semaine consommez-vous des fruits ?"
                        ] == "1"
                      ) {
                        w[1][1][0] = w[1][1][0] + 1;
                      } else {
                        if (
                          d[
                            "14.Habituellement, combien de jours par semaine consommez-vous des fruits ?"
                          ] == "2"
                        ) {
                          w[1][2][0] = w[1][2][0] + 1;
                        } else {
                          if (
                            d[
                              "14.Habituellement, combien de jours par semaine consommez-vous des fruits ?"
                            ] == "3"
                          ) {
                            w[1][3][0] = w[1][3][0] + 1;
                          } else {
                            if (
                              d[
                                "14.Habituellement, combien de jours par semaine consommez-vous des fruits ?"
                              ] == "4"
                            ) {
                              w[1][4][0] = w[1][4][0] + 1;
                            } else {
                              if (
                                d[
                                  "14.Habituellement, combien de jours par semaine consommez-vous des fruits ?"
                                ] == "5"
                              ) {
                                w[1][5][0] = w[1][5][0] + 1;
                              }
                            }
                          }
                        }
                      }
                    }
                    w[1][0][1] = w[1][0][1] + 1;
                    w[1][1][1] = w[1][1][1] + 1;
                    w[1][2][1] = w[1][2][1] + 1;
                    w[1][3][1] = w[1][3][1] + 1;
                    w[1][4][1] = w[1][4][1] + 1;
                    w[1][5][1] = w[1][5][1] + 1;
                  }
                  w[1][0][2] = ((w[1][0][0] / w[1][0][1]) * 100).toFixed(1);
                  w[1][1][2] = ((w[1][1][0] / w[1][1][1]) * 100).toFixed(1);
                  w[1][2][2] = ((w[1][2][0] / w[1][2][1]) * 100).toFixed(1);
                  w[1][3][2] = ((w[1][3][0] / w[1][3][1]) * 100).toFixed(1);
                  w[1][4][2] = ((w[1][4][0] / w[1][4][1]) * 100).toFixed(1);
                  w[1][5][2] = ((w[1][5][0] / w[1][5][1]) * 100).toFixed(1);
                });
                if (w[1][0][2] > maxheight) {
                  maxheight = Math.ceil(w[1][0][2] / 5) * 5;
                }
                if (w[1][1][2] > maxheight) {
                  maxheight = Math.ceil(w[1][1][2] / 5) * 5;
                }
                if (w[1][2][2] > maxheight) {
                  maxheight = Math.ceil(w[1][2][2] / 5) * 5;
                }
                if (w[1][3][2] > maxheight) {
                  maxheight = Math.ceil(w[1][3][2] / 5) * 5;
                }
                if (w[1][4][2] > maxheight) {
                  maxheight = Math.ceil(w[1][4][2] / 5) * 5;
                }
                if (w[1][5][2] > maxheight) {
                  maxheight = Math.ceil(w[1][5][2] / 5) * 5;
                }
              });

              const keys = ["wilaya", "values"];
              const subkeys = ["sum", "sumW", "prct", "rateN", "rate"];
              const values = regions2D;
              const objects = values.map((array) => {
                const object = {};

                object[keys[0]] = array[0];
                const values2 = array[1];
                const objects2 = values2.map((array2) => {
                  const object2 = {};

                  subkeys.forEach((subkey, i) => {
                    object2[subkey] = array2[i];
                  });

                  return object2;
                });

                object[keys[1]] = objects2;

                return object;
              });

              var x0 = d3
                .scaleBand()
                .domain(objects.map((obj) => obj.wilaya))
                .range([0, width])
                .padding(0.1);

              var x1 = d3
                .scaleBand()
                .domain(objects[0].values.map((obj) => obj.rate))
                .range([0, x0.bandwidth()])
                .padding(0.05);

              var y = d3
                .scaleLinear()
                .domain([0, maxheight])
                .range([height, 0]);

              const makeYLines = () => d3.axisLeft().scale(y);

              var color = d3
                .scaleOrdinal()
                .domain(objects[0].values.map((obj) => obj.rate))
                .range([
                  "#7400b8",
                  "#6930c3",
                  "#5e60ce",
                  "#5390d9",
                  "#4ea8de",
                  "#48bfe3",
                ]);

              chart
                .append("g")
                .attr("transform", `translate(0, ${height})`)
                .call(d3.axisBottom(x0));

              chart.append("g").call(d3.axisLeft(y));

              chart
                .append("g")
                .attr("class", "grid")
                .call(makeYLines().tickSize(-width, 0, 0).tickFormat(""));

              var slice = chart
                .selectAll(".slice")
                .data(objects)
                .enter()
                .append("g")
                .attr("class", "g")
                .attr("transform", function (d) {
                  return "translate(" + x0(d.wilaya) + ",0)";
                });

              slice
                .selectAll("rect")
                .data(function (d) {
                  return d.values;
                })
                .enter()
                .append("rect")
                .attr("width", x1.bandwidth())
                .attr("x", function (d) {
                  return x1(d.rate);
                })
                .style("fill", function (d) {
                  return color(d.rate);
                })
                .attr("y", function (d) {
                  return y(0);
                })
                .attr("height", function (d) {
                  return height - y(0);
                })
                .on("mouseover", function (d) {
                  d3.select(this).style(
                    "fill",
                    d3.rgb(color(d.rate)).darker(2)
                  );
                })
                .on("mouseout", function (d) {
                  d3.select(this).style("fill", color(d.rate));
                });

              slice
                .selectAll("rect")
                .transition()
                .delay(function (d) {
                  return Math.random() * 1000;
                })
                .duration(1000)
                .attr("y", function (d) {
                  return y(d.prct);
                })
                .attr("height", function (d) {
                  return height - y(d.prct);
                });

              //Legend
              var legend = svg
                .selectAll(".legend")
                .data(
                  objects[0].values
                    .map(function (d) {
                      return d.rate;
                    })
                    .reverse()
                )
                .enter()
                .append("g")
                .attr("class", "legend")
                .attr("transform", function (d, i) {
                  return "translate(0," + i * 20 + ")";
                })
                .style("opacity", "0");

              legend
                .append("rect")
                .attr("x", width + margin - 18)
                .attr("width", 18)
                .attr("height", 18)
                .style("fill", function (d) {
                  return color(d);
                });

              legend
                .append("text")
                .attr("x", width + margin - 24)
                .attr("y", 9)
                .attr("dy", ".35em")
                .style("text-anchor", "end")
                .text(function (d) {
                  return d;
                });

              legend
                .transition()
                .duration(500)
                .delay(function (d, i) {
                  return 1300 + 100 * i;
                })
                .style("opacity", "1");

              svg
                .append("text")
                .attr("class", "label")
                .attr("x", -(height / 2) - margin)
                .attr("y", margin / 2.4)
                .attr("transform", "rotate(-90)")
                .attr("text-anchor", "middle")
                .text(
                  "Le pourcentage de fréquence de consomation de fruits (%)"
                );

              svg
                .append("text")
                .attr("class", "label")
                .attr("x", width / 2 + margin)
                .attr("y", height + margin * 1.7)
                .attr("text-anchor", "middle")
                .text("Les niveaux d'étude");

              svg
                .append("text")
                .attr("class", "title")
                .attr("x", width / 2 + margin)
                .attr("y", 40)
                .attr("text-anchor", "middle")
                .text(
                  "Les pourcentages des fréquences de consomation de fruits par niveau d'étude"
                );

              svg
                .append("text")
                .attr("class", "source")
                .attr("x", width - margin / 2)
                .attr("y", height + margin * 1.7)
                .attr("text-anchor", "start")
                .text("Source: MNT, 2020");
            });
          } else {
            if (by == "Activity") {
              d3.csv("MNT.csv").then(function (data) {
                let regionsDup1D = [];
                let regions2D = [];
                let maxheight = 0;

                data.forEach(function (d) {
                  regionsDup1D.push(
                    d["4.Quelles est votre activité  professionnelle"]
                  );
                });
                let regions1D = Array.from(new Set(regionsDup1D));
                regions1D.forEach(function (w) {
                  regions2D.push([
                    w,
                    [
                      [0, 0, 0, "0", "Jamais"],
                      [0, 0, 0, "1", "Rarement"],
                      [0, 0, 0, "2", "Parfois"],
                      [0, 0, 0, "3", "Quelquefois"],
                      [0, 0, 0, "4", "Souvent"],
                      [0, 0, 0, "5", "Toujours"],
                    ],
                  ]);
                });

                regions2D.forEach(function (w) {
                  data.forEach(function (d) {
                    if (
                      d["4.Quelles est votre activité  professionnelle"] == w[0]
                    ) {
                      if (
                        d[
                          "14.Habituellement, combien de jours par semaine consommez-vous des fruits ?"
                        ] == "0"
                      ) {
                        w[1][0][0] = w[1][0][0] + 1;
                      } else {
                        if (
                          d[
                            "14.Habituellement, combien de jours par semaine consommez-vous des fruits ?"
                          ] == "1"
                        ) {
                          w[1][1][0] = w[1][1][0] + 1;
                        } else {
                          if (
                            d[
                              "14.Habituellement, combien de jours par semaine consommez-vous des fruits ?"
                            ] == "2"
                          ) {
                            w[1][2][0] = w[1][2][0] + 1;
                          } else {
                            if (
                              d[
                                "14.Habituellement, combien de jours par semaine consommez-vous des fruits ?"
                              ] == "3"
                            ) {
                              w[1][3][0] = w[1][3][0] + 1;
                            } else {
                              if (
                                d[
                                  "14.Habituellement, combien de jours par semaine consommez-vous des fruits ?"
                                ] == "4"
                              ) {
                                w[1][4][0] = w[1][4][0] + 1;
                              } else {
                                if (
                                  d[
                                    "14.Habituellement, combien de jours par semaine consommez-vous des fruits ?"
                                  ] == "5"
                                ) {
                                  w[1][5][0] = w[1][5][0] + 1;
                                }
                              }
                            }
                          }
                        }
                      }
                      w[1][0][1] = w[1][0][1] + 1;
                      w[1][1][1] = w[1][1][1] + 1;
                      w[1][2][1] = w[1][2][1] + 1;
                      w[1][3][1] = w[1][3][1] + 1;
                      w[1][4][1] = w[1][4][1] + 1;
                      w[1][5][1] = w[1][5][1] + 1;
                    }
                    w[1][0][2] = ((w[1][0][0] / w[1][0][1]) * 100).toFixed(1);
                    w[1][1][2] = ((w[1][1][0] / w[1][1][1]) * 100).toFixed(1);
                    w[1][2][2] = ((w[1][2][0] / w[1][2][1]) * 100).toFixed(1);
                    w[1][3][2] = ((w[1][3][0] / w[1][3][1]) * 100).toFixed(1);
                    w[1][4][2] = ((w[1][4][0] / w[1][4][1]) * 100).toFixed(1);
                    w[1][5][2] = ((w[1][5][0] / w[1][5][1]) * 100).toFixed(1);
                  });
                  if (w[1][0][2] > maxheight) {
                    maxheight = Math.ceil(w[1][0][2] / 5) * 5;
                  }
                  if (w[1][1][2] > maxheight) {
                    maxheight = Math.ceil(w[1][1][2] / 5) * 5;
                  }
                  if (w[1][2][2] > maxheight) {
                    maxheight = Math.ceil(w[1][2][2] / 5) * 5;
                  }
                  if (w[1][3][2] > maxheight) {
                    maxheight = Math.ceil(w[1][3][2] / 5) * 5;
                  }
                  if (w[1][4][2] > maxheight) {
                    maxheight = Math.ceil(w[1][4][2] / 5) * 5;
                  }
                  if (w[1][5][2] > maxheight) {
                    maxheight = Math.ceil(w[1][5][2] / 5) * 5;
                  }
                });

                const keys = ["wilaya", "values"];
                const subkeys = ["sum", "sumW", "prct", "rateN", "rate"];
                const values = regions2D;
                const objects = values.map((array) => {
                  const object = {};

                  object[keys[0]] = array[0];
                  const values2 = array[1];
                  const objects2 = values2.map((array2) => {
                    const object2 = {};

                    subkeys.forEach((subkey, i) => {
                      object2[subkey] = array2[i];
                    });

                    return object2;
                  });

                  object[keys[1]] = objects2;

                  return object;
                });

                var x0 = d3
                  .scaleBand()
                  .domain(objects.map((obj) => obj.wilaya))
                  .range([0, width])
                  .padding(0.1);

                var x1 = d3
                  .scaleBand()
                  .domain(objects[0].values.map((obj) => obj.rate))
                  .range([0, x0.bandwidth()])
                  .padding(0.05);

                var y = d3
                  .scaleLinear()
                  .domain([0, maxheight])
                  .range([height, 0]);

                const makeYLines = () => d3.axisLeft().scale(y);

                var color = d3
                  .scaleOrdinal()
                  .domain(objects[0].values.map((obj) => obj.rate))
                  .range([
                    "#7400b8",
                    "#6930c3",
                    "#5e60ce",
                    "#5390d9",
                    "#4ea8de",
                    "#48bfe3",
                  ]);

                chart
                  .append("g")
                  .attr("transform", `translate(0, ${height})`)
                  .call(d3.axisBottom(x0));

                chart.append("g").call(d3.axisLeft(y));

                chart
                  .append("g")
                  .attr("class", "grid")
                  .call(makeYLines().tickSize(-width, 0, 0).tickFormat(""));

                var slice = chart
                  .selectAll(".slice")
                  .data(objects)
                  .enter()
                  .append("g")
                  .attr("class", "g")
                  .attr("transform", function (d) {
                    return "translate(" + x0(d.wilaya) + ",0)";
                  });

                slice
                  .selectAll("rect")
                  .data(function (d) {
                    return d.values;
                  })
                  .enter()
                  .append("rect")
                  .attr("width", x1.bandwidth())
                  .attr("x", function (d) {
                    return x1(d.rate);
                  })
                  .style("fill", function (d) {
                    return color(d.rate);
                  })
                  .attr("y", function (d) {
                    return y(0);
                  })
                  .attr("height", function (d) {
                    return height - y(0);
                  })
                  .on("mouseover", function (d) {
                    d3.select(this).style(
                      "fill",
                      d3.rgb(color(d.rate)).darker(2)
                    );
                  })
                  .on("mouseout", function (d) {
                    d3.select(this).style("fill", color(d.rate));
                  });

                slice
                  .selectAll("rect")
                  .transition()
                  .delay(function (d) {
                    return Math.random() * 1000;
                  })
                  .duration(1000)
                  .attr("y", function (d) {
                    return y(d.prct);
                  })
                  .attr("height", function (d) {
                    return height - y(d.prct);
                  });

                //Legend
                var legend = svg
                  .selectAll(".legend")
                  .data(
                    objects[0].values
                      .map(function (d) {
                        return d.rate;
                      })
                      .reverse()
                  )
                  .enter()
                  .append("g")
                  .attr("class", "legend")
                  .attr("transform", function (d, i) {
                    return "translate(0," + i * 20 + ")";
                  })
                  .style("opacity", "0");

                legend
                  .append("rect")
                  .attr("x", width + margin - 18)
                  .attr("width", 18)
                  .attr("height", 18)
                  .style("fill", function (d) {
                    return color(d);
                  });

                legend
                  .append("text")
                  .attr("x", width + margin - 24)
                  .attr("y", 9)
                  .attr("dy", ".35em")
                  .style("text-anchor", "end")
                  .text(function (d) {
                    return d;
                  });

                legend
                  .transition()
                  .duration(500)
                  .delay(function (d, i) {
                    return 1300 + 100 * i;
                  })
                  .style("opacity", "1");

                svg
                  .append("text")
                  .attr("class", "label")
                  .attr("x", -(height / 2) - margin)
                  .attr("y", margin / 2.4)
                  .attr("transform", "rotate(-90)")
                  .attr("text-anchor", "middle")
                  .text(
                    "Le pourcentage de fréquence de consomation de fruits (%)"
                  );

                svg
                  .append("text")
                  .attr("class", "label")
                  .attr("x", width / 2 + margin)
                  .attr("y", height + margin * 1.7)
                  .attr("text-anchor", "middle")
                  .text("Les activités professionnelles");

                svg
                  .append("text")
                  .attr("class", "title")
                  .attr("x", width / 2 + margin)
                  .attr("y", 40)
                  .attr("text-anchor", "middle")
                  .text(
                    "Les pourcentages des fréquences de consomation de fruits par activité professionnelle"
                  );

                svg
                  .append("text")
                  .attr("class", "source")
                  .attr("x", width - margin / 2)
                  .attr("y", height + margin * 1.7)
                  .attr("text-anchor", "start")
                  .text("Source: MNT, 2020");
              });
            }
          }
        }
      }
    }

    if (what == "ConsoLeg") {
      if (by == "Region") {
        d3.csv("MNT.csv").then(function (data) {
          let regionsDup1D = [];
          let regions2D = [];
          let maxheight = 0;

          data.forEach(function (d) {
            regionsDup1D.push(d["2.wilaya"]);
          });
          let regions1D = Array.from(new Set(regionsDup1D));
          regions1D.forEach(function (w) {
            regions2D.push([
              w,
              [
                [0, 0, 0, "0", "Jamais"],
                [0, 0, 0, "1", "Rarement"],
                [0, 0, 0, "2", "Parfois"],
                [0, 0, 0, "3", "Quelquefois"],
                [0, 0, 0, "4", "Souvent"],
                [0, 0, 0, "5", "Toujours"],
              ],
            ]);
          });

          regions2D.forEach(function (w) {
            data.forEach(function (d) {
              if (d["2.wilaya"] == w[0]) {
                if (
                  d[
                    "15.Habituellement, combien de jours par semaine consommez-vous des légumes ?"
                  ] == "0"
                ) {
                  w[1][0][0] = w[1][0][0] + 1;
                } else {
                  if (
                    d[
                      "15.Habituellement, combien de jours par semaine consommez-vous des légumes ?"
                    ] == "1"
                  ) {
                    w[1][1][0] = w[1][1][0] + 1;
                  } else {
                    if (
                      d[
                        "15.Habituellement, combien de jours par semaine consommez-vous des légumes ?"
                      ] == "2"
                    ) {
                      w[1][2][0] = w[1][2][0] + 1;
                    } else {
                      if (
                        d[
                          "15.Habituellement, combien de jours par semaine consommez-vous des légumes ?"
                        ] == "3"
                      ) {
                        w[1][3][0] = w[1][3][0] + 1;
                      } else {
                        if (
                          d[
                            "15.Habituellement, combien de jours par semaine consommez-vous des légumes ?"
                          ] == "4"
                        ) {
                          w[1][4][0] = w[1][4][0] + 1;
                        } else {
                          if (
                            d[
                              "15.Habituellement, combien de jours par semaine consommez-vous des légumes ?"
                            ] == "5"
                          ) {
                            w[1][5][0] = w[1][5][0] + 1;
                          }
                        }
                      }
                    }
                  }
                }
                w[1][0][1] = w[1][0][1] + 1;
                w[1][1][1] = w[1][1][1] + 1;
                w[1][2][1] = w[1][2][1] + 1;
                w[1][3][1] = w[1][3][1] + 1;
                w[1][4][1] = w[1][4][1] + 1;
                w[1][5][1] = w[1][5][1] + 1;
              }
              w[1][0][2] = ((w[1][0][0] / w[1][0][1]) * 100).toFixed(1);
              w[1][1][2] = ((w[1][1][0] / w[1][1][1]) * 100).toFixed(1);
              w[1][2][2] = ((w[1][2][0] / w[1][2][1]) * 100).toFixed(1);
              w[1][3][2] = ((w[1][3][0] / w[1][3][1]) * 100).toFixed(1);
              w[1][4][2] = ((w[1][4][0] / w[1][4][1]) * 100).toFixed(1);
              w[1][5][2] = ((w[1][5][0] / w[1][5][1]) * 100).toFixed(1);
            });
            if (w[1][0][2] > maxheight) {
              maxheight = Math.ceil(w[1][0][2] / 5) * 5;
            }
            if (w[1][1][2] > maxheight) {
              maxheight = Math.ceil(w[1][1][2] / 5) * 5;
            }
            if (w[1][2][2] > maxheight) {
              maxheight = Math.ceil(w[1][2][2] / 5) * 5;
            }
            if (w[1][3][2] > maxheight) {
              maxheight = Math.ceil(w[1][3][2] / 5) * 5;
            }
            if (w[1][4][2] > maxheight) {
              maxheight = Math.ceil(w[1][4][2] / 5) * 5;
            }
            if (w[1][5][2] > maxheight) {
              maxheight = Math.ceil(w[1][5][2] / 5) * 5;
            }
          });

          const keys = ["wilaya", "values"];
          const subkeys = ["sum", "sumW", "prct", "rateN", "rate"];
          const values = regions2D;
          const objects = values.map((array) => {
            const object = {};

            object[keys[0]] = array[0];
            const values2 = array[1];
            const objects2 = values2.map((array2) => {
              const object2 = {};

              subkeys.forEach((subkey, i) => {
                object2[subkey] = array2[i];
              });

              return object2;
            });

            object[keys[1]] = objects2;

            return object;
          });

          var x0 = d3
            .scaleBand()
            .domain(objects.map((obj) => obj.wilaya))
            .range([0, width])
            .padding(0.1);

          var x1 = d3
            .scaleBand()
            .domain(objects[0].values.map((obj) => obj.rate))
            .range([0, x0.bandwidth()])
            .padding(0.05);

          var y = d3.scaleLinear().domain([0, maxheight]).range([height, 0]);

          const makeYLines = () => d3.axisLeft().scale(y);

          var color = d3
            .scaleOrdinal()
            .domain(objects[0].values.map((obj) => obj.rate))
            .range([
              "#7400b8",
              "#6930c3",
              "#5e60ce",
              "#5390d9",
              "#4ea8de",
              "#48bfe3",
            ]);

          chart
            .append("g")
            .attr("transform", `translate(0, ${height})`)
            .call(d3.axisBottom(x0));

          chart.append("g").call(d3.axisLeft(y));

          chart
            .append("g")
            .attr("class", "grid")
            .call(makeYLines().tickSize(-width, 0, 0).tickFormat(""));

          tooltip = d3
            .select("#layout")
            .append("div")
            .attr("class", "tooltip")
            .style("position", "absolute")
            .style("z-index", "10")
            .style("visibility", "hidden")
            .style("padding", "10px")
            .style("background", "rgba(0,0,0,0.6)")
            .style("border-radius", "4px")
            .style("color", "#fff")
            .text("a simple tooltip");

          var slice = chart
            .selectAll(".slice")
            .data(objects)
            .enter()
            .append("g")
            .attr("class", "g")
            .attr("transform", function (d) {
              return "translate(" + x0(d.wilaya) + ",0)";
            });

          slice
            .selectAll("rect")
            .data(function (d) {
              return d.values;
            })
            .enter()
            .append("rect")
            .attr("width", x1.bandwidth())
            .attr("x", function (d) {
              return x1(d.rate);
            })
            .style("fill", function (d) {
              return color(d.rate);
            })
            .attr("y", function (d) {
              return y(0);
            })
            .attr("height", function (d) {
              return height - y(0);
            })
            .on("mouseover", function (d) {
              d3.select(this).style("fill", d3.rgb(color(d.rate)).darker(2));
              tooltip
                .html(
                  "Nombre de réponses: " +
                    d.sum +
                    "<br>" +
                    "Pourcentage: " +
                    d.prct
                )
                .style("visibility", "visible");
            })
            .on("mousemove", function (d) {
              tooltip
                .style("top", d3.event.pageY - 10 + "px")
                .style("left", d3.event.pageX + 10 + "px");
            })
            .on("mouseleave", function (d) {
              d3.select(this).style("fill", color(d.rate));
              tooltip.html(``).style("visibility", "hidden");
            });

          slice
            .selectAll("rect")
            .transition()
            .delay(function (d) {
              return Math.random() * 1000;
            })
            .duration(1000)
            .attr("y", function (d) {
              return y(d.prct);
            })
            .attr("height", function (d) {
              return height - y(d.prct);
            });

          //Legend
          var legend = svg
            .selectAll(".legend")
            .data(
              objects[0].values
                .map(function (d) {
                  return d.rate;
                })
                .reverse()
            )
            .enter()
            .append("g")
            .attr("class", "legend")
            .attr("transform", function (d, i) {
              return "translate(0," + i * 20 + ")";
            })
            .style("opacity", "0");

          legend
            .append("rect")
            .attr("x", width + margin - 18)
            .attr("width", 18)
            .attr("height", 18)
            .style("fill", function (d) {
              return color(d);
            });

          legend
            .append("text")
            .attr("x", width + margin - 24)
            .attr("y", 9)
            .attr("dy", ".35em")
            .style("text-anchor", "end")
            .text(function (d) {
              return d;
            });

          legend
            .transition()
            .duration(500)
            .delay(function (d, i) {
              return 1300 + 100 * i;
            })
            .style("opacity", "1");

          svg
            .append("text")
            .attr("class", "label")
            .attr("x", -(height / 2) - margin)
            .attr("y", margin / 2.4)
            .attr("transform", "rotate(-90)")
            .attr("text-anchor", "middle")
            .text("Le pourcentage de fréquence de consomation de légumes (%)");

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
            .text(
              "Les pourcentages des fréquences de consomation de légumes par wilaya"
            );

          svg
            .append("text")
            .attr("class", "source")
            .attr("x", width - margin / 2)
            .attr("y", height + margin * 1.7)
            .attr("text-anchor", "start")
            .text("Source: MNT, 2020");
        });
      } else {
        if (by == "Sexe") {
          d3.csv("MNT.csv").then(function (data) {
            let regionsDup1D = [];
            let regions2D = [];
            let maxheight = 0;

            data.forEach(function (d) {
              regionsDup1D.push(d["1.sexe"]);
            });
            let regions1D = Array.from(new Set(regionsDup1D));
            regions1D.forEach(function (w) {
              regions2D.push([
                w,
                [
                  [0, 0, 0, "0", "Jamais"],
                  [0, 0, 0, "1", "Rarement"],
                  [0, 0, 0, "2", "Parfois"],
                  [0, 0, 0, "3", "Quelquefois"],
                  [0, 0, 0, "4", "Souvent"],
                  [0, 0, 0, "5", "Toujours"],
                ],
              ]);
            });

            regions2D.forEach(function (w) {
              data.forEach(function (d) {
                if (d["1.sexe"] == w[0]) {
                  if (
                    d[
                      "15.Habituellement, combien de jours par semaine consommez-vous des légumes ?"
                    ] == "0"
                  ) {
                    w[1][0][0] = w[1][0][0] + 1;
                  } else {
                    if (
                      d[
                        "15.Habituellement, combien de jours par semaine consommez-vous des légumes ?"
                      ] == "1"
                    ) {
                      w[1][1][0] = w[1][1][0] + 1;
                    } else {
                      if (
                        d[
                          "15.Habituellement, combien de jours par semaine consommez-vous des légumes ?"
                        ] == "2"
                      ) {
                        w[1][2][0] = w[1][2][0] + 1;
                      } else {
                        if (
                          d[
                            "15.Habituellement, combien de jours par semaine consommez-vous des légumes ?"
                          ] == "3"
                        ) {
                          w[1][3][0] = w[1][3][0] + 1;
                        } else {
                          if (
                            d[
                              "15.Habituellement, combien de jours par semaine consommez-vous des légumes ?"
                            ] == "4"
                          ) {
                            w[1][4][0] = w[1][4][0] + 1;
                          } else {
                            if (
                              d[
                                "15.Habituellement, combien de jours par semaine consommez-vous des légumes ?"
                              ] == "5"
                            ) {
                              w[1][5][0] = w[1][5][0] + 1;
                            }
                          }
                        }
                      }
                    }
                  }
                  w[1][0][1] = w[1][0][1] + 1;
                  w[1][1][1] = w[1][1][1] + 1;
                  w[1][2][1] = w[1][2][1] + 1;
                  w[1][3][1] = w[1][3][1] + 1;
                  w[1][4][1] = w[1][4][1] + 1;
                  w[1][5][1] = w[1][5][1] + 1;
                }
                w[1][0][2] = ((w[1][0][0] / w[1][0][1]) * 100).toFixed(1);
                w[1][1][2] = ((w[1][1][0] / w[1][1][1]) * 100).toFixed(1);
                w[1][2][2] = ((w[1][2][0] / w[1][2][1]) * 100).toFixed(1);
                w[1][3][2] = ((w[1][3][0] / w[1][3][1]) * 100).toFixed(1);
                w[1][4][2] = ((w[1][4][0] / w[1][4][1]) * 100).toFixed(1);
                w[1][5][2] = ((w[1][5][0] / w[1][5][1]) * 100).toFixed(1);
              });
              if (w[1][0][2] > maxheight) {
                maxheight = Math.ceil(w[1][0][2] / 5) * 5;
              }
              if (w[1][1][2] > maxheight) {
                maxheight = Math.ceil(w[1][1][2] / 5) * 5;
              }
              if (w[1][2][2] > maxheight) {
                maxheight = Math.ceil(w[1][2][2] / 5) * 5;
              }
              if (w[1][3][2] > maxheight) {
                maxheight = Math.ceil(w[1][3][2] / 5) * 5;
              }
              if (w[1][4][2] > maxheight) {
                maxheight = Math.ceil(w[1][4][2] / 5) * 5;
              }
              if (w[1][5][2] > maxheight) {
                maxheight = Math.ceil(w[1][5][2] / 5) * 5;
              }
            });

            const keys = ["wilaya", "values"];
            const subkeys = ["sum", "sumW", "prct", "rateN", "rate"];
            const values = regions2D;
            const objects = values.map((array) => {
              const object = {};

              object[keys[0]] = array[0];
              const values2 = array[1];
              const objects2 = values2.map((array2) => {
                const object2 = {};

                subkeys.forEach((subkey, i) => {
                  object2[subkey] = array2[i];
                });

                return object2;
              });

              object[keys[1]] = objects2;

              return object;
            });

            var x0 = d3
              .scaleBand()
              .domain(objects.map((obj) => obj.wilaya))
              .range([0, width])
              .padding(0.1);

            var x1 = d3
              .scaleBand()
              .domain(objects[0].values.map((obj) => obj.rate))
              .range([0, x0.bandwidth()])
              .padding(0.05);

            var y = d3.scaleLinear().domain([0, maxheight]).range([height, 0]);

            const makeYLines = () => d3.axisLeft().scale(y);

            var color = d3
              .scaleOrdinal()
              .domain(objects[0].values.map((obj) => obj.rate))
              .range([
                "#7400b8",
                "#6930c3",
                "#5e60ce",
                "#5390d9",
                "#4ea8de",
                "#48bfe3",
              ]);

            chart
              .append("g")
              .attr("transform", `translate(0, ${height})`)
              .call(d3.axisBottom(x0));

            chart.append("g").call(d3.axisLeft(y));

            chart
              .append("g")
              .attr("class", "grid")
              .call(makeYLines().tickSize(-width, 0, 0).tickFormat(""));

            var slice = chart
              .selectAll(".slice")
              .data(objects)
              .enter()
              .append("g")
              .attr("class", "g")
              .attr("transform", function (d) {
                return "translate(" + x0(d.wilaya) + ",0)";
              });

            slice
              .selectAll("rect")
              .data(function (d) {
                return d.values;
              })
              .enter()
              .append("rect")
              .attr("width", x1.bandwidth())
              .attr("x", function (d) {
                return x1(d.rate);
              })
              .style("fill", function (d) {
                return color(d.rate);
              })
              .attr("y", function (d) {
                return y(0);
              })
              .attr("height", function (d) {
                return height - y(0);
              })
              .on("mouseover", function (d) {
                d3.select(this).style("fill", d3.rgb(color(d.rate)).darker(2));
              })
              .on("mouseout", function (d) {
                d3.select(this).style("fill", color(d.rate));
              });

            slice
              .selectAll("rect")
              .transition()
              .delay(function (d) {
                return Math.random() * 1000;
              })
              .duration(1000)
              .attr("y", function (d) {
                return y(d.prct);
              })
              .attr("height", function (d) {
                return height - y(d.prct);
              });

            //Legend
            var legend = svg
              .selectAll(".legend")
              .data(
                objects[0].values
                  .map(function (d) {
                    return d.rate;
                  })
                  .reverse()
              )
              .enter()
              .append("g")
              .attr("class", "legend")
              .attr("transform", function (d, i) {
                return "translate(0," + i * 20 + ")";
              })
              .style("opacity", "0");

            legend
              .append("rect")
              .attr("x", width + margin - 18)
              .attr("width", 18)
              .attr("height", 18)
              .style("fill", function (d) {
                return color(d);
              });

            legend
              .append("text")
              .attr("x", width + margin - 24)
              .attr("y", 9)
              .attr("dy", ".35em")
              .style("text-anchor", "end")
              .text(function (d) {
                return d;
              });

            legend
              .transition()
              .duration(500)
              .delay(function (d, i) {
                return 1300 + 100 * i;
              })
              .style("opacity", "1");

            svg
              .append("text")
              .attr("class", "label")
              .attr("x", -(height / 2) - margin)
              .attr("y", margin / 2.4)
              .attr("transform", "rotate(-90)")
              .attr("text-anchor", "middle")
              .text(
                "Le pourcentage de fréquence de consomation de légumes (%)"
              );

            svg
              .append("text")
              .attr("class", "label")
              .attr("x", width / 2 + margin)
              .attr("y", height + margin * 1.7)
              .attr("text-anchor", "middle")
              .text("Sexe");

            svg
              .append("text")
              .attr("class", "title")
              .attr("x", width / 2 + margin)
              .attr("y", 40)
              .attr("text-anchor", "middle")
              .text(
                "Les pourcentages des fréquences de consomation de légumes par sexe"
              );

            svg
              .append("text")
              .attr("class", "source")
              .attr("x", width - margin / 2)
              .attr("y", height + margin * 1.7)
              .attr("text-anchor", "start")
              .text("Source: MNT, 2020");
          });
        } else {
          if (by == "NivEtud") {
            d3.csv("MNT.csv").then(function (data) {
              let regionsDup1D = [];
              let regions2D = [];
              let maxheight = 0;

              data.forEach(function (d) {
                regionsDup1D.push(d["3.Quel est votre niveau d'étude"]);
              });
              let regions1D = Array.from(new Set(regionsDup1D));
              regions1D.forEach(function (w) {
                regions2D.push([
                  w,
                  [
                    [0, 0, 0, "0", "Jamais"],
                    [0, 0, 0, "1", "Rarement"],
                    [0, 0, 0, "2", "Parfois"],
                    [0, 0, 0, "3", "Quelquefois"],
                    [0, 0, 0, "4", "Souvent"],
                    [0, 0, 0, "5", "Toujours"],
                  ],
                ]);
              });

              regions2D.forEach(function (w) {
                data.forEach(function (d) {
                  if (d["3.Quel est votre niveau d'étude"] == w[0]) {
                    if (
                      d[
                        "15.Habituellement, combien de jours par semaine consommez-vous des légumes ?"
                      ] == "0"
                    ) {
                      w[1][0][0] = w[1][0][0] + 1;
                    } else {
                      if (
                        d[
                          "15.Habituellement, combien de jours par semaine consommez-vous des légumes ?"
                        ] == "1"
                      ) {
                        w[1][1][0] = w[1][1][0] + 1;
                      } else {
                        if (
                          d[
                            "15.Habituellement, combien de jours par semaine consommez-vous des légumes ?"
                          ] == "2"
                        ) {
                          w[1][2][0] = w[1][2][0] + 1;
                        } else {
                          if (
                            d[
                              "15.Habituellement, combien de jours par semaine consommez-vous des légumes ?"
                            ] == "3"
                          ) {
                            w[1][3][0] = w[1][3][0] + 1;
                          } else {
                            if (
                              d[
                                "15.Habituellement, combien de jours par semaine consommez-vous des légumes ?"
                              ] == "4"
                            ) {
                              w[1][4][0] = w[1][4][0] + 1;
                            } else {
                              if (
                                d[
                                  "15.Habituellement, combien de jours par semaine consommez-vous des légumes ?"
                                ] == "5"
                              ) {
                                w[1][5][0] = w[1][5][0] + 1;
                              }
                            }
                          }
                        }
                      }
                    }
                    w[1][0][1] = w[1][0][1] + 1;
                    w[1][1][1] = w[1][1][1] + 1;
                    w[1][2][1] = w[1][2][1] + 1;
                    w[1][3][1] = w[1][3][1] + 1;
                    w[1][4][1] = w[1][4][1] + 1;
                    w[1][5][1] = w[1][5][1] + 1;
                  }
                  w[1][0][2] = ((w[1][0][0] / w[1][0][1]) * 100).toFixed(1);
                  w[1][1][2] = ((w[1][1][0] / w[1][1][1]) * 100).toFixed(1);
                  w[1][2][2] = ((w[1][2][0] / w[1][2][1]) * 100).toFixed(1);
                  w[1][3][2] = ((w[1][3][0] / w[1][3][1]) * 100).toFixed(1);
                  w[1][4][2] = ((w[1][4][0] / w[1][4][1]) * 100).toFixed(1);
                  w[1][5][2] = ((w[1][5][0] / w[1][5][1]) * 100).toFixed(1);
                });
                if (w[1][0][2] > maxheight) {
                  maxheight = Math.ceil(w[1][0][2] / 5) * 5;
                }
                if (w[1][1][2] > maxheight) {
                  maxheight = Math.ceil(w[1][1][2] / 5) * 5;
                }
                if (w[1][2][2] > maxheight) {
                  maxheight = Math.ceil(w[1][2][2] / 5) * 5;
                }
                if (w[1][3][2] > maxheight) {
                  maxheight = Math.ceil(w[1][3][2] / 5) * 5;
                }
                if (w[1][4][2] > maxheight) {
                  maxheight = Math.ceil(w[1][4][2] / 5) * 5;
                }
                if (w[1][5][2] > maxheight) {
                  maxheight = Math.ceil(w[1][5][2] / 5) * 5;
                }
              });

              const keys = ["wilaya", "values"];
              const subkeys = ["sum", "sumW", "prct", "rateN", "rate"];
              const values = regions2D;
              const objects = values.map((array) => {
                const object = {};

                object[keys[0]] = array[0];
                const values2 = array[1];
                const objects2 = values2.map((array2) => {
                  const object2 = {};

                  subkeys.forEach((subkey, i) => {
                    object2[subkey] = array2[i];
                  });

                  return object2;
                });

                object[keys[1]] = objects2;

                return object;
              });

              var x0 = d3
                .scaleBand()
                .domain(objects.map((obj) => obj.wilaya))
                .range([0, width])
                .padding(0.1);

              var x1 = d3
                .scaleBand()
                .domain(objects[0].values.map((obj) => obj.rate))
                .range([0, x0.bandwidth()])
                .padding(0.05);

              var y = d3
                .scaleLinear()
                .domain([0, maxheight])
                .range([height, 0]);

              const makeYLines = () => d3.axisLeft().scale(y);

              var color = d3
                .scaleOrdinal()
                .domain(objects[0].values.map((obj) => obj.rate))
                .range([
                  "#7400b8",
                  "#6930c3",
                  "#5e60ce",
                  "#5390d9",
                  "#4ea8de",
                  "#48bfe3",
                ]);

              chart
                .append("g")
                .attr("transform", `translate(0, ${height})`)
                .call(d3.axisBottom(x0));

              chart.append("g").call(d3.axisLeft(y));

              chart
                .append("g")
                .attr("class", "grid")
                .call(makeYLines().tickSize(-width, 0, 0).tickFormat(""));

              var slice = chart
                .selectAll(".slice")
                .data(objects)
                .enter()
                .append("g")
                .attr("class", "g")
                .attr("transform", function (d) {
                  return "translate(" + x0(d.wilaya) + ",0)";
                });

              slice
                .selectAll("rect")
                .data(function (d) {
                  return d.values;
                })
                .enter()
                .append("rect")
                .attr("width", x1.bandwidth())
                .attr("x", function (d) {
                  return x1(d.rate);
                })
                .style("fill", function (d) {
                  return color(d.rate);
                })
                .attr("y", function (d) {
                  return y(0);
                })
                .attr("height", function (d) {
                  return height - y(0);
                })
                .on("mouseover", function (d) {
                  d3.select(this).style(
                    "fill",
                    d3.rgb(color(d.rate)).darker(2)
                  );
                })
                .on("mouseout", function (d) {
                  d3.select(this).style("fill", color(d.rate));
                });

              slice
                .selectAll("rect")
                .transition()
                .delay(function (d) {
                  return Math.random() * 1000;
                })
                .duration(1000)
                .attr("y", function (d) {
                  return y(d.prct);
                })
                .attr("height", function (d) {
                  return height - y(d.prct);
                });

              //Legend
              var legend = svg
                .selectAll(".legend")
                .data(
                  objects[0].values
                    .map(function (d) {
                      return d.rate;
                    })
                    .reverse()
                )
                .enter()
                .append("g")
                .attr("class", "legend")
                .attr("transform", function (d, i) {
                  return "translate(0," + i * 20 + ")";
                })
                .style("opacity", "0");

              legend
                .append("rect")
                .attr("x", width + margin - 18)
                .attr("width", 18)
                .attr("height", 18)
                .style("fill", function (d) {
                  return color(d);
                });

              legend
                .append("text")
                .attr("x", width + margin - 24)
                .attr("y", 9)
                .attr("dy", ".35em")
                .style("text-anchor", "end")
                .text(function (d) {
                  return d;
                });

              legend
                .transition()
                .duration(500)
                .delay(function (d, i) {
                  return 1300 + 100 * i;
                })
                .style("opacity", "1");

              svg
                .append("text")
                .attr("class", "label")
                .attr("x", -(height / 2) - margin)
                .attr("y", margin / 2.4)
                .attr("transform", "rotate(-90)")
                .attr("text-anchor", "middle")
                .text(
                  "Le pourcentage de fréquence de consomation de légumes (%)"
                );

              svg
                .append("text")
                .attr("class", "label")
                .attr("x", width / 2 + margin)
                .attr("y", height + margin * 1.7)
                .attr("text-anchor", "middle")
                .text("Les niveaux d'étude");

              svg
                .append("text")
                .attr("class", "title")
                .attr("x", width / 2 + margin)
                .attr("y", 40)
                .attr("text-anchor", "middle")
                .text(
                  "Les pourcentages des fréquences de consomation de légumes par niveau d'étude"
                );

              svg
                .append("text")
                .attr("class", "source")
                .attr("x", width - margin / 2)
                .attr("y", height + margin * 1.7)
                .attr("text-anchor", "start")
                .text("Source: MNT, 2020");
            });
          } else {
            if (by == "Activity") {
              d3.csv("MNT.csv").then(function (data) {
                let regionsDup1D = [];
                let regions2D = [];
                let maxheight = 0;

                data.forEach(function (d) {
                  regionsDup1D.push(
                    d["4.Quelles est votre activité  professionnelle"]
                  );
                });
                let regions1D = Array.from(new Set(regionsDup1D));
                regions1D.forEach(function (w) {
                  regions2D.push([
                    w,
                    [
                      [0, 0, 0, "0", "Jamais"],
                      [0, 0, 0, "1", "Rarement"],
                      [0, 0, 0, "2", "Parfois"],
                      [0, 0, 0, "3", "Quelquefois"],
                      [0, 0, 0, "4", "Souvent"],
                      [0, 0, 0, "5", "Toujours"],
                    ],
                  ]);
                });

                regions2D.forEach(function (w) {
                  data.forEach(function (d) {
                    if (
                      d["4.Quelles est votre activité  professionnelle"] == w[0]
                    ) {
                      if (
                        d[
                          "15.Habituellement, combien de jours par semaine consommez-vous des légumes ?"
                        ] == "0"
                      ) {
                        w[1][0][0] = w[1][0][0] + 1;
                      } else {
                        if (
                          d[
                            "15.Habituellement, combien de jours par semaine consommez-vous des légumes ?"
                          ] == "1"
                        ) {
                          w[1][1][0] = w[1][1][0] + 1;
                        } else {
                          if (
                            d[
                              "15.Habituellement, combien de jours par semaine consommez-vous des légumes ?"
                            ] == "2"
                          ) {
                            w[1][2][0] = w[1][2][0] + 1;
                          } else {
                            if (
                              d[
                                "15.Habituellement, combien de jours par semaine consommez-vous des légumes ?"
                              ] == "3"
                            ) {
                              w[1][3][0] = w[1][3][0] + 1;
                            } else {
                              if (
                                d[
                                  "15.Habituellement, combien de jours par semaine consommez-vous des légumes ?"
                                ] == "4"
                              ) {
                                w[1][4][0] = w[1][4][0] + 1;
                              } else {
                                if (
                                  d[
                                    "15.Habituellement, combien de jours par semaine consommez-vous des légumes ?"
                                  ] == "5"
                                ) {
                                  w[1][5][0] = w[1][5][0] + 1;
                                }
                              }
                            }
                          }
                        }
                      }
                      w[1][0][1] = w[1][0][1] + 1;
                      w[1][1][1] = w[1][1][1] + 1;
                      w[1][2][1] = w[1][2][1] + 1;
                      w[1][3][1] = w[1][3][1] + 1;
                      w[1][4][1] = w[1][4][1] + 1;
                      w[1][5][1] = w[1][5][1] + 1;
                    }
                    w[1][0][2] = ((w[1][0][0] / w[1][0][1]) * 100).toFixed(1);
                    w[1][1][2] = ((w[1][1][0] / w[1][1][1]) * 100).toFixed(1);
                    w[1][2][2] = ((w[1][2][0] / w[1][2][1]) * 100).toFixed(1);
                    w[1][3][2] = ((w[1][3][0] / w[1][3][1]) * 100).toFixed(1);
                    w[1][4][2] = ((w[1][4][0] / w[1][4][1]) * 100).toFixed(1);
                    w[1][5][2] = ((w[1][5][0] / w[1][5][1]) * 100).toFixed(1);
                  });
                  if (w[1][0][2] > maxheight) {
                    maxheight = Math.ceil(w[1][0][2] / 5) * 5;
                  }
                  if (w[1][1][2] > maxheight) {
                    maxheight = Math.ceil(w[1][1][2] / 5) * 5;
                  }
                  if (w[1][2][2] > maxheight) {
                    maxheight = Math.ceil(w[1][2][2] / 5) * 5;
                  }
                  if (w[1][3][2] > maxheight) {
                    maxheight = Math.ceil(w[1][3][2] / 5) * 5;
                  }
                  if (w[1][4][2] > maxheight) {
                    maxheight = Math.ceil(w[1][4][2] / 5) * 5;
                  }
                  if (w[1][5][2] > maxheight) {
                    maxheight = Math.ceil(w[1][5][2] / 5) * 5;
                  }
                });

                const keys = ["wilaya", "values"];
                const subkeys = ["sum", "sumW", "prct", "rateN", "rate"];
                const values = regions2D;
                const objects = values.map((array) => {
                  const object = {};

                  object[keys[0]] = array[0];
                  const values2 = array[1];
                  const objects2 = values2.map((array2) => {
                    const object2 = {};

                    subkeys.forEach((subkey, i) => {
                      object2[subkey] = array2[i];
                    });

                    return object2;
                  });

                  object[keys[1]] = objects2;

                  return object;
                });

                var x0 = d3
                  .scaleBand()
                  .domain(objects.map((obj) => obj.wilaya))
                  .range([0, width])
                  .padding(0.1);

                var x1 = d3
                  .scaleBand()
                  .domain(objects[0].values.map((obj) => obj.rate))
                  .range([0, x0.bandwidth()])
                  .padding(0.05);

                var y = d3
                  .scaleLinear()
                  .domain([0, maxheight])
                  .range([height, 0]);

                const makeYLines = () => d3.axisLeft().scale(y);

                var color = d3
                  .scaleOrdinal()
                  .domain(objects[0].values.map((obj) => obj.rate))
                  .range([
                    "#7400b8",
                    "#6930c3",
                    "#5e60ce",
                    "#5390d9",
                    "#4ea8de",
                    "#48bfe3",
                  ]);

                chart
                  .append("g")
                  .attr("transform", `translate(0, ${height})`)
                  .call(d3.axisBottom(x0));

                chart.append("g").call(d3.axisLeft(y));

                chart
                  .append("g")
                  .attr("class", "grid")
                  .call(makeYLines().tickSize(-width, 0, 0).tickFormat(""));

                var slice = chart
                  .selectAll(".slice")
                  .data(objects)
                  .enter()
                  .append("g")
                  .attr("class", "g")
                  .attr("transform", function (d) {
                    return "translate(" + x0(d.wilaya) + ",0)";
                  });

                slice
                  .selectAll("rect")
                  .data(function (d) {
                    return d.values;
                  })
                  .enter()
                  .append("rect")
                  .attr("width", x1.bandwidth())
                  .attr("x", function (d) {
                    return x1(d.rate);
                  })
                  .style("fill", function (d) {
                    return color(d.rate);
                  })
                  .attr("y", function (d) {
                    return y(0);
                  })
                  .attr("height", function (d) {
                    return height - y(0);
                  })
                  .on("mouseover", function (d) {
                    d3.select(this).style(
                      "fill",
                      d3.rgb(color(d.rate)).darker(2)
                    );
                  })
                  .on("mouseout", function (d) {
                    d3.select(this).style("fill", color(d.rate));
                  });

                slice
                  .selectAll("rect")
                  .transition()
                  .delay(function (d) {
                    return Math.random() * 1000;
                  })
                  .duration(1000)
                  .attr("y", function (d) {
                    return y(d.prct);
                  })
                  .attr("height", function (d) {
                    return height - y(d.prct);
                  });

                //Legend
                var legend = svg
                  .selectAll(".legend")
                  .data(
                    objects[0].values
                      .map(function (d) {
                        return d.rate;
                      })
                      .reverse()
                  )
                  .enter()
                  .append("g")
                  .attr("class", "legend")
                  .attr("transform", function (d, i) {
                    return "translate(0," + i * 20 + ")";
                  })
                  .style("opacity", "0");

                legend
                  .append("rect")
                  .attr("x", width + margin - 18)
                  .attr("width", 18)
                  .attr("height", 18)
                  .style("fill", function (d) {
                    return color(d);
                  });

                legend
                  .append("text")
                  .attr("x", width + margin - 24)
                  .attr("y", 9)
                  .attr("dy", ".35em")
                  .style("text-anchor", "end")
                  .text(function (d) {
                    return d;
                  });

                legend
                  .transition()
                  .duration(500)
                  .delay(function (d, i) {
                    return 1300 + 100 * i;
                  })
                  .style("opacity", "1");

                svg
                  .append("text")
                  .attr("class", "label")
                  .attr("x", -(height / 2) - margin)
                  .attr("y", margin / 2.4)
                  .attr("transform", "rotate(-90)")
                  .attr("text-anchor", "middle")
                  .text(
                    "Le pourcentage de fréquence de consomation de légumes (%)"
                  );

                svg
                  .append("text")
                  .attr("class", "label")
                  .attr("x", width / 2 + margin)
                  .attr("y", height + margin * 1.7)
                  .attr("text-anchor", "middle")
                  .text("Les activités professionnelles");

                svg
                  .append("text")
                  .attr("class", "title")
                  .attr("x", width / 2 + margin)
                  .attr("y", 40)
                  .attr("text-anchor", "middle")
                  .text(
                    "Les pourcentages des fréquences de consomation de légumes par activité professionnelle"
                  );

                svg
                  .append("text")
                  .attr("class", "source")
                  .attr("x", width - margin / 2)
                  .attr("y", height + margin * 1.7)
                  .attr("text-anchor", "start")
                  .text("Source: MNT, 2020");
              });
            }
          }
        }
      }
    }
  }
}

function valid() {
  var avrgAge = document.getElementById("AvgAge");
  var nbrResp = document.getElementById("NbrResp");
  var propDis = document.getElementById("PropDis");

  var byRegion = document.getElementById("Region");
  var bySexe = document.getElementById("Sexe");
  var byNivEtud = document.getElementById("NivEtud");
  var byActivity = document.getElementById("Activity");

  var tabac = document.getElementById("Tabac");
  var sport = document.getElementById("Sport");
  var alchool = document.getElementById("Alchool");
  var consoFruit = document.getElementById("ConsoFruit");
  var consoLeg = document.getElementById("ConsoLeg");

  if (avrgAge.checked) {
    if (byRegion.checked) {
      Draw("AvgAge", "Region", 0);
    } else {
      if (bySexe.checked) {
        Draw("AvgAge", "Sexe", 0);
      } else {
        if (byNivEtud.checked) {
          Draw("AvgAge", "NivEtud", 0);
        } else {
          if (byActivity.checked) {
            Draw("AvgAge", "Activity", 0);
          }
        }
      }
    }
  }

  if (nbrResp.checked) {
    if (byRegion.checked) {
      Draw("NbrResp", "Region", 0);
    } else {
      if (bySexe.checked) {
        Draw("NbrResp", "Sexe", 0);
      } else {
        if (byNivEtud.checked) {
          Draw("NbrResp", "NivEtud", 0);
        } else {
          if (byActivity.checked) {
            Draw("NbrResp", "Activity", 0);
          }
        }
      }
    }
  }

  if (propDis.checked) {
    if (byRegion.checked) {
      Draw("PropDis", "Region", 0);
    } else {
      if (bySexe.checked) {
        Draw("PropDis", "Sexe", 0);
      } else {
        if (byNivEtud.checked) {
          Draw("PropDis", "NivEtud", 0);
        } else {
          if (byActivity.checked) {
            Draw("PropDis", "Activity", 0);
          }
        }
      }
    }
  }

  if (tabac.checked) {
    if (byRegion.checked) {
      Draw("Tabac", "Region", 1);
    } else {
      if (bySexe.checked) {
        Draw("Tabac", "Sexe", 1);
      } else {
        if (byNivEtud.checked) {
          Draw("Tabac", "NivEtud", 1);
        } else {
          if (byActivity.checked) {
            Draw("Tabac", "Activity", 1);
          }
        }
      }
    }
  }

  if (sport.checked) {
    if (byRegion.checked) {
      Draw("Sport", "Region", 1);
    } else {
      if (bySexe.checked) {
        Draw("Sport", "Sexe", 1);
      } else {
        if (byNivEtud.checked) {
          Draw("Sport", "NivEtud", 1);
        } else {
          if (byActivity.checked) {
            Draw("Sport", "Activity", 1);
          }
        }
      }
    }
  }

  if (alchool.checked) {
    if (byRegion.checked) {
      Draw("Alchool", "Region", 1);
    } else {
      if (bySexe.checked) {
        Draw("Alchool", "Sexe", 1);
      } else {
        if (byNivEtud.checked) {
          Draw("Alchool", "NivEtud", 1);
        } else {
          if (byActivity.checked) {
            Draw("Alchool", "Activity", 1);
          }
        }
      }
    }
  }

  if (consoFruit.checked) {
    if (byRegion.checked) {
      Draw("ConsoFruit", "Region", 1);
    } else {
      if (bySexe.checked) {
        Draw("ConsoFruit", "Sexe", 1);
      } else {
        if (byNivEtud.checked) {
          Draw("ConsoFruit", "NivEtud", 1);
        } else {
          if (byActivity.checked) {
            Draw("ConsoFruit", "Activity", 1);
          }
        }
      }
    }
  }

  if (consoLeg.checked) {
    if (byRegion.checked) {
      Draw("ConsoLeg", "Region", 1);
    } else {
      if (bySexe.checked) {
        Draw("ConsoLeg", "Sexe", 1);
      } else {
        if (byNivEtud.checked) {
          Draw("ConsoLeg", "NivEtud", 1);
        } else {
          if (byActivity.checked) {
            Draw("ConsoLeg", "Activity", 1);
          }
        }
      }
    }
  }
}
