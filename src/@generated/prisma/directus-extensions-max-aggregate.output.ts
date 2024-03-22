import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Directus_extensionsMaxAggregate {

    @Field(() => Boolean, {nullable:true})
    enabled?: boolean;

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    folder?: string;

    @Field(() => String, {nullable:true})
    source?: string;

    @Field(() => String, {nullable:true})
    bundle?: string;
}
