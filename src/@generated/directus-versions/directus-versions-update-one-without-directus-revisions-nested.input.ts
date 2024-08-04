import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_versionsCreateWithoutDirectus_revisionsInput } from './directus-versions-create-without-directus-revisions.input';
import { Type } from 'class-transformer';
import { directus_versionsCreateOrConnectWithoutDirectus_revisionsInput } from './directus-versions-create-or-connect-without-directus-revisions.input';
import { directus_versionsUpsertWithoutDirectus_revisionsInput } from './directus-versions-upsert-without-directus-revisions.input';
import { Prisma } from '@prisma/client';
import { directus_versionsWhereUniqueInput } from './directus-versions-where-unique.input';
import { directus_versionsUpdateWithoutDirectus_revisionsInput } from './directus-versions-update-without-directus-revisions.input';

@InputType()
export class directus_versionsUpdateOneWithoutDirectus_revisionsNestedInput {
  @Field(() => directus_versionsCreateWithoutDirectus_revisionsInput, {
    nullable: true,
  })
  @Type(() => directus_versionsCreateWithoutDirectus_revisionsInput)
  create?: directus_versionsCreateWithoutDirectus_revisionsInput;

  @Field(() => directus_versionsCreateOrConnectWithoutDirectus_revisionsInput, {
    nullable: true,
  })
  @Type(() => directus_versionsCreateOrConnectWithoutDirectus_revisionsInput)
  connectOrCreate?: directus_versionsCreateOrConnectWithoutDirectus_revisionsInput;

  @Field(() => directus_versionsUpsertWithoutDirectus_revisionsInput, {
    nullable: true,
  })
  @Type(() => directus_versionsUpsertWithoutDirectus_revisionsInput)
  upsert?: directus_versionsUpsertWithoutDirectus_revisionsInput;

  @Field(() => Boolean, { nullable: true })
  disconnect?: boolean;

  @Field(() => Boolean, { nullable: true })
  delete?: boolean;

  @Field(() => directus_versionsWhereUniqueInput, { nullable: true })
  @Type(() => directus_versionsWhereUniqueInput)
  connect?: Prisma.AtLeast<directus_versionsWhereUniqueInput, 'id'>;

  @Field(() => directus_versionsUpdateWithoutDirectus_revisionsInput, {
    nullable: true,
  })
  @Type(() => directus_versionsUpdateWithoutDirectus_revisionsInput)
  update?: directus_versionsUpdateWithoutDirectus_revisionsInput;
}
