import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ServiceSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    sort?: true;
}
