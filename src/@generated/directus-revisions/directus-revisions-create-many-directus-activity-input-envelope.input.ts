import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_revisionsCreateManyDirectus_activityInput } from './directus-revisions-create-many-directus-activity.input';
import { Type } from 'class-transformer';

@InputType()
export class directus_revisionsCreateManyDirectus_activityInputEnvelope {
  @Field(() => [directus_revisionsCreateManyDirectus_activityInput], {
    nullable: false,
  })
  @Type(() => directus_revisionsCreateManyDirectus_activityInput)
  data!: Array<directus_revisionsCreateManyDirectus_activityInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
