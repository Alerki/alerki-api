import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { directus_revisions } from '../directus-revisions/directus-revisions.model';
import { Directus_activityCount } from '../prisma/directus-activity-count.output';

@ObjectType()
export class directus_activity {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    action!: string;

    @Field(() => String, {nullable:true})
    user!: string | null;

    @Field(() => Date, {nullable:false})
    timestamp!: Date;

    @Field(() => String, {nullable:true})
    ip!: string | null;

    @Field(() => String, {nullable:true})
    user_agent!: string | null;

    @Field(() => String, {nullable:false})
    collection!: string;

    @Field(() => String, {nullable:false})
    item!: string;

    @Field(() => String, {nullable:true})
    comment!: string | null;

    @Field(() => String, {nullable:true})
    origin!: string | null;

    @Field(() => [directus_revisions], {nullable:true})
    directus_revisions?: Array<directus_revisions>;

    @Field(() => Directus_activityCount, {nullable:false})
    _count?: Directus_activityCount;
}
