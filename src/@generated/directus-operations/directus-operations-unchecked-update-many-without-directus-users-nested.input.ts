import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_operationsCreateWithoutDirectus_usersInput } from './directus-operations-create-without-directus-users.input';
import { Type } from 'class-transformer';
import { directus_operationsCreateOrConnectWithoutDirectus_usersInput } from './directus-operations-create-or-connect-without-directus-users.input';
import { directus_operationsUpsertWithWhereUniqueWithoutDirectus_usersInput } from './directus-operations-upsert-with-where-unique-without-directus-users.input';
import { directus_operationsCreateManyDirectus_usersInputEnvelope } from './directus-operations-create-many-directus-users-input-envelope.input';
import { Prisma } from '@prisma/client';
import { directus_operationsWhereUniqueInput } from './directus-operations-where-unique.input';
import { directus_operationsUpdateWithWhereUniqueWithoutDirectus_usersInput } from './directus-operations-update-with-where-unique-without-directus-users.input';
import { directus_operationsUpdateManyWithWhereWithoutDirectus_usersInput } from './directus-operations-update-many-with-where-without-directus-users.input';
import { directus_operationsScalarWhereInput } from './directus-operations-scalar-where.input';

@InputType()
export class directus_operationsUncheckedUpdateManyWithoutDirectus_usersNestedInput {

    @Field(() => [directus_operationsCreateWithoutDirectus_usersInput], {nullable:true})
    @Type(() => directus_operationsCreateWithoutDirectus_usersInput)
    create?: Array<directus_operationsCreateWithoutDirectus_usersInput>;

    @Field(() => [directus_operationsCreateOrConnectWithoutDirectus_usersInput], {nullable:true})
    @Type(() => directus_operationsCreateOrConnectWithoutDirectus_usersInput)
    connectOrCreate?: Array<directus_operationsCreateOrConnectWithoutDirectus_usersInput>;

    @Field(() => [directus_operationsUpsertWithWhereUniqueWithoutDirectus_usersInput], {nullable:true})
    @Type(() => directus_operationsUpsertWithWhereUniqueWithoutDirectus_usersInput)
    upsert?: Array<directus_operationsUpsertWithWhereUniqueWithoutDirectus_usersInput>;

    @Field(() => directus_operationsCreateManyDirectus_usersInputEnvelope, {nullable:true})
    @Type(() => directus_operationsCreateManyDirectus_usersInputEnvelope)
    createMany?: directus_operationsCreateManyDirectus_usersInputEnvelope;

    @Field(() => [directus_operationsWhereUniqueInput], {nullable:true})
    @Type(() => directus_operationsWhereUniqueInput)
    set?: Array<Prisma.AtLeast<directus_operationsWhereUniqueInput, 'id' | 'resolve' | 'reject'>>;

    @Field(() => [directus_operationsWhereUniqueInput], {nullable:true})
    @Type(() => directus_operationsWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<directus_operationsWhereUniqueInput, 'id' | 'resolve' | 'reject'>>;

    @Field(() => [directus_operationsWhereUniqueInput], {nullable:true})
    @Type(() => directus_operationsWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<directus_operationsWhereUniqueInput, 'id' | 'resolve' | 'reject'>>;

    @Field(() => [directus_operationsWhereUniqueInput], {nullable:true})
    @Type(() => directus_operationsWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<directus_operationsWhereUniqueInput, 'id' | 'resolve' | 'reject'>>;

    @Field(() => [directus_operationsUpdateWithWhereUniqueWithoutDirectus_usersInput], {nullable:true})
    @Type(() => directus_operationsUpdateWithWhereUniqueWithoutDirectus_usersInput)
    update?: Array<directus_operationsUpdateWithWhereUniqueWithoutDirectus_usersInput>;

    @Field(() => [directus_operationsUpdateManyWithWhereWithoutDirectus_usersInput], {nullable:true})
    @Type(() => directus_operationsUpdateManyWithWhereWithoutDirectus_usersInput)
    updateMany?: Array<directus_operationsUpdateManyWithWhereWithoutDirectus_usersInput>;

    @Field(() => [directus_operationsScalarWhereInput], {nullable:true})
    @Type(() => directus_operationsScalarWhereInput)
    deleteMany?: Array<directus_operationsScalarWhereInput>;
}
