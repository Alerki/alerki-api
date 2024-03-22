import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_flowsWhereInput } from '../directus-flows/directus-flows-where.input';

@InputType()
export class Directus_flowsListRelationFilter {

    @Field(() => directus_flowsWhereInput, {nullable:true})
    every?: directus_flowsWhereInput;

    @Field(() => directus_flowsWhereInput, {nullable:true})
    some?: directus_flowsWhereInput;

    @Field(() => directus_flowsWhereInput, {nullable:true})
    none?: directus_flowsWhereInput;
}
