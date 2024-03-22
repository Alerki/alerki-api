import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MasterProfileCreateInput } from './master-profile-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneMasterProfileArgs {

    @Field(() => MasterProfileCreateInput, {nullable:false})
    @Type(() => MasterProfileCreateInput)
    data!: MasterProfileCreateInput;
}
