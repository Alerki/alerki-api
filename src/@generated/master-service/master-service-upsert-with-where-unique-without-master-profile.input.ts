import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { MasterServiceWhereUniqueInput } from './master-service-where-unique.input';
import { Type } from 'class-transformer';
import { MasterServiceUpdateWithoutMasterProfileInput } from './master-service-update-without-master-profile.input';
import { MasterServiceCreateWithoutMasterProfileInput } from './master-service-create-without-master-profile.input';

@InputType()
export class MasterServiceUpsertWithWhereUniqueWithoutMasterProfileInput {

    @Field(() => MasterServiceWhereUniqueInput, {nullable:false})
    @Type(() => MasterServiceWhereUniqueInput)
    where!: Prisma.AtLeast<MasterServiceWhereUniqueInput, 'id'>;

    @Field(() => MasterServiceUpdateWithoutMasterProfileInput, {nullable:false})
    @Type(() => MasterServiceUpdateWithoutMasterProfileInput)
    update!: MasterServiceUpdateWithoutMasterProfileInput;

    @Field(() => MasterServiceCreateWithoutMasterProfileInput, {nullable:false})
    @Type(() => MasterServiceCreateWithoutMasterProfileInput)
    create!: MasterServiceCreateWithoutMasterProfileInput;
}
