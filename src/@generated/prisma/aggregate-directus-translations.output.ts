import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Directus_translationsCountAggregate } from './directus-translations-count-aggregate.output';
import { Directus_translationsMinAggregate } from './directus-translations-min-aggregate.output';
import { Directus_translationsMaxAggregate } from './directus-translations-max-aggregate.output';

@ObjectType()
export class AggregateDirectus_translations {
  @Field(() => Directus_translationsCountAggregate, { nullable: true })
  _count?: Directus_translationsCountAggregate;

  @Field(() => Directus_translationsMinAggregate, { nullable: true })
  _min?: Directus_translationsMinAggregate;

  @Field(() => Directus_translationsMaxAggregate, { nullable: true })
  _max?: Directus_translationsMaxAggregate;
}
