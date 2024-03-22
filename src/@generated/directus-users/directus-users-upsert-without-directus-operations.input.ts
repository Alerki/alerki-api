import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_usersUpdateWithoutDirectus_operationsInput } from './directus-users-update-without-directus-operations.input';
import { Type } from 'class-transformer';
import { directus_usersCreateWithoutDirectus_operationsInput } from './directus-users-create-without-directus-operations.input';

@InputType()
export class directus_usersUpsertWithoutDirectus_operationsInput {

    @Field(() => directus_usersUpdateWithoutDirectus_operationsInput, {nullable:false})
    @Type(() => directus_usersUpdateWithoutDirectus_operationsInput)
    update!: directus_usersUpdateWithoutDirectus_operationsInput;

    @Field(() => directus_usersCreateWithoutDirectus_operationsInput, {nullable:false})
    @Type(() => directus_usersCreateWithoutDirectus_operationsInput)
    create!: directus_usersCreateWithoutDirectus_operationsInput;
}
