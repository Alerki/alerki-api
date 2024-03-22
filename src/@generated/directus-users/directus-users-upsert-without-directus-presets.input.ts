import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_usersUpdateWithoutDirectus_presetsInput } from './directus-users-update-without-directus-presets.input';
import { Type } from 'class-transformer';
import { directus_usersCreateWithoutDirectus_presetsInput } from './directus-users-create-without-directus-presets.input';

@InputType()
export class directus_usersUpsertWithoutDirectus_presetsInput {

    @Field(() => directus_usersUpdateWithoutDirectus_presetsInput, {nullable:false})
    @Type(() => directus_usersUpdateWithoutDirectus_presetsInput)
    update!: directus_usersUpdateWithoutDirectus_presetsInput;

    @Field(() => directus_usersCreateWithoutDirectus_presetsInput, {nullable:false})
    @Type(() => directus_usersCreateWithoutDirectus_presetsInput)
    create!: directus_usersCreateWithoutDirectus_presetsInput;
}
