export interface DashboardProps {
  workflows: Array<{
    id: string;
    name: string;
    status: 'active' | 'idle' | 'error';
    health: number;
    lastRun: string;
  }>;
  isLoading?: boolean;
  error?: string | null;
}
