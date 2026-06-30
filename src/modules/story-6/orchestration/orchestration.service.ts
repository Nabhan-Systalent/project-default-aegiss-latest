import { Injectable } from '@nestjs/common';

export interface Workflow {
  id: string;
  name: string;
  status: 'active' | 'completed' | 'failed';
  lastUpdated: string;
}

@Injectable()
export class OrchestrationService {
  private readonly workflows: Workflow[] = [
    { id: 'wf-1', name: 'Jira Sync Flow', status: 'active', lastUpdated: '2026-06-28T10:00:00Z' },
    { id: 'wf-2', name: 'User Authentication Flow', status: 'active', lastUpdated: '2026-06-28T10:05:00Z' },
  ];

  async getActiveWorkflows(): Promise<Workflow[]> {
    return this.workflows.filter((wf) => wf.status === 'active');
  }
}
