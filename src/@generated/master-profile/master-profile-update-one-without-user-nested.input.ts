import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MasterProfileCreateWithoutUserInput } from './master-profile-create-without-user.input';
import { Type } from 'class-transformer';
import { MasterProfileCreateOrConnectWithoutUserInput } from './master-profile-create-or-connect-without-user.input';
import { MasterProfileUpsertWithoutUserInput } from './master-profile-upsert-without-user.input';
import { Prisma } from '@prisma/client';
import { MasterProfileWhereUniqueInput } from './master-profile-where-unique.input';
import { MasterProfileUpdateWithoutUserInput } from './master-profile-update-without-user.input';

@InputType()
export class MasterProfileUpdateOneWithoutUserNestedInput {

    @Field(() => MasterProfileCreateWithoutUserInput, {nullable:true})
    @Type(() => MasterProfileCreateWithoutUserInput)
    create?: MasterProfileCreateWithoutUserInput;

    @Field(() => MasterProfileCreateOrConnectWithoutUserInput, {nullable:true})
    @Type(() => MasterProfileCreateOrConnectWithoutUserInput)
    connectOrCreate?: MasterProfileCreateOrConnectWithoutUserInput;

    @Field(() => MasterProfileUpsertWithoutUserInput, {nullable:true})
    @Type(() => MasterProfileUpsertWithoutUserInput)
    upsert?: MasterProfileUpsertWithoutUserInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => MasterProfileWhereUniqueInput, {nullable:true})
    @Type(() => MasterProfileWhereUniqueInput)
    connect?: Prisma.AtLeast<MasterProfileWhereUniqueInput, 'id'>;

    @Field(() => MasterProfileUpdateWithoutUserInput, {nullable:true})
    @Type(() => MasterProfileUpdateWithoutUserInput)
    update?: MasterProfileUpdateWithoutUserInput;
}
