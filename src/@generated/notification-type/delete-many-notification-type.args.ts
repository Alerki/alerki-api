import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NotificationTypeWhereInput } from './notification-type-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyNotificationTypeArgs {

    @Field(() => NotificationTypeWhereInput, {nullable:true})
    @Type(() => NotificationTypeWhereInput)
    where?: NotificationTypeWhereInput;
}
