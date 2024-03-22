import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_usersUpdateWithoutDirectus_sessionsInput } from './directus-users-update-without-directus-sessions.input';
import { Type } from 'class-transformer';
import { directus_usersCreateWithoutDirectus_sessionsInput } from './directus-users-create-without-directus-sessions.input';

@InputType()
export class directus_usersUpsertWithoutDirectus_sessionsInput {

    @Field(() => directus_usersUpdateWithoutDirectus_sessionsInput, {nullable:false})
    @Type(() => directus_usersUpdateWithoutDirectus_sessionsInput)
    update!: directus_usersUpdateWithoutDirectus_sessionsInput;

    @Field(() => directus_usersCreateWithoutDirectus_sessionsInput, {nullable:false})
    @Type(() => directus_usersCreateWithoutDirectus_sessionsInput)
    create!: directus_usersCreateWithoutDirectus_sessionsInput;
}
