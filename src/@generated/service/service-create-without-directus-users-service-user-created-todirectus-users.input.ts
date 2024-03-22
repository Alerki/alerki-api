import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { directus_usersCreateNestedOneWithoutService_Service_user_updatedTodirectus_usersInput } from '../directus-users/directus-users-create-nested-one-without-service-service-user-updated-todirectus-users.input';
import { Service_translationsCreateNestedManyWithoutServiceInput } from '../service-translations/service-translations-create-nested-many-without-service.input';

@InputType()
export class ServiceCreateWithoutDirectus_users_Service_user_createdTodirectus_usersInput {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:true})
    status?: string;

    @Field(() => Int, {nullable:true})
    sort?: number;

    @Field(() => Date, {nullable:true})
    date_created?: Date | string;

    @Field(() => Date, {nullable:true})
    date_updated?: Date | string;

    @Field(() => directus_usersCreateNestedOneWithoutService_Service_user_updatedTodirectus_usersInput, {nullable:true})
    directus_users_Service_user_updatedTodirectus_users?: directus_usersCreateNestedOneWithoutService_Service_user_updatedTodirectus_usersInput;

    @Field(() => Service_translationsCreateNestedManyWithoutServiceInput, {nullable:true})
    Service_translations?: Service_translationsCreateNestedManyWithoutServiceInput;
}
