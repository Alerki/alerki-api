import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AppointmentCreateManyInput } from './appointment-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyAppointmentArgs {
  @Field(() => [AppointmentCreateManyInput], { nullable: false })
  @Type(() => AppointmentCreateManyInput)
  data!: Array<AppointmentCreateManyInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
