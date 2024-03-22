import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_notificationsWhereInput } from '../directus-notifications/directus-notifications-where.input';
import { Type } from 'class-transformer';
import { directus_notificationsOrderByWithRelationAndSearchRelevanceInput } from '../directus-notifications/directus-notifications-order-by-with-relation-and-search-relevance.input';
import { directus_notificationsWhereUniqueInput } from '../directus-notifications/directus-notifications-where-unique.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class AggregatedirectusNotificationsArgs {

    @Field(() => directus_notificationsWhereInput, {nullable:true})
    @Type(() => directus_notificationsWhereInput)
    where?: directus_notificationsWhereInput;

    @Field(() => [directus_notificationsOrderByWithRelationAndSearchRelevanceInput], {nullable:true})
    orderBy?: Array<directus_notificationsOrderByWithRelationAndSearchRelevanceInput>;

    @Field(() => directus_notificationsWhereUniqueInput, {nullable:true})
    cursor?: directus_notificationsWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
