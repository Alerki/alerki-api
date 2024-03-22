import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_dashboardsWhereInput } from '../directus-dashboards/directus-dashboards-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManydirectusDashboardsArgs {

    @Field(() => directus_dashboardsWhereInput, {nullable:true})
    @Type(() => directus_dashboardsWhereInput)
    where?: directus_dashboardsWhereInput;
}
