import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_sharesCreateWithoutDirectus_usersInput } from './directus-shares-create-without-directus-users.input';
import { Type } from 'class-transformer';
import { directus_sharesCreateOrConnectWithoutDirectus_usersInput } from './directus-shares-create-or-connect-without-directus-users.input';
import { directus_sharesUpsertWithWhereUniqueWithoutDirectus_usersInput } from './directus-shares-upsert-with-where-unique-without-directus-users.input';
import { directus_sharesCreateManyDirectus_usersInputEnvelope } from './directus-shares-create-many-directus-users-input-envelope.input';
import { Prisma } from '@prisma/client';
import { directus_sharesWhereUniqueInput } from './directus-shares-where-unique.input';
import { directus_sharesUpdateWithWhereUniqueWithoutDirectus_usersInput } from './directus-shares-update-with-where-unique-without-directus-users.input';
import { directus_sharesUpdateManyWithWhereWithoutDirectus_usersInput } from './directus-shares-update-many-with-where-without-directus-users.input';
import { directus_sharesScalarWhereInput } from './directus-shares-scalar-where.input';

@InputType()
export class directus_sharesUncheckedUpdateManyWithoutDirectus_usersNestedInput {

    @Field(() => [directus_sharesCreateWithoutDirectus_usersInput], {nullable:true})
    @Type(() => directus_sharesCreateWithoutDirectus_usersInput)
    create?: Array<directus_sharesCreateWithoutDirectus_usersInput>;

    @Field(() => [directus_sharesCreateOrConnectWithoutDirectus_usersInput], {nullable:true})
    @Type(() => directus_sharesCreateOrConnectWithoutDirectus_usersInput)
    connectOrCreate?: Array<directus_sharesCreateOrConnectWithoutDirectus_usersInput>;

    @Field(() => [directus_sharesUpsertWithWhereUniqueWithoutDirectus_usersInput], {nullable:true})
    @Type(() => directus_sharesUpsertWithWhereUniqueWithoutDirectus_usersInput)
    upsert?: Array<directus_sharesUpsertWithWhereUniqueWithoutDirectus_usersInput>;

    @Field(() => directus_sharesCreateManyDirectus_usersInputEnvelope, {nullable:true})
    @Type(() => directus_sharesCreateManyDirectus_usersInputEnvelope)
    createMany?: directus_sharesCreateManyDirectus_usersInputEnvelope;

    @Field(() => [directus_sharesWhereUniqueInput], {nullable:true})
    @Type(() => directus_sharesWhereUniqueInput)
    set?: Array<Prisma.AtLeast<directus_sharesWhereUniqueInput, 'id'>>;

    @Field(() => [directus_sharesWhereUniqueInput], {nullable:true})
    @Type(() => directus_sharesWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<directus_sharesWhereUniqueInput, 'id'>>;

    @Field(() => [directus_sharesWhereUniqueInput], {nullable:true})
    @Type(() => directus_sharesWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<directus_sharesWhereUniqueInput, 'id'>>;

    @Field(() => [directus_sharesWhereUniqueInput], {nullable:true})
    @Type(() => directus_sharesWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<directus_sharesWhereUniqueInput, 'id'>>;

    @Field(() => [directus_sharesUpdateWithWhereUniqueWithoutDirectus_usersInput], {nullable:true})
    @Type(() => directus_sharesUpdateWithWhereUniqueWithoutDirectus_usersInput)
    update?: Array<directus_sharesUpdateWithWhereUniqueWithoutDirectus_usersInput>;

    @Field(() => [directus_sharesUpdateManyWithWhereWithoutDirectus_usersInput], {nullable:true})
    @Type(() => directus_sharesUpdateManyWithWhereWithoutDirectus_usersInput)
    updateMany?: Array<directus_sharesUpdateManyWithWhereWithoutDirectus_usersInput>;

    @Field(() => [directus_sharesScalarWhereInput], {nullable:true})
    @Type(() => directus_sharesScalarWhereInput)
    deleteMany?: Array<directus_sharesScalarWhereInput>;
}
