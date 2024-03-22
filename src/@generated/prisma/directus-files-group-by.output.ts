import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { Directus_filesCountAggregate } from './directus-files-count-aggregate.output';
import { Directus_filesAvgAggregate } from './directus-files-avg-aggregate.output';
import { Directus_filesSumAggregate } from './directus-files-sum-aggregate.output';
import { Directus_filesMinAggregate } from './directus-files-min-aggregate.output';
import { Directus_filesMaxAggregate } from './directus-files-max-aggregate.output';

@ObjectType()
export class Directus_filesGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    storage!: string;

    @Field(() => String, {nullable:true})
    filename_disk?: string;

    @Field(() => String, {nullable:false})
    filename_download!: string;

    @Field(() => String, {nullable:true})
    title?: string;

    @Field(() => String, {nullable:true})
    type?: string;

    @Field(() => String, {nullable:true})
    folder?: string;

    @Field(() => String, {nullable:true})
    uploaded_by?: string;

    @Field(() => Date, {nullable:false})
    uploaded_on!: Date | string;

    @Field(() => String, {nullable:true})
    modified_by?: string;

    @Field(() => Date, {nullable:false})
    modified_on!: Date | string;

    @Field(() => String, {nullable:true})
    charset?: string;

    @Field(() => String, {nullable:true})
    filesize?: bigint | number;

    @Field(() => Int, {nullable:true})
    width?: number;

    @Field(() => Int, {nullable:true})
    height?: number;

    @Field(() => Int, {nullable:true})
    duration?: number;

    @Field(() => String, {nullable:true})
    embed?: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => String, {nullable:true})
    location?: string;

    @Field(() => String, {nullable:true})
    tags?: string;

    @Field(() => GraphQLJSON, {nullable:true})
    metadata?: any;

    @Field(() => Int, {nullable:true})
    focal_point_x?: number;

    @Field(() => Int, {nullable:true})
    focal_point_y?: number;

    @Field(() => Directus_filesCountAggregate, {nullable:true})
    _count?: Directus_filesCountAggregate;

    @Field(() => Directus_filesAvgAggregate, {nullable:true})
    _avg?: Directus_filesAvgAggregate;

    @Field(() => Directus_filesSumAggregate, {nullable:true})
    _sum?: Directus_filesSumAggregate;

    @Field(() => Directus_filesMinAggregate, {nullable:true})
    _min?: Directus_filesMinAggregate;

    @Field(() => Directus_filesMaxAggregate, {nullable:true})
    _max?: Directus_filesMaxAggregate;
}
