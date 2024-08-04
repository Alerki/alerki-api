import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_filesCreateManyInput } from '../directus-files/directus-files-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManydirectusFilesArgs {
  @Field(() => [directus_filesCreateManyInput], { nullable: false })
  @Type(() => directus_filesCreateManyInput)
  data!: Array<directus_filesCreateManyInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
