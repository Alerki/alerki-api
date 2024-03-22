import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class CurrencyAvgAggregate {

    @Field(() => Float, {nullable:true})
    sort?: number;
}
