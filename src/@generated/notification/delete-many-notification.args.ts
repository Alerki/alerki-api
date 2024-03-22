import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NotificationWhereInput } from './notification-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyNotificationArgs {

    @Field(() => NotificationWhereInput, {nullable:true})
    @Type(() => NotificationWhereInput)
    where?: NotificationWhereInput;
}
