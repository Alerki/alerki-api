import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_revisionsCreateNestedManyWithoutDirectus_activityInput } from '../directus-revisions/directus-revisions-create-nested-many-without-directus-activity.input';

@InputType()
export class directus_activityCreateInput {

    @Field(() => String, {nullable:false})
    action!: string;

    @Field(() => String, {nullable:true})
    user?: string;

    @Field(() => Date, {nullable:true})
    timestamp?: Date | string;

    @Field(() => String, {nullable:true})
    ip?: string;

    @Field(() => String, {nullable:true})
    user_agent?: string;

    @Field(() => String, {nullable:false})
    collection!: string;

    @Field(() => String, {nullable:false})
    item!: string;

    @Field(() => String, {nullable:true})
    comment?: string;

    @Field(() => String, {nullable:true})
    origin?: string;

    @Field(() => directus_revisionsCreateNestedManyWithoutDirectus_activityInput, {nullable:true})
    directus_revisions?: directus_revisionsCreateNestedManyWithoutDirectus_activityInput;
}
