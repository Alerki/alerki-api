import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_panelsWhereInput } from '../directus-panels/directus-panels-where.input';

@InputType()
export class Directus_panelsListRelationFilter {

    @Field(() => directus_panelsWhereInput, {nullable:true})
    every?: directus_panelsWhereInput;

    @Field(() => directus_panelsWhereInput, {nullable:true})
    some?: directus_panelsWhereInput;

    @Field(() => directus_panelsWhereInput, {nullable:true})
    none?: directus_panelsWhereInput;
}
