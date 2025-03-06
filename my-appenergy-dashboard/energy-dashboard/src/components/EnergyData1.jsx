import EnergyChart from './EnergyChart';
import React, { useState, useEffect } from 'react';
import BudgetAlert from './BudgetAlert';

const EnergyData1 = () => {
  const [data, setData] = useState([]);
  const [budget, setBudget] = useState(500); // Default budget
  const [totalUsage, setTotalUsage] = useState(0);

  useEffect(() => {
    fetch('http://localhost:3000/api/energy')
      .then(response => response.json())
      .then(json => {
        setData(json);
        const total = json.reduce((sum, item) => sum + item.usage, 0);
        setTotalUsage(total);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-8">
        
        {/* Page Title */}
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          ⚡ Energy Usage Dashboard
        </h1>

        {/* Budget Input */}
        <div className="flex items-center justify-center space-x-4 mb-6">
          <label className="text-lg font-medium text-gray-700">
            Set Budget (kWh):
          </label>
          <input
            type="number"
            value={budget}
            onChange={(e) => setBudget(Number(e.target.value))}
            className="border rounded-md p-2 w-32 text-center shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Budget Alert */}
        <div className="text-center mb-4">
          <BudgetAlert totalUsage={totalUsage} budget={budget} />
        </div>

        {/* Total Usage Display */}
        <div className="text-center text-lg font-semibold text-gray-800 mb-10">
          Total Usage: <span className="text-indigo-600">{totalUsage} kWh</span>
        </div>

        {/* Energy Chart */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-gray-800 text-center">
            📊 Energy Usage Trend
          </h2>
          <div className="w-full h-72">
            <EnergyChart data={data} />
          </div>
        </div>

      </div>
    </div>
  );
};

export default EnergyData1;
