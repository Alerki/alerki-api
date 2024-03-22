import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Service_translationsMinAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    Service_id?: string;

    @Field(() => String, {nullable:true})
    languages_id?: string;

    @Field(() => String, {nullable:true})
    name?: string;
}
