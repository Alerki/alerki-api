import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_usersUpdateWithoutService_Service_user_createdTodirectus_usersInput } from './directus-users-update-without-service-service-user-created-todirectus-users.input';
import { Type } from 'class-transformer';
import { directus_usersCreateWithoutService_Service_user_createdTodirectus_usersInput } from './directus-users-create-without-service-service-user-created-todirectus-users.input';

@InputType()
export class directus_usersUpsertWithoutService_Service_user_createdTodirectus_usersInput {

    @Field(() => directus_usersUpdateWithoutService_Service_user_createdTodirectus_usersInput, {nullable:false})
    @Type(() => directus_usersUpdateWithoutService_Service_user_createdTodirectus_usersInput)
    update!: directus_usersUpdateWithoutService_Service_user_createdTodirectus_usersInput;

    @Field(() => directus_usersCreateWithoutService_Service_user_createdTodirectus_usersInput, {nullable:false})
    @Type(() => directus_usersCreateWithoutService_Service_user_createdTodirectus_usersInput)
    create!: directus_usersCreateWithoutService_Service_user_createdTodirectus_usersInput;
}
