import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_flowsUpdateWithoutDirectus_operationsInput } from './directus-flows-update-without-directus-operations.input';
import { Type } from 'class-transformer';
import { directus_flowsCreateWithoutDirectus_operationsInput } from './directus-flows-create-without-directus-operations.input';

@InputType()
export class directus_flowsUpsertWithoutDirectus_operationsInput {

    @Field(() => directus_flowsUpdateWithoutDirectus_operationsInput, {nullable:false})
    @Type(() => directus_flowsUpdateWithoutDirectus_operationsInput)
    update!: directus_flowsUpdateWithoutDirectus_operationsInput;

    @Field(() => directus_flowsCreateWithoutDirectus_operationsInput, {nullable:false})
    @Type(() => directus_flowsCreateWithoutDirectus_operationsInput)
    create!: directus_flowsCreateWithoutDirectus_operationsInput;
}
