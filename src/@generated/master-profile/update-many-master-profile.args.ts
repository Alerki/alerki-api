import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MasterProfileUpdateManyMutationInput } from './master-profile-update-many-mutation.input';
import { Type } from 'class-transformer';
import { MasterProfileWhereInput } from './master-profile-where.input';

@ArgsType()
export class UpdateManyMasterProfileArgs {

    @Field(() => MasterProfileUpdateManyMutationInput, {nullable:false})
    @Type(() => MasterProfileUpdateManyMutationInput)
    data!: MasterProfileUpdateManyMutationInput;

    @Field(() => MasterProfileWhereInput, {nullable:true})
    @Type(() => MasterProfileWhereInput)
    where?: MasterProfileWhereInput;
}
