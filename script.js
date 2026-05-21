const ctx = document.getElementById('tempChart').getContext('2d');

let data = [];
let labels = [];

const chart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: labels,
    datasets: [{
      label: 'Temperatura (°C)',
      data: data,
      borderColor: '#ffd700',
      backgroundColor: 'rgb(255, 255, 255)',
    }]
  },
  options: {
    plugins: {
      legend: {
        labels: {
          color: '#ffffff' // cor da legenda
        }
      }
    },
    scales: {
      x: {
        ticks: {
          color: '#ffffff' // texto do eixo X
        }
      },
      y: {
        ticks: {
          color: '#ffffff' // texto do eixo Y
        }
      }
    }
  }
});
grid: {
  color: 'rgb(255, 255, 255)'
}
// simulação de dados em tempo real
setInterval(() => {
  let temp = 95 + Math.random() * 10;

  data.push(temp);
  labels.push(new Date().toLocaleTimeString());

  if (data.length > 20) {
    data.shift();
    labels.shift();
  }

  chart.update();
}, 1000);