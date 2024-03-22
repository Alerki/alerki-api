import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NotificationTypeUpdateManyMutationInput } from './notification-type-update-many-mutation.input';
import { Type } from 'class-transformer';
import { NotificationTypeWhereInput } from './notification-type-where.input';

@ArgsType()
export class UpdateManyNotificationTypeArgs {

    @Field(() => NotificationTypeUpdateManyMutationInput, {nullable:false})
    @Type(() => NotificationTypeUpdateManyMutationInput)
    data!: NotificationTypeUpdateManyMutationInput;

    @Field(() => NotificationTypeWhereInput, {nullable:true})
    @Type(() => NotificationTypeWhereInput)
    where?: NotificationTypeWhereInput;
}
