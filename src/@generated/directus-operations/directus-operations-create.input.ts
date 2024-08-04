import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { directus_flowsCreateNestedOneWithoutDirectus_operationsInput } from '../directus-flows/directus-flows-create-nested-one-without-directus-operations.input';
import { directus_operationsCreateNestedOneWithoutOther_directus_operations_directus_operations_rejectTodirectus_operationsInput } from './directus-operations-create-nested-one-without-other-directus-operations-directus-operations-reject-todirectus-operations.input';
import { directus_operationsCreateNestedOneWithoutDirectus_operations_directus_operations_rejectTodirectus_operationsInput } from './directus-operations-create-nested-one-without-directus-operations-directus-operations-reject-todirectus-operations.input';
import { directus_operationsCreateNestedOneWithoutOther_directus_operations_directus_operations_resolveTodirectus_operationsInput } from './directus-operations-create-nested-one-without-other-directus-operations-directus-operations-resolve-todirectus-operations.input';
import { directus_operationsCreateNestedOneWithoutDirectus_operations_directus_operations_resolveTodirectus_operationsInput } from './directus-operations-create-nested-one-without-directus-operations-directus-operations-resolve-todirectus-operations.input';
import { directus_usersCreateNestedOneWithoutDirectus_operationsInput } from '../directus-users/directus-users-create-nested-one-without-directus-operations.input';

@InputType()
export class directus_operationsCreateInput {
  @Field(() => String, { nullable: false })
  id!: string;

  @Field(() => String, { nullable: true })
  name?: string;

  @Field(() => String, { nullable: false })
  key!: string;

  @Field(() => String, { nullable: false })
  type!: string;

  @Field(() => Int, { nullable: false })
  position_x!: number;

  @Field(() => Int, { nullable: false })
  position_y!: number;

  @Field(() => GraphQLJSON, { nullable: true })
  options?: any;

  @Field(() => Date, { nullable: true })
  date_created?: Date | string;

  @Field(() => directus_flowsCreateNestedOneWithoutDirectus_operationsInput, {
    nullable: false,
  })
  directus_flows!: directus_flowsCreateNestedOneWithoutDirectus_operationsInput;

  @Field(
    () =>
      directus_operationsCreateNestedOneWithoutOther_directus_operations_directus_operations_rejectTodirectus_operationsInput,
    { nullable: true },
  )
  directus_operations_directus_operations_rejectTodirectus_operations?: directus_operationsCreateNestedOneWithoutOther_directus_operations_directus_operations_rejectTodirectus_operationsInput;

  @Field(
    () =>
      directus_operationsCreateNestedOneWithoutDirectus_operations_directus_operations_rejectTodirectus_operationsInput,
    { nullable: true },
  )
  other_directus_operations_directus_operations_rejectTodirectus_operations?: directus_operationsCreateNestedOneWithoutDirectus_operations_directus_operations_rejectTodirectus_operationsInput;

  @Field(
    () =>
      directus_operationsCreateNestedOneWithoutOther_directus_operations_directus_operations_resolveTodirectus_operationsInput,
    { nullable: true },
  )
  directus_operations_directus_operations_resolveTodirectus_operations?: directus_operationsCreateNestedOneWithoutOther_directus_operations_directus_operations_resolveTodirectus_operationsInput;

  @Field(
    () =>
      directus_operationsCreateNestedOneWithoutDirectus_operations_directus_operations_resolveTodirectus_operationsInput,
    { nullable: true },
  )
  other_directus_operations_directus_operations_resolveTodirectus_operations?: directus_operationsCreateNestedOneWithoutDirectus_operations_directus_operations_resolveTodirectus_operationsInput;

  @Field(() => directus_usersCreateNestedOneWithoutDirectus_operationsInput, {
    nullable: true,
  })
  directus_users?: directus_usersCreateNestedOneWithoutDirectus_operationsInput;
}
