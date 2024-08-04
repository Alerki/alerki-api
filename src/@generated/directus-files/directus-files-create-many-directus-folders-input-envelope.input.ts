import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_filesCreateManyDirectus_foldersInput } from './directus-files-create-many-directus-folders.input';
import { Type } from 'class-transformer';

@InputType()
export class directus_filesCreateManyDirectus_foldersInputEnvelope {
  @Field(() => [directus_filesCreateManyDirectus_foldersInput], {
    nullable: false,
  })
  @Type(() => directus_filesCreateManyDirectus_foldersInput)
  data!: Array<directus_filesCreateManyDirectus_foldersInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
