import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { NotificationWhereUniqueInput } from './notification-where-unique.input';
import { Type } from 'class-transformer';
import { NotificationCreateInput } from './notification-create.input';
import { NotificationUpdateInput } from './notification-update.input';

@ArgsType()
export class UpsertOneNotificationArgs {

    @Field(() => NotificationWhereUniqueInput, {nullable:false})
    @Type(() => NotificationWhereUniqueInput)
    where!: Prisma.AtLeast<NotificationWhereUniqueInput, 'id'>;

    @Field(() => NotificationCreateInput, {nullable:false})
    @Type(() => NotificationCreateInput)
    create!: NotificationCreateInput;

    @Field(() => NotificationUpdateInput, {nullable:false})
    @Type(() => NotificationUpdateInput)
    update!: NotificationUpdateInput;
}
