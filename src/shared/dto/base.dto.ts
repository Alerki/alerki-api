import { ApiProperty } from '@nestjs/swagger';

export class BaseRowsDto {
  @ApiProperty({
    description: 'Master weekly schedule ID',
    type: String,
    example: '0277f3bf-9ea6-4a17-99b2-bf63f4ae7903',
  })
  readonly id: string;

  @ApiProperty({
    description: 'Record created at time',
    type: Date,
    example: new Date(),
  })
  readonly createdAt: Date;

  @ApiProperty({
    description: 'Record updated at time',
    type: Date,
    example: new Date(),
  })
  readonly updatedAt: Date;
}
