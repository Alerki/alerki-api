import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class directus_usersCountOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    first_name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    last_name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    password?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    location?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    tags?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    avatar?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    language?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    tfa_secret?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    role?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    token?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    last_access?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    last_page?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    provider?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    external_identifier?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    auth_data?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    email_notifications?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    appearance?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    theme_dark?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    theme_light?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    theme_light_overrides?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    theme_dark_overrides?: keyof typeof SortOrder;
}
