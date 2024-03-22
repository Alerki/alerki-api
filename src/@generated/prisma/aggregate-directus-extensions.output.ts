import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Directus_extensionsCountAggregate } from './directus-extensions-count-aggregate.output';
import { Directus_extensionsMinAggregate } from './directus-extensions-min-aggregate.output';
import { Directus_extensionsMaxAggregate } from './directus-extensions-max-aggregate.output';

@ObjectType()
export class AggregateDirectus_extensions {

    @Field(() => Directus_extensionsCountAggregate, {nullable:true})
    _count?: Directus_extensionsCountAggregate;

    @Field(() => Directus_extensionsMinAggregate, {nullable:true})
    _min?: Directus_extensionsMinAggregate;

    @Field(() => Directus_extensionsMaxAggregate, {nullable:true})
    _max?: Directus_extensionsMaxAggregate;
}
