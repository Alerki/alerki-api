import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ServiceCreateWithoutDirectus_users_Service_user_updatedTodirectus_usersInput } from './service-create-without-directus-users-service-user-updated-todirectus-users.input';
import { Type } from 'class-transformer';
import { ServiceCreateOrConnectWithoutDirectus_users_Service_user_updatedTodirectus_usersInput } from './service-create-or-connect-without-directus-users-service-user-updated-todirectus-users.input';
import { ServiceUpsertWithWhereUniqueWithoutDirectus_users_Service_user_updatedTodirectus_usersInput } from './service-upsert-with-where-unique-without-directus-users-service-user-updated-todirectus-users.input';
import { ServiceCreateManyDirectus_users_Service_user_updatedTodirectus_usersInputEnvelope } from './service-create-many-directus-users-service-user-updated-todirectus-users-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ServiceWhereUniqueInput } from './service-where-unique.input';
import { ServiceUpdateWithWhereUniqueWithoutDirectus_users_Service_user_updatedTodirectus_usersInput } from './service-update-with-where-unique-without-directus-users-service-user-updated-todirectus-users.input';
import { ServiceUpdateManyWithWhereWithoutDirectus_users_Service_user_updatedTodirectus_usersInput } from './service-update-many-with-where-without-directus-users-service-user-updated-todirectus-users.input';
import { ServiceScalarWhereInput } from './service-scalar-where.input';

@InputType()
export class ServiceUpdateManyWithoutDirectus_users_Service_user_updatedTodirectus_usersNestedInput {
  @Field(
    () => [
      ServiceCreateWithoutDirectus_users_Service_user_updatedTodirectus_usersInput,
    ],
    { nullable: true },
  )
  @Type(
    () =>
      ServiceCreateWithoutDirectus_users_Service_user_updatedTodirectus_usersInput,
  )
  create?: Array<ServiceCreateWithoutDirectus_users_Service_user_updatedTodirectus_usersInput>;

  @Field(
    () => [
      ServiceCreateOrConnectWithoutDirectus_users_Service_user_updatedTodirectus_usersInput,
    ],
    { nullable: true },
  )
  @Type(
    () =>
      ServiceCreateOrConnectWithoutDirectus_users_Service_user_updatedTodirectus_usersInput,
  )
  connectOrCreate?: Array<ServiceCreateOrConnectWithoutDirectus_users_Service_user_updatedTodirectus_usersInput>;

  @Field(
    () => [
      ServiceUpsertWithWhereUniqueWithoutDirectus_users_Service_user_updatedTodirectus_usersInput,
    ],
    { nullable: true },
  )
  @Type(
    () =>
      ServiceUpsertWithWhereUniqueWithoutDirectus_users_Service_user_updatedTodirectus_usersInput,
  )
  upsert?: Array<ServiceUpsertWithWhereUniqueWithoutDirectus_users_Service_user_updatedTodirectus_usersInput>;

  @Field(
    () =>
      ServiceCreateManyDirectus_users_Service_user_updatedTodirectus_usersInputEnvelope,
    { nullable: true },
  )
  @Type(
    () =>
      ServiceCreateManyDirectus_users_Service_user_updatedTodirectus_usersInputEnvelope,
  )
  createMany?: ServiceCreateManyDirectus_users_Service_user_updatedTodirectus_usersInputEnvelope;

  @Field(() => [ServiceWhereUniqueInput], { nullable: true })
  @Type(() => ServiceWhereUniqueInput)
  set?: Array<Prisma.AtLeast<ServiceWhereUniqueInput, 'id'>>;

  @Field(() => [ServiceWhereUniqueInput], { nullable: true })
  @Type(() => ServiceWhereUniqueInput)
  disconnect?: Array<Prisma.AtLeast<ServiceWhereUniqueInput, 'id'>>;

  @Field(() => [ServiceWhereUniqueInput], { nullable: true })
  @Type(() => ServiceWhereUniqueInput)
  delete?: Array<Prisma.AtLeast<ServiceWhereUniqueInput, 'id'>>;

  @Field(() => [ServiceWhereUniqueInput], { nullable: true })
  @Type(() => ServiceWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<ServiceWhereUniqueInput, 'id'>>;

  @Field(
    () => [
      ServiceUpdateWithWhereUniqueWithoutDirectus_users_Service_user_updatedTodirectus_usersInput,
    ],
    { nullable: true },
  )
  @Type(
    () =>
      ServiceUpdateWithWhereUniqueWithoutDirectus_users_Service_user_updatedTodirectus_usersInput,
  )
  update?: Array<ServiceUpdateWithWhereUniqueWithoutDirectus_users_Service_user_updatedTodirectus_usersInput>;

  @Field(
    () => [
      ServiceUpdateManyWithWhereWithoutDirectus_users_Service_user_updatedTodirectus_usersInput,
    ],
    { nullable: true },
  )
  @Type(
    () =>
      ServiceUpdateManyWithWhereWithoutDirectus_users_Service_user_updatedTodirectus_usersInput,
  )
  updateMany?: Array<ServiceUpdateManyWithWhereWithoutDirectus_users_Service_user_updatedTodirectus_usersInput>;

  @Field(() => [ServiceScalarWhereInput], { nullable: true })
  @Type(() => ServiceScalarWhereInput)
  deleteMany?: Array<ServiceScalarWhereInput>;
}
