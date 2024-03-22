import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_dashboardsCreateManyInput } from '../directus-dashboards/directus-dashboards-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManydirectusDashboardsArgs {

    @Field(() => [directus_dashboardsCreateManyInput], {nullable:false})
    @Type(() => directus_dashboardsCreateManyInput)
    data!: Array<directus_dashboardsCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
