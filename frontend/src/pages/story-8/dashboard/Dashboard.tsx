import { DashboardProps } from './Dashboard.types';

export const Dashboard = ({ workflows, isLoading, error }: DashboardProps) => {
  if (isLoading) {
    return <div className="p-6 text-slate-500">Loading dashboard...</div>;
  }

  if (error) {
    return <div className="p-6 text-red-500">Error: {error}</div>;
  }

  if (!workflows.length) {
    return <div className="p-6 text-slate-500">No active workflows found.</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
      {workflows.map((wf) => (
        <div key={wf.id} className="p-4 border border-slate-200 rounded-lg shadow-sm bg-white">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-semibold text-slate-900">{wf.name}</h3>
            <span className={`px-2 py-1 text-xs rounded-full ${
              wf.status === 'active' ? 'bg-green-100 text-green-700' :
              wf.status === 'error' ? 'bg-red-100 text-red-700' : 'bg-slate-100 text-slate-600'
            }`}>
              {wf.status}
            </span>
          </div>
          <div className="space-y-1">
            <p className="text-sm text-slate-600">Health: {wf.health}%</p>
            <p className="text-xs text-slate-400">Last run: {wf.lastRun}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
