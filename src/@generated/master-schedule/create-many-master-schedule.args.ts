import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MasterScheduleCreateManyInput } from './master-schedule-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyMasterScheduleArgs {

    @Field(() => [MasterScheduleCreateManyInput], {nullable:false})
    @Type(() => MasterScheduleCreateManyInput)
    data!: Array<MasterScheduleCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
