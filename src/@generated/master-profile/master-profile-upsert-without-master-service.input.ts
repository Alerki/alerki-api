import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MasterProfileUpdateWithoutMasterServiceInput } from './master-profile-update-without-master-service.input';
import { Type } from 'class-transformer';
import { MasterProfileCreateWithoutMasterServiceInput } from './master-profile-create-without-master-service.input';

@InputType()
export class MasterProfileUpsertWithoutMasterServiceInput {

    @Field(() => MasterProfileUpdateWithoutMasterServiceInput, {nullable:false})
    @Type(() => MasterProfileUpdateWithoutMasterServiceInput)
    update!: MasterProfileUpdateWithoutMasterServiceInput;

    @Field(() => MasterProfileCreateWithoutMasterServiceInput, {nullable:false})
    @Type(() => MasterProfileCreateWithoutMasterServiceInput)
    create!: MasterProfileCreateWithoutMasterServiceInput;
}
