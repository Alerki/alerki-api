import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_activityWhereInput } from '../directus-activity/directus-activity-where.input';

@InputType()
export class Directus_activityRelationFilter {

    @Field(() => directus_activityWhereInput, {nullable:true})
    is?: directus_activityWhereInput;

    @Field(() => directus_activityWhereInput, {nullable:true})
    isNot?: directus_activityWhereInput;
}
