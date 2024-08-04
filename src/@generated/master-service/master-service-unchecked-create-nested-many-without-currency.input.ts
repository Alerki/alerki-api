import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MasterServiceCreateWithoutCurrencyInput } from './master-service-create-without-currency.input';
import { Type } from 'class-transformer';
import { MasterServiceCreateOrConnectWithoutCurrencyInput } from './master-service-create-or-connect-without-currency.input';
import { MasterServiceCreateManyCurrencyInputEnvelope } from './master-service-create-many-currency-input-envelope.input';
import { Prisma } from '@prisma/client';
import { MasterServiceWhereUniqueInput } from './master-service-where-unique.input';

@InputType()
export class MasterServiceUncheckedCreateNestedManyWithoutCurrencyInput {
  @Field(() => [MasterServiceCreateWithoutCurrencyInput], { nullable: true })
  @Type(() => MasterServiceCreateWithoutCurrencyInput)
  create?: Array<MasterServiceCreateWithoutCurrencyInput>;

  @Field(() => [MasterServiceCreateOrConnectWithoutCurrencyInput], {
    nullable: true,
  })
  @Type(() => MasterServiceCreateOrConnectWithoutCurrencyInput)
  connectOrCreate?: Array<MasterServiceCreateOrConnectWithoutCurrencyInput>;

  @Field(() => MasterServiceCreateManyCurrencyInputEnvelope, { nullable: true })
  @Type(() => MasterServiceCreateManyCurrencyInputEnvelope)
  createMany?: MasterServiceCreateManyCurrencyInputEnvelope;

  @Field(() => [MasterServiceWhereUniqueInput], { nullable: true })
  @Type(() => MasterServiceWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<MasterServiceWhereUniqueInput, 'id'>>;
}
