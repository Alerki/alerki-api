import { ArgsType, Field, Int, ObjectType } from '@nestjs/graphql';
import { MasterSchedule, Users } from '@prisma/client';
import { IsBoolean, IsDate, IsString } from 'class-validator';

@ArgsType()
export class CreateMasterScheduleArgs
  implements Required<Pick<MasterSchedule, 'dayOff' | 'startAt' | 'endAt'>>
{
  @Field(() => Boolean, { nullable: false })
  @IsBoolean()
  dayOff: boolean;

  @Field(() => Date, { nullable: false })
  @IsDate()
  startAt: Date;

  @Field(() => Date, { nullable: false })
  @IsDate()
  endAt: Date;
}

@ArgsType()
export class UpdateMasterScheduleArgs
  implements
    Required<Pick<MasterSchedule, 'id' | 'dayOff' | 'startAt' | 'endAt'>>
{
  @Field(() => String, { nullable: false })
  @IsString()
  id: string;

  @Field(() => Boolean, { nullable: false })
  @IsBoolean()
  dayOff: boolean;

  @Field(() => Date, { nullable: false })
  @IsDate()
  startAt: Date;

  @Field(() => Date, { nullable: false })
  @IsDate()
  endAt: Date;
}

@ArgsType()
export class DeleteMasterScheduleArgs
  implements Required<Pick<MasterSchedule, 'id'>>
{
  @Field(() => String, { nullable: false })
  @IsString()
  id: string;
}

@ObjectType()
export class TimeSlots {
  @Field(() => Date, { nullable: false })
  from: Date;

  @Field(() => Date, { nullable: false })
  to: Date;
}

@ObjectType()
export class MasterDaySchedule {
  @Field(() => Date, { nullable: false })
  date: Date;

  @Field(() => Boolean, { nullable: false })
  available: boolean;

  @Field(() => [TimeSlots], { nullable: false })
  timeSlots: Array<TimeSlots>;
}

@ArgsType()
export class GetMasterAvailabilityArgs
  implements Pick<Users, 'MasterProfileId'>
{
  @Field(() => String, { nullable: false })
  MasterProfileId: string;

  @Field(() => Int, { nullable: false })
  year: number;

  @Field(() => Int, { nullable: false })
  month: number;
}

@ArgsType()
export class GetMasterMonthScheduleArgs extends GetMasterAvailabilityArgs {}
