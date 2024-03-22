import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MasterScheduleCreateManyMasterProfileInput } from './master-schedule-create-many-master-profile.input';
import { Type } from 'class-transformer';

@InputType()
export class MasterScheduleCreateManyMasterProfileInputEnvelope {

    @Field(() => [MasterScheduleCreateManyMasterProfileInput], {nullable:false})
    @Type(() => MasterScheduleCreateManyMasterProfileInput)
    data!: Array<MasterScheduleCreateManyMasterProfileInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
