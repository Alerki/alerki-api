import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_foldersUpdateInput } from '../directus-folders/directus-folders-update.input';
import { Type } from 'class-transformer';
import { directus_foldersWhereUniqueInput } from '../directus-folders/directus-folders-where-unique.input';

@ArgsType()
export class UpdateOnedirectusFoldersArgs {
  @Field(() => directus_foldersUpdateInput, { nullable: false })
  @Type(() => directus_foldersUpdateInput)
  data!: directus_foldersUpdateInput;

  @Field(() => directus_foldersWhereUniqueInput, { nullable: false })
  @Type(() => directus_foldersWhereUniqueInput)
  where!: directus_foldersWhereUniqueInput;
}
