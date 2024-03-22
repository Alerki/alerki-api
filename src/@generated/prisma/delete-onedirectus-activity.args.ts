import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_activityWhereUniqueInput } from '../directus-activity/directus-activity-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOnedirectusActivityArgs {

    @Field(() => directus_activityWhereUniqueInput, {nullable:false})
    @Type(() => directus_activityWhereUniqueInput)
    where!: directus_activityWhereUniqueInput;
}
