import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_panelsCreateWithoutDirectus_usersInput } from './directus-panels-create-without-directus-users.input';
import { Type } from 'class-transformer';
import { directus_panelsCreateOrConnectWithoutDirectus_usersInput } from './directus-panels-create-or-connect-without-directus-users.input';
import { directus_panelsUpsertWithWhereUniqueWithoutDirectus_usersInput } from './directus-panels-upsert-with-where-unique-without-directus-users.input';
import { directus_panelsCreateManyDirectus_usersInputEnvelope } from './directus-panels-create-many-directus-users-input-envelope.input';
import { Prisma } from '@prisma/client';
import { directus_panelsWhereUniqueInput } from './directus-panels-where-unique.input';
import { directus_panelsUpdateWithWhereUniqueWithoutDirectus_usersInput } from './directus-panels-update-with-where-unique-without-directus-users.input';
import { directus_panelsUpdateManyWithWhereWithoutDirectus_usersInput } from './directus-panels-update-many-with-where-without-directus-users.input';
import { directus_panelsScalarWhereInput } from './directus-panels-scalar-where.input';

@InputType()
export class directus_panelsUpdateManyWithoutDirectus_usersNestedInput {

    @Field(() => [directus_panelsCreateWithoutDirectus_usersInput], {nullable:true})
    @Type(() => directus_panelsCreateWithoutDirectus_usersInput)
    create?: Array<directus_panelsCreateWithoutDirectus_usersInput>;

    @Field(() => [directus_panelsCreateOrConnectWithoutDirectus_usersInput], {nullable:true})
    @Type(() => directus_panelsCreateOrConnectWithoutDirectus_usersInput)
    connectOrCreate?: Array<directus_panelsCreateOrConnectWithoutDirectus_usersInput>;

    @Field(() => [directus_panelsUpsertWithWhereUniqueWithoutDirectus_usersInput], {nullable:true})
    @Type(() => directus_panelsUpsertWithWhereUniqueWithoutDirectus_usersInput)
    upsert?: Array<directus_panelsUpsertWithWhereUniqueWithoutDirectus_usersInput>;

    @Field(() => directus_panelsCreateManyDirectus_usersInputEnvelope, {nullable:true})
    @Type(() => directus_panelsCreateManyDirectus_usersInputEnvelope)
    createMany?: directus_panelsCreateManyDirectus_usersInputEnvelope;

    @Field(() => [directus_panelsWhereUniqueInput], {nullable:true})
    @Type(() => directus_panelsWhereUniqueInput)
    set?: Array<Prisma.AtLeast<directus_panelsWhereUniqueInput, 'id'>>;

    @Field(() => [directus_panelsWhereUniqueInput], {nullable:true})
    @Type(() => directus_panelsWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<directus_panelsWhereUniqueInput, 'id'>>;

    @Field(() => [directus_panelsWhereUniqueInput], {nullable:true})
    @Type(() => directus_panelsWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<directus_panelsWhereUniqueInput, 'id'>>;

    @Field(() => [directus_panelsWhereUniqueInput], {nullable:true})
    @Type(() => directus_panelsWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<directus_panelsWhereUniqueInput, 'id'>>;

    @Field(() => [directus_panelsUpdateWithWhereUniqueWithoutDirectus_usersInput], {nullable:true})
    @Type(() => directus_panelsUpdateWithWhereUniqueWithoutDirectus_usersInput)
    update?: Array<directus_panelsUpdateWithWhereUniqueWithoutDirectus_usersInput>;

    @Field(() => [directus_panelsUpdateManyWithWhereWithoutDirectus_usersInput], {nullable:true})
    @Type(() => directus_panelsUpdateManyWithWhereWithoutDirectus_usersInput)
    updateMany?: Array<directus_panelsUpdateManyWithWhereWithoutDirectus_usersInput>;

    @Field(() => [directus_panelsScalarWhereInput], {nullable:true})
    @Type(() => directus_panelsScalarWhereInput)
    deleteMany?: Array<directus_panelsScalarWhereInput>;
}
