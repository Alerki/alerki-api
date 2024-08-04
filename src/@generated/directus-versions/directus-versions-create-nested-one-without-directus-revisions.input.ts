import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_versionsCreateWithoutDirectus_revisionsInput } from './directus-versions-create-without-directus-revisions.input';
import { Type } from 'class-transformer';
import { directus_versionsCreateOrConnectWithoutDirectus_revisionsInput } from './directus-versions-create-or-connect-without-directus-revisions.input';
import { Prisma } from '@prisma/client';
import { directus_versionsWhereUniqueInput } from './directus-versions-where-unique.input';

@InputType()
export class directus_versionsCreateNestedOneWithoutDirectus_revisionsInput {
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

  @Field(() => directus_versionsWhereUniqueInput, { nullable: true })
  @Type(() => directus_versionsWhereUniqueInput)
  connect?: Prisma.AtLeast<directus_versionsWhereUniqueInput, 'id'>;
}
