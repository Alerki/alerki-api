import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_dashboardsCreateWithoutDirectus_usersInput } from './directus-dashboards-create-without-directus-users.input';
import { Type } from 'class-transformer';
import { directus_dashboardsCreateOrConnectWithoutDirectus_usersInput } from './directus-dashboards-create-or-connect-without-directus-users.input';
import { directus_dashboardsCreateManyDirectus_usersInputEnvelope } from './directus-dashboards-create-many-directus-users-input-envelope.input';
import { Prisma } from '@prisma/client';
import { directus_dashboardsWhereUniqueInput } from './directus-dashboards-where-unique.input';

@InputType()
export class directus_dashboardsCreateNestedManyWithoutDirectus_usersInput {

    @Field(() => [directus_dashboardsCreateWithoutDirectus_usersInput], {nullable:true})
    @Type(() => directus_dashboardsCreateWithoutDirectus_usersInput)
    create?: Array<directus_dashboardsCreateWithoutDirectus_usersInput>;

    @Field(() => [directus_dashboardsCreateOrConnectWithoutDirectus_usersInput], {nullable:true})
    @Type(() => directus_dashboardsCreateOrConnectWithoutDirectus_usersInput)
    connectOrCreate?: Array<directus_dashboardsCreateOrConnectWithoutDirectus_usersInput>;

    @Field(() => directus_dashboardsCreateManyDirectus_usersInputEnvelope, {nullable:true})
    @Type(() => directus_dashboardsCreateManyDirectus_usersInputEnvelope)
    createMany?: directus_dashboardsCreateManyDirectus_usersInputEnvelope;

    @Field(() => [directus_dashboardsWhereUniqueInput], {nullable:true})
    @Type(() => directus_dashboardsWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<directus_dashboardsWhereUniqueInput, 'id'>>;
}
