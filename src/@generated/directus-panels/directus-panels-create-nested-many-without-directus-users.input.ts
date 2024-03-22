import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_panelsCreateWithoutDirectus_usersInput } from './directus-panels-create-without-directus-users.input';
import { Type } from 'class-transformer';
import { directus_panelsCreateOrConnectWithoutDirectus_usersInput } from './directus-panels-create-or-connect-without-directus-users.input';
import { directus_panelsCreateManyDirectus_usersInputEnvelope } from './directus-panels-create-many-directus-users-input-envelope.input';
import { Prisma } from '@prisma/client';
import { directus_panelsWhereUniqueInput } from './directus-panels-where-unique.input';

@InputType()
export class directus_panelsCreateNestedManyWithoutDirectus_usersInput {

    @Field(() => [directus_panelsCreateWithoutDirectus_usersInput], {nullable:true})
    @Type(() => directus_panelsCreateWithoutDirectus_usersInput)
    create?: Array<directus_panelsCreateWithoutDirectus_usersInput>;

    @Field(() => [directus_panelsCreateOrConnectWithoutDirectus_usersInput], {nullable:true})
    @Type(() => directus_panelsCreateOrConnectWithoutDirectus_usersInput)
    connectOrCreate?: Array<directus_panelsCreateOrConnectWithoutDirectus_usersInput>;

    @Field(() => directus_panelsCreateManyDirectus_usersInputEnvelope, {nullable:true})
    @Type(() => directus_panelsCreateManyDirectus_usersInputEnvelope)
    createMany?: directus_panelsCreateManyDirectus_usersInputEnvelope;

    @Field(() => [directus_panelsWhereUniqueInput], {nullable:true})
    @Type(() => directus_panelsWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<directus_panelsWhereUniqueInput, 'id'>>;
}
