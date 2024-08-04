import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_versionsCreateManyDirectus_collectionsInput } from './directus-versions-create-many-directus-collections.input';
import { Type } from 'class-transformer';

@InputType()
export class directus_versionsCreateManyDirectus_collectionsInputEnvelope {
  @Field(() => [directus_versionsCreateManyDirectus_collectionsInput], {
    nullable: false,
  })
  @Type(() => directus_versionsCreateManyDirectus_collectionsInput)
  data!: Array<directus_versionsCreateManyDirectus_collectionsInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
