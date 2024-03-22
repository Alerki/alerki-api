import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Directus_collectionsCount {

    @Field(() => Int, {nullable:false})
    other_directus_collections!: number;

    @Field(() => Int, {nullable:false})
    directus_shares!: number;

    @Field(() => Int, {nullable:false})
    directus_versions!: number;
}
