import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BoolWithAggregatesFilter } from '../prisma/bool-with-aggregates-filter.input';
import { UuidWithAggregatesFilter } from '../prisma/uuid-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { UuidNullableWithAggregatesFilter } from '../prisma/uuid-nullable-with-aggregates-filter.input';

@InputType()
export class directus_extensionsScalarWhereWithAggregatesInput {

    @Field(() => [directus_extensionsScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<directus_extensionsScalarWhereWithAggregatesInput>;

    @Field(() => [directus_extensionsScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<directus_extensionsScalarWhereWithAggregatesInput>;

    @Field(() => [directus_extensionsScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<directus_extensionsScalarWhereWithAggregatesInput>;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    enabled?: BoolWithAggregatesFilter;

    @Field(() => UuidWithAggregatesFilter, {nullable:true})
    id?: UuidWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    folder?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    source?: StringWithAggregatesFilter;

    @Field(() => UuidNullableWithAggregatesFilter, {nullable:true})
    bundle?: UuidNullableWithAggregatesFilter;
}
