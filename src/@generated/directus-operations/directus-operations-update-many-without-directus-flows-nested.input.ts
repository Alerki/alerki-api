import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_operationsCreateWithoutDirectus_flowsInput } from './directus-operations-create-without-directus-flows.input';
import { Type } from 'class-transformer';
import { directus_operationsCreateOrConnectWithoutDirectus_flowsInput } from './directus-operations-create-or-connect-without-directus-flows.input';
import { directus_operationsUpsertWithWhereUniqueWithoutDirectus_flowsInput } from './directus-operations-upsert-with-where-unique-without-directus-flows.input';
import { directus_operationsCreateManyDirectus_flowsInputEnvelope } from './directus-operations-create-many-directus-flows-input-envelope.input';
import { Prisma } from '@prisma/client';
import { directus_operationsWhereUniqueInput } from './directus-operations-where-unique.input';
import { directus_operationsUpdateWithWhereUniqueWithoutDirectus_flowsInput } from './directus-operations-update-with-where-unique-without-directus-flows.input';
import { directus_operationsUpdateManyWithWhereWithoutDirectus_flowsInput } from './directus-operations-update-many-with-where-without-directus-flows.input';
import { directus_operationsScalarWhereInput } from './directus-operations-scalar-where.input';

@InputType()
export class directus_operationsUpdateManyWithoutDirectus_flowsNestedInput {
  @Field(() => [directus_operationsCreateWithoutDirectus_flowsInput], {
    nullable: true,
  })
  @Type(() => directus_operationsCreateWithoutDirectus_flowsInput)
  create?: Array<directus_operationsCreateWithoutDirectus_flowsInput>;

  @Field(() => [directus_operationsCreateOrConnectWithoutDirectus_flowsInput], {
    nullable: true,
  })
  @Type(() => directus_operationsCreateOrConnectWithoutDirectus_flowsInput)
  connectOrCreate?: Array<directus_operationsCreateOrConnectWithoutDirectus_flowsInput>;

  @Field(
    () => [directus_operationsUpsertWithWhereUniqueWithoutDirectus_flowsInput],
    { nullable: true },
  )
  @Type(
    () => directus_operationsUpsertWithWhereUniqueWithoutDirectus_flowsInput,
  )
  upsert?: Array<directus_operationsUpsertWithWhereUniqueWithoutDirectus_flowsInput>;

  @Field(() => directus_operationsCreateManyDirectus_flowsInputEnvelope, {
    nullable: true,
  })
  @Type(() => directus_operationsCreateManyDirectus_flowsInputEnvelope)
  createMany?: directus_operationsCreateManyDirectus_flowsInputEnvelope;

  @Field(() => [directus_operationsWhereUniqueInput], { nullable: true })
  @Type(() => directus_operationsWhereUniqueInput)
  set?: Array<
    Prisma.AtLeast<
      directus_operationsWhereUniqueInput,
      'id' | 'resolve' | 'reject'
    >
  >;

  @Field(() => [directus_operationsWhereUniqueInput], { nullable: true })
  @Type(() => directus_operationsWhereUniqueInput)
  disconnect?: Array<
    Prisma.AtLeast<
      directus_operationsWhereUniqueInput,
      'id' | 'resolve' | 'reject'
    >
  >;

  @Field(() => [directus_operationsWhereUniqueInput], { nullable: true })
  @Type(() => directus_operationsWhereUniqueInput)
  delete?: Array<
    Prisma.AtLeast<
      directus_operationsWhereUniqueInput,
      'id' | 'resolve' | 'reject'
    >
  >;

  @Field(() => [directus_operationsWhereUniqueInput], { nullable: true })
  @Type(() => directus_operationsWhereUniqueInput)
  connect?: Array<
    Prisma.AtLeast<
      directus_operationsWhereUniqueInput,
      'id' | 'resolve' | 'reject'
    >
  >;

  @Field(
    () => [directus_operationsUpdateWithWhereUniqueWithoutDirectus_flowsInput],
    { nullable: true },
  )
  @Type(
    () => directus_operationsUpdateWithWhereUniqueWithoutDirectus_flowsInput,
  )
  update?: Array<directus_operationsUpdateWithWhereUniqueWithoutDirectus_flowsInput>;

  @Field(
    () => [directus_operationsUpdateManyWithWhereWithoutDirectus_flowsInput],
    { nullable: true },
  )
  @Type(() => directus_operationsUpdateManyWithWhereWithoutDirectus_flowsInput)
  updateMany?: Array<directus_operationsUpdateManyWithWhereWithoutDirectus_flowsInput>;

  @Field(() => [directus_operationsScalarWhereInput], { nullable: true })
  @Type(() => directus_operationsScalarWhereInput)
  deleteMany?: Array<directus_operationsScalarWhereInput>;
}
