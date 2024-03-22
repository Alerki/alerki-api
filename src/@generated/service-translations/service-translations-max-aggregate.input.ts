import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class Service_translationsMaxAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    Service_id?: true;

    @Field(() => Boolean, {nullable:true})
    languages_id?: true;

    @Field(() => Boolean, {nullable:true})
    name?: true;
}
