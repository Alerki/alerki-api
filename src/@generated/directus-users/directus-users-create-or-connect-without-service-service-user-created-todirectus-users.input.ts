import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { directus_usersWhereUniqueInput } from './directus-users-where-unique.input';
import { Type } from 'class-transformer';
import { directus_usersCreateWithoutService_Service_user_createdTodirectus_usersInput } from './directus-users-create-without-service-service-user-created-todirectus-users.input';

@InputType()
export class directus_usersCreateOrConnectWithoutService_Service_user_createdTodirectus_usersInput {
  @Field(() => directus_usersWhereUniqueInput, { nullable: false })
  @Type(() => directus_usersWhereUniqueInput)
  where!: Prisma.AtLeast<
    directus_usersWhereUniqueInput,
    'id' | 'email' | 'token' | 'external_identifier'
  >;

  @Field(
    () =>
      directus_usersCreateWithoutService_Service_user_createdTodirectus_usersInput,
    { nullable: false },
  )
  @Type(
    () =>
      directus_usersCreateWithoutService_Service_user_createdTodirectus_usersInput,
  )
  create!: directus_usersCreateWithoutService_Service_user_createdTodirectus_usersInput;
}
