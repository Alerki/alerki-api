import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CurrencyWhereUniqueInput } from './currency-where-unique.input';
import { Type } from 'class-transformer';
import { CurrencyUpdateWithoutDirectus_users_Currency_user_updatedTodirectus_usersInput } from './currency-update-without-directus-users-currency-user-updated-todirectus-users.input';
import { CurrencyCreateWithoutDirectus_users_Currency_user_updatedTodirectus_usersInput } from './currency-create-without-directus-users-currency-user-updated-todirectus-users.input';

@InputType()
export class CurrencyUpsertWithWhereUniqueWithoutDirectus_users_Currency_user_updatedTodirectus_usersInput {

    @Field(() => CurrencyWhereUniqueInput, {nullable:false})
    @Type(() => CurrencyWhereUniqueInput)
    where!: Prisma.AtLeast<CurrencyWhereUniqueInput, 'id' | 'code'>;

    @Field(() => CurrencyUpdateWithoutDirectus_users_Currency_user_updatedTodirectus_usersInput, {nullable:false})
    @Type(() => CurrencyUpdateWithoutDirectus_users_Currency_user_updatedTodirectus_usersInput)
    update!: CurrencyUpdateWithoutDirectus_users_Currency_user_updatedTodirectus_usersInput;

    @Field(() => CurrencyCreateWithoutDirectus_users_Currency_user_updatedTodirectus_usersInput, {nullable:false})
    @Type(() => CurrencyCreateWithoutDirectus_users_Currency_user_updatedTodirectus_usersInput)
    create!: CurrencyCreateWithoutDirectus_users_Currency_user_updatedTodirectus_usersInput;
}
