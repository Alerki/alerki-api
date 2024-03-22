import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class UserMaxAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    date_created?: Date | string;

    @Field(() => Date, {nullable:true})
    date_updated?: Date | string;

    @Field(() => String, {nullable:true})
    email?: string;

    @Field(() => String, {nullable:true})
    phoneNumber?: string;

    @Field(() => String, {nullable:true})
    username?: string;

    @Field(() => String, {nullable:true})
    firstName?: string;

    @Field(() => String, {nullable:true})
    lastName?: string;

    @Field(() => Date, {nullable:true})
    birthDate?: Date | string;

    @Field(() => String, {nullable:true})
    picture?: string;

    @Field(() => String, {nullable:true})
    masterProfile?: string;

    @Field(() => String, {nullable:true})
    clientProfile?: string;

    @Field(() => String, {nullable:true})
    password?: string;
}
