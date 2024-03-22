import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class LanguagesMaxAggregate {

    @Field(() => String, {nullable:true})
    code?: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    direction?: string;
}
