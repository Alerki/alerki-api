import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_filesCreateInput } from '../directus-files/directus-files-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnedirectusFilesArgs {
  @Field(() => directus_filesCreateInput, { nullable: false })
  @Type(() => directus_filesCreateInput)
  data!: directus_filesCreateInput;
}
