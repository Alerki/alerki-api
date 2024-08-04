import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_panelsScalarWhereInput } from './directus-panels-scalar-where.input';
import { Type } from 'class-transformer';
import { directus_panelsUpdateManyMutationInput } from './directus-panels-update-many-mutation.input';

@InputType()
export class directus_panelsUpdateManyWithWhereWithoutDirectus_usersInput {
  @Field(() => directus_panelsScalarWhereInput, { nullable: false })
  @Type(() => directus_panelsScalarWhereInput)
  where!: directus_panelsScalarWhereInput;

  @Field(() => directus_panelsUpdateManyMutationInput, { nullable: false })
  @Type(() => directus_panelsUpdateManyMutationInput)
  data!: directus_panelsUpdateManyMutationInput;
}
