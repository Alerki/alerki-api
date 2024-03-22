import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NotificationTypeScalarWhereInput } from './notification-type-scalar-where.input';
import { Type } from 'class-transformer';
import { NotificationTypeUpdateManyMutationInput } from './notification-type-update-many-mutation.input';

@InputType()
export class NotificationTypeUpdateManyWithWhereWithoutDirectus_users_NotificationType_user_createdTodirectus_usersInput {

    @Field(() => NotificationTypeScalarWhereInput, {nullable:false})
    @Type(() => NotificationTypeScalarWhereInput)
    where!: NotificationTypeScalarWhereInput;

    @Field(() => NotificationTypeUpdateManyMutationInput, {nullable:false})
    @Type(() => NotificationTypeUpdateManyMutationInput)
    data!: NotificationTypeUpdateManyMutationInput;
}
