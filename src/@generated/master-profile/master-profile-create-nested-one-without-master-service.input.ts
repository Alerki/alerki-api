import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MasterProfileCreateWithoutMasterServiceInput } from './master-profile-create-without-master-service.input';
import { Type } from 'class-transformer';
import { MasterProfileCreateOrConnectWithoutMasterServiceInput } from './master-profile-create-or-connect-without-master-service.input';
import { Prisma } from '@prisma/client';
import { MasterProfileWhereUniqueInput } from './master-profile-where-unique.input';

@InputType()
export class MasterProfileCreateNestedOneWithoutMasterServiceInput {

    @Field(() => MasterProfileCreateWithoutMasterServiceInput, {nullable:true})
    @Type(() => MasterProfileCreateWithoutMasterServiceInput)
    create?: MasterProfileCreateWithoutMasterServiceInput;

    @Field(() => MasterProfileCreateOrConnectWithoutMasterServiceInput, {nullable:true})
    @Type(() => MasterProfileCreateOrConnectWithoutMasterServiceInput)
    connectOrCreate?: MasterProfileCreateOrConnectWithoutMasterServiceInput;

    @Field(() => MasterProfileWhereUniqueInput, {nullable:true})
    @Type(() => MasterProfileWhereUniqueInput)
    connect?: Prisma.AtLeast<MasterProfileWhereUniqueInput, 'id'>;
}
