import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { Directus_flowsCountAggregate } from './directus-flows-count-aggregate.output';
import { Directus_flowsMinAggregate } from './directus-flows-min-aggregate.output';
import { Directus_flowsMaxAggregate } from './directus-flows-max-aggregate.output';

@ObjectType()
export class Directus_flowsGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    icon?: string;

    @Field(() => String, {nullable:true})
    color?: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => String, {nullable:false})
    status!: string;

    @Field(() => String, {nullable:true})
    trigger?: string;

    @Field(() => String, {nullable:true})
    accountability?: string;

    @Field(() => GraphQLJSON, {nullable:true})
    options?: any;

    @Field(() => String, {nullable:true})
    operation?: string;

    @Field(() => Date, {nullable:true})
    date_created?: Date | string;

    @Field(() => String, {nullable:true})
    user_created?: string;

    @Field(() => Directus_flowsCountAggregate, {nullable:true})
    _count?: Directus_flowsCountAggregate;

    @Field(() => Directus_flowsMinAggregate, {nullable:true})
    _min?: Directus_flowsMinAggregate;

    @Field(() => Directus_flowsMaxAggregate, {nullable:true})
    _max?: Directus_flowsMaxAggregate;
}
