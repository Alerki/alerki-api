import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MasterServiceCreateWithoutCurrencyInput } from './master-service-create-without-currency.input';
import { Type } from 'class-transformer';
import { MasterServiceCreateOrConnectWithoutCurrencyInput } from './master-service-create-or-connect-without-currency.input';
import { MasterServiceUpsertWithWhereUniqueWithoutCurrencyInput } from './master-service-upsert-with-where-unique-without-currency.input';
import { MasterServiceCreateManyCurrencyInputEnvelope } from './master-service-create-many-currency-input-envelope.input';
import { Prisma } from '@prisma/client';
import { MasterServiceWhereUniqueInput } from './master-service-where-unique.input';
import { MasterServiceUpdateWithWhereUniqueWithoutCurrencyInput } from './master-service-update-with-where-unique-without-currency.input';
import { MasterServiceUpdateManyWithWhereWithoutCurrencyInput } from './master-service-update-many-with-where-without-currency.input';
import { MasterServiceScalarWhereInput } from './master-service-scalar-where.input';

@InputType()
export class MasterServiceUncheckedUpdateManyWithoutCurrencyNestedInput {

    @Field(() => [MasterServiceCreateWithoutCurrencyInput], {nullable:true})
    @Type(() => MasterServiceCreateWithoutCurrencyInput)
    create?: Array<MasterServiceCreateWithoutCurrencyInput>;

    @Field(() => [MasterServiceCreateOrConnectWithoutCurrencyInput], {nullable:true})
    @Type(() => MasterServiceCreateOrConnectWithoutCurrencyInput)
    connectOrCreate?: Array<MasterServiceCreateOrConnectWithoutCurrencyInput>;

    @Field(() => [MasterServiceUpsertWithWhereUniqueWithoutCurrencyInput], {nullable:true})
    @Type(() => MasterServiceUpsertWithWhereUniqueWithoutCurrencyInput)
    upsert?: Array<MasterServiceUpsertWithWhereUniqueWithoutCurrencyInput>;

    @Field(() => MasterServiceCreateManyCurrencyInputEnvelope, {nullable:true})
    @Type(() => MasterServiceCreateManyCurrencyInputEnvelope)
    createMany?: MasterServiceCreateManyCurrencyInputEnvelope;

    @Field(() => [MasterServiceWhereUniqueInput], {nullable:true})
    @Type(() => MasterServiceWhereUniqueInput)
    set?: Array<Prisma.AtLeast<MasterServiceWhereUniqueInput, 'id'>>;

    @Field(() => [MasterServiceWhereUniqueInput], {nullable:true})
    @Type(() => MasterServiceWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<MasterServiceWhereUniqueInput, 'id'>>;

    @Field(() => [MasterServiceWhereUniqueInput], {nullable:true})
    @Type(() => MasterServiceWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<MasterServiceWhereUniqueInput, 'id'>>;

    @Field(() => [MasterServiceWhereUniqueInput], {nullable:true})
    @Type(() => MasterServiceWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<MasterServiceWhereUniqueInput, 'id'>>;

    @Field(() => [MasterServiceUpdateWithWhereUniqueWithoutCurrencyInput], {nullable:true})
    @Type(() => MasterServiceUpdateWithWhereUniqueWithoutCurrencyInput)
    update?: Array<MasterServiceUpdateWithWhereUniqueWithoutCurrencyInput>;

    @Field(() => [MasterServiceUpdateManyWithWhereWithoutCurrencyInput], {nullable:true})
    @Type(() => MasterServiceUpdateManyWithWhereWithoutCurrencyInput)
    updateMany?: Array<MasterServiceUpdateManyWithWhereWithoutCurrencyInput>;

    @Field(() => [MasterServiceScalarWhereInput], {nullable:true})
    @Type(() => MasterServiceScalarWhereInput)
    deleteMany?: Array<MasterServiceScalarWhereInput>;
}
