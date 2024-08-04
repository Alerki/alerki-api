import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { directus_revisionsWhereUniqueInput } from './directus-revisions-where-unique.input';
import { Type } from 'class-transformer';
import { directus_revisionsUpdateWithoutDirectus_revisionsInput } from './directus-revisions-update-without-directus-revisions.input';

@InputType()
export class directus_revisionsUpdateWithWhereUniqueWithoutDirectus_revisionsInput {
  @Field(() => directus_revisionsWhereUniqueInput, { nullable: false })
  @Type(() => directus_revisionsWhereUniqueInput)
  where!: Prisma.AtLeast<directus_revisionsWhereUniqueInput, 'id'>;

  @Field(() => directus_revisionsUpdateWithoutDirectus_revisionsInput, {
    nullable: false,
  })
  @Type(() => directus_revisionsUpdateWithoutDirectus_revisionsInput)
  data!: directus_revisionsUpdateWithoutDirectus_revisionsInput;
}
