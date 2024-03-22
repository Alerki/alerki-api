import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_usersCreateWithoutDirectus_panelsInput } from './directus-users-create-without-directus-panels.input';
import { Type } from 'class-transformer';
import { directus_usersCreateOrConnectWithoutDirectus_panelsInput } from './directus-users-create-or-connect-without-directus-panels.input';
import { directus_usersUpsertWithoutDirectus_panelsInput } from './directus-users-upsert-without-directus-panels.input';
import { Prisma } from '@prisma/client';
import { directus_usersWhereUniqueInput } from './directus-users-where-unique.input';
import { directus_usersUpdateWithoutDirectus_panelsInput } from './directus-users-update-without-directus-panels.input';

@InputType()
export class directus_usersUpdateOneWithoutDirectus_panelsNestedInput {

    @Field(() => directus_usersCreateWithoutDirectus_panelsInput, {nullable:true})
    @Type(() => directus_usersCreateWithoutDirectus_panelsInput)
    create?: directus_usersCreateWithoutDirectus_panelsInput;

    @Field(() => directus_usersCreateOrConnectWithoutDirectus_panelsInput, {nullable:true})
    @Type(() => directus_usersCreateOrConnectWithoutDirectus_panelsInput)
    connectOrCreate?: directus_usersCreateOrConnectWithoutDirectus_panelsInput;

    @Field(() => directus_usersUpsertWithoutDirectus_panelsInput, {nullable:true})
    @Type(() => directus_usersUpsertWithoutDirectus_panelsInput)
    upsert?: directus_usersUpsertWithoutDirectus_panelsInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => directus_usersWhereUniqueInput, {nullable:true})
    @Type(() => directus_usersWhereUniqueInput)
    connect?: Prisma.AtLeast<directus_usersWhereUniqueInput, 'id' | 'email' | 'token' | 'external_identifier'>;

    @Field(() => directus_usersUpdateWithoutDirectus_panelsInput, {nullable:true})
    @Type(() => directus_usersUpdateWithoutDirectus_panelsInput)
    update?: directus_usersUpdateWithoutDirectus_panelsInput;
}
