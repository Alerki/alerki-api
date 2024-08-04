import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_foldersWhereUniqueInput } from '../directus-folders/directus-folders-where-unique.input';
import { Type } from 'class-transformer';
import { directus_foldersCreateInput } from '../directus-folders/directus-folders-create.input';
import { directus_foldersUpdateInput } from '../directus-folders/directus-folders-update.input';

@ArgsType()
export class UpsertOnedirectusFoldersArgs {
  @Field(() => directus_foldersWhereUniqueInput, { nullable: false })
  @Type(() => directus_foldersWhereUniqueInput)
  where!: directus_foldersWhereUniqueInput;

  @Field(() => directus_foldersCreateInput, { nullable: false })
  @Type(() => directus_foldersCreateInput)
  create!: directus_foldersCreateInput;

  @Field(() => directus_foldersUpdateInput, { nullable: false })
  @Type(() => directus_foldersUpdateInput)
  update!: directus_foldersUpdateInput;
}
