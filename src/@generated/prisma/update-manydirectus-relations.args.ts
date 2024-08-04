import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_relationsUpdateManyMutationInput } from '../directus-relations/directus-relations-update-many-mutation.input';
import { Type } from 'class-transformer';
import { directus_relationsWhereInput } from '../directus-relations/directus-relations-where.input';

@ArgsType()
export class UpdateManydirectusRelationsArgs {
  @Field(() => directus_relationsUpdateManyMutationInput, { nullable: false })
  @Type(() => directus_relationsUpdateManyMutationInput)
  data!: directus_relationsUpdateManyMutationInput;

  @Field(() => directus_relationsWhereInput, { nullable: true })
  @Type(() => directus_relationsWhereInput)
  where?: directus_relationsWhereInput;
}
