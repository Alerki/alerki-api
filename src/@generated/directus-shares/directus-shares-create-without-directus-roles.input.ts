import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { directus_sessionsCreateNestedManyWithoutDirectus_sharesInput } from '../directus-sessions/directus-sessions-create-nested-many-without-directus-shares.input';
import { directus_collectionsCreateNestedOneWithoutDirectus_sharesInput } from '../directus-collections/directus-collections-create-nested-one-without-directus-shares.input';
import { directus_usersCreateNestedOneWithoutDirectus_sharesInput } from '../directus-users/directus-users-create-nested-one-without-directus-shares.input';

@InputType()
export class directus_sharesCreateWithoutDirectus_rolesInput {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:false})
    item!: string;

    @Field(() => String, {nullable:true})
    password?: string;

    @Field(() => Date, {nullable:true})
    date_created?: Date | string;

    @Field(() => Date, {nullable:true})
    date_start?: Date | string;

    @Field(() => Date, {nullable:true})
    date_end?: Date | string;

    @Field(() => Int, {nullable:true})
    times_used?: number;

    @Field(() => Int, {nullable:true})
    max_uses?: number;

    @Field(() => directus_sessionsCreateNestedManyWithoutDirectus_sharesInput, {nullable:true})
    directus_sessions?: directus_sessionsCreateNestedManyWithoutDirectus_sharesInput;

    @Field(() => directus_collectionsCreateNestedOneWithoutDirectus_sharesInput, {nullable:false})
    directus_collections!: directus_collectionsCreateNestedOneWithoutDirectus_sharesInput;

    @Field(() => directus_usersCreateNestedOneWithoutDirectus_sharesInput, {nullable:true})
    directus_users?: directus_usersCreateNestedOneWithoutDirectus_sharesInput;
}
