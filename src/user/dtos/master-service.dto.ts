import Prisma from '@prisma/client';
import { IsNumber, IsString, IsUUID } from 'class-validator';

export class CreateMasterServiceDto
  implements
    Pick<Prisma.MasterService, 'duration' | 'serviceId' | 'price' | 'currency'>
{
  @IsUUID()
  serviceId: string;

  @IsString()
  currency: string;

  @IsNumber()
  duration: number;

  @IsNumber()
  price: number;
}

export class UpdateMasterServiceDto extends CreateMasterServiceDto {}
