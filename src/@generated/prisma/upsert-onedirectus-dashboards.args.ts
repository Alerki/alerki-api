import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_dashboardsWhereUniqueInput } from '../directus-dashboards/directus-dashboards-where-unique.input';
import { Type } from 'class-transformer';
import { directus_dashboardsCreateInput } from '../directus-dashboards/directus-dashboards-create.input';
import { directus_dashboardsUpdateInput } from '../directus-dashboards/directus-dashboards-update.input';

@ArgsType()
export class UpsertOnedirectusDashboardsArgs {

    @Field(() => directus_dashboardsWhereUniqueInput, {nullable:false})
    @Type(() => directus_dashboardsWhereUniqueInput)
    where!: directus_dashboardsWhereUniqueInput;

    @Field(() => directus_dashboardsCreateInput, {nullable:false})
    @Type(() => directus_dashboardsCreateInput)
    create!: directus_dashboardsCreateInput;

    @Field(() => directus_dashboardsUpdateInput, {nullable:false})
    @Type(() => directus_dashboardsUpdateInput)
    update!: directus_dashboardsUpdateInput;
}
