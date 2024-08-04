import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_usersCreateWithoutService_Service_user_updatedTodirectus_usersInput } from './directus-users-create-without-service-service-user-updated-todirectus-users.input';
import { Type } from 'class-transformer';
import { directus_usersCreateOrConnectWithoutService_Service_user_updatedTodirectus_usersInput } from './directus-users-create-or-connect-without-service-service-user-updated-todirectus-users.input';
import { Prisma } from '@prisma/client';
import { directus_usersWhereUniqueInput } from './directus-users-where-unique.input';

@InputType()
export class directus_usersCreateNestedOneWithoutService_Service_user_updatedTodirectus_usersInput {
  @Field(
    () =>
      directus_usersCreateWithoutService_Service_user_updatedTodirectus_usersInput,
    { nullable: true },
  )
  @Type(
    () =>
      directus_usersCreateWithoutService_Service_user_updatedTodirectus_usersInput,
  )
  create?: directus_usersCreateWithoutService_Service_user_updatedTodirectus_usersInput;

  @Field(
    () =>
      directus_usersCreateOrConnectWithoutService_Service_user_updatedTodirectus_usersInput,
    { nullable: true },
  )
  @Type(
    () =>
      directus_usersCreateOrConnectWithoutService_Service_user_updatedTodirectus_usersInput,
  )
  connectOrCreate?: directus_usersCreateOrConnectWithoutService_Service_user_updatedTodirectus_usersInput;

  @Field(() => directus_usersWhereUniqueInput, { nullable: true })
  @Type(() => directus_usersWhereUniqueInput)
  connect?: Prisma.AtLeast<
    directus_usersWhereUniqueInput,
    'id' | 'email' | 'token' | 'external_identifier'
  >;
}
