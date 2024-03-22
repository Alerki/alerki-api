import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Directus_versionsCountAggregate } from './directus-versions-count-aggregate.output';
import { Directus_versionsMinAggregate } from './directus-versions-min-aggregate.output';
import { Directus_versionsMaxAggregate } from './directus-versions-max-aggregate.output';

@ObjectType()
export class Directus_versionsGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    key!: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:false})
    collection!: string;

    @Field(() => String, {nullable:false})
    item!: string;

    @Field(() => String, {nullable:true})
    hash?: string;

    @Field(() => Date, {nullable:true})
    date_created?: Date | string;

    @Field(() => Date, {nullable:true})
    date_updated?: Date | string;

    @Field(() => String, {nullable:true})
    user_created?: string;

    @Field(() => String, {nullable:true})
    user_updated?: string;

    @Field(() => Directus_versionsCountAggregate, {nullable:true})
    _count?: Directus_versionsCountAggregate;

    @Field(() => Directus_versionsMinAggregate, {nullable:true})
    _min?: Directus_versionsMinAggregate;

    @Field(() => Directus_versionsMaxAggregate, {nullable:true})
    _max?: Directus_versionsMaxAggregate;
}
