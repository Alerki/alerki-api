import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Directus_activityCount {

    @Field(() => Int, {nullable:false})
    directus_revisions!: number;
}
