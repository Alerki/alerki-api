import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_sessionsCreateWithoutDirectus_usersInput } from './directus-sessions-create-without-directus-users.input';
import { Type } from 'class-transformer';
import { directus_sessionsCreateOrConnectWithoutDirectus_usersInput } from './directus-sessions-create-or-connect-without-directus-users.input';
import { directus_sessionsUpsertWithWhereUniqueWithoutDirectus_usersInput } from './directus-sessions-upsert-with-where-unique-without-directus-users.input';
import { directus_sessionsCreateManyDirectus_usersInputEnvelope } from './directus-sessions-create-many-directus-users-input-envelope.input';
import { Prisma } from '@prisma/client';
import { directus_sessionsWhereUniqueInput } from './directus-sessions-where-unique.input';
import { directus_sessionsUpdateWithWhereUniqueWithoutDirectus_usersInput } from './directus-sessions-update-with-where-unique-without-directus-users.input';
import { directus_sessionsUpdateManyWithWhereWithoutDirectus_usersInput } from './directus-sessions-update-many-with-where-without-directus-users.input';
import { directus_sessionsScalarWhereInput } from './directus-sessions-scalar-where.input';

@InputType()
export class directus_sessionsUncheckedUpdateManyWithoutDirectus_usersNestedInput {

    @Field(() => [directus_sessionsCreateWithoutDirectus_usersInput], {nullable:true})
    @Type(() => directus_sessionsCreateWithoutDirectus_usersInput)
    create?: Array<directus_sessionsCreateWithoutDirectus_usersInput>;

    @Field(() => [directus_sessionsCreateOrConnectWithoutDirectus_usersInput], {nullable:true})
    @Type(() => directus_sessionsCreateOrConnectWithoutDirectus_usersInput)
    connectOrCreate?: Array<directus_sessionsCreateOrConnectWithoutDirectus_usersInput>;

    @Field(() => [directus_sessionsUpsertWithWhereUniqueWithoutDirectus_usersInput], {nullable:true})
    @Type(() => directus_sessionsUpsertWithWhereUniqueWithoutDirectus_usersInput)
    upsert?: Array<directus_sessionsUpsertWithWhereUniqueWithoutDirectus_usersInput>;

    @Field(() => directus_sessionsCreateManyDirectus_usersInputEnvelope, {nullable:true})
    @Type(() => directus_sessionsCreateManyDirectus_usersInputEnvelope)
    createMany?: directus_sessionsCreateManyDirectus_usersInputEnvelope;

    @Field(() => [directus_sessionsWhereUniqueInput], {nullable:true})
    @Type(() => directus_sessionsWhereUniqueInput)
    set?: Array<Prisma.AtLeast<directus_sessionsWhereUniqueInput, 'token'>>;

    @Field(() => [directus_sessionsWhereUniqueInput], {nullable:true})
    @Type(() => directus_sessionsWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<directus_sessionsWhereUniqueInput, 'token'>>;

    @Field(() => [directus_sessionsWhereUniqueInput], {nullable:true})
    @Type(() => directus_sessionsWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<directus_sessionsWhereUniqueInput, 'token'>>;

    @Field(() => [directus_sessionsWhereUniqueInput], {nullable:true})
    @Type(() => directus_sessionsWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<directus_sessionsWhereUniqueInput, 'token'>>;

    @Field(() => [directus_sessionsUpdateWithWhereUniqueWithoutDirectus_usersInput], {nullable:true})
    @Type(() => directus_sessionsUpdateWithWhereUniqueWithoutDirectus_usersInput)
    update?: Array<directus_sessionsUpdateWithWhereUniqueWithoutDirectus_usersInput>;

    @Field(() => [directus_sessionsUpdateManyWithWhereWithoutDirectus_usersInput], {nullable:true})
    @Type(() => directus_sessionsUpdateManyWithWhereWithoutDirectus_usersInput)
    updateMany?: Array<directus_sessionsUpdateManyWithWhereWithoutDirectus_usersInput>;

    @Field(() => [directus_sessionsScalarWhereInput], {nullable:true})
    @Type(() => directus_sessionsScalarWhereInput)
    deleteMany?: Array<directus_sessionsScalarWhereInput>;
}
