import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MasterProfileCreateWithoutMasterServiceInput } from './master-profile-create-without-master-service.input';
import { Type } from 'class-transformer';
import { MasterProfileCreateOrConnectWithoutMasterServiceInput } from './master-profile-create-or-connect-without-master-service.input';
import { MasterProfileUpsertWithoutMasterServiceInput } from './master-profile-upsert-without-master-service.input';
import { Prisma } from '@prisma/client';
import { MasterProfileWhereUniqueInput } from './master-profile-where-unique.input';
import { MasterProfileUpdateWithoutMasterServiceInput } from './master-profile-update-without-master-service.input';

@InputType()
export class MasterProfileUpdateOneRequiredWithoutMasterServiceNestedInput {

    @Field(() => MasterProfileCreateWithoutMasterServiceInput, {nullable:true})
    @Type(() => MasterProfileCreateWithoutMasterServiceInput)
    create?: MasterProfileCreateWithoutMasterServiceInput;

    @Field(() => MasterProfileCreateOrConnectWithoutMasterServiceInput, {nullable:true})
    @Type(() => MasterProfileCreateOrConnectWithoutMasterServiceInput)
    connectOrCreate?: MasterProfileCreateOrConnectWithoutMasterServiceInput;

    @Field(() => MasterProfileUpsertWithoutMasterServiceInput, {nullable:true})
    @Type(() => MasterProfileUpsertWithoutMasterServiceInput)
    upsert?: MasterProfileUpsertWithoutMasterServiceInput;

    @Field(() => MasterProfileWhereUniqueInput, {nullable:true})
    @Type(() => MasterProfileWhereUniqueInput)
    connect?: Prisma.AtLeast<MasterProfileWhereUniqueInput, 'id'>;

    @Field(() => MasterProfileUpdateWithoutMasterServiceInput, {nullable:true})
    @Type(() => MasterProfileUpdateWithoutMasterServiceInput)
    update?: MasterProfileUpdateWithoutMasterServiceInput;
}
