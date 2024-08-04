import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_collectionsCreateWithoutDirectus_sharesInput } from './directus-collections-create-without-directus-shares.input';
import { Type } from 'class-transformer';
import { directus_collectionsCreateOrConnectWithoutDirectus_sharesInput } from './directus-collections-create-or-connect-without-directus-shares.input';
import { Prisma } from '@prisma/client';
import { directus_collectionsWhereUniqueInput } from './directus-collections-where-unique.input';

@InputType()
export class directus_collectionsCreateNestedOneWithoutDirectus_sharesInput {
  @Field(() => directus_collectionsCreateWithoutDirectus_sharesInput, {
    nullable: true,
  })
  @Type(() => directus_collectionsCreateWithoutDirectus_sharesInput)
  create?: directus_collectionsCreateWithoutDirectus_sharesInput;

  @Field(() => directus_collectionsCreateOrConnectWithoutDirectus_sharesInput, {
    nullable: true,
  })
  @Type(() => directus_collectionsCreateOrConnectWithoutDirectus_sharesInput)
  connectOrCreate?: directus_collectionsCreateOrConnectWithoutDirectus_sharesInput;

  @Field(() => directus_collectionsWhereUniqueInput, { nullable: true })
  @Type(() => directus_collectionsWhereUniqueInput)
  connect?: Prisma.AtLeast<directus_collectionsWhereUniqueInput, 'collection'>;
}
