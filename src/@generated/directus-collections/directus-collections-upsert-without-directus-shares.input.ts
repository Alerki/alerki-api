import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_collectionsUpdateWithoutDirectus_sharesInput } from './directus-collections-update-without-directus-shares.input';
import { Type } from 'class-transformer';
import { directus_collectionsCreateWithoutDirectus_sharesInput } from './directus-collections-create-without-directus-shares.input';

@InputType()
export class directus_collectionsUpsertWithoutDirectus_sharesInput {
  @Field(() => directus_collectionsUpdateWithoutDirectus_sharesInput, {
    nullable: false,
  })
  @Type(() => directus_collectionsUpdateWithoutDirectus_sharesInput)
  update!: directus_collectionsUpdateWithoutDirectus_sharesInput;

  @Field(() => directus_collectionsCreateWithoutDirectus_sharesInput, {
    nullable: false,
  })
  @Type(() => directus_collectionsCreateWithoutDirectus_sharesInput)
  create!: directus_collectionsCreateWithoutDirectus_sharesInput;
}
