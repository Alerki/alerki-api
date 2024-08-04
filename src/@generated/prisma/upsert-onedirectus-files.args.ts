import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_filesWhereUniqueInput } from '../directus-files/directus-files-where-unique.input';
import { Type } from 'class-transformer';
import { directus_filesCreateInput } from '../directus-files/directus-files-create.input';
import { directus_filesUpdateInput } from '../directus-files/directus-files-update.input';

@ArgsType()
export class UpsertOnedirectusFilesArgs {
  @Field(() => directus_filesWhereUniqueInput, { nullable: false })
  @Type(() => directus_filesWhereUniqueInput)
  where!: directus_filesWhereUniqueInput;

  @Field(() => directus_filesCreateInput, { nullable: false })
  @Type(() => directus_filesCreateInput)
  create!: directus_filesCreateInput;

  @Field(() => directus_filesUpdateInput, { nullable: false })
  @Type(() => directus_filesUpdateInput)
  update!: directus_filesUpdateInput;
}
