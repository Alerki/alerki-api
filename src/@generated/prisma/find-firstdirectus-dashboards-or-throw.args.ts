import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_dashboardsWhereInput } from '../directus-dashboards/directus-dashboards-where.input';
import { Type } from 'class-transformer';
import { directus_dashboardsOrderByWithRelationAndSearchRelevanceInput } from '../directus-dashboards/directus-dashboards-order-by-with-relation-and-search-relevance.input';
import { directus_dashboardsWhereUniqueInput } from '../directus-dashboards/directus-dashboards-where-unique.input';
import { Int } from '@nestjs/graphql';
import { Directus_dashboardsScalarFieldEnum } from './directus-dashboards-scalar-field.enum';

@ArgsType()
export class FindFirstdirectusDashboardsOrThrowArgs {

    @Field(() => directus_dashboardsWhereInput, {nullable:true})
    @Type(() => directus_dashboardsWhereInput)
    where?: directus_dashboardsWhereInput;

    @Field(() => [directus_dashboardsOrderByWithRelationAndSearchRelevanceInput], {nullable:true})
    orderBy?: Array<directus_dashboardsOrderByWithRelationAndSearchRelevanceInput>;

    @Field(() => directus_dashboardsWhereUniqueInput, {nullable:true})
    cursor?: directus_dashboardsWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [Directus_dashboardsScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof Directus_dashboardsScalarFieldEnum>;
}
