import { ArgsType, Field } from '@nestjs/graphql';
import { Appointments } from '@prisma/client';

@ArgsType()
export class CreateAppointmentArgs
  implements Required<Pick<Appointments, 'MasterServiceId' | 'startAt'>>
{
  @Field(() => String, { nullable: false })
  MasterServiceId: string;

  @Field(() => Date, { nullable: false })
  startAt: Date;
}
