const ctx = document.getElementById("myChart");
new Chart(ctx, {
  type: "bar",
  data: {
    labels: [
      "Amirxon",
      "Ulugbek",
      "Hamidullo",
      "Habibullo",
      "Rahmatulloh",
      "Amirsaidxon",
    ],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 15, 20, 3],
        borderWidth: 5,
        backgroundColor: "blue",
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

const ctx2 = document.getElementById("myChart2");
new Chart(ctx2, {
  type: "radar",
  data: {
    labels: [
      "Amirxon",
      "Ulugbek",
      "Hamidullo",
      "Habibullo",
      "Rahmatulloh",
      "Amirsaidxon",
    ],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 15, 20, 3],
        borderWidth: 5,
        backgroundColor: "blue",
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});
const ctx3 = document.getElementById("myChart3");
new Chart(ctx3, {
  type: "line",
  data: {
    labels: ["Amirxon", "Ulug'bek", "Hamidullo", "Habibullo", "Rahmatilloh", "Amirsaidon",],
    datasets: [
      {
        label: "Line Example",
        data: [10, 15, 8, 12],
        borderColor: "green",
        borderWidth: 2,
        fill: false,
      },
    ],
  },
});
const ctx4 = document.getElementById('myChart4');
new Chart(ctx4, {
  type: 'pie',
  data: {
    labels: ['Amirxon', 'Ulugbek',  'Rahmatilloh', ],
    datasets: [{
      label: 'Pie Example',
      data: [30, 45, 25],
      backgroundColor: ['red', 'blue', 'yellow', 'black']
    }]
  }
});
const ctx5 = document.getElementById('myChart5');
new Chart(ctx5, {
  type: 'polarArea',
  data: {
    labels: ['Amirxon', 'Ulugbek', 'Rahmatilloh', 'Habibullo',],
    datasets: [{
      label: 'Polar Example',
      data: [11, 16, 7, 14],
      backgroundColor: ['red', 'green', 'blue', 'yellow']
    }]
  }
});