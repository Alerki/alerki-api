import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';

@ObjectType()
export class directus_translations {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    language!: string;

    @Field(() => String, {nullable:false})
    key!: string;

    @Field(() => String, {nullable:false})
    value!: string;
}
