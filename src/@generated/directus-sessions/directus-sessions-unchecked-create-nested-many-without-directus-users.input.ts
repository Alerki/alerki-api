import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_sessionsCreateWithoutDirectus_usersInput } from './directus-sessions-create-without-directus-users.input';
import { Type } from 'class-transformer';
import { directus_sessionsCreateOrConnectWithoutDirectus_usersInput } from './directus-sessions-create-or-connect-without-directus-users.input';
import { directus_sessionsCreateManyDirectus_usersInputEnvelope } from './directus-sessions-create-many-directus-users-input-envelope.input';
import { Prisma } from '@prisma/client';
import { directus_sessionsWhereUniqueInput } from './directus-sessions-where-unique.input';

@InputType()
export class directus_sessionsUncheckedCreateNestedManyWithoutDirectus_usersInput {

    @Field(() => [directus_sessionsCreateWithoutDirectus_usersInput], {nullable:true})
    @Type(() => directus_sessionsCreateWithoutDirectus_usersInput)
    create?: Array<directus_sessionsCreateWithoutDirectus_usersInput>;

    @Field(() => [directus_sessionsCreateOrConnectWithoutDirectus_usersInput], {nullable:true})
    @Type(() => directus_sessionsCreateOrConnectWithoutDirectus_usersInput)
    connectOrCreate?: Array<directus_sessionsCreateOrConnectWithoutDirectus_usersInput>;

    @Field(() => directus_sessionsCreateManyDirectus_usersInputEnvelope, {nullable:true})
    @Type(() => directus_sessionsCreateManyDirectus_usersInputEnvelope)
    createMany?: directus_sessionsCreateManyDirectus_usersInputEnvelope;

    @Field(() => [directus_sessionsWhereUniqueInput], {nullable:true})
    @Type(() => directus_sessionsWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<directus_sessionsWhereUniqueInput, 'token'>>;
}
