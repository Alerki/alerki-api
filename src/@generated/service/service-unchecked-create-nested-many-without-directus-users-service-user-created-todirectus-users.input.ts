import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ServiceCreateWithoutDirectus_users_Service_user_createdTodirectus_usersInput } from './service-create-without-directus-users-service-user-created-todirectus-users.input';
import { Type } from 'class-transformer';
import { ServiceCreateOrConnectWithoutDirectus_users_Service_user_createdTodirectus_usersInput } from './service-create-or-connect-without-directus-users-service-user-created-todirectus-users.input';
import { ServiceCreateManyDirectus_users_Service_user_createdTodirectus_usersInputEnvelope } from './service-create-many-directus-users-service-user-created-todirectus-users-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ServiceWhereUniqueInput } from './service-where-unique.input';

@InputType()
export class ServiceUncheckedCreateNestedManyWithoutDirectus_users_Service_user_createdTodirectus_usersInput {
  @Field(
    () => [
      ServiceCreateWithoutDirectus_users_Service_user_createdTodirectus_usersInput,
    ],
    { nullable: true },
  )
  @Type(
    () =>
      ServiceCreateWithoutDirectus_users_Service_user_createdTodirectus_usersInput,
  )
  create?: Array<ServiceCreateWithoutDirectus_users_Service_user_createdTodirectus_usersInput>;

  @Field(
    () => [
      ServiceCreateOrConnectWithoutDirectus_users_Service_user_createdTodirectus_usersInput,
    ],
    { nullable: true },
  )
  @Type(
    () =>
      ServiceCreateOrConnectWithoutDirectus_users_Service_user_createdTodirectus_usersInput,
  )
  connectOrCreate?: Array<ServiceCreateOrConnectWithoutDirectus_users_Service_user_createdTodirectus_usersInput>;

  @Field(
    () =>
      ServiceCreateManyDirectus_users_Service_user_createdTodirectus_usersInputEnvelope,
    { nullable: true },
  )
  @Type(
    () =>
      ServiceCreateManyDirectus_users_Service_user_createdTodirectus_usersInputEnvelope,
  )
  createMany?: ServiceCreateManyDirectus_users_Service_user_createdTodirectus_usersInputEnvelope;

  @Field(() => [ServiceWhereUniqueInput], { nullable: true })
  @Type(() => ServiceWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<ServiceWhereUniqueInput, 'id'>>;
}
