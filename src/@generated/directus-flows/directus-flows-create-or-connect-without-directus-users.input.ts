import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { directus_flowsWhereUniqueInput } from './directus-flows-where-unique.input';
import { Type } from 'class-transformer';
import { directus_flowsCreateWithoutDirectus_usersInput } from './directus-flows-create-without-directus-users.input';

@InputType()
export class directus_flowsCreateOrConnectWithoutDirectus_usersInput {

    @Field(() => directus_flowsWhereUniqueInput, {nullable:false})
    @Type(() => directus_flowsWhereUniqueInput)
    where!: Prisma.AtLeast<directus_flowsWhereUniqueInput, 'id' | 'operation'>;

    @Field(() => directus_flowsCreateWithoutDirectus_usersInput, {nullable:false})
    @Type(() => directus_flowsCreateWithoutDirectus_usersInput)
    create!: directus_flowsCreateWithoutDirectus_usersInput;
}
