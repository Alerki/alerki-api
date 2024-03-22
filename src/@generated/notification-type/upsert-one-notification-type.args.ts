import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { NotificationTypeWhereUniqueInput } from './notification-type-where-unique.input';
import { Type } from 'class-transformer';
import { NotificationTypeCreateInput } from './notification-type-create.input';
import { NotificationTypeUpdateInput } from './notification-type-update.input';

@ArgsType()
export class UpsertOneNotificationTypeArgs {

    @Field(() => NotificationTypeWhereUniqueInput, {nullable:false})
    @Type(() => NotificationTypeWhereUniqueInput)
    where!: Prisma.AtLeast<NotificationTypeWhereUniqueInput, 'id' | 'name'>;

    @Field(() => NotificationTypeCreateInput, {nullable:false})
    @Type(() => NotificationTypeCreateInput)
    create!: NotificationTypeCreateInput;

    @Field(() => NotificationTypeUpdateInput, {nullable:false})
    @Type(() => NotificationTypeUpdateInput)
    update!: NotificationTypeUpdateInput;
}
