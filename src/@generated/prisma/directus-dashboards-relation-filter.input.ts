import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_dashboardsWhereInput } from '../directus-dashboards/directus-dashboards-where.input';

@InputType()
export class Directus_dashboardsRelationFilter {

    @Field(() => directus_dashboardsWhereInput, {nullable:true})
    is?: directus_dashboardsWhereInput;

    @Field(() => directus_dashboardsWhereInput, {nullable:true})
    isNot?: directus_dashboardsWhereInput;
}
