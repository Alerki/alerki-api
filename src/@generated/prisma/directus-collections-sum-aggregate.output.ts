import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Directus_collectionsSumAggregate {

    @Field(() => Int, {nullable:true})
    sort?: number;
}
