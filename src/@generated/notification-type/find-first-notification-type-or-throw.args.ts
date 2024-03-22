import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NotificationTypeWhereInput } from './notification-type-where.input';
import { Type } from 'class-transformer';
import { NotificationTypeOrderByWithRelationAndSearchRelevanceInput } from './notification-type-order-by-with-relation-and-search-relevance.input';
import { Prisma } from '@prisma/client';
import { NotificationTypeWhereUniqueInput } from './notification-type-where-unique.input';
import { Int } from '@nestjs/graphql';
import { NotificationTypeScalarFieldEnum } from './notification-type-scalar-field.enum';

@ArgsType()
export class FindFirstNotificationTypeOrThrowArgs {

    @Field(() => NotificationTypeWhereInput, {nullable:true})
    @Type(() => NotificationTypeWhereInput)
    where?: NotificationTypeWhereInput;

    @Field(() => [NotificationTypeOrderByWithRelationAndSearchRelevanceInput], {nullable:true})
    orderBy?: Array<NotificationTypeOrderByWithRelationAndSearchRelevanceInput>;

    @Field(() => NotificationTypeWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<NotificationTypeWhereUniqueInput, 'id' | 'name'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [NotificationTypeScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof NotificationTypeScalarFieldEnum>;
}
