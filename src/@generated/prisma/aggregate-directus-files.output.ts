import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Directus_filesCountAggregate } from './directus-files-count-aggregate.output';
import { Directus_filesAvgAggregate } from './directus-files-avg-aggregate.output';
import { Directus_filesSumAggregate } from './directus-files-sum-aggregate.output';
import { Directus_filesMinAggregate } from './directus-files-min-aggregate.output';
import { Directus_filesMaxAggregate } from './directus-files-max-aggregate.output';

@ObjectType()
export class AggregateDirectus_files {
  @Field(() => Directus_filesCountAggregate, { nullable: true })
  _count?: Directus_filesCountAggregate;

  @Field(() => Directus_filesAvgAggregate, { nullable: true })
  _avg?: Directus_filesAvgAggregate;

  @Field(() => Directus_filesSumAggregate, { nullable: true })
  _sum?: Directus_filesSumAggregate;

  @Field(() => Directus_filesMinAggregate, { nullable: true })
  _min?: Directus_filesMinAggregate;

  @Field(() => Directus_filesMaxAggregate, { nullable: true })
  _max?: Directus_filesMaxAggregate;
}
