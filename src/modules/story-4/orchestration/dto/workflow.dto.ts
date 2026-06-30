import { ApiProperty } from '@nestjs/swagger';

export class WorkflowResponseDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  status: 'active' | 'pending' | 'completed';

  @ApiProperty()
  provider: 'claude' | 'gpt-4o';
}
