import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_panelsCreateNestedManyWithoutDirectus_dashboardsInput } from '../directus-panels/directus-panels-create-nested-many-without-directus-dashboards.input';

@InputType()
export class directus_dashboardsCreateWithoutDirectus_usersInput {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    icon?: string;

    @Field(() => String, {nullable:true})
    note?: string;

    @Field(() => Date, {nullable:true})
    date_created?: Date | string;

    @Field(() => String, {nullable:true})
    color?: string;

    @Field(() => directus_panelsCreateNestedManyWithoutDirectus_dashboardsInput, {nullable:true})
    directus_panels?: directus_panelsCreateNestedManyWithoutDirectus_dashboardsInput;
}
