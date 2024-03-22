import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_usersUpdateWithoutDirectus_sharesInput } from './directus-users-update-without-directus-shares.input';
import { Type } from 'class-transformer';
import { directus_usersCreateWithoutDirectus_sharesInput } from './directus-users-create-without-directus-shares.input';

@InputType()
export class directus_usersUpsertWithoutDirectus_sharesInput {

    @Field(() => directus_usersUpdateWithoutDirectus_sharesInput, {nullable:false})
    @Type(() => directus_usersUpdateWithoutDirectus_sharesInput)
    update!: directus_usersUpdateWithoutDirectus_sharesInput;

    @Field(() => directus_usersCreateWithoutDirectus_sharesInput, {nullable:false})
    @Type(() => directus_usersCreateWithoutDirectus_sharesInput)
    create!: directus_usersCreateWithoutDirectus_sharesInput;
}
