import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_usersCreateNestedOneWithoutDirectus_dashboardsInput } from '../directus-users/directus-users-create-nested-one-without-directus-dashboards.input';

@InputType()
export class directus_dashboardsCreateWithoutDirectus_panelsInput {

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

    @Field(() => directus_usersCreateNestedOneWithoutDirectus_dashboardsInput, {nullable:true})
    directus_users?: directus_usersCreateNestedOneWithoutDirectus_dashboardsInput;
}
