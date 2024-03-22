import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_activityCreateInput } from '../directus-activity/directus-activity-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnedirectusActivityArgs {

    @Field(() => directus_activityCreateInput, {nullable:false})
    @Type(() => directus_activityCreateInput)
    data!: directus_activityCreateInput;
}
