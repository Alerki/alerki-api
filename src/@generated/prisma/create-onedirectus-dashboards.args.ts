import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_dashboardsCreateInput } from '../directus-dashboards/directus-dashboards-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnedirectusDashboardsArgs {

    @Field(() => directus_dashboardsCreateInput, {nullable:false})
    @Type(() => directus_dashboardsCreateInput)
    data!: directus_dashboardsCreateInput;
}
