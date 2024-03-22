import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClientProfileWhereInput } from './client-profile-where.input';

@InputType()
export class ClientProfileRelationFilter {

    @Field(() => ClientProfileWhereInput, {nullable:true})
    is?: ClientProfileWhereInput;

    @Field(() => ClientProfileWhereInput, {nullable:true})
    isNot?: ClientProfileWhereInput;
}
