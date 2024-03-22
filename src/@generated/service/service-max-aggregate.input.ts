import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ServiceMaxAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    status?: true;

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
}
