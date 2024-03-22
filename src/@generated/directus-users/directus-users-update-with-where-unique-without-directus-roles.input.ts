import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { directus_usersWhereUniqueInput } from './directus-users-where-unique.input';
import { Type } from 'class-transformer';
import { directus_usersUpdateWithoutDirectus_rolesInput } from './directus-users-update-without-directus-roles.input';

@InputType()
export class directus_usersUpdateWithWhereUniqueWithoutDirectus_rolesInput {

    @Field(() => directus_usersWhereUniqueInput, {nullable:false})
    @Type(() => directus_usersWhereUniqueInput)
    where!: Prisma.AtLeast<directus_usersWhereUniqueInput, 'id' | 'email' | 'token' | 'external_identifier'>;

    @Field(() => directus_usersUpdateWithoutDirectus_rolesInput, {nullable:false})
    @Type(() => directus_usersUpdateWithoutDirectus_rolesInput)
    data!: directus_usersUpdateWithoutDirectus_rolesInput;
}
