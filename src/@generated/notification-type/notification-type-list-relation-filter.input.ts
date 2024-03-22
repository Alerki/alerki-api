import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NotificationTypeWhereInput } from './notification-type-where.input';

@InputType()
export class NotificationTypeListRelationFilter {

    @Field(() => NotificationTypeWhereInput, {nullable:true})
    every?: NotificationTypeWhereInput;

    @Field(() => NotificationTypeWhereInput, {nullable:true})
    some?: NotificationTypeWhereInput;

    @Field(() => NotificationTypeWhereInput, {nullable:true})
    none?: NotificationTypeWhereInput;
}
