import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_operationsScalarWhereInput } from './directus-operations-scalar-where.input';
import { Type } from 'class-transformer';
import { directus_operationsUpdateManyMutationInput } from './directus-operations-update-many-mutation.input';

@InputType()
export class directus_operationsUpdateManyWithWhereWithoutDirectus_usersInput {
  @Field(() => directus_operationsScalarWhereInput, { nullable: false })
  @Type(() => directus_operationsScalarWhereInput)
  where!: directus_operationsScalarWhereInput;

  @Field(() => directus_operationsUpdateManyMutationInput, { nullable: false })
  @Type(() => directus_operationsUpdateManyMutationInput)
  data!: directus_operationsUpdateManyMutationInput;
}
