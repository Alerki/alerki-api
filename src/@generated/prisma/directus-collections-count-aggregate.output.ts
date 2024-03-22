import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Directus_collectionsCountAggregate {

    @Field(() => Int, {nullable:false})
    collection!: number;

    @Field(() => Int, {nullable:false})
    icon!: number;

    @Field(() => Int, {nullable:false})
    note!: number;

    @Field(() => Int, {nullable:false})
    display_template!: number;

    @Field(() => Int, {nullable:false})
    hidden!: number;

    @Field(() => Int, {nullable:false})
    singleton!: number;

    @Field(() => Int, {nullable:false})
    translations!: number;

    @Field(() => Int, {nullable:false})
    archive_field!: number;

    @Field(() => Int, {nullable:false})
    archive_app_filter!: number;

    @Field(() => Int, {nullable:false})
    archive_value!: number;

    @Field(() => Int, {nullable:false})
    unarchive_value!: number;

    @Field(() => Int, {nullable:false})
    sort_field!: number;

    @Field(() => Int, {nullable:false})
    accountability!: number;

    @Field(() => Int, {nullable:false})
    color!: number;

    @Field(() => Int, {nullable:false})
    item_duplication_fields!: number;

    @Field(() => Int, {nullable:false})
    sort!: number;

    @Field(() => Int, {nullable:false})
    group!: number;

    @Field(() => Int, {nullable:false})
    collapse!: number;

    @Field(() => Int, {nullable:false})
    preview_url!: number;

    @Field(() => Int, {nullable:false})
    versioning!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
