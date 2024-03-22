import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MasterServiceWhereInput } from './master-service-where.input';

@InputType()
export class MasterServiceListRelationFilter {

    @Field(() => MasterServiceWhereInput, {nullable:true})
    every?: MasterServiceWhereInput;

    @Field(() => MasterServiceWhereInput, {nullable:true})
    some?: MasterServiceWhereInput;

    @Field(() => MasterServiceWhereInput, {nullable:true})
    none?: MasterServiceWhereInput;
}
