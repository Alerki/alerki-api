import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_usersUpdateWithoutCurrency_Currency_user_createdTodirectus_usersInput } from './directus-users-update-without-currency-currency-user-created-todirectus-users.input';
import { Type } from 'class-transformer';
import { directus_usersCreateWithoutCurrency_Currency_user_createdTodirectus_usersInput } from './directus-users-create-without-currency-currency-user-created-todirectus-users.input';

@InputType()
export class directus_usersUpsertWithoutCurrency_Currency_user_createdTodirectus_usersInput {

    @Field(() => directus_usersUpdateWithoutCurrency_Currency_user_createdTodirectus_usersInput, {nullable:false})
    @Type(() => directus_usersUpdateWithoutCurrency_Currency_user_createdTodirectus_usersInput)
    update!: directus_usersUpdateWithoutCurrency_Currency_user_createdTodirectus_usersInput;

    @Field(() => directus_usersCreateWithoutCurrency_Currency_user_createdTodirectus_usersInput, {nullable:false})
    @Type(() => directus_usersCreateWithoutCurrency_Currency_user_createdTodirectus_usersInput)
    create!: directus_usersCreateWithoutCurrency_Currency_user_createdTodirectus_usersInput;
}
