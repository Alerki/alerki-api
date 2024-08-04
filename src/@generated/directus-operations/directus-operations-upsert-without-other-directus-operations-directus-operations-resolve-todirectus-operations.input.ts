import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_operationsUpdateWithoutOther_directus_operations_directus_operations_resolveTodirectus_operationsInput } from './directus-operations-update-without-other-directus-operations-directus-operations-resolve-todirectus-operations.input';
import { Type } from 'class-transformer';
import { directus_operationsCreateWithoutOther_directus_operations_directus_operations_resolveTodirectus_operationsInput } from './directus-operations-create-without-other-directus-operations-directus-operations-resolve-todirectus-operations.input';

@InputType()
export class directus_operationsUpsertWithoutOther_directus_operations_directus_operations_resolveTodirectus_operationsInput {
  @Field(
    () =>
      directus_operationsUpdateWithoutOther_directus_operations_directus_operations_resolveTodirectus_operationsInput,
    { nullable: false },
  )
  @Type(
    () =>
      directus_operationsUpdateWithoutOther_directus_operations_directus_operations_resolveTodirectus_operationsInput,
  )
  update!: directus_operationsUpdateWithoutOther_directus_operations_directus_operations_resolveTodirectus_operationsInput;

  @Field(
    () =>
      directus_operationsCreateWithoutOther_directus_operations_directus_operations_resolveTodirectus_operationsInput,
    { nullable: false },
  )
  @Type(
    () =>
      directus_operationsCreateWithoutOther_directus_operations_directus_operations_resolveTodirectus_operationsInput,
  )
  create!: directus_operationsCreateWithoutOther_directus_operations_directus_operations_resolveTodirectus_operationsInput;
}
