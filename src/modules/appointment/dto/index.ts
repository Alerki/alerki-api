import { ArgsType, Field } from '@nestjs/graphql';
import { Appointments } from '@prisma/client';
import { IsDate, IsString } from 'class-validator';

@ArgsType()
export class CreateAppointmentArgs
  implements Required<Pick<Appointments, 'MasterServiceId' | 'startAt'>>
{
  @Field(() => String)
  @IsString()
  MasterServiceId: string;

  @Field(() => String)
  @IsDate()
  startAt: Date;
}
