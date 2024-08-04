import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { directus_collectionsWhereUniqueInput } from './directus-collections-where-unique.input';
import { Type } from 'class-transformer';
import { directus_collectionsUpdateWithoutDirectus_collectionsInput } from './directus-collections-update-without-directus-collections.input';
import { directus_collectionsCreateWithoutDirectus_collectionsInput } from './directus-collections-create-without-directus-collections.input';

@InputType()
export class directus_collectionsUpsertWithWhereUniqueWithoutDirectus_collectionsInput {
  @Field(() => directus_collectionsWhereUniqueInput, { nullable: false })
  @Type(() => directus_collectionsWhereUniqueInput)
  where!: Prisma.AtLeast<directus_collectionsWhereUniqueInput, 'collection'>;

  @Field(() => directus_collectionsUpdateWithoutDirectus_collectionsInput, {
    nullable: false,
  })
  @Type(() => directus_collectionsUpdateWithoutDirectus_collectionsInput)
  update!: directus_collectionsUpdateWithoutDirectus_collectionsInput;

  @Field(() => directus_collectionsCreateWithoutDirectus_collectionsInput, {
    nullable: false,
  })
  @Type(() => directus_collectionsCreateWithoutDirectus_collectionsInput)
  create!: directus_collectionsCreateWithoutDirectus_collectionsInput;
}
