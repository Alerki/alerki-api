import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_collectionsCreateManyInput } from '../directus-collections/directus-collections-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManydirectusCollectionsArgs {
  @Field(() => [directus_collectionsCreateManyInput], { nullable: false })
  @Type(() => directus_collectionsCreateManyInput)
  data!: Array<directus_collectionsCreateManyInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
