import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { MasterProfile } from '../master-profile/master-profile.model';
import { MasterWeeklyScheduleCount } from './master-weekly-schedule-count.output';

@ObjectType()
export class MasterWeeklySchedule {
  @Field(() => ID, { nullable: false })
  id!: string;

  @Field(() => String, { nullable: false, defaultValue: 'draft' })
  status!: string;

  @Field(() => Int, { nullable: true })
  sort!: number | null;

  @Field(() => Date, { nullable: true })
  date_created!: Date | null;

  @Field(() => Date, { nullable: true })
  date_updated!: Date | null;

  @Field(() => Boolean, { nullable: true, defaultValue: true })
  monday!: boolean | null;

  @Field(() => Boolean, { nullable: false, defaultValue: true })
  tuesday!: boolean;

  @Field(() => Boolean, { nullable: false, defaultValue: true })
  wednesday!: boolean;

  @Field(() => Boolean, { nullable: false, defaultValue: true })
  thursday!: boolean;

  @Field(() => Boolean, { nullable: false, defaultValue: true })
  friday!: boolean;

  @Field(() => Boolean, { nullable: true, defaultValue: false })
  saturday!: boolean | null;

  @Field(() => Boolean, { nullable: true, defaultValue: false })
  sunday!: boolean | null;

  @Field(() => [MasterProfile], { nullable: true })
  MasterProfile?: Array<MasterProfile>;

  @Field(() => MasterWeeklyScheduleCount, { nullable: false })
  _count?: MasterWeeklyScheduleCount;
}
