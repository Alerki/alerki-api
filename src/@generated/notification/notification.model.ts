import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { UserRecipientOnNotification } from '../user-recipient-on-notification/user-recipient-on-notification.model';
import { NotificationCount } from './notification-count.output';

@ObjectType()
export class Notification {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => Date, {nullable:true})
    date_created!: Date | null;

    @Field(() => Date, {nullable:true})
    date_updated!: Date | null;

    @Field(() => [UserRecipientOnNotification], {nullable:true})
    UserRecipientOnNotification?: Array<UserRecipientOnNotification>;

    @Field(() => NotificationCount, {nullable:false})
    _count?: NotificationCount;
}
