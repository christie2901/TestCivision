'use client'

import React from 'react';
/*import FilterBar from '/Users/christieembeya/Documents/christie/cv_et_lettre/test/dashboard/src/app/component/FilterBar.js';
import AveragePriceComponent from '/Users/christieembeya/Documents/christie/cv_et_lettre/test/dashboard/src/app/component/PriceDisplay.js';
import BarChart from '/Users/christieembeya/Documents/christie/cv_et_lettre/test/dashboard/src/app/component/BarChart.js';
import SaisonBarChart from '/Users/christieembeya/Documents/christie/cv_et_lettre/test/dashboard/src/app/component/BarChartSaison.js';
import AgeGroupBarChart from '/Users/christieembeya/Documents/christie/cv_et_lettre/test/dashboard/src/app/component/BarChartGroupe.js';
import data from './component/database.json';*/


import FilterBar from './component/FilterBar.js';
import AveragePriceComponent from './component/PriceDisplay.js';
import BarChart from './component/BarChart.js';
import SaisonBarChart from './component/BarChartSaison.js';
import AgeGroupBarChart from './component/BarChartGroupe.js';
import data from './component/database.json';
const Dashboard = () => {
  const [filters, setFilters] = React.useState({ saison: null, niveau: null, passe: null });
  const [filteredData, setFilteredData] = React.useState(data);

  React.useEffect(() => {
    let filtered = data;

    if (filters.saison) {
      filtered = filtered.filter(item => item.saison === filters.saison);
    }
    if (filters.niveau) {
      filtered = filtered.filter(item => item.niveau === filters.niveau);
    }
    if (filters.passe) {
      filtered = filtered.filter(item => item.passe === filters.passe);
    }

    setFilteredData(filtered);
  }, [filters]);

  const handleFilterChange = (newFilters: React.SetStateAction<{ saison: null; niveau: null; passe: null; }>) => {
    setFilters(newFilters);
  };

  return (
    <div>
      <FilterBar onFilterChange={handleFilterChange} />
      <div className="price-display">
        {/* Composante du milieu pour afficher le prix moyen */}
        <AveragePriceComponent filteredData={filteredData} />
      </div>
      <h4 className="text-lg font-semibold mb-2">Quantité pour chaque niveau</h4>
      <div className="bar-charts">
        <BarChart filteredData={filteredData} />
      </div>
      <h4 className="text-lg font-semibold mb-2">Quantité pour chaque saison</h4>
      <div className="bar-charts">
      
        <SaisonBarChart filteredData={filteredData} />
      </div>
      <h4 className="text-lg font-semibold mb-2">Quantité par groupe d&apos;âge</h4>
      <div className="bar-charts">
      
      <AgeGroupBarChart filteredData={filteredData} />
      </div>
    </div>
  );
};

export default Dashboard;









