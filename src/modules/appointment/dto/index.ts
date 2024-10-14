import { ArgsType, Field } from '@nestjs/graphql';
import { Appointments } from '@prisma/client';
import { IsDate } from 'class-validator';

import { PaginationDto } from '../../../shared/dto/pagination.dto';

@ArgsType()
export class CreateAppointmentArgs
  implements Required<Pick<Appointments, 'MasterServiceId' | 'startAt'>>
{
  @Field(() => String, { nullable: false })
  MasterServiceId: string;

  @Field(() => Date, { nullable: false })
  @IsDate()
  startAt: Date;
}

@ArgsType()
export class FindManyMasterAppointmentsArgs extends PaginationDto {}

@ArgsType()
export class FindManyClientAppointmentsArgs extends PaginationDto {}
