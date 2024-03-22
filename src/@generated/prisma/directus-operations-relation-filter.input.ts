import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_operationsWhereInput } from '../directus-operations/directus-operations-where.input';

@InputType()
export class Directus_operationsRelationFilter {

    @Field(() => directus_operationsWhereInput, {nullable:true})
    is?: directus_operationsWhereInput;

    @Field(() => directus_operationsWhereInput, {nullable:true})
    isNot?: directus_operationsWhereInput;
}
