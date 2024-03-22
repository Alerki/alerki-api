import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class AppointmentSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    price?: true;
}
