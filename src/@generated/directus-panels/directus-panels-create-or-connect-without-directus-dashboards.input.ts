import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { directus_panelsWhereUniqueInput } from './directus-panels-where-unique.input';
import { Type } from 'class-transformer';
import { directus_panelsCreateWithoutDirectus_dashboardsInput } from './directus-panels-create-without-directus-dashboards.input';

@InputType()
export class directus_panelsCreateOrConnectWithoutDirectus_dashboardsInput {

    @Field(() => directus_panelsWhereUniqueInput, {nullable:false})
    @Type(() => directus_panelsWhereUniqueInput)
    where!: Prisma.AtLeast<directus_panelsWhereUniqueInput, 'id'>;

    @Field(() => directus_panelsCreateWithoutDirectus_dashboardsInput, {nullable:false})
    @Type(() => directus_panelsCreateWithoutDirectus_dashboardsInput)
    create!: directus_panelsCreateWithoutDirectus_dashboardsInput;
}
