import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class MasterWeeklyScheduleCountAggregate {
  @Field(() => Int, { nullable: false })
  id!: number;

  @Field(() => Int, { nullable: false })
  status!: number;

  @Field(() => Int, { nullable: false })
  sort!: number;

  @Field(() => Int, { nullable: false })
  date_created!: number;

  @Field(() => Int, { nullable: false })
  date_updated!: number;

  @Field(() => Int, { nullable: false })
  monday!: number;

  @Field(() => Int, { nullable: false })
  tuesday!: number;

  @Field(() => Int, { nullable: false })
  wednesday!: number;

  @Field(() => Int, { nullable: false })
  thursday!: number;

  @Field(() => Int, { nullable: false })
  friday!: number;

  @Field(() => Int, { nullable: false })
  saturday!: number;

  @Field(() => Int, { nullable: false })
  sunday!: number;

  @Field(() => Int, { nullable: false })
  _all!: number;
}
