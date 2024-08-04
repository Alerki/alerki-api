import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { directus_versionsWhereUniqueInput } from './directus-versions-where-unique.input';
import { Type } from 'class-transformer';
import { directus_versionsCreateWithoutDirectus_revisionsInput } from './directus-versions-create-without-directus-revisions.input';

@InputType()
export class directus_versionsCreateOrConnectWithoutDirectus_revisionsInput {
  @Field(() => directus_versionsWhereUniqueInput, { nullable: false })
  @Type(() => directus_versionsWhereUniqueInput)
  where!: Prisma.AtLeast<directus_versionsWhereUniqueInput, 'id'>;

  @Field(() => directus_versionsCreateWithoutDirectus_revisionsInput, {
    nullable: false,
  })
  @Type(() => directus_versionsCreateWithoutDirectus_revisionsInput)
  create!: directus_versionsCreateWithoutDirectus_revisionsInput;
}
