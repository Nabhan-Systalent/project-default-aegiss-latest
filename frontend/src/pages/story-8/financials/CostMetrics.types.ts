export interface CostMetricsProps {
  data: Array<{
    project: string;
    tokens: number;
    cost: number;
  }>;
  totalSpend: number;
  isLoading?: boolean;
}
