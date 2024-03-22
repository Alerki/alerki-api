import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';

@InputType()
export class directus_relationsWhereInput {

    @Field(() => [directus_relationsWhereInput], {nullable:true})
    AND?: Array<directus_relationsWhereInput>;

    @Field(() => [directus_relationsWhereInput], {nullable:true})
    OR?: Array<directus_relationsWhereInput>;

    @Field(() => [directus_relationsWhereInput], {nullable:true})
    NOT?: Array<directus_relationsWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    many_collection?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    many_field?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    one_collection?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    one_field?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    one_collection_field?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    one_allowed_collections?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    junction_field?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    sort_field?: StringNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    one_deselect_action?: StringFilter;
}
