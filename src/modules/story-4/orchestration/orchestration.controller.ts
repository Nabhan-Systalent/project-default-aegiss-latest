import { Controller, Get } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { OrchestrationService } from './orchestration.service';
import { WorkflowResponseDto } from './dto/workflow.dto';

@ApiTags('Orchestration')
@Controller('workflows')
export class OrchestrationController {
  constructor(private readonly orchestrationService: OrchestrationService) {}

  @Get()
  @ApiOkResponse({ type: [WorkflowResponseDto] })
  async getWorkflowStatus(): Promise<WorkflowResponseDto[]> {
    return await this.orchestrationService.getActiveWorkflows();
  }
}
