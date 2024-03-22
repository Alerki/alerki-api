import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_usersCreateWithoutCurrency_Currency_user_createdTodirectus_usersInput } from './directus-users-create-without-currency-currency-user-created-todirectus-users.input';
import { Type } from 'class-transformer';
import { directus_usersCreateOrConnectWithoutCurrency_Currency_user_createdTodirectus_usersInput } from './directus-users-create-or-connect-without-currency-currency-user-created-todirectus-users.input';
import { directus_usersUpsertWithoutCurrency_Currency_user_createdTodirectus_usersInput } from './directus-users-upsert-without-currency-currency-user-created-todirectus-users.input';
import { Prisma } from '@prisma/client';
import { directus_usersWhereUniqueInput } from './directus-users-where-unique.input';
import { directus_usersUpdateWithoutCurrency_Currency_user_createdTodirectus_usersInput } from './directus-users-update-without-currency-currency-user-created-todirectus-users.input';

@InputType()
export class directus_usersUpdateOneWithoutCurrency_Currency_user_createdTodirectus_usersNestedInput {

    @Field(() => directus_usersCreateWithoutCurrency_Currency_user_createdTodirectus_usersInput, {nullable:true})
    @Type(() => directus_usersCreateWithoutCurrency_Currency_user_createdTodirectus_usersInput)
    create?: directus_usersCreateWithoutCurrency_Currency_user_createdTodirectus_usersInput;

    @Field(() => directus_usersCreateOrConnectWithoutCurrency_Currency_user_createdTodirectus_usersInput, {nullable:true})
    @Type(() => directus_usersCreateOrConnectWithoutCurrency_Currency_user_createdTodirectus_usersInput)
    connectOrCreate?: directus_usersCreateOrConnectWithoutCurrency_Currency_user_createdTodirectus_usersInput;

    @Field(() => directus_usersUpsertWithoutCurrency_Currency_user_createdTodirectus_usersInput, {nullable:true})
    @Type(() => directus_usersUpsertWithoutCurrency_Currency_user_createdTodirectus_usersInput)
    upsert?: directus_usersUpsertWithoutCurrency_Currency_user_createdTodirectus_usersInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => directus_usersWhereUniqueInput, {nullable:true})
    @Type(() => directus_usersWhereUniqueInput)
    connect?: Prisma.AtLeast<directus_usersWhereUniqueInput, 'id' | 'email' | 'token' | 'external_identifier'>;

    @Field(() => directus_usersUpdateWithoutCurrency_Currency_user_createdTodirectus_usersInput, {nullable:true})
    @Type(() => directus_usersUpdateWithoutCurrency_Currency_user_createdTodirectus_usersInput)
    update?: directus_usersUpdateWithoutCurrency_Currency_user_createdTodirectus_usersInput;
}
