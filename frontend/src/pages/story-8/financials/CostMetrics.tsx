'use client';

import { CostMetricsProps } from './CostMetrics.types';

export const CostMetrics = ({ data, totalSpend, isLoading }: CostMetricsProps) => {
  if (isLoading) return <div className="p-6">Loading metrics...</div>;

  return (
    <div className="p-6 bg-white rounded-lg shadow-sm border border-slate-200">
      <h2 className="text-xl font-bold mb-6">Token Usage Analytics</h2>
      <div className="mb-8 p-4 bg-slate-50 rounded-md">
        <p className="text-sm text-slate-500">Total Spend</p>
        <p className="text-3xl font-bold text-slate-900">${totalSpend.toFixed(2)}</p>
      </div>

      <div className="space-y-4">
        {data.map((item) => (
          <div key={item.project} className="flex items-center justify-between p-3 border-b border-slate-100">
            <span className="font-medium text-slate-700">{item.project}</span>
            <div className="text-right">
              <p className="text-sm text-slate-900">{item.tokens.toLocaleString()} tokens</p>
              <p className="text-sm font-semibold text-blue-600">${item.cost.toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
