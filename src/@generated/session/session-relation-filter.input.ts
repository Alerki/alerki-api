import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SessionWhereInput } from './session-where.input';

@InputType()
export class SessionRelationFilter {

    @Field(() => SessionWhereInput, {nullable:true})
    is?: SessionWhereInput;

    @Field(() => SessionWhereInput, {nullable:true})
    isNot?: SessionWhereInput;
}
