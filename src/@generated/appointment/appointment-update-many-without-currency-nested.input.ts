import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AppointmentCreateWithoutCurrencyInput } from './appointment-create-without-currency.input';
import { Type } from 'class-transformer';
import { AppointmentCreateOrConnectWithoutCurrencyInput } from './appointment-create-or-connect-without-currency.input';
import { AppointmentUpsertWithWhereUniqueWithoutCurrencyInput } from './appointment-upsert-with-where-unique-without-currency.input';
import { AppointmentCreateManyCurrencyInputEnvelope } from './appointment-create-many-currency-input-envelope.input';
import { Prisma } from '@prisma/client';
import { AppointmentWhereUniqueInput } from './appointment-where-unique.input';
import { AppointmentUpdateWithWhereUniqueWithoutCurrencyInput } from './appointment-update-with-where-unique-without-currency.input';
import { AppointmentUpdateManyWithWhereWithoutCurrencyInput } from './appointment-update-many-with-where-without-currency.input';
import { AppointmentScalarWhereInput } from './appointment-scalar-where.input';

@InputType()
export class AppointmentUpdateManyWithoutCurrencyNestedInput {
  @Field(() => [AppointmentCreateWithoutCurrencyInput], { nullable: true })
  @Type(() => AppointmentCreateWithoutCurrencyInput)
  create?: Array<AppointmentCreateWithoutCurrencyInput>;

  @Field(() => [AppointmentCreateOrConnectWithoutCurrencyInput], {
    nullable: true,
  })
  @Type(() => AppointmentCreateOrConnectWithoutCurrencyInput)
  connectOrCreate?: Array<AppointmentCreateOrConnectWithoutCurrencyInput>;

  @Field(() => [AppointmentUpsertWithWhereUniqueWithoutCurrencyInput], {
    nullable: true,
  })
  @Type(() => AppointmentUpsertWithWhereUniqueWithoutCurrencyInput)
  upsert?: Array<AppointmentUpsertWithWhereUniqueWithoutCurrencyInput>;

  @Field(() => AppointmentCreateManyCurrencyInputEnvelope, { nullable: true })
  @Type(() => AppointmentCreateManyCurrencyInputEnvelope)
  createMany?: AppointmentCreateManyCurrencyInputEnvelope;

  @Field(() => [AppointmentWhereUniqueInput], { nullable: true })
  @Type(() => AppointmentWhereUniqueInput)
  set?: Array<Prisma.AtLeast<AppointmentWhereUniqueInput, 'id'>>;

  @Field(() => [AppointmentWhereUniqueInput], { nullable: true })
  @Type(() => AppointmentWhereUniqueInput)
  disconnect?: Array<Prisma.AtLeast<AppointmentWhereUniqueInput, 'id'>>;

  @Field(() => [AppointmentWhereUniqueInput], { nullable: true })
  @Type(() => AppointmentWhereUniqueInput)
  delete?: Array<Prisma.AtLeast<AppointmentWhereUniqueInput, 'id'>>;

  @Field(() => [AppointmentWhereUniqueInput], { nullable: true })
  @Type(() => AppointmentWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<AppointmentWhereUniqueInput, 'id'>>;

  @Field(() => [AppointmentUpdateWithWhereUniqueWithoutCurrencyInput], {
    nullable: true,
  })
  @Type(() => AppointmentUpdateWithWhereUniqueWithoutCurrencyInput)
  update?: Array<AppointmentUpdateWithWhereUniqueWithoutCurrencyInput>;

  @Field(() => [AppointmentUpdateManyWithWhereWithoutCurrencyInput], {
    nullable: true,
  })
  @Type(() => AppointmentUpdateManyWithWhereWithoutCurrencyInput)
  updateMany?: Array<AppointmentUpdateManyWithWhereWithoutCurrencyInput>;

  @Field(() => [AppointmentScalarWhereInput], { nullable: true })
  @Type(() => AppointmentScalarWhereInput)
  deleteMany?: Array<AppointmentScalarWhereInput>;
}
