import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_rolesUpdateWithoutDirectus_usersInput } from './directus-roles-update-without-directus-users.input';
import { Type } from 'class-transformer';
import { directus_rolesCreateWithoutDirectus_usersInput } from './directus-roles-create-without-directus-users.input';

@InputType()
export class directus_rolesUpsertWithoutDirectus_usersInput {

    @Field(() => directus_rolesUpdateWithoutDirectus_usersInput, {nullable:false})
    @Type(() => directus_rolesUpdateWithoutDirectus_usersInput)
    update!: directus_rolesUpdateWithoutDirectus_usersInput;

    @Field(() => directus_rolesCreateWithoutDirectus_usersInput, {nullable:false})
    @Type(() => directus_rolesCreateWithoutDirectus_usersInput)
    create!: directus_rolesCreateWithoutDirectus_usersInput;
}
