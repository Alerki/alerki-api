import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class User_SessionAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;
}
