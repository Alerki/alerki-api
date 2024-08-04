import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_revisionsWhereUniqueInput } from '../directus-revisions/directus-revisions-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniquedirectusRevisionsOrThrowArgs {
  @Field(() => directus_revisionsWhereUniqueInput, { nullable: false })
  @Type(() => directus_revisionsWhereUniqueInput)
  where!: directus_revisionsWhereUniqueInput;
}
