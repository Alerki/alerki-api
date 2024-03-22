import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { MasterServiceWhereUniqueInput } from './master-service-where-unique.input';
import { Type } from 'class-transformer';
import { MasterServiceCreateWithoutCurrencyInput } from './master-service-create-without-currency.input';

@InputType()
export class MasterServiceCreateOrConnectWithoutCurrencyInput {

    @Field(() => MasterServiceWhereUniqueInput, {nullable:false})
    @Type(() => MasterServiceWhereUniqueInput)
    where!: Prisma.AtLeast<MasterServiceWhereUniqueInput, 'id'>;

    @Field(() => MasterServiceCreateWithoutCurrencyInput, {nullable:false})
    @Type(() => MasterServiceCreateWithoutCurrencyInput)
    create!: MasterServiceCreateWithoutCurrencyInput;
}
