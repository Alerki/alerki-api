import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class AppointmentMinAggregateInput {
  @Field(() => Boolean, { nullable: true })
  id?: true;

  @Field(() => Boolean, { nullable: true })
  date_created?: true;

  @Field(() => Boolean, { nullable: true })
  date_updated?: true;

  @Field(() => Boolean, { nullable: true })
  masterService?: true;

  @Field(() => Boolean, { nullable: true })
  clientProfile?: true;

  @Field(() => Boolean, { nullable: true })
  masterProfile?: true;

  @Field(() => Boolean, { nullable: true })
  duration?: true;

  @Field(() => Boolean, { nullable: true })
  price?: true;

  @Field(() => Boolean, { nullable: true })
  currency?: true;

  @Field(() => Boolean, { nullable: true })
  startAt?: true;

  @Field(() => Boolean, { nullable: true })
  endAt?: true;

  @Field(() => Boolean, { nullable: true })
  confirmed?: true;

  @Field(() => Boolean, { nullable: true })
  cancelled?: true;
}
