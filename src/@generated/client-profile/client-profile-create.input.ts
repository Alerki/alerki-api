import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AppointmentCreateNestedManyWithoutClientProfileInput } from '../appointment/appointment-create-nested-many-without-client-profile.input';
import { UserCreateNestedManyWithoutClientProfileInput } from '../user/user-create-nested-many-without-client-profile.input';

@InputType()
export class ClientProfileCreateInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => Date, { nullable: true })
  date_created?: Date | string;

  @Field(() => Date, { nullable: true })
  date_updated?: Date | string;

  @Field(() => AppointmentCreateNestedManyWithoutClientProfileInput, {
    nullable: true,
  })
  Appointment?: AppointmentCreateNestedManyWithoutClientProfileInput;

  @Field(() => UserCreateNestedManyWithoutClientProfileInput, {
    nullable: true,
  })
  User?: UserCreateNestedManyWithoutClientProfileInput;
}
