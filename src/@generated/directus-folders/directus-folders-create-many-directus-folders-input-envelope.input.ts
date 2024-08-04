import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_foldersCreateManyDirectus_foldersInput } from './directus-folders-create-many-directus-folders.input';
import { Type } from 'class-transformer';

@InputType()
export class directus_foldersCreateManyDirectus_foldersInputEnvelope {
  @Field(() => [directus_foldersCreateManyDirectus_foldersInput], {
    nullable: false,
  })
  @Type(() => directus_foldersCreateManyDirectus_foldersInput)
  data!: Array<directus_foldersCreateManyDirectus_foldersInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
