import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Directus_sessionsMaxAggregate {

    @Field(() => String, {nullable:true})
    token?: string;

    @Field(() => String, {nullable:true})
    user?: string;

    @Field(() => Date, {nullable:true})
    expires?: Date | string;

    @Field(() => String, {nullable:true})
    ip?: string;

    @Field(() => String, {nullable:true})
    user_agent?: string;

    @Field(() => String, {nullable:true})
    share?: string;

    @Field(() => String, {nullable:true})
    origin?: string;
}
