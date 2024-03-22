import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_versionsWhereInput } from '../directus-versions/directus-versions-where.input';

@InputType()
export class Directus_versionsListRelationFilter {

    @Field(() => directus_versionsWhereInput, {nullable:true})
    every?: directus_versionsWhereInput;

    @Field(() => directus_versionsWhereInput, {nullable:true})
    some?: directus_versionsWhereInput;

    @Field(() => directus_versionsWhereInput, {nullable:true})
    none?: directus_versionsWhereInput;
}
