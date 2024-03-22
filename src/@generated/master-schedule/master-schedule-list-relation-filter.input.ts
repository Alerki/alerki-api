import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MasterScheduleWhereInput } from './master-schedule-where.input';

@InputType()
export class MasterScheduleListRelationFilter {

    @Field(() => MasterScheduleWhereInput, {nullable:true})
    every?: MasterScheduleWhereInput;

    @Field(() => MasterScheduleWhereInput, {nullable:true})
    some?: MasterScheduleWhereInput;

    @Field(() => MasterScheduleWhereInput, {nullable:true})
    none?: MasterScheduleWhereInput;
}
