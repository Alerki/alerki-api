import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { directus_revisionsWhereUniqueInput } from './directus-revisions-where-unique.input';
import { Type } from 'class-transformer';
import { directus_revisionsUpdateWithoutDirectus_versionsInput } from './directus-revisions-update-without-directus-versions.input';

@InputType()
export class directus_revisionsUpdateWithWhereUniqueWithoutDirectus_versionsInput {
  @Field(() => directus_revisionsWhereUniqueInput, { nullable: false })
  @Type(() => directus_revisionsWhereUniqueInput)
  where!: Prisma.AtLeast<directus_revisionsWhereUniqueInput, 'id'>;

  @Field(() => directus_revisionsUpdateWithoutDirectus_versionsInput, {
    nullable: false,
  })
  @Type(() => directus_revisionsUpdateWithoutDirectus_versionsInput)
  data!: directus_revisionsUpdateWithoutDirectus_versionsInput;
}
