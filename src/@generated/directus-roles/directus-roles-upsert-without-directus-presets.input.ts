import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_rolesUpdateWithoutDirectus_presetsInput } from './directus-roles-update-without-directus-presets.input';
import { Type } from 'class-transformer';
import { directus_rolesCreateWithoutDirectus_presetsInput } from './directus-roles-create-without-directus-presets.input';

@InputType()
export class directus_rolesUpsertWithoutDirectus_presetsInput {

    @Field(() => directus_rolesUpdateWithoutDirectus_presetsInput, {nullable:false})
    @Type(() => directus_rolesUpdateWithoutDirectus_presetsInput)
    update!: directus_rolesUpdateWithoutDirectus_presetsInput;

    @Field(() => directus_rolesCreateWithoutDirectus_presetsInput, {nullable:false})
    @Type(() => directus_rolesCreateWithoutDirectus_presetsInput)
    create!: directus_rolesCreateWithoutDirectus_presetsInput;
}
