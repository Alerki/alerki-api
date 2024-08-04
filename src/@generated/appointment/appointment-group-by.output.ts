import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { AppointmentCountAggregate } from './appointment-count-aggregate.output';
import { AppointmentAvgAggregate } from './appointment-avg-aggregate.output';
import { AppointmentSumAggregate } from './appointment-sum-aggregate.output';
import { AppointmentMinAggregate } from './appointment-min-aggregate.output';
import { AppointmentMaxAggregate } from './appointment-max-aggregate.output';

@ObjectType()
export class AppointmentGroupBy {
  @Field(() => String, { nullable: false })
  id!: string;

  @Field(() => Date, { nullable: true })
  date_created?: Date | string;

  @Field(() => Date, { nullable: true })
  date_updated?: Date | string;

  @Field(() => String, { nullable: false })
  masterService!: string;

  @Field(() => String, { nullable: false })
  clientProfile!: string;

  @Field(() => String, { nullable: false })
  masterProfile!: string;

  @Field(() => Date, { nullable: false })
  duration!: Date | string;

  @Field(() => Int, { nullable: false })
  price!: number;

  @Field(() => String, { nullable: false })
  currency!: string;

  @Field(() => Date, { nullable: false })
  startAt!: Date | string;

  @Field(() => Date, { nullable: false })
  endAt!: Date | string;

  @Field(() => Boolean, { nullable: false })
  confirmed!: boolean;

  @Field(() => Boolean, { nullable: false })
  cancelled!: boolean;

  @Field(() => AppointmentCountAggregate, { nullable: true })
  _count?: AppointmentCountAggregate;

  @Field(() => AppointmentAvgAggregate, { nullable: true })
  _avg?: AppointmentAvgAggregate;

  @Field(() => AppointmentSumAggregate, { nullable: true })
  _sum?: AppointmentSumAggregate;

  @Field(() => AppointmentMinAggregate, { nullable: true })
  _min?: AppointmentMinAggregate;

  @Field(() => AppointmentMaxAggregate, { nullable: true })
  _max?: AppointmentMaxAggregate;
}
