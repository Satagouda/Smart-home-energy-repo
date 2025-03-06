import React, { useState, useEffect } from 'react';
import EnergyChart from '../components/EnergyChart'; // Assuming you have the chart component
import BudgetAlert from '../components/BudgetAlert'; // Assuming you have the budget alert component

const EnergyData = () => {
  const [energy, setEnergy] = useState([]);
  const [budget, setBudget] = useState(500); // Default budget
  const [totalUsage, setTotalUsage] = useState(0);

  // Fetching energy data
  useEffect(() => {
    fetch('http://localhost:3000/api/energy')
  .then(response => response.json())
  .then(json => {
    console.log(json)
    const formattedData = json.map(({ device, value }) => ({
      device: device || "Unknown",
      usage: value || 0, // Renaming value to usage for consistency in chart
    }));
 console.log(formattedData)
    setEnergy(formattedData);

    // Ensure correct key is used for summing up usage
    const total = json.reduce((sum, item) => sum + (item.value || 0), 0);
    setTotalUsage(total);
  })
  .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-xl rounded-lg">
      {/* Title */}
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        ⚡ Energy Usage Dashboard
      </h1>
  
      {/* Budget Input */}
      <div className="flex items-center justify-center gap-4 mb-6">
        <label className="text-lg font-medium">Set Budget (kWh):</label>
        <input
          type="number"
          value={budget}
          onChange={(e) => setBudget(Number(e.target.value))}
          className="border border-gray-300 p-2 rounded w-32"
        />
      </div>
  
      {/* Budget Alert */}
      <BudgetAlert totalUsage={totalUsage} budget={budget} />
  
      {/* Total Usage */}
      <div className="text-center text-lg font-semibold mt-4">
  Total Usage: <span className="text-blue-600">{totalUsage} kWh</span>
</div>

  
      {/* Energy List */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-4">🔌 Device Usage</h2>
        <ul className="space-y-2">
          {energy.map((item, index) => (
            <li
              key={index}
              className="flex justify-between p-3 bg-gray-100 rounded"
            >
              <span>{item.device}</span>
              <span>{item.usage} kWh</span>
            </li>
          ))}
        </ul>
      </div>
  
      {/* Chart */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">📊 Energy Usage Trend</h2>
        <EnergyChart data={energy} />
      </div>
    </div>
  );
  
};

export default EnergyData;