import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class MasterWeeklyScheduleMaxAggregateInput {
  @Field(() => Boolean, { nullable: true })
  id?: true;

  @Field(() => Boolean, { nullable: true })
  status?: true;

  @Field(() => Boolean, { nullable: true })
  sort?: true;

  @Field(() => Boolean, { nullable: true })
  date_created?: true;

  @Field(() => Boolean, { nullable: true })
  date_updated?: true;

  @Field(() => Boolean, { nullable: true })
  monday?: true;

  @Field(() => Boolean, { nullable: true })
  tuesday?: true;

  @Field(() => Boolean, { nullable: true })
  wednesday?: true;

  @Field(() => Boolean, { nullable: true })
  thursday?: true;

  @Field(() => Boolean, { nullable: true })
  friday?: true;

  @Field(() => Boolean, { nullable: true })
  saturday?: true;

  @Field(() => Boolean, { nullable: true })
  sunday?: true;
}
