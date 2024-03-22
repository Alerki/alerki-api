import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Directus_sharesCountAggregate } from './directus-shares-count-aggregate.output';
import { Directus_sharesAvgAggregate } from './directus-shares-avg-aggregate.output';
import { Directus_sharesSumAggregate } from './directus-shares-sum-aggregate.output';
import { Directus_sharesMinAggregate } from './directus-shares-min-aggregate.output';
import { Directus_sharesMaxAggregate } from './directus-shares-max-aggregate.output';

@ObjectType()
export class Directus_sharesGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:false})
    collection!: string;

    @Field(() => String, {nullable:false})
    item!: string;

    @Field(() => String, {nullable:true})
    role?: string;

    @Field(() => String, {nullable:true})
    password?: string;

    @Field(() => String, {nullable:true})
    user_created?: string;

    @Field(() => Date, {nullable:true})
    date_created?: Date | string;

    @Field(() => Date, {nullable:true})
    date_start?: Date | string;

    @Field(() => Date, {nullable:true})
    date_end?: Date | string;

    @Field(() => Int, {nullable:true})
    times_used?: number;

    @Field(() => Int, {nullable:true})
    max_uses?: number;

    @Field(() => Directus_sharesCountAggregate, {nullable:true})
    _count?: Directus_sharesCountAggregate;

    @Field(() => Directus_sharesAvgAggregate, {nullable:true})
    _avg?: Directus_sharesAvgAggregate;

    @Field(() => Directus_sharesSumAggregate, {nullable:true})
    _sum?: Directus_sharesSumAggregate;

    @Field(() => Directus_sharesMinAggregate, {nullable:true})
    _min?: Directus_sharesMinAggregate;

    @Field(() => Directus_sharesMaxAggregate, {nullable:true})
    _max?: Directus_sharesMaxAggregate;
}
