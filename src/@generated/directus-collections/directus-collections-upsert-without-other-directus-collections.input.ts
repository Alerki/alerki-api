import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_collectionsUpdateWithoutOther_directus_collectionsInput } from './directus-collections-update-without-other-directus-collections.input';
import { Type } from 'class-transformer';
import { directus_collectionsCreateWithoutOther_directus_collectionsInput } from './directus-collections-create-without-other-directus-collections.input';

@InputType()
export class directus_collectionsUpsertWithoutOther_directus_collectionsInput {
  @Field(
    () => directus_collectionsUpdateWithoutOther_directus_collectionsInput,
    { nullable: false },
  )
  @Type(() => directus_collectionsUpdateWithoutOther_directus_collectionsInput)
  update!: directus_collectionsUpdateWithoutOther_directus_collectionsInput;

  @Field(
    () => directus_collectionsCreateWithoutOther_directus_collectionsInput,
    { nullable: false },
  )
  @Type(() => directus_collectionsCreateWithoutOther_directus_collectionsInput)
  create!: directus_collectionsCreateWithoutOther_directus_collectionsInput;
}
