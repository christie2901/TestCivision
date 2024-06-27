import React, { useState, useEffect } from 'react';

const AveragePriceComponent = ({ filteredData }) => {
  const [averagePrice, setAveragePrice] = useState(0);

  useEffect(() => {
    if (filteredData.length > 0) {
      const totalSum = filteredData.reduce((sum, item) => sum + item.prix, 0);
      const avgPrice = totalSum / filteredData.length;
      setAveragePrice(avgPrice);
    } else {
      setAveragePrice(0);
    }
  }, [filteredData]);

  return (
    <div className="flex justify-center items-center h-40 bg-gray-100 shadow-lg rounded-lg p-4">
      <div className="text-gray-700 text-sm">
        <svg className="h-6 w-6 inline-block mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
        Prix moyen : <span className="font-bold">{averagePrice.toFixed(2)} €</span>
      </div>
    </div>
  );
};

export default AveragePriceComponent;



