import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { Directus_fieldsCountAggregate } from './directus-fields-count-aggregate.output';
import { Directus_fieldsAvgAggregate } from './directus-fields-avg-aggregate.output';
import { Directus_fieldsSumAggregate } from './directus-fields-sum-aggregate.output';
import { Directus_fieldsMinAggregate } from './directus-fields-min-aggregate.output';
import { Directus_fieldsMaxAggregate } from './directus-fields-max-aggregate.output';

@ObjectType()
export class Directus_fieldsGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    collection!: string;

    @Field(() => String, {nullable:false})
    field!: string;

    @Field(() => String, {nullable:true})
    special?: string;

    @Field(() => String, {nullable:true})
    interface?: string;

    @Field(() => GraphQLJSON, {nullable:true})
    options?: any;

    @Field(() => String, {nullable:true})
    display?: string;

    @Field(() => GraphQLJSON, {nullable:true})
    display_options?: any;

    @Field(() => Boolean, {nullable:false})
    readonly!: boolean;

    @Field(() => Boolean, {nullable:false})
    hidden!: boolean;

    @Field(() => Int, {nullable:true})
    sort?: number;

    @Field(() => String, {nullable:true})
    width?: string;

    @Field(() => GraphQLJSON, {nullable:true})
    translations?: any;

    @Field(() => String, {nullable:true})
    note?: string;

    @Field(() => GraphQLJSON, {nullable:true})
    conditions?: any;

    @Field(() => Boolean, {nullable:true})
    required?: boolean;

    @Field(() => String, {nullable:true})
    group?: string;

    @Field(() => GraphQLJSON, {nullable:true})
    validation?: any;

    @Field(() => String, {nullable:true})
    validation_message?: string;

    @Field(() => Directus_fieldsCountAggregate, {nullable:true})
    _count?: Directus_fieldsCountAggregate;

    @Field(() => Directus_fieldsAvgAggregate, {nullable:true})
    _avg?: Directus_fieldsAvgAggregate;

    @Field(() => Directus_fieldsSumAggregate, {nullable:true})
    _sum?: Directus_fieldsSumAggregate;

    @Field(() => Directus_fieldsMinAggregate, {nullable:true})
    _min?: Directus_fieldsMinAggregate;

    @Field(() => Directus_fieldsMaxAggregate, {nullable:true})
    _max?: Directus_fieldsMaxAggregate;
}
