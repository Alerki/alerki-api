import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_activityUpdateInput } from '../directus-activity/directus-activity-update.input';
import { Type } from 'class-transformer';
import { directus_activityWhereUniqueInput } from '../directus-activity/directus-activity-where-unique.input';

@ArgsType()
export class UpdateOnedirectusActivityArgs {

    @Field(() => directus_activityUpdateInput, {nullable:false})
    @Type(() => directus_activityUpdateInput)
    data!: directus_activityUpdateInput;

    @Field(() => directus_activityWhereUniqueInput, {nullable:false})
    @Type(() => directus_activityWhereUniqueInput)
    where!: directus_activityWhereUniqueInput;
}
