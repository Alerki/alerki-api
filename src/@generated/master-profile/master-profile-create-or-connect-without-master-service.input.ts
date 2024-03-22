import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { MasterProfileWhereUniqueInput } from './master-profile-where-unique.input';
import { Type } from 'class-transformer';
import { MasterProfileCreateWithoutMasterServiceInput } from './master-profile-create-without-master-service.input';

@InputType()
export class MasterProfileCreateOrConnectWithoutMasterServiceInput {

    @Field(() => MasterProfileWhereUniqueInput, {nullable:false})
    @Type(() => MasterProfileWhereUniqueInput)
    where!: Prisma.AtLeast<MasterProfileWhereUniqueInput, 'id'>;

    @Field(() => MasterProfileCreateWithoutMasterServiceInput, {nullable:false})
    @Type(() => MasterProfileCreateWithoutMasterServiceInput)
    create!: MasterProfileCreateWithoutMasterServiceInput;
}
