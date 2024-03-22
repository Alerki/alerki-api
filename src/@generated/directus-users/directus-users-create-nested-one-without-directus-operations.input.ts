import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_usersCreateWithoutDirectus_operationsInput } from './directus-users-create-without-directus-operations.input';
import { Type } from 'class-transformer';
import { directus_usersCreateOrConnectWithoutDirectus_operationsInput } from './directus-users-create-or-connect-without-directus-operations.input';
import { Prisma } from '@prisma/client';
import { directus_usersWhereUniqueInput } from './directus-users-where-unique.input';

@InputType()
export class directus_usersCreateNestedOneWithoutDirectus_operationsInput {

    @Field(() => directus_usersCreateWithoutDirectus_operationsInput, {nullable:true})
    @Type(() => directus_usersCreateWithoutDirectus_operationsInput)
    create?: directus_usersCreateWithoutDirectus_operationsInput;

    @Field(() => directus_usersCreateOrConnectWithoutDirectus_operationsInput, {nullable:true})
    @Type(() => directus_usersCreateOrConnectWithoutDirectus_operationsInput)
    connectOrCreate?: directus_usersCreateOrConnectWithoutDirectus_operationsInput;

    @Field(() => directus_usersWhereUniqueInput, {nullable:true})
    @Type(() => directus_usersWhereUniqueInput)
    connect?: Prisma.AtLeast<directus_usersWhereUniqueInput, 'id' | 'email' | 'token' | 'external_identifier'>;
}
