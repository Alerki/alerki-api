import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_notificationsWhereInput } from '../directus-notifications/directus-notifications-where.input';
import { Type } from 'class-transformer';
import { directus_notificationsOrderByWithAggregationInput } from '../directus-notifications/directus-notifications-order-by-with-aggregation.input';
import { Directus_notificationsScalarFieldEnum } from './directus-notifications-scalar-field.enum';
import { directus_notificationsScalarWhereWithAggregatesInput } from '../directus-notifications/directus-notifications-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupBydirectusNotificationsArgs {

    @Field(() => directus_notificationsWhereInput, {nullable:true})
    @Type(() => directus_notificationsWhereInput)
    where?: directus_notificationsWhereInput;

    @Field(() => [directus_notificationsOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<directus_notificationsOrderByWithAggregationInput>;

    @Field(() => [Directus_notificationsScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof Directus_notificationsScalarFieldEnum>;

    @Field(() => directus_notificationsScalarWhereWithAggregatesInput, {nullable:true})
    having?: directus_notificationsScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
