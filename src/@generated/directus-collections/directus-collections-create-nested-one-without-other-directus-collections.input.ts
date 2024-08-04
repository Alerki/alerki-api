import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_collectionsCreateWithoutOther_directus_collectionsInput } from './directus-collections-create-without-other-directus-collections.input';
import { Type } from 'class-transformer';
import { directus_collectionsCreateOrConnectWithoutOther_directus_collectionsInput } from './directus-collections-create-or-connect-without-other-directus-collections.input';
import { Prisma } from '@prisma/client';
import { directus_collectionsWhereUniqueInput } from './directus-collections-where-unique.input';

@InputType()
export class directus_collectionsCreateNestedOneWithoutOther_directus_collectionsInput {
  @Field(
    () => directus_collectionsCreateWithoutOther_directus_collectionsInput,
    { nullable: true },
  )
  @Type(() => directus_collectionsCreateWithoutOther_directus_collectionsInput)
  create?: directus_collectionsCreateWithoutOther_directus_collectionsInput;

  @Field(
    () =>
      directus_collectionsCreateOrConnectWithoutOther_directus_collectionsInput,
    { nullable: true },
  )
  @Type(
    () =>
      directus_collectionsCreateOrConnectWithoutOther_directus_collectionsInput,
  )
  connectOrCreate?: directus_collectionsCreateOrConnectWithoutOther_directus_collectionsInput;

  @Field(() => directus_collectionsWhereUniqueInput, { nullable: true })
  @Type(() => directus_collectionsWhereUniqueInput)
  connect?: Prisma.AtLeast<directus_collectionsWhereUniqueInput, 'collection'>;
}
