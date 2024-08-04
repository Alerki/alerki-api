import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CurrencyCreateWithoutDirectus_users_Currency_user_updatedTodirectus_usersInput } from './currency-create-without-directus-users-currency-user-updated-todirectus-users.input';
import { Type } from 'class-transformer';
import { CurrencyCreateOrConnectWithoutDirectus_users_Currency_user_updatedTodirectus_usersInput } from './currency-create-or-connect-without-directus-users-currency-user-updated-todirectus-users.input';
import { CurrencyCreateManyDirectus_users_Currency_user_updatedTodirectus_usersInputEnvelope } from './currency-create-many-directus-users-currency-user-updated-todirectus-users-input-envelope.input';
import { Prisma } from '@prisma/client';
import { CurrencyWhereUniqueInput } from './currency-where-unique.input';

@InputType()
export class CurrencyCreateNestedManyWithoutDirectus_users_Currency_user_updatedTodirectus_usersInput {
  @Field(
    () => [
      CurrencyCreateWithoutDirectus_users_Currency_user_updatedTodirectus_usersInput,
    ],
    { nullable: true },
  )
  @Type(
    () =>
      CurrencyCreateWithoutDirectus_users_Currency_user_updatedTodirectus_usersInput,
  )
  create?: Array<CurrencyCreateWithoutDirectus_users_Currency_user_updatedTodirectus_usersInput>;

  @Field(
    () => [
      CurrencyCreateOrConnectWithoutDirectus_users_Currency_user_updatedTodirectus_usersInput,
    ],
    { nullable: true },
  )
  @Type(
    () =>
      CurrencyCreateOrConnectWithoutDirectus_users_Currency_user_updatedTodirectus_usersInput,
  )
  connectOrCreate?: Array<CurrencyCreateOrConnectWithoutDirectus_users_Currency_user_updatedTodirectus_usersInput>;

  @Field(
    () =>
      CurrencyCreateManyDirectus_users_Currency_user_updatedTodirectus_usersInputEnvelope,
    { nullable: true },
  )
  @Type(
    () =>
      CurrencyCreateManyDirectus_users_Currency_user_updatedTodirectus_usersInputEnvelope,
  )
  createMany?: CurrencyCreateManyDirectus_users_Currency_user_updatedTodirectus_usersInputEnvelope;

  @Field(() => [CurrencyWhereUniqueInput], { nullable: true })
  @Type(() => CurrencyWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<CurrencyWhereUniqueInput, 'id' | 'code'>>;
}
