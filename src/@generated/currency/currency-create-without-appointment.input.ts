import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { directus_usersCreateNestedOneWithoutCurrency_Currency_user_createdTodirectus_usersInput } from '../directus-users/directus-users-create-nested-one-without-currency-currency-user-created-todirectus-users.input';
import { directus_usersCreateNestedOneWithoutCurrency_Currency_user_updatedTodirectus_usersInput } from '../directus-users/directus-users-create-nested-one-without-currency-currency-user-updated-todirectus-users.input';
import { MasterServiceCreateNestedManyWithoutCurrencyInput } from '../master-service/master-service-create-nested-many-without-currency.input';

@InputType()
export class CurrencyCreateWithoutAppointmentInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => String, { nullable: true })
  status?: string;

  @Field(() => Int, { nullable: true })
  sort?: number;

  @Field(() => Date, { nullable: true })
  date_created?: Date | string;

  @Field(() => Date, { nullable: true })
  date_updated?: Date | string;

  @Field(() => String, { nullable: false })
  code!: string;

  @Field(() => String, { nullable: false })
  character!: string;

  @Field(
    () =>
      directus_usersCreateNestedOneWithoutCurrency_Currency_user_createdTodirectus_usersInput,
    { nullable: true },
  )
  directus_users_Currency_user_createdTodirectus_users?: directus_usersCreateNestedOneWithoutCurrency_Currency_user_createdTodirectus_usersInput;

  @Field(
    () =>
      directus_usersCreateNestedOneWithoutCurrency_Currency_user_updatedTodirectus_usersInput,
    { nullable: true },
  )
  directus_users_Currency_user_updatedTodirectus_users?: directus_usersCreateNestedOneWithoutCurrency_Currency_user_updatedTodirectus_usersInput;

  @Field(() => MasterServiceCreateNestedManyWithoutCurrencyInput, {
    nullable: true,
  })
  MasterService?: MasterServiceCreateNestedManyWithoutCurrencyInput;
}
