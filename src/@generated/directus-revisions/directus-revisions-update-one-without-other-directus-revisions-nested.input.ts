import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_revisionsCreateWithoutOther_directus_revisionsInput } from './directus-revisions-create-without-other-directus-revisions.input';
import { Type } from 'class-transformer';
import { directus_revisionsCreateOrConnectWithoutOther_directus_revisionsInput } from './directus-revisions-create-or-connect-without-other-directus-revisions.input';
import { directus_revisionsUpsertWithoutOther_directus_revisionsInput } from './directus-revisions-upsert-without-other-directus-revisions.input';
import { Prisma } from '@prisma/client';
import { directus_revisionsWhereUniqueInput } from './directus-revisions-where-unique.input';
import { directus_revisionsUpdateWithoutOther_directus_revisionsInput } from './directus-revisions-update-without-other-directus-revisions.input';

@InputType()
export class directus_revisionsUpdateOneWithoutOther_directus_revisionsNestedInput {
  @Field(() => directus_revisionsCreateWithoutOther_directus_revisionsInput, {
    nullable: true,
  })
  @Type(() => directus_revisionsCreateWithoutOther_directus_revisionsInput)
  create?: directus_revisionsCreateWithoutOther_directus_revisionsInput;

  @Field(
    () => directus_revisionsCreateOrConnectWithoutOther_directus_revisionsInput,
    { nullable: true },
  )
  @Type(
    () => directus_revisionsCreateOrConnectWithoutOther_directus_revisionsInput,
  )
  connectOrCreate?: directus_revisionsCreateOrConnectWithoutOther_directus_revisionsInput;

  @Field(() => directus_revisionsUpsertWithoutOther_directus_revisionsInput, {
    nullable: true,
  })
  @Type(() => directus_revisionsUpsertWithoutOther_directus_revisionsInput)
  upsert?: directus_revisionsUpsertWithoutOther_directus_revisionsInput;

  @Field(() => Boolean, { nullable: true })
  disconnect?: boolean;

  @Field(() => Boolean, { nullable: true })
  delete?: boolean;

  @Field(() => directus_revisionsWhereUniqueInput, { nullable: true })
  @Type(() => directus_revisionsWhereUniqueInput)
  connect?: Prisma.AtLeast<directus_revisionsWhereUniqueInput, 'id'>;

  @Field(() => directus_revisionsUpdateWithoutOther_directus_revisionsInput, {
    nullable: true,
  })
  @Type(() => directus_revisionsUpdateWithoutOther_directus_revisionsInput)
  update?: directus_revisionsUpdateWithoutOther_directus_revisionsInput;
}
