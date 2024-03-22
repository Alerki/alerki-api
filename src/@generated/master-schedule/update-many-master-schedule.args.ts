import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MasterScheduleUpdateManyMutationInput } from './master-schedule-update-many-mutation.input';
import { Type } from 'class-transformer';
import { MasterScheduleWhereInput } from './master-schedule-where.input';

@ArgsType()
export class UpdateManyMasterScheduleArgs {

    @Field(() => MasterScheduleUpdateManyMutationInput, {nullable:false})
    @Type(() => MasterScheduleUpdateManyMutationInput)
    data!: MasterScheduleUpdateManyMutationInput;

    @Field(() => MasterScheduleWhereInput, {nullable:true})
    @Type(() => MasterScheduleWhereInput)
    where?: MasterScheduleWhereInput;
}
