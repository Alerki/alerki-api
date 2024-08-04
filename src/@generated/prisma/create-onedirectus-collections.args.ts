import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_collectionsCreateInput } from '../directus-collections/directus-collections-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnedirectusCollectionsArgs {
  @Field(() => directus_collectionsCreateInput, { nullable: false })
  @Type(() => directus_collectionsCreateInput)
  data!: directus_collectionsCreateInput;
}
