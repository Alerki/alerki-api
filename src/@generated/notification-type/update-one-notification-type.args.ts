import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NotificationTypeUpdateInput } from './notification-type-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { NotificationTypeWhereUniqueInput } from './notification-type-where-unique.input';

@ArgsType()
export class UpdateOneNotificationTypeArgs {

    @Field(() => NotificationTypeUpdateInput, {nullable:false})
    @Type(() => NotificationTypeUpdateInput)
    data!: NotificationTypeUpdateInput;

    @Field(() => NotificationTypeWhereUniqueInput, {nullable:false})
    @Type(() => NotificationTypeWhereUniqueInput)
    where!: Prisma.AtLeast<NotificationTypeWhereUniqueInput, 'id' | 'name'>;
}
