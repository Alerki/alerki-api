import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class UserMinAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    date_created?: true;

    @Field(() => Boolean, {nullable:true})
    date_updated?: true;

    @Field(() => Boolean, {nullable:true})
    email?: true;

    @Field(() => Boolean, {nullable:true})
    phoneNumber?: true;

    @Field(() => Boolean, {nullable:true})
    username?: true;

    @Field(() => Boolean, {nullable:true})
    firstName?: true;

    @Field(() => Boolean, {nullable:true})
    lastName?: true;

    @Field(() => Boolean, {nullable:true})
    birthDate?: true;

    @Field(() => Boolean, {nullable:true})
    picture?: true;

    @Field(() => Boolean, {nullable:true})
    masterProfile?: true;

    @Field(() => Boolean, {nullable:true})
    clientProfile?: true;

    @Field(() => Boolean, {nullable:true})
    password?: true;
}
