import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MasterProfileScalarWhereInput } from './master-profile-scalar-where.input';
import { Type } from 'class-transformer';
import { MasterProfileUpdateManyMutationInput } from './master-profile-update-many-mutation.input';

@InputType()
export class MasterProfileUpdateManyWithWhereWithoutMasterWeeklyScheduleInput {

    @Field(() => MasterProfileScalarWhereInput, {nullable:false})
    @Type(() => MasterProfileScalarWhereInput)
    where!: MasterProfileScalarWhereInput;

    @Field(() => MasterProfileUpdateManyMutationInput, {nullable:false})
    @Type(() => MasterProfileUpdateManyMutationInput)
    data!: MasterProfileUpdateManyMutationInput;
}
