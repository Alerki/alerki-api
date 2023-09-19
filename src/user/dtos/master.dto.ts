import { ApiProperty } from '@nestjs/swagger';
import Prisma from '@prisma/client';
import { IsNumber, IsString } from 'class-validator';

export class CreateMasterServiceDto
  implements Pick<Prisma.MasterService, 'duration' | 'price' | 'currency'>
{
  @ApiProperty({
    description: 'Service name',
    type: 'string',
    example: 'Haircut',
  })
  @IsString()
  name: string;

  @ApiProperty({
    description: 'Currency',
    type: 'string',
    example: 'USD',
  })
  @IsString()
  currency: string;

  @ApiProperty({
    description: 'Service duration in milliseconds',
    type: 'number',
    example: 60 * 10,
  })
  @IsNumber()
  duration: number;

  @ApiProperty({
    description: 'Service price',
    type: 'number',
    example: 10,
  })
  @IsNumber()
  price: number;
}

export class UpdateMasterServiceDto extends CreateMasterServiceDto {}
