// Data tinggi rata-rata negara (dalam cm)
const countries = ['Jepang', 'Belanda', 'Brazil', 'Indonesia', 'Amerika Serikat'];
const heights = [172, 183, 169, 160, 177];

// Pie Chart
const pieCtx = document.getElementById('pieChart').getContext('2d');
new Chart(pieCtx, {
  type: 'pie',
  data: {
    labels: countries,
    datasets: [{
      label: 'Tinggi Rata-rata (cm)',
      data: heights,
      backgroundColor: ['#f76c6c', '#6c8af7', '#f7c66c', '#6cf7a2', '#c76cf7'],
      borderWidth: 1
    }]
  }
});

// Line Chart
const lineCtx = document.getElementById('lineChart').getContext('2d');
new Chart(lineCtx, {
  type: 'line',
  data: {
    labels: countries,
    datasets: [{
      label: 'Tinggi Rata-rata (cm)',
      data: heights,
      borderColor: '#4caf50',
      borderWidth: 2,
      fill: false,
      tension: 0.3
    }]
  }
});

// Bar Chart
const barCtx = document.getElementById('barChart').getContext('2d');
new Chart(barCtx, {
  type: 'bar',
  data: {
    labels: countries,
    datasets: [{
      label: 'Tinggi Rata-rata (cm)',
      data: heights,
      backgroundColor: ['#f76c6c', '#6c8af7', '#f7c66c', '#6cf7a2', '#c76cf7'],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

// Doughnut Chart (Baru)
const doughnutCtx = document.getElementById('doughnutChart').getContext('2d');
new Chart(doughnutCtx, {
  type: 'doughnut',
  data: {
    labels: countries,
    datasets: [{
      label: 'Tinggi Rata-rata (cm)',
      data: heights,
      backgroundColor: ['#ff9999', '#9999ff', '#99ff99', '#ffff99', '#ff99ff'],
      borderWidth: 1
    }]
  }
});
