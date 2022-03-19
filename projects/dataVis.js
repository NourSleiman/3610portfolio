var ctx1 = document.getElementById("canvas1").getContext("2d");
var ctx2 = document.getElementById("canvas2").getContext("2d");

//data taken from https://data.cityofnewyork.us/City-Government/Film-Permits/tg4x-b46p

let myChart = new Chart(ctx1, {
  type: "bar",
  data: {
    labels: ["Manhattan", "Brooklyn", "Queens", "Bronx", "Staten Island"],
    datasets: [
      {
        label: "Nour Sleiman - Film Permits by Borough",
        data: [35728, 23270, 12062, 2397, 966],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        ticks: {
          stepSize: 1,
          beginAtZero: true,
        },
      },
    },
  },
});

let myChart2 = new Chart(ctx2, {
  type: "doughnut",
  data: {
    labels: [
      "Television",
      "Film",
      "Still Photography",
      "Theater",
      "WEB",
      "Commercial",
      "Student",
      "Documentary",
      "Music Video",
      "Red Carpet/Premiere",
    ],
    datasets: [
      {
        data: [41779, 11567, 4320, 7150, 2751, 5825, 444, 337, 249, 1],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(108, 79, 20, 0.2)",
          "rgba(111, 111, 111, 0.2)",
          "rgba(255, 171, 45, 0.2)",
          "rgba(246, 45, 255, 0.2)",
          "rgba(0, 76, 72, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(108, 79, 20, 1)",
          "rgba(111, 111, 111, 1)",
          "rgba(255, 171, 45, 1)",
          "rgba(246, 45, 255, 1)",
          "rgba(0, 76, 72, 1)",
        ],
        borderWidth: 1,
      },
    ],
    hoverOffset: 4,
  },
  options: {
    plugins: {
      title: {
        display: true,
        text: "Film Permits By Category",
      },
    },
  },
});
