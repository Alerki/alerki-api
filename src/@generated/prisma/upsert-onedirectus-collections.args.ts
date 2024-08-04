import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_collectionsWhereUniqueInput } from '../directus-collections/directus-collections-where-unique.input';
import { Type } from 'class-transformer';
import { directus_collectionsCreateInput } from '../directus-collections/directus-collections-create.input';
import { directus_collectionsUpdateInput } from '../directus-collections/directus-collections-update.input';

@ArgsType()
export class UpsertOnedirectusCollectionsArgs {
  @Field(() => directus_collectionsWhereUniqueInput, { nullable: false })
  @Type(() => directus_collectionsWhereUniqueInput)
  where!: directus_collectionsWhereUniqueInput;

  @Field(() => directus_collectionsCreateInput, { nullable: false })
  @Type(() => directus_collectionsCreateInput)
  create!: directus_collectionsCreateInput;

  @Field(() => directus_collectionsUpdateInput, { nullable: false })
  @Type(() => directus_collectionsUpdateInput)
  update!: directus_collectionsUpdateInput;
}
