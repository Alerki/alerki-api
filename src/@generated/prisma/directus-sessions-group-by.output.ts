import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Directus_sessionsCountAggregate } from './directus-sessions-count-aggregate.output';
import { Directus_sessionsMinAggregate } from './directus-sessions-min-aggregate.output';
import { Directus_sessionsMaxAggregate } from './directus-sessions-max-aggregate.output';

@ObjectType()
export class Directus_sessionsGroupBy {
  @Field(() => String, { nullable: false })
  token!: string;

  @Field(() => String, { nullable: true })
  user?: string;

  @Field(() => Date, { nullable: false })
  expires!: Date | string;

  @Field(() => String, { nullable: true })
  ip?: string;

  @Field(() => String, { nullable: true })
  user_agent?: string;

  @Field(() => String, { nullable: true })
  share?: string;

  @Field(() => String, { nullable: true })
  origin?: string;

  @Field(() => Directus_sessionsCountAggregate, { nullable: true })
  _count?: Directus_sessionsCountAggregate;

  @Field(() => Directus_sessionsMinAggregate, { nullable: true })
  _min?: Directus_sessionsMinAggregate;

  @Field(() => Directus_sessionsMaxAggregate, { nullable: true })
  _max?: Directus_sessionsMaxAggregate;
}
