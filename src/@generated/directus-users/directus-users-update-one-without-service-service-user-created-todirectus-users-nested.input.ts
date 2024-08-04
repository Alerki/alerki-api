import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_usersCreateWithoutService_Service_user_createdTodirectus_usersInput } from './directus-users-create-without-service-service-user-created-todirectus-users.input';
import { Type } from 'class-transformer';
import { directus_usersCreateOrConnectWithoutService_Service_user_createdTodirectus_usersInput } from './directus-users-create-or-connect-without-service-service-user-created-todirectus-users.input';
import { directus_usersUpsertWithoutService_Service_user_createdTodirectus_usersInput } from './directus-users-upsert-without-service-service-user-created-todirectus-users.input';
import { Prisma } from '@prisma/client';
import { directus_usersWhereUniqueInput } from './directus-users-where-unique.input';
import { directus_usersUpdateWithoutService_Service_user_createdTodirectus_usersInput } from './directus-users-update-without-service-service-user-created-todirectus-users.input';

@InputType()
export class directus_usersUpdateOneWithoutService_Service_user_createdTodirectus_usersNestedInput {
  @Field(
    () =>
      directus_usersCreateWithoutService_Service_user_createdTodirectus_usersInput,
    { nullable: true },
  )
  @Type(
    () =>
      directus_usersCreateWithoutService_Service_user_createdTodirectus_usersInput,
  )
  create?: directus_usersCreateWithoutService_Service_user_createdTodirectus_usersInput;

  @Field(
    () =>
      directus_usersCreateOrConnectWithoutService_Service_user_createdTodirectus_usersInput,
    { nullable: true },
  )
  @Type(
    () =>
      directus_usersCreateOrConnectWithoutService_Service_user_createdTodirectus_usersInput,
  )
  connectOrCreate?: directus_usersCreateOrConnectWithoutService_Service_user_createdTodirectus_usersInput;

  @Field(
    () =>
      directus_usersUpsertWithoutService_Service_user_createdTodirectus_usersInput,
    { nullable: true },
  )
  @Type(
    () =>
      directus_usersUpsertWithoutService_Service_user_createdTodirectus_usersInput,
  )
  upsert?: directus_usersUpsertWithoutService_Service_user_createdTodirectus_usersInput;

  @Field(() => Boolean, { nullable: true })
  disconnect?: boolean;

  @Field(() => Boolean, { nullable: true })
  delete?: boolean;

  @Field(() => directus_usersWhereUniqueInput, { nullable: true })
  @Type(() => directus_usersWhereUniqueInput)
  connect?: Prisma.AtLeast<
    directus_usersWhereUniqueInput,
    'id' | 'email' | 'token' | 'external_identifier'
  >;

  @Field(
    () =>
      directus_usersUpdateWithoutService_Service_user_createdTodirectus_usersInput,
    { nullable: true },
  )
  @Type(
    () =>
      directus_usersUpdateWithoutService_Service_user_createdTodirectus_usersInput,
  )
  update?: directus_usersUpdateWithoutService_Service_user_createdTodirectus_usersInput;
}
