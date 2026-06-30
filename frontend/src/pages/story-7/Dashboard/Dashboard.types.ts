export interface DashboardProps {
  workflows: Array<{
    id: string;
    name: string;
    status: 'active' | 'idle' | 'error';
    lastActive: string;
  }>;
  isLoading?: boolean;
}
