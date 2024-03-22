import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserRecipientOnNotificationScalarWhereInput } from './user-recipient-on-notification-scalar-where.input';
import { Type } from 'class-transformer';
import { UserRecipientOnNotificationUpdateManyMutationInput } from './user-recipient-on-notification-update-many-mutation.input';

@InputType()
export class UserRecipientOnNotificationUpdateManyWithWhereWithoutUserInput {

    @Field(() => UserRecipientOnNotificationScalarWhereInput, {nullable:false})
    @Type(() => UserRecipientOnNotificationScalarWhereInput)
    where!: UserRecipientOnNotificationScalarWhereInput;

    @Field(() => UserRecipientOnNotificationUpdateManyMutationInput, {nullable:false})
    @Type(() => UserRecipientOnNotificationUpdateManyMutationInput)
    data!: UserRecipientOnNotificationUpdateManyMutationInput;
}
