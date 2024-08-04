import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ServiceWhereUniqueInput } from './service-where-unique.input';
import { Type } from 'class-transformer';
import { ServiceCreateWithoutDirectus_users_Service_user_updatedTodirectus_usersInput } from './service-create-without-directus-users-service-user-updated-todirectus-users.input';

@InputType()
export class ServiceCreateOrConnectWithoutDirectus_users_Service_user_updatedTodirectus_usersInput {
  @Field(() => ServiceWhereUniqueInput, { nullable: false })
  @Type(() => ServiceWhereUniqueInput)
  where!: Prisma.AtLeast<ServiceWhereUniqueInput, 'id'>;

  @Field(
    () =>
      ServiceCreateWithoutDirectus_users_Service_user_updatedTodirectus_usersInput,
    { nullable: false },
  )
  @Type(
    () =>
      ServiceCreateWithoutDirectus_users_Service_user_updatedTodirectus_usersInput,
  )
  create!: ServiceCreateWithoutDirectus_users_Service_user_updatedTodirectus_usersInput;
}
