import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_operationsCreateWithoutOther_directus_operations_directus_operations_rejectTodirectus_operationsInput } from './directus-operations-create-without-other-directus-operations-directus-operations-reject-todirectus-operations.input';
import { Type } from 'class-transformer';
import { directus_operationsCreateOrConnectWithoutOther_directus_operations_directus_operations_rejectTodirectus_operationsInput } from './directus-operations-create-or-connect-without-other-directus-operations-directus-operations-reject-todirectus-operations.input';
import { Prisma } from '@prisma/client';
import { directus_operationsWhereUniqueInput } from './directus-operations-where-unique.input';

@InputType()
export class directus_operationsCreateNestedOneWithoutOther_directus_operations_directus_operations_rejectTodirectus_operationsInput {
  @Field(
    () =>
      directus_operationsCreateWithoutOther_directus_operations_directus_operations_rejectTodirectus_operationsInput,
    { nullable: true },
  )
  @Type(
    () =>
      directus_operationsCreateWithoutOther_directus_operations_directus_operations_rejectTodirectus_operationsInput,
  )
  create?: directus_operationsCreateWithoutOther_directus_operations_directus_operations_rejectTodirectus_operationsInput;

  @Field(
    () =>
      directus_operationsCreateOrConnectWithoutOther_directus_operations_directus_operations_rejectTodirectus_operationsInput,
    { nullable: true },
  )
  @Type(
    () =>
      directus_operationsCreateOrConnectWithoutOther_directus_operations_directus_operations_rejectTodirectus_operationsInput,
  )
  connectOrCreate?: directus_operationsCreateOrConnectWithoutOther_directus_operations_directus_operations_rejectTodirectus_operationsInput;

  @Field(() => directus_operationsWhereUniqueInput, { nullable: true })
  @Type(() => directus_operationsWhereUniqueInput)
  connect?: Prisma.AtLeast<
    directus_operationsWhereUniqueInput,
    'id' | 'resolve' | 'reject'
  >;
}
