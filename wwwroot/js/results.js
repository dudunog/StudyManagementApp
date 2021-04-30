const Tabs = {
  toggleTypeChart(classTypeChart) {
    var tab = document.querySelector("li.is-active");
    tab.classList.remove("is-active");

    //Adiciona a class is-active na tag selecionada
    document.querySelector("." + classTypeChart).classList.add("is-active");

    //Pega todos os charts
    var charts = document.querySelectorAll(".canvas");

    //Percorre os charts, esconde aqueles que estão visíveis e mostra o chart que foi selecionado
    for (var i = 0; i < charts.length; i++) {
      if (charts[i].hidden == false) {
        if (charts[i] != document.querySelector(".canvas-" + classTypeChart)) {
          charts[i].hidden = true;
        }
      } else {
        if (charts[i].classList.contains("canvas-" + classTypeChart)) {
          charts[i].hidden = false;
        }
      }
    }
  },
};

//Chart - diary
var ctx = document.getElementById("Chart-diary").getContext("2d");
var myChart = new Chart(ctx, {
  type: "pie",
  data: {
    labels: ["Álgebra", "Língua inglesa", "Trigonometria"],
    datasets: [
      {
        label: "# of Votes",
        data: [(13 / 16) * 100, (2.6 / 16) * 100, (0.4 / 16) * 100],
        backgroundColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
      },
    },
  },
});

//Chart - weekly
var ctx = document.getElementById("Chart-weekly").getContext("2d");
var myChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["11/4", "12/4", "13/04", "14/04", "15/04", "16/04", "17/04"],
    datasets: [
      {
        label: "Álgebra1",
        data: [19.19],
        backgroundColor: ["rgba(255, 99, 132, 1)"],
        stack: "Stack 0",
      },
      {
        label: "Língua inglesa",
        data: [42.34],
        backgroundColor: ["rgba(54, 162, 235, 1)"],
        stack: "Stack 0",
      },
      {
        label: "Língua inglesa",
        data: [18.26],
        backgroundColor: ["rgba(255, 206, 86, 1)"],
        stack: "Stack 0",
      },
    ],
  },
  options: {
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
      },
    },
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
        title: {
          display: true,
          text: "Tempo",
        },
      },
    },
  },
});

//Chart - monthly
var ctx = document.getElementById("Chart-monthly").getContext("2d");
var myChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      25,
      26,
      28,
      29,
      30,
    ],
    datasets: [
      {
        label: "Álgebra1",
        data: [19.19],
        backgroundColor: ["rgba(255, 99, 132, 1)"],
        stack: "Stack 0",
      },
      {
        label: "Língua inglesa",
        data: [42.34],
        backgroundColor: ["rgba(54, 162, 235, 1)"],
        stack: "Stack 0",
      },
      {
        label: "Língua inglesa",
        data: [18.26],
        backgroundColor: ["rgba(255, 206, 86, 1)"],
        stack: "Stack 0",
      },
    ],
  },
  options: {
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
      },
    },
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
        title: {
          display: true,
          text: "Tempo",
        },
      },
    },
  },
});

//Chart - monthly
var ctx = document.getElementById("Chart-comparative").getContext("2d");
var myChart = new Chart(ctx, {
  type: "pie",
  data: {
    labels: ["Álgebra", "Língua inglesa", "Trigonometria"],
    datasets: [
      {
        label: "# of Votes",
        data: [(13 / 16) * 100, (2.6 / 16) * 100, (0.4 / 16) * 100],
        backgroundColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
      },
    },
  },
});
