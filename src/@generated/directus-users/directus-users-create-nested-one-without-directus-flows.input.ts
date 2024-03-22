import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_usersCreateWithoutDirectus_flowsInput } from './directus-users-create-without-directus-flows.input';
import { Type } from 'class-transformer';
import { directus_usersCreateOrConnectWithoutDirectus_flowsInput } from './directus-users-create-or-connect-without-directus-flows.input';
import { Prisma } from '@prisma/client';
import { directus_usersWhereUniqueInput } from './directus-users-where-unique.input';

@InputType()
export class directus_usersCreateNestedOneWithoutDirectus_flowsInput {

    @Field(() => directus_usersCreateWithoutDirectus_flowsInput, {nullable:true})
    @Type(() => directus_usersCreateWithoutDirectus_flowsInput)
    create?: directus_usersCreateWithoutDirectus_flowsInput;

    @Field(() => directus_usersCreateOrConnectWithoutDirectus_flowsInput, {nullable:true})
    @Type(() => directus_usersCreateOrConnectWithoutDirectus_flowsInput)
    connectOrCreate?: directus_usersCreateOrConnectWithoutDirectus_flowsInput;

    @Field(() => directus_usersWhereUniqueInput, {nullable:true})
    @Type(() => directus_usersWhereUniqueInput)
    connect?: Prisma.AtLeast<directus_usersWhereUniqueInput, 'id' | 'email' | 'token' | 'external_identifier'>;
}
