import React, { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const NiveauBarChart = ({ filteredData }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const currentRef = chartRef.current;
    const updateChart = () => {
      if (!filteredData || filteredData.length === 0) {
        return;
      }

      // Fonction pour obtenir les quantités par niveau
      const getNiveauCounts = () => {
        const counts = {};
        filteredData.forEach((item) => {
          counts[item.niveau] = (counts[item.niveau] || 0) + 1;
        });
        return counts;
      };

      const niveauCounts = getNiveauCounts();
      const niveauLabels = Object.keys(niveauCounts);
      const niveauData = Object.values(niveauCounts);

      if (chartRef.current) {
        const ctx = chartRef.current.getContext('2d');

        // Détruire le graphique précédent s'il existe
        if (ctx.chart) {
          ctx.chart.destroy();
        }

        // Création du graphique pour les niveaux
        ctx.chart = new Chart(ctx, {
          type: 'bar',
          data: {
            labels: niveauLabels,
            datasets: [
              {
                label: 'Quantité par niveau',
                data: niveauData,
                backgroundColor: '#F59E0B',
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

export default NiveauBarChart;
