import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AppointmentUncheckedCreateNestedManyWithoutClientProfileInput } from '../appointment/appointment-unchecked-create-nested-many-without-client-profile.input';

@InputType()
export class ClientProfileUncheckedCreateWithoutUserInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => Date, { nullable: true })
  date_created?: Date | string;

  @Field(() => Date, { nullable: true })
  date_updated?: Date | string;

  @Field(() => AppointmentUncheckedCreateNestedManyWithoutClientProfileInput, {
    nullable: true,
  })
  Appointment?: AppointmentUncheckedCreateNestedManyWithoutClientProfileInput;
}
