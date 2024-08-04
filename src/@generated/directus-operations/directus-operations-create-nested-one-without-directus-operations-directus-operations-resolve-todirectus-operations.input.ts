import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_operationsCreateWithoutDirectus_operations_directus_operations_resolveTodirectus_operationsInput } from './directus-operations-create-without-directus-operations-directus-operations-resolve-todirectus-operations.input';
import { Type } from 'class-transformer';
import { directus_operationsCreateOrConnectWithoutDirectus_operations_directus_operations_resolveTodirectus_operationsInput } from './directus-operations-create-or-connect-without-directus-operations-directus-operations-resolve-todirectus-operations.input';
import { Prisma } from '@prisma/client';
import { directus_operationsWhereUniqueInput } from './directus-operations-where-unique.input';

@InputType()
export class directus_operationsCreateNestedOneWithoutDirectus_operations_directus_operations_resolveTodirectus_operationsInput {
  @Field(
    () =>
      directus_operationsCreateWithoutDirectus_operations_directus_operations_resolveTodirectus_operationsInput,
    { nullable: true },
  )
  @Type(
    () =>
      directus_operationsCreateWithoutDirectus_operations_directus_operations_resolveTodirectus_operationsInput,
  )
  create?: directus_operationsCreateWithoutDirectus_operations_directus_operations_resolveTodirectus_operationsInput;

  @Field(
    () =>
      directus_operationsCreateOrConnectWithoutDirectus_operations_directus_operations_resolveTodirectus_operationsInput,
    { nullable: true },
  )
  @Type(
    () =>
      directus_operationsCreateOrConnectWithoutDirectus_operations_directus_operations_resolveTodirectus_operationsInput,
  )
  connectOrCreate?: directus_operationsCreateOrConnectWithoutDirectus_operations_directus_operations_resolveTodirectus_operationsInput;

  @Field(() => directus_operationsWhereUniqueInput, { nullable: true })
  @Type(() => directus_operationsWhereUniqueInput)
  connect?: Prisma.AtLeast<
    directus_operationsWhereUniqueInput,
    'id' | 'resolve' | 'reject'
  >;
}
