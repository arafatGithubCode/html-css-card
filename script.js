function openTab(evt, tabName) {
  // Get all elements with className tab_content and hide them
  const tabContent = document.querySelectorAll(".tab_content");
  tabContent.forEach((content) => content.classList.remove("active"));

  //   Get all elements with className tab_link and hide them
  const tabLink = document.querySelectorAll(".tab_link");
  tabLink.forEach((link) => link.classList.remove("active"));

  //   Show the current tab and add an active class to the link that open the tab
  document.getElementById(tabName).classList.add("active");
  evt.currentTarget.classList.add("active");
}

// Line Chart Data
const lineChartData = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "Sales Over Time",
      backgroundColor: "rgba(75, 192, 192, 0.2)",
      borderColor: "rgba(75, 192, 192, 1)",
      pointBackgroundColor: "rgba(75, 192, 192, 1)",
      pointBorderColor: "#fff",
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: true,
      tension: 0.4, // smooth line
    },
  ],
};

// Bar Chart Data
const barChartData = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [
    {
      label: "Daily Sales Over Time",
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
      data: [12, 19, 3, 5, 2, 3],
    },
  ],
};

// Create Line Chart
const lineCtx = document.getElementById("lineChart").getContext("2d");
new Chart(lineCtx, {
  type: "line",
  data: lineChartData,
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
  },
});

// Create Bar Chart
const barCtx = document.getElementById("barChart").getContext("2d");
new Chart(barCtx, {
  type: "bar",
  data: barChartData,
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
  },
});
