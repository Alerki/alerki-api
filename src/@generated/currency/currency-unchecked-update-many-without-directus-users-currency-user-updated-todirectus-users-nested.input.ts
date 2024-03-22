import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CurrencyCreateWithoutDirectus_users_Currency_user_updatedTodirectus_usersInput } from './currency-create-without-directus-users-currency-user-updated-todirectus-users.input';
import { Type } from 'class-transformer';
import { CurrencyCreateOrConnectWithoutDirectus_users_Currency_user_updatedTodirectus_usersInput } from './currency-create-or-connect-without-directus-users-currency-user-updated-todirectus-users.input';
import { CurrencyUpsertWithWhereUniqueWithoutDirectus_users_Currency_user_updatedTodirectus_usersInput } from './currency-upsert-with-where-unique-without-directus-users-currency-user-updated-todirectus-users.input';
import { CurrencyCreateManyDirectus_users_Currency_user_updatedTodirectus_usersInputEnvelope } from './currency-create-many-directus-users-currency-user-updated-todirectus-users-input-envelope.input';
import { Prisma } from '@prisma/client';
import { CurrencyWhereUniqueInput } from './currency-where-unique.input';
import { CurrencyUpdateWithWhereUniqueWithoutDirectus_users_Currency_user_updatedTodirectus_usersInput } from './currency-update-with-where-unique-without-directus-users-currency-user-updated-todirectus-users.input';
import { CurrencyUpdateManyWithWhereWithoutDirectus_users_Currency_user_updatedTodirectus_usersInput } from './currency-update-many-with-where-without-directus-users-currency-user-updated-todirectus-users.input';
import { CurrencyScalarWhereInput } from './currency-scalar-where.input';

@InputType()
export class CurrencyUncheckedUpdateManyWithoutDirectus_users_Currency_user_updatedTodirectus_usersNestedInput {

    @Field(() => [CurrencyCreateWithoutDirectus_users_Currency_user_updatedTodirectus_usersInput], {nullable:true})
    @Type(() => CurrencyCreateWithoutDirectus_users_Currency_user_updatedTodirectus_usersInput)
    create?: Array<CurrencyCreateWithoutDirectus_users_Currency_user_updatedTodirectus_usersInput>;

    @Field(() => [CurrencyCreateOrConnectWithoutDirectus_users_Currency_user_updatedTodirectus_usersInput], {nullable:true})
    @Type(() => CurrencyCreateOrConnectWithoutDirectus_users_Currency_user_updatedTodirectus_usersInput)
    connectOrCreate?: Array<CurrencyCreateOrConnectWithoutDirectus_users_Currency_user_updatedTodirectus_usersInput>;

    @Field(() => [CurrencyUpsertWithWhereUniqueWithoutDirectus_users_Currency_user_updatedTodirectus_usersInput], {nullable:true})
    @Type(() => CurrencyUpsertWithWhereUniqueWithoutDirectus_users_Currency_user_updatedTodirectus_usersInput)
    upsert?: Array<CurrencyUpsertWithWhereUniqueWithoutDirectus_users_Currency_user_updatedTodirectus_usersInput>;

    @Field(() => CurrencyCreateManyDirectus_users_Currency_user_updatedTodirectus_usersInputEnvelope, {nullable:true})
    @Type(() => CurrencyCreateManyDirectus_users_Currency_user_updatedTodirectus_usersInputEnvelope)
    createMany?: CurrencyCreateManyDirectus_users_Currency_user_updatedTodirectus_usersInputEnvelope;

    @Field(() => [CurrencyWhereUniqueInput], {nullable:true})
    @Type(() => CurrencyWhereUniqueInput)
    set?: Array<Prisma.AtLeast<CurrencyWhereUniqueInput, 'id' | 'code'>>;

    @Field(() => [CurrencyWhereUniqueInput], {nullable:true})
    @Type(() => CurrencyWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<CurrencyWhereUniqueInput, 'id' | 'code'>>;

    @Field(() => [CurrencyWhereUniqueInput], {nullable:true})
    @Type(() => CurrencyWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<CurrencyWhereUniqueInput, 'id' | 'code'>>;

    @Field(() => [CurrencyWhereUniqueInput], {nullable:true})
    @Type(() => CurrencyWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<CurrencyWhereUniqueInput, 'id' | 'code'>>;

    @Field(() => [CurrencyUpdateWithWhereUniqueWithoutDirectus_users_Currency_user_updatedTodirectus_usersInput], {nullable:true})
    @Type(() => CurrencyUpdateWithWhereUniqueWithoutDirectus_users_Currency_user_updatedTodirectus_usersInput)
    update?: Array<CurrencyUpdateWithWhereUniqueWithoutDirectus_users_Currency_user_updatedTodirectus_usersInput>;

    @Field(() => [CurrencyUpdateManyWithWhereWithoutDirectus_users_Currency_user_updatedTodirectus_usersInput], {nullable:true})
    @Type(() => CurrencyUpdateManyWithWhereWithoutDirectus_users_Currency_user_updatedTodirectus_usersInput)
    updateMany?: Array<CurrencyUpdateManyWithWhereWithoutDirectus_users_Currency_user_updatedTodirectus_usersInput>;

    @Field(() => [CurrencyScalarWhereInput], {nullable:true})
    @Type(() => CurrencyScalarWhereInput)
    deleteMany?: Array<CurrencyScalarWhereInput>;
}
