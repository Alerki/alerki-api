import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_flowsWhereInput } from '../directus-flows/directus-flows-where.input';

@InputType()
export class Directus_flowsRelationFilter {

    @Field(() => directus_flowsWhereInput, {nullable:true})
    is?: directus_flowsWhereInput;

    @Field(() => directus_flowsWhereInput, {nullable:true})
    isNot?: directus_flowsWhereInput;
}
