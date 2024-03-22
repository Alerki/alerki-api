import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UuidWithAggregatesFilter } from '../prisma/uuid-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { UuidNullableWithAggregatesFilter } from '../prisma/uuid-nullable-with-aggregates-filter.input';

@InputType()
export class directus_foldersScalarWhereWithAggregatesInput {

    @Field(() => [directus_foldersScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<directus_foldersScalarWhereWithAggregatesInput>;

    @Field(() => [directus_foldersScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<directus_foldersScalarWhereWithAggregatesInput>;

    @Field(() => [directus_foldersScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<directus_foldersScalarWhereWithAggregatesInput>;

    @Field(() => UuidWithAggregatesFilter, {nullable:true})
    id?: UuidWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => UuidNullableWithAggregatesFilter, {nullable:true})
    parent?: UuidNullableWithAggregatesFilter;
}
