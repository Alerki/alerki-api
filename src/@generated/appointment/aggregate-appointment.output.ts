import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { AppointmentCountAggregate } from './appointment-count-aggregate.output';
import { AppointmentAvgAggregate } from './appointment-avg-aggregate.output';
import { AppointmentSumAggregate } from './appointment-sum-aggregate.output';
import { AppointmentMinAggregate } from './appointment-min-aggregate.output';
import { AppointmentMaxAggregate } from './appointment-max-aggregate.output';

@ObjectType()
export class AggregateAppointment {
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
