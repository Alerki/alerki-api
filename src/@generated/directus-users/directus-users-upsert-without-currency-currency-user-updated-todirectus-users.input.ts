import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_usersUpdateWithoutCurrency_Currency_user_updatedTodirectus_usersInput } from './directus-users-update-without-currency-currency-user-updated-todirectus-users.input';
import { Type } from 'class-transformer';
import { directus_usersCreateWithoutCurrency_Currency_user_updatedTodirectus_usersInput } from './directus-users-create-without-currency-currency-user-updated-todirectus-users.input';

@InputType()
export class directus_usersUpsertWithoutCurrency_Currency_user_updatedTodirectus_usersInput {
  @Field(
    () =>
      directus_usersUpdateWithoutCurrency_Currency_user_updatedTodirectus_usersInput,
    { nullable: false },
  )
  @Type(
    () =>
      directus_usersUpdateWithoutCurrency_Currency_user_updatedTodirectus_usersInput,
  )
  update!: directus_usersUpdateWithoutCurrency_Currency_user_updatedTodirectus_usersInput;

  @Field(
    () =>
      directus_usersCreateWithoutCurrency_Currency_user_updatedTodirectus_usersInput,
    { nullable: false },
  )
  @Type(
    () =>
      directus_usersCreateWithoutCurrency_Currency_user_updatedTodirectus_usersInput,
  )
  create!: directus_usersCreateWithoutCurrency_Currency_user_updatedTodirectus_usersInput;
}
