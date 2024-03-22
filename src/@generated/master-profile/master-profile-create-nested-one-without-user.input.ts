import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MasterProfileCreateWithoutUserInput } from './master-profile-create-without-user.input';
import { Type } from 'class-transformer';
import { MasterProfileCreateOrConnectWithoutUserInput } from './master-profile-create-or-connect-without-user.input';
import { Prisma } from '@prisma/client';
import { MasterProfileWhereUniqueInput } from './master-profile-where-unique.input';

@InputType()
export class MasterProfileCreateNestedOneWithoutUserInput {

    @Field(() => MasterProfileCreateWithoutUserInput, {nullable:true})
    @Type(() => MasterProfileCreateWithoutUserInput)
    create?: MasterProfileCreateWithoutUserInput;

    @Field(() => MasterProfileCreateOrConnectWithoutUserInput, {nullable:true})
    @Type(() => MasterProfileCreateOrConnectWithoutUserInput)
    connectOrCreate?: MasterProfileCreateOrConnectWithoutUserInput;

    @Field(() => MasterProfileWhereUniqueInput, {nullable:true})
    @Type(() => MasterProfileWhereUniqueInput)
    connect?: Prisma.AtLeast<MasterProfileWhereUniqueInput, 'id'>;
}
