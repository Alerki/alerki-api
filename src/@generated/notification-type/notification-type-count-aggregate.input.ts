import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class NotificationTypeCountAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    sort?: true;

    @Field(() => Boolean, {nullable:true})
    user_created?: true;

    @Field(() => Boolean, {nullable:true})
    date_created?: true;

    @Field(() => Boolean, {nullable:true})
    user_updated?: true;

    @Field(() => Boolean, {nullable:true})
    date_updated?: true;

    @Field(() => Boolean, {nullable:true})
    name?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}
