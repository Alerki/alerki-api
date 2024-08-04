import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_foldersCreateInput } from '../directus-folders/directus-folders-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnedirectusFoldersArgs {
  @Field(() => directus_foldersCreateInput, { nullable: false })
  @Type(() => directus_foldersCreateInput)
  data!: directus_foldersCreateInput;
}
