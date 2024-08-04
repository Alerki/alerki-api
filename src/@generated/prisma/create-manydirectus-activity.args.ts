import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_activityCreateManyInput } from '../directus-activity/directus-activity-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManydirectusActivityArgs {
  @Field(() => [directus_activityCreateManyInput], { nullable: false })
  @Type(() => directus_activityCreateManyInput)
  data!: Array<directus_activityCreateManyInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
