import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { directus_usersWhereUniqueInput } from './directus-users-where-unique.input';
import { Type } from 'class-transformer';
import { directus_usersCreateWithoutCurrency_Currency_user_createdTodirectus_usersInput } from './directus-users-create-without-currency-currency-user-created-todirectus-users.input';

@InputType()
export class directus_usersCreateOrConnectWithoutCurrency_Currency_user_createdTodirectus_usersInput {
  @Field(() => directus_usersWhereUniqueInput, { nullable: false })
  @Type(() => directus_usersWhereUniqueInput)
  where!: Prisma.AtLeast<
    directus_usersWhereUniqueInput,
    'id' | 'email' | 'token' | 'external_identifier'
  >;

  @Field(
    () =>
      directus_usersCreateWithoutCurrency_Currency_user_createdTodirectus_usersInput,
    { nullable: false },
  )
  @Type(
    () =>
      directus_usersCreateWithoutCurrency_Currency_user_createdTodirectus_usersInput,
  )
  create!: directus_usersCreateWithoutCurrency_Currency_user_createdTodirectus_usersInput;
}
