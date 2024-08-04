import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_activityWhereUniqueInput } from '../directus-activity/directus-activity-where-unique.input';
import { Type } from 'class-transformer';
import { directus_activityCreateInput } from '../directus-activity/directus-activity-create.input';
import { directus_activityUpdateInput } from '../directus-activity/directus-activity-update.input';

@ArgsType()
export class UpsertOnedirectusActivityArgs {
  @Field(() => directus_activityWhereUniqueInput, { nullable: false })
  @Type(() => directus_activityWhereUniqueInput)
  where!: directus_activityWhereUniqueInput;

  @Field(() => directus_activityCreateInput, { nullable: false })
  @Type(() => directus_activityCreateInput)
  create!: directus_activityCreateInput;

  @Field(() => directus_activityUpdateInput, { nullable: false })
  @Type(() => directus_activityUpdateInput)
  update!: directus_activityUpdateInput;
}
