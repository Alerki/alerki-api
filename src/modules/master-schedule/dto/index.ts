import { ArgsType, Field } from '@nestjs/graphql';
import { MasterSchedule } from '@prisma/client';
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
