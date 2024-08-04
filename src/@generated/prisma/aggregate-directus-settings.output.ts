import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Directus_settingsCountAggregate } from './directus-settings-count-aggregate.output';
import { Directus_settingsAvgAggregate } from './directus-settings-avg-aggregate.output';
import { Directus_settingsSumAggregate } from './directus-settings-sum-aggregate.output';
import { Directus_settingsMinAggregate } from './directus-settings-min-aggregate.output';
import { Directus_settingsMaxAggregate } from './directus-settings-max-aggregate.output';

@ObjectType()
export class AggregateDirectus_settings {
  @Field(() => Directus_settingsCountAggregate, { nullable: true })
  _count?: Directus_settingsCountAggregate;

  @Field(() => Directus_settingsAvgAggregate, { nullable: true })
  _avg?: Directus_settingsAvgAggregate;

  @Field(() => Directus_settingsSumAggregate, { nullable: true })
  _sum?: Directus_settingsSumAggregate;

  @Field(() => Directus_settingsMinAggregate, { nullable: true })
  _min?: Directus_settingsMinAggregate;

  @Field(() => Directus_settingsMaxAggregate, { nullable: true })
  _max?: Directus_settingsMaxAggregate;
}
