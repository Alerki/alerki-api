import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ServiceWhereInput } from './service-where.input';

@InputType()
export class ServiceRelationFilter {

    @Field(() => ServiceWhereInput, {nullable:true})
    is?: ServiceWhereInput;

    @Field(() => ServiceWhereInput, {nullable:true})
    isNot?: ServiceWhereInput;
}
