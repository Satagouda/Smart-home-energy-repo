import React from 'react';

const BudgetAlert = ({ totalUsage, budget }) => {
  return (
    <div>
      {totalUsage > budget ? (
        <div className="p-3 bg-red-200 text-red-800 border-l-4 border-red-600 rounded">
          <strong>Warning:</strong> Energy usage ({totalUsage} kWh) has exceeded the budget ({budget} kWh)!
        </div>
      ) : (
        <div className="p-3 bg-green-200 text-green-800 border-l-4 border-green-600 rounded">
          Energy usage is within budget.
        </div>
      )}
    </div>
  );
};

export default BudgetAlert;