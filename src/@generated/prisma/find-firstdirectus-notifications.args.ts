import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_notificationsWhereInput } from '../directus-notifications/directus-notifications-where.input';
import { Type } from 'class-transformer';
import { directus_notificationsOrderByWithRelationAndSearchRelevanceInput } from '../directus-notifications/directus-notifications-order-by-with-relation-and-search-relevance.input';
import { directus_notificationsWhereUniqueInput } from '../directus-notifications/directus-notifications-where-unique.input';
import { Int } from '@nestjs/graphql';
import { Directus_notificationsScalarFieldEnum } from './directus-notifications-scalar-field.enum';

@ArgsType()
export class FindFirstdirectusNotificationsArgs {

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

    @Field(() => [Directus_notificationsScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof Directus_notificationsScalarFieldEnum>;
}
