import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class MasterServiceMinAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    status?: true;

    @Field(() => Boolean, {nullable:true})
    date_created?: true;

    @Field(() => Boolean, {nullable:true})
    date_updated?: true;

    @Field(() => Boolean, {nullable:true})
    masterProfile?: true;

    @Field(() => Boolean, {nullable:true})
    duration?: true;

    @Field(() => Boolean, {nullable:true})
    price?: true;

    @Field(() => Boolean, {nullable:true})
    currency?: true;

    @Field(() => Boolean, {nullable:true})
    service?: true;
}
