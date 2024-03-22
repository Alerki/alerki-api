import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_usersCreateWithoutDirectus_presetsInput } from './directus-users-create-without-directus-presets.input';
import { Type } from 'class-transformer';
import { directus_usersCreateOrConnectWithoutDirectus_presetsInput } from './directus-users-create-or-connect-without-directus-presets.input';
import { directus_usersUpsertWithoutDirectus_presetsInput } from './directus-users-upsert-without-directus-presets.input';
import { Prisma } from '@prisma/client';
import { directus_usersWhereUniqueInput } from './directus-users-where-unique.input';
import { directus_usersUpdateWithoutDirectus_presetsInput } from './directus-users-update-without-directus-presets.input';

@InputType()
export class directus_usersUpdateOneWithoutDirectus_presetsNestedInput {

    @Field(() => directus_usersCreateWithoutDirectus_presetsInput, {nullable:true})
    @Type(() => directus_usersCreateWithoutDirectus_presetsInput)
    create?: directus_usersCreateWithoutDirectus_presetsInput;

    @Field(() => directus_usersCreateOrConnectWithoutDirectus_presetsInput, {nullable:true})
    @Type(() => directus_usersCreateOrConnectWithoutDirectus_presetsInput)
    connectOrCreate?: directus_usersCreateOrConnectWithoutDirectus_presetsInput;

    @Field(() => directus_usersUpsertWithoutDirectus_presetsInput, {nullable:true})
    @Type(() => directus_usersUpsertWithoutDirectus_presetsInput)
    upsert?: directus_usersUpsertWithoutDirectus_presetsInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => directus_usersWhereUniqueInput, {nullable:true})
    @Type(() => directus_usersWhereUniqueInput)
    connect?: Prisma.AtLeast<directus_usersWhereUniqueInput, 'id' | 'email' | 'token' | 'external_identifier'>;

    @Field(() => directus_usersUpdateWithoutDirectus_presetsInput, {nullable:true})
    @Type(() => directus_usersUpdateWithoutDirectus_presetsInput)
    update?: directus_usersUpdateWithoutDirectus_presetsInput;
}
