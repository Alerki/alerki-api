import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_flowsScalarWhereInput } from './directus-flows-scalar-where.input';
import { Type } from 'class-transformer';
import { directus_flowsUpdateManyMutationInput } from './directus-flows-update-many-mutation.input';

@InputType()
export class directus_flowsUpdateManyWithWhereWithoutDirectus_usersInput {
  @Field(() => directus_flowsScalarWhereInput, { nullable: false })
  @Type(() => directus_flowsScalarWhereInput)
  where!: directus_flowsScalarWhereInput;

  @Field(() => directus_flowsUpdateManyMutationInput, { nullable: false })
  @Type(() => directus_flowsUpdateManyMutationInput)
  data!: directus_flowsUpdateManyMutationInput;
}
