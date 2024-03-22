import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class directus_operationsWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    resolve?: string;

    @Field(() => String, {nullable:true})
    reject?: string;
}
