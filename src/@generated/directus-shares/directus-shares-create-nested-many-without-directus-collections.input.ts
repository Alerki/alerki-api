import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_sharesCreateWithoutDirectus_collectionsInput } from './directus-shares-create-without-directus-collections.input';
import { Type } from 'class-transformer';
import { directus_sharesCreateOrConnectWithoutDirectus_collectionsInput } from './directus-shares-create-or-connect-without-directus-collections.input';
import { directus_sharesCreateManyDirectus_collectionsInputEnvelope } from './directus-shares-create-many-directus-collections-input-envelope.input';
import { Prisma } from '@prisma/client';
import { directus_sharesWhereUniqueInput } from './directus-shares-where-unique.input';

@InputType()
export class directus_sharesCreateNestedManyWithoutDirectus_collectionsInput {
  @Field(() => [directus_sharesCreateWithoutDirectus_collectionsInput], {
    nullable: true,
  })
  @Type(() => directus_sharesCreateWithoutDirectus_collectionsInput)
  create?: Array<directus_sharesCreateWithoutDirectus_collectionsInput>;

  @Field(
    () => [directus_sharesCreateOrConnectWithoutDirectus_collectionsInput],
    { nullable: true },
  )
  @Type(() => directus_sharesCreateOrConnectWithoutDirectus_collectionsInput)
  connectOrCreate?: Array<directus_sharesCreateOrConnectWithoutDirectus_collectionsInput>;

  @Field(() => directus_sharesCreateManyDirectus_collectionsInputEnvelope, {
    nullable: true,
  })
  @Type(() => directus_sharesCreateManyDirectus_collectionsInputEnvelope)
  createMany?: directus_sharesCreateManyDirectus_collectionsInputEnvelope;

  @Field(() => [directus_sharesWhereUniqueInput], { nullable: true })
  @Type(() => directus_sharesWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<directus_sharesWhereUniqueInput, 'id'>>;
}
