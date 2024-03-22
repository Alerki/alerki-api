import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Directus_foldersCountAggregate } from './directus-folders-count-aggregate.output';
import { Directus_foldersMinAggregate } from './directus-folders-min-aggregate.output';
import { Directus_foldersMaxAggregate } from './directus-folders-max-aggregate.output';

@ObjectType()
export class AggregateDirectus_folders {

    @Field(() => Directus_foldersCountAggregate, {nullable:true})
    _count?: Directus_foldersCountAggregate;

    @Field(() => Directus_foldersMinAggregate, {nullable:true})
    _min?: Directus_foldersMinAggregate;

    @Field(() => Directus_foldersMaxAggregate, {nullable:true})
    _max?: Directus_foldersMaxAggregate;
}
