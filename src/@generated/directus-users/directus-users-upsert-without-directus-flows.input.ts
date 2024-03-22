import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_usersUpdateWithoutDirectus_flowsInput } from './directus-users-update-without-directus-flows.input';
import { Type } from 'class-transformer';
import { directus_usersCreateWithoutDirectus_flowsInput } from './directus-users-create-without-directus-flows.input';

@InputType()
export class directus_usersUpsertWithoutDirectus_flowsInput {

    @Field(() => directus_usersUpdateWithoutDirectus_flowsInput, {nullable:false})
    @Type(() => directus_usersUpdateWithoutDirectus_flowsInput)
    update!: directus_usersUpdateWithoutDirectus_flowsInput;

    @Field(() => directus_usersCreateWithoutDirectus_flowsInput, {nullable:false})
    @Type(() => directus_usersCreateWithoutDirectus_flowsInput)
    create!: directus_usersCreateWithoutDirectus_flowsInput;
}
