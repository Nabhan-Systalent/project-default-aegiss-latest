'use client';

import React from 'react';
import { CostMetricsProps } from './CostMetrics.types';

export const CostMetrics: React.FC<CostMetricsProps> = ({ data }) => {
  return (
    <div className="bg-[var(--color-bg-card)] p-6 rounded-xl border border-[var(--color-border)]">
      <h2 className="text-xl font-bold mb-6">Token Usage per Project</h2>
      <div className="space-y-4">
        {data.map((item) => (
          <div key={item.project} className="flex items-center gap-4">
            <div className="w-32 font-medium truncate">{item.project}</div>
            <div className="flex-1 h-4 bg-[var(--color-bg-subtle)] rounded-full overflow-hidden">
              <div 
                className="h-full bg-[var(--color-primary)]" 
                style={{ width: `${Math.min((item.spend / 1000) * 100, 100)}%` }}
              />
            </div>
            <div className="w-20 text-right text-sm font-mono">${item.spend.toFixed(2)}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
