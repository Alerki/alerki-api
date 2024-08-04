import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Directus_fieldsCountAggregate } from './directus-fields-count-aggregate.output';
import { Directus_fieldsAvgAggregate } from './directus-fields-avg-aggregate.output';
import { Directus_fieldsSumAggregate } from './directus-fields-sum-aggregate.output';
import { Directus_fieldsMinAggregate } from './directus-fields-min-aggregate.output';
import { Directus_fieldsMaxAggregate } from './directus-fields-max-aggregate.output';

@ObjectType()
export class AggregateDirectus_fields {
  @Field(() => Directus_fieldsCountAggregate, { nullable: true })
  _count?: Directus_fieldsCountAggregate;

  @Field(() => Directus_fieldsAvgAggregate, { nullable: true })
  _avg?: Directus_fieldsAvgAggregate;

  @Field(() => Directus_fieldsSumAggregate, { nullable: true })
  _sum?: Directus_fieldsSumAggregate;

  @Field(() => Directus_fieldsMinAggregate, { nullable: true })
  _min?: Directus_fieldsMinAggregate;

  @Field(() => Directus_fieldsMaxAggregate, { nullable: true })
  _max?: Directus_fieldsMaxAggregate;
}
