import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_revisionsUpdateWithoutOther_directus_revisionsInput } from './directus-revisions-update-without-other-directus-revisions.input';
import { Type } from 'class-transformer';
import { directus_revisionsCreateWithoutOther_directus_revisionsInput } from './directus-revisions-create-without-other-directus-revisions.input';

@InputType()
export class directus_revisionsUpsertWithoutOther_directus_revisionsInput {
  @Field(() => directus_revisionsUpdateWithoutOther_directus_revisionsInput, {
    nullable: false,
  })
  @Type(() => directus_revisionsUpdateWithoutOther_directus_revisionsInput)
  update!: directus_revisionsUpdateWithoutOther_directus_revisionsInput;

  @Field(() => directus_revisionsCreateWithoutOther_directus_revisionsInput, {
    nullable: false,
  })
  @Type(() => directus_revisionsCreateWithoutOther_directus_revisionsInput)
  create!: directus_revisionsCreateWithoutOther_directus_revisionsInput;
}
