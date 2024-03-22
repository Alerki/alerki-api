import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { directus_rolesWhereUniqueInput } from './directus-roles-where-unique.input';
import { Type } from 'class-transformer';
import { directus_rolesCreateWithoutDirectus_usersInput } from './directus-roles-create-without-directus-users.input';

@InputType()
export class directus_rolesCreateOrConnectWithoutDirectus_usersInput {

    @Field(() => directus_rolesWhereUniqueInput, {nullable:false})
    @Type(() => directus_rolesWhereUniqueInput)
    where!: Prisma.AtLeast<directus_rolesWhereUniqueInput, 'id'>;

    @Field(() => directus_rolesCreateWithoutDirectus_usersInput, {nullable:false})
    @Type(() => directus_rolesCreateWithoutDirectus_usersInput)
    create!: directus_rolesCreateWithoutDirectus_usersInput;
}
