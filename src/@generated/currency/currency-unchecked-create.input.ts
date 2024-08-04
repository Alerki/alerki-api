import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { AppointmentUncheckedCreateNestedManyWithoutCurrencyInput } from '../appointment/appointment-unchecked-create-nested-many-without-currency.input';
import { MasterServiceUncheckedCreateNestedManyWithoutCurrencyInput } from '../master-service/master-service-unchecked-create-nested-many-without-currency.input';

@InputType()
export class CurrencyUncheckedCreateInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => String, { nullable: true })
  status?: string;

  @Field(() => Int, { nullable: true })
  sort?: number;

  @Field(() => String, { nullable: true })
  user_created?: string;

  @Field(() => Date, { nullable: true })
  date_created?: Date | string;

  @Field(() => String, { nullable: true })
  user_updated?: string;

  @Field(() => Date, { nullable: true })
  date_updated?: Date | string;

  @Field(() => String, { nullable: false })
  code!: string;

  @Field(() => String, { nullable: false })
  character!: string;

  @Field(() => AppointmentUncheckedCreateNestedManyWithoutCurrencyInput, {
    nullable: true,
  })
  Appointment?: AppointmentUncheckedCreateNestedManyWithoutCurrencyInput;

  @Field(() => MasterServiceUncheckedCreateNestedManyWithoutCurrencyInput, {
    nullable: true,
  })
  MasterService?: MasterServiceUncheckedCreateNestedManyWithoutCurrencyInput;
}
