import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { UserPictureOrderByRelationAggregateInput } from '../user-picture/user-picture-order-by-relation-aggregate.input';
import { directus_foldersOrderByWithRelationAndSearchRelevanceInput } from '../directus-folders/directus-folders-order-by-with-relation-and-search-relevance.input';
import { directus_usersOrderByWithRelationAndSearchRelevanceInput } from '../directus-users/directus-users-order-by-with-relation-and-search-relevance.input';
import { directus_settingsOrderByRelationAggregateInput } from '../directus-settings/directus-settings-order-by-relation-aggregate.input';
import { directus_filesOrderByRelevanceInput } from './directus-files-order-by-relevance.input';

@InputType()
export class directus_filesOrderByWithRelationAndSearchRelevanceInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    storage?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    filename_disk?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    filename_download?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    type?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    folder?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    uploaded_by?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    uploaded_on?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    modified_by?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    modified_on?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    charset?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    filesize?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    width?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    height?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    duration?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    embed?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    location?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    tags?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    metadata?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    focal_point_x?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    focal_point_y?: keyof typeof SortOrder;

    @Field(() => UserPictureOrderByRelationAggregateInput, {nullable:true})
    UserPicture?: UserPictureOrderByRelationAggregateInput;

    @Field(() => directus_foldersOrderByWithRelationAndSearchRelevanceInput, {nullable:true})
    directus_folders?: directus_foldersOrderByWithRelationAndSearchRelevanceInput;

    @Field(() => directus_usersOrderByWithRelationAndSearchRelevanceInput, {nullable:true})
    directus_users_directus_files_modified_byTodirectus_users?: directus_usersOrderByWithRelationAndSearchRelevanceInput;

    @Field(() => directus_usersOrderByWithRelationAndSearchRelevanceInput, {nullable:true})
    directus_users_directus_files_uploaded_byTodirectus_users?: directus_usersOrderByWithRelationAndSearchRelevanceInput;

    @Field(() => directus_settingsOrderByRelationAggregateInput, {nullable:true})
    directus_settings_directus_settings_project_logoTodirectus_files?: directus_settingsOrderByRelationAggregateInput;

    @Field(() => directus_settingsOrderByRelationAggregateInput, {nullable:true})
    directus_settings_directus_settings_public_backgroundTodirectus_files?: directus_settingsOrderByRelationAggregateInput;

    @Field(() => directus_settingsOrderByRelationAggregateInput, {nullable:true})
    directus_settings_directus_settings_public_faviconTodirectus_files?: directus_settingsOrderByRelationAggregateInput;

    @Field(() => directus_settingsOrderByRelationAggregateInput, {nullable:true})
    directus_settings_directus_settings_public_foregroundTodirectus_files?: directus_settingsOrderByRelationAggregateInput;

    @Field(() => directus_filesOrderByRelevanceInput, {nullable:true})
    _relevance?: directus_filesOrderByRelevanceInput;
}
