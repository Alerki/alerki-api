import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CurrencyWhereUniqueInput } from './currency-where-unique.input';
import { Type } from 'class-transformer';
import { CurrencyCreateWithoutDirectus_users_Currency_user_updatedTodirectus_usersInput } from './currency-create-without-directus-users-currency-user-updated-todirectus-users.input';

@InputType()
export class CurrencyCreateOrConnectWithoutDirectus_users_Currency_user_updatedTodirectus_usersInput {
  @Field(() => CurrencyWhereUniqueInput, { nullable: false })
  @Type(() => CurrencyWhereUniqueInput)
  where!: Prisma.AtLeast<CurrencyWhereUniqueInput, 'id' | 'code'>;

  @Field(
    () =>
      CurrencyCreateWithoutDirectus_users_Currency_user_updatedTodirectus_usersInput,
    { nullable: false },
  )
  @Type(
    () =>
      CurrencyCreateWithoutDirectus_users_Currency_user_updatedTodirectus_usersInput,
  )
  create!: CurrencyCreateWithoutDirectus_users_Currency_user_updatedTodirectus_usersInput;
}
