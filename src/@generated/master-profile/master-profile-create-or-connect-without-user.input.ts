import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { MasterProfileWhereUniqueInput } from './master-profile-where-unique.input';
import { Type } from 'class-transformer';
import { MasterProfileCreateWithoutUserInput } from './master-profile-create-without-user.input';

@InputType()
export class MasterProfileCreateOrConnectWithoutUserInput {

    @Field(() => MasterProfileWhereUniqueInput, {nullable:false})
    @Type(() => MasterProfileWhereUniqueInput)
    where!: Prisma.AtLeast<MasterProfileWhereUniqueInput, 'id'>;

    @Field(() => MasterProfileCreateWithoutUserInput, {nullable:false})
    @Type(() => MasterProfileCreateWithoutUserInput)
    create!: MasterProfileCreateWithoutUserInput;
}
