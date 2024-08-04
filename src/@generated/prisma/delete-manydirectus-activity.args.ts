import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_activityWhereInput } from '../directus-activity/directus-activity-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManydirectusActivityArgs {
  @Field(() => directus_activityWhereInput, { nullable: true })
  @Type(() => directus_activityWhereInput)
  where?: directus_activityWhereInput;
}
