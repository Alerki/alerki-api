import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_usersCreateWithoutCurrency_Currency_user_updatedTodirectus_usersInput } from './directus-users-create-without-currency-currency-user-updated-todirectus-users.input';
import { Type } from 'class-transformer';
import { directus_usersCreateOrConnectWithoutCurrency_Currency_user_updatedTodirectus_usersInput } from './directus-users-create-or-connect-without-currency-currency-user-updated-todirectus-users.input';
import { Prisma } from '@prisma/client';
import { directus_usersWhereUniqueInput } from './directus-users-where-unique.input';

@InputType()
export class directus_usersCreateNestedOneWithoutCurrency_Currency_user_updatedTodirectus_usersInput {

    @Field(() => directus_usersCreateWithoutCurrency_Currency_user_updatedTodirectus_usersInput, {nullable:true})
    @Type(() => directus_usersCreateWithoutCurrency_Currency_user_updatedTodirectus_usersInput)
    create?: directus_usersCreateWithoutCurrency_Currency_user_updatedTodirectus_usersInput;

    @Field(() => directus_usersCreateOrConnectWithoutCurrency_Currency_user_updatedTodirectus_usersInput, {nullable:true})
    @Type(() => directus_usersCreateOrConnectWithoutCurrency_Currency_user_updatedTodirectus_usersInput)
    connectOrCreate?: directus_usersCreateOrConnectWithoutCurrency_Currency_user_updatedTodirectus_usersInput;

    @Field(() => directus_usersWhereUniqueInput, {nullable:true})
    @Type(() => directus_usersWhereUniqueInput)
    connect?: Prisma.AtLeast<directus_usersWhereUniqueInput, 'id' | 'email' | 'token' | 'external_identifier'>;
}
