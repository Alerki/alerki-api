import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { directus_users } from '../directus-users/directus-users.model';
import { directus_panels } from '../directus-panels/directus-panels.model';
import { Directus_dashboardsCount } from '../prisma/directus-dashboards-count.output';

@ObjectType()
export class directus_dashboards {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false,defaultValue:'dashboard'})
    icon!: string;

    @Field(() => String, {nullable:true})
    note!: string | null;

    @Field(() => Date, {nullable:true})
    date_created!: Date | null;

    @Field(() => String, {nullable:true})
    user_created!: string | null;

    @Field(() => String, {nullable:true})
    color!: string | null;

    @Field(() => directus_users, {nullable:true})
    directus_users?: directus_users | null;

    @Field(() => [directus_panels], {nullable:true})
    directus_panels?: Array<directus_panels>;

    @Field(() => Directus_dashboardsCount, {nullable:false})
    _count?: Directus_dashboardsCount;
}
