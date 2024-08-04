import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_settingsCreateManyDirectus_foldersInput } from './directus-settings-create-many-directus-folders.input';
import { Type } from 'class-transformer';

@InputType()
export class directus_settingsCreateManyDirectus_foldersInputEnvelope {
  @Field(() => [directus_settingsCreateManyDirectus_foldersInput], {
    nullable: false,
  })
  @Type(() => directus_settingsCreateManyDirectus_foldersInput)
  data!: Array<directus_settingsCreateManyDirectus_foldersInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
