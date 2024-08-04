import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CurrencyCreateWithoutDirectus_users_Currency_user_createdTodirectus_usersInput } from './currency-create-without-directus-users-currency-user-created-todirectus-users.input';
import { Type } from 'class-transformer';
import { CurrencyCreateOrConnectWithoutDirectus_users_Currency_user_createdTodirectus_usersInput } from './currency-create-or-connect-without-directus-users-currency-user-created-todirectus-users.input';
import { CurrencyCreateManyDirectus_users_Currency_user_createdTodirectus_usersInputEnvelope } from './currency-create-many-directus-users-currency-user-created-todirectus-users-input-envelope.input';
import { Prisma } from '@prisma/client';
import { CurrencyWhereUniqueInput } from './currency-where-unique.input';

@InputType()
export class CurrencyUncheckedCreateNestedManyWithoutDirectus_users_Currency_user_createdTodirectus_usersInput {
  @Field(
    () => [
      CurrencyCreateWithoutDirectus_users_Currency_user_createdTodirectus_usersInput,
    ],
    { nullable: true },
  )
  @Type(
    () =>
      CurrencyCreateWithoutDirectus_users_Currency_user_createdTodirectus_usersInput,
  )
  create?: Array<CurrencyCreateWithoutDirectus_users_Currency_user_createdTodirectus_usersInput>;

  @Field(
    () => [
      CurrencyCreateOrConnectWithoutDirectus_users_Currency_user_createdTodirectus_usersInput,
    ],
    { nullable: true },
  )
  @Type(
    () =>
      CurrencyCreateOrConnectWithoutDirectus_users_Currency_user_createdTodirectus_usersInput,
  )
  connectOrCreate?: Array<CurrencyCreateOrConnectWithoutDirectus_users_Currency_user_createdTodirectus_usersInput>;

  @Field(
    () =>
      CurrencyCreateManyDirectus_users_Currency_user_createdTodirectus_usersInputEnvelope,
    { nullable: true },
  )
  @Type(
    () =>
      CurrencyCreateManyDirectus_users_Currency_user_createdTodirectus_usersInputEnvelope,
  )
  createMany?: CurrencyCreateManyDirectus_users_Currency_user_createdTodirectus_usersInputEnvelope;

  @Field(() => [CurrencyWhereUniqueInput], { nullable: true })
  @Type(() => CurrencyWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<CurrencyWhereUniqueInput, 'id' | 'code'>>;
}
