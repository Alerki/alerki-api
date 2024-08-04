import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Service_translationsCountAggregate } from './service-translations-count-aggregate.output';
import { Service_translationsAvgAggregate } from './service-translations-avg-aggregate.output';
import { Service_translationsSumAggregate } from './service-translations-sum-aggregate.output';
import { Service_translationsMinAggregate } from './service-translations-min-aggregate.output';
import { Service_translationsMaxAggregate } from './service-translations-max-aggregate.output';

@ObjectType()
export class AggregateService_translations {
  @Field(() => Service_translationsCountAggregate, { nullable: true })
  _count?: Service_translationsCountAggregate;

  @Field(() => Service_translationsAvgAggregate, { nullable: true })
  _avg?: Service_translationsAvgAggregate;

  @Field(() => Service_translationsSumAggregate, { nullable: true })
  _sum?: Service_translationsSumAggregate;

  @Field(() => Service_translationsMinAggregate, { nullable: true })
  _min?: Service_translationsMinAggregate;

  @Field(() => Service_translationsMaxAggregate, { nullable: true })
  _max?: Service_translationsMaxAggregate;
}
