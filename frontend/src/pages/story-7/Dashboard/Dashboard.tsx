'use client';

import React from 'react';
import { DashboardProps } from './Dashboard.types';

export const Dashboard: React.FC<DashboardProps> = ({ workflows, isLoading }) => {
  if (isLoading) {
    return <div className="p-8 text-center text-[var(--color-text-muted)]">Loading system status...</div>;
  }

  if (!workflows || workflows.length === 0) {
    return <div className="p-8 border border-dashed rounded-lg text-center">No active workflows found.</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {workflows.map((wf) => (
        <div key={wf.id} className="p-6 bg-[var(--color-bg-card)] border border-[var(--color-border)] rounded-xl shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <h3 className="font-semibold text-lg">{wf.name}</h3>
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
              wf.status === 'active' ? 'bg-green-100 text-green-700' :
              wf.status === 'error' ? 'bg-red-100 text-red-700' :
              'bg-gray-100 text-gray-700'
            }`}>
              {wf.status.toUpperCase()}
            </span>
          </div>
          <p className="text-sm text-[var(--color-text-muted)]">Last active: {wf.lastActive}</p>
        </div>
      ))}
    </div>
  );
};
