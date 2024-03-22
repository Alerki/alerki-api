import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class NotificationTypeCreateManyInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:true})
    sort?: number;

    @Field(() => String, {nullable:true})
    user_created?: string;

    @Field(() => Date, {nullable:true})
    date_created?: Date | string;

    @Field(() => String, {nullable:true})
    user_updated?: string;

    @Field(() => Date, {nullable:true})
    date_updated?: Date | string;

    @Field(() => String, {nullable:false})
    name!: string;
}
