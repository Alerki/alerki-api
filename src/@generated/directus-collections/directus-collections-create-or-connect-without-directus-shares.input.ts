import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { directus_collectionsWhereUniqueInput } from './directus-collections-where-unique.input';
import { Type } from 'class-transformer';
import { directus_collectionsCreateWithoutDirectus_sharesInput } from './directus-collections-create-without-directus-shares.input';

@InputType()
export class directus_collectionsCreateOrConnectWithoutDirectus_sharesInput {
  @Field(() => directus_collectionsWhereUniqueInput, { nullable: false })
  @Type(() => directus_collectionsWhereUniqueInput)
  where!: Prisma.AtLeast<directus_collectionsWhereUniqueInput, 'collection'>;

  @Field(() => directus_collectionsCreateWithoutDirectus_sharesInput, {
    nullable: false,
  })
  @Type(() => directus_collectionsCreateWithoutDirectus_sharesInput)
  create!: directus_collectionsCreateWithoutDirectus_sharesInput;
}
