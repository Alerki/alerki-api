import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_foldersCreateManyInput } from '../directus-folders/directus-folders-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManydirectusFoldersArgs {
  @Field(() => [directus_foldersCreateManyInput], { nullable: false })
  @Type(() => directus_foldersCreateManyInput)
  data!: Array<directus_foldersCreateManyInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
