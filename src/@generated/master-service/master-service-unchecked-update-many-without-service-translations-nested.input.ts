import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MasterServiceCreateWithoutService_translationsInput } from './master-service-create-without-service-translations.input';
import { Type } from 'class-transformer';
import { MasterServiceCreateOrConnectWithoutService_translationsInput } from './master-service-create-or-connect-without-service-translations.input';
import { MasterServiceUpsertWithWhereUniqueWithoutService_translationsInput } from './master-service-upsert-with-where-unique-without-service-translations.input';
import { MasterServiceCreateManyService_translationsInputEnvelope } from './master-service-create-many-service-translations-input-envelope.input';
import { Prisma } from '@prisma/client';
import { MasterServiceWhereUniqueInput } from './master-service-where-unique.input';
import { MasterServiceUpdateWithWhereUniqueWithoutService_translationsInput } from './master-service-update-with-where-unique-without-service-translations.input';
import { MasterServiceUpdateManyWithWhereWithoutService_translationsInput } from './master-service-update-many-with-where-without-service-translations.input';
import { MasterServiceScalarWhereInput } from './master-service-scalar-where.input';

@InputType()
export class MasterServiceUncheckedUpdateManyWithoutService_translationsNestedInput {
  @Field(() => [MasterServiceCreateWithoutService_translationsInput], {
    nullable: true,
  })
  @Type(() => MasterServiceCreateWithoutService_translationsInput)
  create?: Array<MasterServiceCreateWithoutService_translationsInput>;

  @Field(() => [MasterServiceCreateOrConnectWithoutService_translationsInput], {
    nullable: true,
  })
  @Type(() => MasterServiceCreateOrConnectWithoutService_translationsInput)
  connectOrCreate?: Array<MasterServiceCreateOrConnectWithoutService_translationsInput>;

  @Field(
    () => [MasterServiceUpsertWithWhereUniqueWithoutService_translationsInput],
    { nullable: true },
  )
  @Type(
    () => MasterServiceUpsertWithWhereUniqueWithoutService_translationsInput,
  )
  upsert?: Array<MasterServiceUpsertWithWhereUniqueWithoutService_translationsInput>;

  @Field(() => MasterServiceCreateManyService_translationsInputEnvelope, {
    nullable: true,
  })
  @Type(() => MasterServiceCreateManyService_translationsInputEnvelope)
  createMany?: MasterServiceCreateManyService_translationsInputEnvelope;

  @Field(() => [MasterServiceWhereUniqueInput], { nullable: true })
  @Type(() => MasterServiceWhereUniqueInput)
  set?: Array<Prisma.AtLeast<MasterServiceWhereUniqueInput, 'id'>>;

  @Field(() => [MasterServiceWhereUniqueInput], { nullable: true })
  @Type(() => MasterServiceWhereUniqueInput)
  disconnect?: Array<Prisma.AtLeast<MasterServiceWhereUniqueInput, 'id'>>;

  @Field(() => [MasterServiceWhereUniqueInput], { nullable: true })
  @Type(() => MasterServiceWhereUniqueInput)
  delete?: Array<Prisma.AtLeast<MasterServiceWhereUniqueInput, 'id'>>;

  @Field(() => [MasterServiceWhereUniqueInput], { nullable: true })
  @Type(() => MasterServiceWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<MasterServiceWhereUniqueInput, 'id'>>;

  @Field(
    () => [MasterServiceUpdateWithWhereUniqueWithoutService_translationsInput],
    { nullable: true },
  )
  @Type(
    () => MasterServiceUpdateWithWhereUniqueWithoutService_translationsInput,
  )
  update?: Array<MasterServiceUpdateWithWhereUniqueWithoutService_translationsInput>;

  @Field(
    () => [MasterServiceUpdateManyWithWhereWithoutService_translationsInput],
    { nullable: true },
  )
  @Type(() => MasterServiceUpdateManyWithWhereWithoutService_translationsInput)
  updateMany?: Array<MasterServiceUpdateManyWithWhereWithoutService_translationsInput>;

  @Field(() => [MasterServiceScalarWhereInput], { nullable: true })
  @Type(() => MasterServiceScalarWhereInput)
  deleteMany?: Array<MasterServiceScalarWhereInput>;
}
