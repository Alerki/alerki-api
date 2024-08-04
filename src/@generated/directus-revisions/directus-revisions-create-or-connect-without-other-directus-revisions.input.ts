import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { directus_revisionsWhereUniqueInput } from './directus-revisions-where-unique.input';
import { Type } from 'class-transformer';
import { directus_revisionsCreateWithoutOther_directus_revisionsInput } from './directus-revisions-create-without-other-directus-revisions.input';

@InputType()
export class directus_revisionsCreateOrConnectWithoutOther_directus_revisionsInput {
  @Field(() => directus_revisionsWhereUniqueInput, { nullable: false })
  @Type(() => directus_revisionsWhereUniqueInput)
  where!: Prisma.AtLeast<directus_revisionsWhereUniqueInput, 'id'>;

  @Field(() => directus_revisionsCreateWithoutOther_directus_revisionsInput, {
    nullable: false,
  })
  @Type(() => directus_revisionsCreateWithoutOther_directus_revisionsInput)
  create!: directus_revisionsCreateWithoutOther_directus_revisionsInput;
}
