import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_operationsCreateWithoutDirectus_flowsInput } from './directus-operations-create-without-directus-flows.input';
import { Type } from 'class-transformer';
import { directus_operationsCreateOrConnectWithoutDirectus_flowsInput } from './directus-operations-create-or-connect-without-directus-flows.input';
import { directus_operationsCreateManyDirectus_flowsInputEnvelope } from './directus-operations-create-many-directus-flows-input-envelope.input';
import { Prisma } from '@prisma/client';
import { directus_operationsWhereUniqueInput } from './directus-operations-where-unique.input';

@InputType()
export class directus_operationsCreateNestedManyWithoutDirectus_flowsInput {
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

  @Field(() => directus_operationsCreateManyDirectus_flowsInputEnvelope, {
    nullable: true,
  })
  @Type(() => directus_operationsCreateManyDirectus_flowsInputEnvelope)
  createMany?: directus_operationsCreateManyDirectus_flowsInputEnvelope;

  @Field(() => [directus_operationsWhereUniqueInput], { nullable: true })
  @Type(() => directus_operationsWhereUniqueInput)
  connect?: Array<
    Prisma.AtLeast<
      directus_operationsWhereUniqueInput,
      'id' | 'resolve' | 'reject'
    >
  >;
}
