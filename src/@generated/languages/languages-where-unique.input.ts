import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class languagesWhereUniqueInput {

    @Field(() => String, {nullable:true})
    code?: string;
}
