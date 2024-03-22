import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserRecipientOnNotificationCreateNestedManyWithoutNotificationInput } from '../user-recipient-on-notification/user-recipient-on-notification-create-nested-many-without-notification.input';

@InputType()
export class NotificationCreateInput {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => Date, {nullable:true})
    date_created?: Date | string;

    @Field(() => Date, {nullable:true})
    date_updated?: Date | string;

    @Field(() => UserRecipientOnNotificationCreateNestedManyWithoutNotificationInput, {nullable:true})
    UserRecipientOnNotification?: UserRecipientOnNotificationCreateNestedManyWithoutNotificationInput;
}
