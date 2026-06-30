import { IsString, IsNotEmpty, IsUrl } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class IngestDocumentDto {
  @ApiProperty({ description: 'The URL or raw text content of the document to process' })
  @IsString()
  @IsNotEmpty()
  content: string;

  @ApiProperty({ description: 'The format of the document', enum: ['pdf', 'docx', 'markdown'] })
  @IsString()
  @IsNotEmpty()
  format: 'pdf' | 'docx' | 'markdown';
}

export class IngestDocumentResponseDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  status: string;

  @ApiProperty()
  accuracyScore: number;
}
