import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ServiceCreateManyDirectus_users_Service_user_updatedTodirectus_usersInput } from './service-create-many-directus-users-service-user-updated-todirectus-users.input';
import { Type } from 'class-transformer';

@InputType()
export class ServiceCreateManyDirectus_users_Service_user_updatedTodirectus_usersInputEnvelope {
  @Field(
    () => [
      ServiceCreateManyDirectus_users_Service_user_updatedTodirectus_usersInput,
    ],
    { nullable: false },
  )
  @Type(
    () =>
      ServiceCreateManyDirectus_users_Service_user_updatedTodirectus_usersInput,
  )
  data!: Array<ServiceCreateManyDirectus_users_Service_user_updatedTodirectus_usersInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
