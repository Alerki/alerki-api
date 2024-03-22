import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_activityUpdateManyMutationInput } from '../directus-activity/directus-activity-update-many-mutation.input';
import { Type } from 'class-transformer';
import { directus_activityWhereInput } from '../directus-activity/directus-activity-where.input';

@ArgsType()
export class UpdateManydirectusActivityArgs {

    @Field(() => directus_activityUpdateManyMutationInput, {nullable:false})
    @Type(() => directus_activityUpdateManyMutationInput)
    data!: directus_activityUpdateManyMutationInput;

    @Field(() => directus_activityWhereInput, {nullable:true})
    @Type(() => directus_activityWhereInput)
    where?: directus_activityWhereInput;
}
