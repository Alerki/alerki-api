import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_flowsCreateWithoutDirectus_usersInput } from './directus-flows-create-without-directus-users.input';
import { Type } from 'class-transformer';
import { directus_flowsCreateOrConnectWithoutDirectus_usersInput } from './directus-flows-create-or-connect-without-directus-users.input';
import { directus_flowsUpsertWithWhereUniqueWithoutDirectus_usersInput } from './directus-flows-upsert-with-where-unique-without-directus-users.input';
import { directus_flowsCreateManyDirectus_usersInputEnvelope } from './directus-flows-create-many-directus-users-input-envelope.input';
import { Prisma } from '@prisma/client';
import { directus_flowsWhereUniqueInput } from './directus-flows-where-unique.input';
import { directus_flowsUpdateWithWhereUniqueWithoutDirectus_usersInput } from './directus-flows-update-with-where-unique-without-directus-users.input';
import { directus_flowsUpdateManyWithWhereWithoutDirectus_usersInput } from './directus-flows-update-many-with-where-without-directus-users.input';
import { directus_flowsScalarWhereInput } from './directus-flows-scalar-where.input';

@InputType()
export class directus_flowsUpdateManyWithoutDirectus_usersNestedInput {

    @Field(() => [directus_flowsCreateWithoutDirectus_usersInput], {nullable:true})
    @Type(() => directus_flowsCreateWithoutDirectus_usersInput)
    create?: Array<directus_flowsCreateWithoutDirectus_usersInput>;

    @Field(() => [directus_flowsCreateOrConnectWithoutDirectus_usersInput], {nullable:true})
    @Type(() => directus_flowsCreateOrConnectWithoutDirectus_usersInput)
    connectOrCreate?: Array<directus_flowsCreateOrConnectWithoutDirectus_usersInput>;

    @Field(() => [directus_flowsUpsertWithWhereUniqueWithoutDirectus_usersInput], {nullable:true})
    @Type(() => directus_flowsUpsertWithWhereUniqueWithoutDirectus_usersInput)
    upsert?: Array<directus_flowsUpsertWithWhereUniqueWithoutDirectus_usersInput>;

    @Field(() => directus_flowsCreateManyDirectus_usersInputEnvelope, {nullable:true})
    @Type(() => directus_flowsCreateManyDirectus_usersInputEnvelope)
    createMany?: directus_flowsCreateManyDirectus_usersInputEnvelope;

    @Field(() => [directus_flowsWhereUniqueInput], {nullable:true})
    @Type(() => directus_flowsWhereUniqueInput)
    set?: Array<Prisma.AtLeast<directus_flowsWhereUniqueInput, 'id' | 'operation'>>;

    @Field(() => [directus_flowsWhereUniqueInput], {nullable:true})
    @Type(() => directus_flowsWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<directus_flowsWhereUniqueInput, 'id' | 'operation'>>;

    @Field(() => [directus_flowsWhereUniqueInput], {nullable:true})
    @Type(() => directus_flowsWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<directus_flowsWhereUniqueInput, 'id' | 'operation'>>;

    @Field(() => [directus_flowsWhereUniqueInput], {nullable:true})
    @Type(() => directus_flowsWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<directus_flowsWhereUniqueInput, 'id' | 'operation'>>;

    @Field(() => [directus_flowsUpdateWithWhereUniqueWithoutDirectus_usersInput], {nullable:true})
    @Type(() => directus_flowsUpdateWithWhereUniqueWithoutDirectus_usersInput)
    update?: Array<directus_flowsUpdateWithWhereUniqueWithoutDirectus_usersInput>;

    @Field(() => [directus_flowsUpdateManyWithWhereWithoutDirectus_usersInput], {nullable:true})
    @Type(() => directus_flowsUpdateManyWithWhereWithoutDirectus_usersInput)
    updateMany?: Array<directus_flowsUpdateManyWithWhereWithoutDirectus_usersInput>;

    @Field(() => [directus_flowsScalarWhereInput], {nullable:true})
    @Type(() => directus_flowsScalarWhereInput)
    deleteMany?: Array<directus_flowsScalarWhereInput>;
}
