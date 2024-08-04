import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_collectionsUpdateInput } from '../directus-collections/directus-collections-update.input';
import { Type } from 'class-transformer';
import { directus_collectionsWhereUniqueInput } from '../directus-collections/directus-collections-where-unique.input';

@ArgsType()
export class UpdateOnedirectusCollectionsArgs {
  @Field(() => directus_collectionsUpdateInput, { nullable: false })
  @Type(() => directus_collectionsUpdateInput)
  data!: directus_collectionsUpdateInput;

  @Field(() => directus_collectionsWhereUniqueInput, { nullable: false })
  @Type(() => directus_collectionsWhereUniqueInput)
  where!: directus_collectionsWhereUniqueInput;
}
