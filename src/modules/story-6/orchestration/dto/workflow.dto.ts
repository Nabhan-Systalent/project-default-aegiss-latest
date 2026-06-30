import { ApiProperty } from '@nestjs/swagger';

export class WorkflowDto {
  @ApiProperty({ example: 'wf-1' })
  id: string;

  @ApiProperty({ example: 'Jira Sync Flow' })
  name: string;

  @ApiProperty({ enum: ['active', 'completed', 'failed'] })
  status: 'active' | 'completed' | 'failed';

  @ApiProperty({ example: '2026-06-28T10:00:00Z' })
  lastUpdated: string;
}
