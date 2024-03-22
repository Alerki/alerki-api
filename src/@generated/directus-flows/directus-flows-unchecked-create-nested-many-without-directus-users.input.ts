import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_flowsCreateWithoutDirectus_usersInput } from './directus-flows-create-without-directus-users.input';
import { Type } from 'class-transformer';
import { directus_flowsCreateOrConnectWithoutDirectus_usersInput } from './directus-flows-create-or-connect-without-directus-users.input';
import { directus_flowsCreateManyDirectus_usersInputEnvelope } from './directus-flows-create-many-directus-users-input-envelope.input';
import { Prisma } from '@prisma/client';
import { directus_flowsWhereUniqueInput } from './directus-flows-where-unique.input';

@InputType()
export class directus_flowsUncheckedCreateNestedManyWithoutDirectus_usersInput {

    @Field(() => [directus_flowsCreateWithoutDirectus_usersInput], {nullable:true})
    @Type(() => directus_flowsCreateWithoutDirectus_usersInput)
    create?: Array<directus_flowsCreateWithoutDirectus_usersInput>;

    @Field(() => [directus_flowsCreateOrConnectWithoutDirectus_usersInput], {nullable:true})
    @Type(() => directus_flowsCreateOrConnectWithoutDirectus_usersInput)
    connectOrCreate?: Array<directus_flowsCreateOrConnectWithoutDirectus_usersInput>;

    @Field(() => directus_flowsCreateManyDirectus_usersInputEnvelope, {nullable:true})
    @Type(() => directus_flowsCreateManyDirectus_usersInputEnvelope)
    createMany?: directus_flowsCreateManyDirectus_usersInputEnvelope;

    @Field(() => [directus_flowsWhereUniqueInput], {nullable:true})
    @Type(() => directus_flowsWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<directus_flowsWhereUniqueInput, 'id' | 'operation'>>;
}
