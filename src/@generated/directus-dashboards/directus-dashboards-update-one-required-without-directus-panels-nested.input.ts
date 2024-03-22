import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_dashboardsCreateWithoutDirectus_panelsInput } from './directus-dashboards-create-without-directus-panels.input';
import { Type } from 'class-transformer';
import { directus_dashboardsCreateOrConnectWithoutDirectus_panelsInput } from './directus-dashboards-create-or-connect-without-directus-panels.input';
import { directus_dashboardsUpsertWithoutDirectus_panelsInput } from './directus-dashboards-upsert-without-directus-panels.input';
import { Prisma } from '@prisma/client';
import { directus_dashboardsWhereUniqueInput } from './directus-dashboards-where-unique.input';
import { directus_dashboardsUpdateWithoutDirectus_panelsInput } from './directus-dashboards-update-without-directus-panels.input';

@InputType()
export class directus_dashboardsUpdateOneRequiredWithoutDirectus_panelsNestedInput {

    @Field(() => directus_dashboardsCreateWithoutDirectus_panelsInput, {nullable:true})
    @Type(() => directus_dashboardsCreateWithoutDirectus_panelsInput)
    create?: directus_dashboardsCreateWithoutDirectus_panelsInput;

    @Field(() => directus_dashboardsCreateOrConnectWithoutDirectus_panelsInput, {nullable:true})
    @Type(() => directus_dashboardsCreateOrConnectWithoutDirectus_panelsInput)
    connectOrCreate?: directus_dashboardsCreateOrConnectWithoutDirectus_panelsInput;

    @Field(() => directus_dashboardsUpsertWithoutDirectus_panelsInput, {nullable:true})
    @Type(() => directus_dashboardsUpsertWithoutDirectus_panelsInput)
    upsert?: directus_dashboardsUpsertWithoutDirectus_panelsInput;

    @Field(() => directus_dashboardsWhereUniqueInput, {nullable:true})
    @Type(() => directus_dashboardsWhereUniqueInput)
    connect?: Prisma.AtLeast<directus_dashboardsWhereUniqueInput, 'id'>;

    @Field(() => directus_dashboardsUpdateWithoutDirectus_panelsInput, {nullable:true})
    @Type(() => directus_dashboardsUpdateWithoutDirectus_panelsInput)
    update?: directus_dashboardsUpdateWithoutDirectus_panelsInput;
}
