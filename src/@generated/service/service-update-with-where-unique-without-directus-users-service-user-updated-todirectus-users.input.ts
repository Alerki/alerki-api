import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ServiceWhereUniqueInput } from './service-where-unique.input';
import { Type } from 'class-transformer';
import { ServiceUpdateWithoutDirectus_users_Service_user_updatedTodirectus_usersInput } from './service-update-without-directus-users-service-user-updated-todirectus-users.input';

@InputType()
export class ServiceUpdateWithWhereUniqueWithoutDirectus_users_Service_user_updatedTodirectus_usersInput {
  @Field(() => ServiceWhereUniqueInput, { nullable: false })
  @Type(() => ServiceWhereUniqueInput)
  where!: Prisma.AtLeast<ServiceWhereUniqueInput, 'id'>;

  @Field(
    () =>
      ServiceUpdateWithoutDirectus_users_Service_user_updatedTodirectus_usersInput,
    { nullable: false },
  )
  @Type(
    () =>
      ServiceUpdateWithoutDirectus_users_Service_user_updatedTodirectus_usersInput,
  )
  data!: ServiceUpdateWithoutDirectus_users_Service_user_updatedTodirectus_usersInput;
}
