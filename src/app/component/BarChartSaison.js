import React, { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const SaisonBarChart = ({ filteredData }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const updateChart = () => {
      if (!filteredData || filteredData.length === 0) {
        return;
      }

      // Fonction pour obtenir les quantités par saison
      const getSeasonCounts = () => {
        const counts = {};
        filteredData.forEach((item) => {
          counts[item.saison] = (counts[item.saison] || 0) + 1;
        });
        return counts;
      };

      const seasonCounts = getSeasonCounts();
      const seasonLabels = Object.keys(seasonCounts);
      const seasonData = Object.values(seasonCounts);

      if (chartRef.current) {
        const ctx = chartRef.current.getContext('2d');

        // Détruire le graphique précédent s'il existe
        if (ctx.chart) {
          ctx.chart.destroy();
        }

        // Création du graphique pour les saisons
        ctx.chart = new Chart(ctx, {
          type: 'bar',
          data: {
            labels: seasonLabels,
            datasets: [
              {
                label: 'Quantité par saison',
                data: seasonData,
                backgroundColor: '#3182CE',
              },
            ],
          },
          options: {
            maintainAspectRatio: false,
            scales: {
              y: {
                beginAtZero: true,
                ticks: {
                  precision: 0,
                },
              },
            },
          },
        });
      }
    };

    updateChart();

    return () => {
      // Nettoyage à la désinscription du composant
      if (chartRef.current && chartRef.current.chart) {
        chartRef.current.chart.destroy();
      }
    };
  }, [filteredData]);

  return <canvas ref={chartRef} className="h-64" />;
};

export default SaisonBarChart;
