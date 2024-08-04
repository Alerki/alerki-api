import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { directus_collectionsWhereUniqueInput } from './directus-collections-where-unique.input';
import { Type } from 'class-transformer';
import { directus_collectionsUpdateWithoutDirectus_collectionsInput } from './directus-collections-update-without-directus-collections.input';

@InputType()
export class directus_collectionsUpdateWithWhereUniqueWithoutDirectus_collectionsInput {
  @Field(() => directus_collectionsWhereUniqueInput, { nullable: false })
  @Type(() => directus_collectionsWhereUniqueInput)
  where!: Prisma.AtLeast<directus_collectionsWhereUniqueInput, 'collection'>;

  @Field(() => directus_collectionsUpdateWithoutDirectus_collectionsInput, {
    nullable: false,
  })
  @Type(() => directus_collectionsUpdateWithoutDirectus_collectionsInput)
  data!: directus_collectionsUpdateWithoutDirectus_collectionsInput;
}
