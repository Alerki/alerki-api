import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { directus_versionsWhereUniqueInput } from './directus-versions-where-unique.input';
import { Type } from 'class-transformer';
import { directus_versionsUpdateWithoutDirectus_collectionsInput } from './directus-versions-update-without-directus-collections.input';
import { directus_versionsCreateWithoutDirectus_collectionsInput } from './directus-versions-create-without-directus-collections.input';

@InputType()
export class directus_versionsUpsertWithWhereUniqueWithoutDirectus_collectionsInput {
  @Field(() => directus_versionsWhereUniqueInput, { nullable: false })
  @Type(() => directus_versionsWhereUniqueInput)
  where!: Prisma.AtLeast<directus_versionsWhereUniqueInput, 'id'>;

  @Field(() => directus_versionsUpdateWithoutDirectus_collectionsInput, {
    nullable: false,
  })
  @Type(() => directus_versionsUpdateWithoutDirectus_collectionsInput)
  update!: directus_versionsUpdateWithoutDirectus_collectionsInput;

  @Field(() => directus_versionsCreateWithoutDirectus_collectionsInput, {
    nullable: false,
  })
  @Type(() => directus_versionsCreateWithoutDirectus_collectionsInput)
  create!: directus_versionsCreateWithoutDirectus_collectionsInput;
}
