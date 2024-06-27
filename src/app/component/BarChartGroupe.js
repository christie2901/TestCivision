import React, { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const AgeGroupBarChart = ({ filteredData }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const currentRef = chartRef.current;
    const updateChart = () => {
      if (!filteredData || filteredData.length === 0) {
        return;
      }

      // Fonction pour obtenir les quantités par groupe d'âge
      const getAgeGroupCounts = () => {
        const counts = {
          '< 24 ans': 0,
          '24 à 28 ans': 0,
          '29 ans et +': 0,
        };
        filteredData.forEach((item) => {
          if (item.age < 24) {
            counts['< 24 ans']++;
          } else if (item.age >= 24 && item.age <= 28) {
            counts['24 à 28 ans']++;
          } else {
            counts['29 ans et +']++;
          }
        });
        return counts;
      };

      const ageGroupCounts = getAgeGroupCounts();
      const ageGroupLabels = Object.keys(ageGroupCounts);
      const ageGroupData = Object.values(ageGroupCounts);

      if (chartRef.current) {
        const ctx = chartRef.current.getContext('2d');

        // Détruire le graphique précédent s'il existe
        if (ctx.chart) {
          ctx.chart.destroy();
        }

        // Création du graphique pour les groupes d'âge
        ctx.chart = new Chart(ctx, {
          type: 'bar',
          data: {
            labels: ageGroupLabels,
            datasets: [
              {
                label: 'Quantité par groupe d\'âge',
                data: ageGroupData,
                backgroundColor: '#4ADE80',
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

export default AgeGroupBarChart;
