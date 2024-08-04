import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ServiceCreateManyDirectus_users_Service_user_createdTodirectus_usersInput } from './service-create-many-directus-users-service-user-created-todirectus-users.input';
import { Type } from 'class-transformer';

@InputType()
export class ServiceCreateManyDirectus_users_Service_user_createdTodirectus_usersInputEnvelope {
  @Field(
    () => [
      ServiceCreateManyDirectus_users_Service_user_createdTodirectus_usersInput,
    ],
    { nullable: false },
  )
  @Type(
    () =>
      ServiceCreateManyDirectus_users_Service_user_createdTodirectus_usersInput,
  )
  data!: Array<ServiceCreateManyDirectus_users_Service_user_createdTodirectus_usersInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
