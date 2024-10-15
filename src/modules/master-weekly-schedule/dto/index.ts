import { ArgsType, Field } from '@nestjs/graphql';
import { MasterWeeklySchedule } from '@prisma/client';
import { IsBoolean, IsDate, IsOptional } from 'class-validator';

@ArgsType()
export class UpdateMasterWeeklyScheduleArgs
  implements
    Partial<
      Pick<
        MasterWeeklySchedule,
        | 'Monday'
        | 'Tuesday'
        | 'Wednesday'
        | 'Thursday'
        | 'Friday'
        | 'Saturday'
        | 'Sunday'
        | 'startAt'
        | 'endAt'
      >
    >
{
  @Field(() => Boolean, { nullable: true })
  @IsBoolean()
  @IsOptional()
  Monday?: boolean;

  @Field(() => Boolean, { nullable: true })
  @IsBoolean()
  @IsOptional()
  Tuesday?: boolean;

  @Field(() => Boolean, { nullable: true })
  @IsBoolean()
  @IsOptional()
  Wednesday?: boolean;

  @Field(() => Boolean, { nullable: true })
  @IsBoolean()
  @IsOptional()
  Thursday?: boolean;

  @Field(() => Boolean, { nullable: true })
  @IsBoolean()
  @IsOptional()
  Friday?: boolean;

  @Field(() => Boolean, { nullable: true })
  @IsBoolean()
  @IsOptional()
  Saturday?: boolean;

  @Field(() => Boolean, { nullable: true })
  @IsBoolean()
  @IsOptional()
  Sunday?: boolean;

  @Field(() => Date, { nullable: true })
  @IsDate()
  @IsOptional()
  startAt?: Date;

  @Field(() => Date, { nullable: true })
  @IsDate()
  @IsOptional()
  endAt?: Date;
}
