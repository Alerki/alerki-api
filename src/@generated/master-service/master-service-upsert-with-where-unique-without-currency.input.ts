import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { MasterServiceWhereUniqueInput } from './master-service-where-unique.input';
import { Type } from 'class-transformer';
import { MasterServiceUpdateWithoutCurrencyInput } from './master-service-update-without-currency.input';
import { MasterServiceCreateWithoutCurrencyInput } from './master-service-create-without-currency.input';

@InputType()
export class MasterServiceUpsertWithWhereUniqueWithoutCurrencyInput {

    @Field(() => MasterServiceWhereUniqueInput, {nullable:false})
    @Type(() => MasterServiceWhereUniqueInput)
    where!: Prisma.AtLeast<MasterServiceWhereUniqueInput, 'id'>;

    @Field(() => MasterServiceUpdateWithoutCurrencyInput, {nullable:false})
    @Type(() => MasterServiceUpdateWithoutCurrencyInput)
    update!: MasterServiceUpdateWithoutCurrencyInput;

    @Field(() => MasterServiceCreateWithoutCurrencyInput, {nullable:false})
    @Type(() => MasterServiceCreateWithoutCurrencyInput)
    create!: MasterServiceCreateWithoutCurrencyInput;
}
