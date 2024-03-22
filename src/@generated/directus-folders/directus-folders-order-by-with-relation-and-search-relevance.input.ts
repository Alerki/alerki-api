import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { directus_filesOrderByRelationAggregateInput } from '../directus-files/directus-files-order-by-relation-aggregate.input';
import { directus_foldersOrderByRelationAggregateInput } from './directus-folders-order-by-relation-aggregate.input';
import { directus_settingsOrderByRelationAggregateInput } from '../directus-settings/directus-settings-order-by-relation-aggregate.input';
import { directus_foldersOrderByRelevanceInput } from './directus-folders-order-by-relevance.input';

@InputType()
export class directus_foldersOrderByWithRelationAndSearchRelevanceInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    parent?: keyof typeof SortOrder;

    @Field(() => directus_filesOrderByRelationAggregateInput, {nullable:true})
    directus_files?: directus_filesOrderByRelationAggregateInput;

    @Field(() => directus_foldersOrderByWithRelationAndSearchRelevanceInput, {nullable:true})
    directus_folders?: directus_foldersOrderByWithRelationAndSearchRelevanceInput;

    @Field(() => directus_foldersOrderByRelationAggregateInput, {nullable:true})
    other_directus_folders?: directus_foldersOrderByRelationAggregateInput;

    @Field(() => directus_settingsOrderByRelationAggregateInput, {nullable:true})
    directus_settings?: directus_settingsOrderByRelationAggregateInput;

    @Field(() => directus_foldersOrderByRelevanceInput, {nullable:true})
    _relevance?: directus_foldersOrderByRelevanceInput;
}
