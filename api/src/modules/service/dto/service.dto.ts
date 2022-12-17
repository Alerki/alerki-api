import { ApiProperty } from '@nestjs/swagger';
import Prisma from '@prisma/client';
import { IsString } from 'class-validator';

export class GetServicesDto implements Pick<Prisma.Service, 'name'> {
  @ApiProperty({
    description: 'Search service name',
    type: 'string',
    example: 'Haircut',
  })
  @IsString()
  readonly name: string;
}
