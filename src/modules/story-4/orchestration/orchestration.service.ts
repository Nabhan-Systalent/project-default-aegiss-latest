import { Injectable } from '@nestjs/common';

export interface Workflow {
  id: string;
  name: string;
  status: 'active' | 'pending' | 'completed';
  provider: 'claude' | 'gpt-4o';
}

@Injectable()
export class OrchestrationService {
  private activeWorkflows: Workflow[] = [
    { id: '1', name: 'Analysis-Flow', status: 'active', provider: 'claude' },
    { id: '2', name: 'Generation-Flow', status: 'active', provider: 'gpt-4o' },
  ];

  async getActiveWorkflows(): Promise<Workflow[]> {
    return this.activeWorkflows;
  }
}
