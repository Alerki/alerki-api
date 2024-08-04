import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_revisionsWhereUniqueInput } from '../directus-revisions/directus-revisions-where-unique.input';
import { Type } from 'class-transformer';
import { directus_revisionsCreateInput } from '../directus-revisions/directus-revisions-create.input';
import { directus_revisionsUpdateInput } from '../directus-revisions/directus-revisions-update.input';

@ArgsType()
export class UpsertOnedirectusRevisionsArgs {
  @Field(() => directus_revisionsWhereUniqueInput, { nullable: false })
  @Type(() => directus_revisionsWhereUniqueInput)
  where!: directus_revisionsWhereUniqueInput;

  @Field(() => directus_revisionsCreateInput, { nullable: false })
  @Type(() => directus_revisionsCreateInput)
  create!: directus_revisionsCreateInput;

  @Field(() => directus_revisionsUpdateInput, { nullable: false })
  @Type(() => directus_revisionsUpdateInput)
  update!: directus_revisionsUpdateInput;
}
