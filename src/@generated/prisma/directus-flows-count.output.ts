import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Directus_flowsCount {

    @Field(() => Int, {nullable:false})
    directus_operations!: number;
}
