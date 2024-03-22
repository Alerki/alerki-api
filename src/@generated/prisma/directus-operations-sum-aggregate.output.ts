import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Directus_operationsSumAggregate {

    @Field(() => Int, {nullable:true})
    position_x?: number;

    @Field(() => Int, {nullable:true})
    position_y?: number;
}
