import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MasterProfileUpdateInput } from './master-profile-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { MasterProfileWhereUniqueInput } from './master-profile-where-unique.input';

@ArgsType()
export class UpdateOneMasterProfileArgs {

    @Field(() => MasterProfileUpdateInput, {nullable:false})
    @Type(() => MasterProfileUpdateInput)
    data!: MasterProfileUpdateInput;

    @Field(() => MasterProfileWhereUniqueInput, {nullable:false})
    @Type(() => MasterProfileWhereUniqueInput)
    where!: Prisma.AtLeast<MasterProfileWhereUniqueInput, 'id'>;
}
