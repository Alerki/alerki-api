import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_operationsUpdateWithoutDirectus_operations_directus_operations_resolveTodirectus_operationsInput } from './directus-operations-update-without-directus-operations-directus-operations-resolve-todirectus-operations.input';
import { Type } from 'class-transformer';
import { directus_operationsCreateWithoutDirectus_operations_directus_operations_resolveTodirectus_operationsInput } from './directus-operations-create-without-directus-operations-directus-operations-resolve-todirectus-operations.input';

@InputType()
export class directus_operationsUpsertWithoutDirectus_operations_directus_operations_resolveTodirectus_operationsInput {
  @Field(
    () =>
      directus_operationsUpdateWithoutDirectus_operations_directus_operations_resolveTodirectus_operationsInput,
    { nullable: false },
  )
  @Type(
    () =>
      directus_operationsUpdateWithoutDirectus_operations_directus_operations_resolveTodirectus_operationsInput,
  )
  update!: directus_operationsUpdateWithoutDirectus_operations_directus_operations_resolveTodirectus_operationsInput;

  @Field(
    () =>
      directus_operationsCreateWithoutDirectus_operations_directus_operations_resolveTodirectus_operationsInput,
    { nullable: false },
  )
  @Type(
    () =>
      directus_operationsCreateWithoutDirectus_operations_directus_operations_resolveTodirectus_operationsInput,
  )
  create!: directus_operationsCreateWithoutDirectus_operations_directus_operations_resolveTodirectus_operationsInput;
}
