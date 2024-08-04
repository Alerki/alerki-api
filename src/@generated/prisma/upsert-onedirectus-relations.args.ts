import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_relationsWhereUniqueInput } from '../directus-relations/directus-relations-where-unique.input';
import { Type } from 'class-transformer';
import { directus_relationsCreateInput } from '../directus-relations/directus-relations-create.input';
import { directus_relationsUpdateInput } from '../directus-relations/directus-relations-update.input';

@ArgsType()
export class UpsertOnedirectusRelationsArgs {
  @Field(() => directus_relationsWhereUniqueInput, { nullable: false })
  @Type(() => directus_relationsWhereUniqueInput)
  where!: directus_relationsWhereUniqueInput;

  @Field(() => directus_relationsCreateInput, { nullable: false })
  @Type(() => directus_relationsCreateInput)
  create!: directus_relationsCreateInput;

  @Field(() => directus_relationsUpdateInput, { nullable: false })
  @Type(() => directus_relationsUpdateInput)
  update!: directus_relationsUpdateInput;
}
