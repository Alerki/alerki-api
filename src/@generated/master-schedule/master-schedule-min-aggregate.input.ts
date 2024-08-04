import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class MasterScheduleMinAggregateInput {
  @Field(() => Boolean, { nullable: true })
  id?: true;

  @Field(() => Boolean, { nullable: true })
  status?: true;

  @Field(() => Boolean, { nullable: true })
  date_created?: true;

  @Field(() => Boolean, { nullable: true })
  date_updated?: true;

  @Field(() => Boolean, { nullable: true })
  date?: true;

  @Field(() => Boolean, { nullable: true })
  startTime?: true;

  @Field(() => Boolean, { nullable: true })
  endTime?: true;

  @Field(() => Boolean, { nullable: true })
  dayOff?: true;

  @Field(() => Boolean, { nullable: true })
  masterProfile?: true;
}
