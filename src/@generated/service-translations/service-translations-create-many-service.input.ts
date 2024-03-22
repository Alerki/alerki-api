import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class Service_translationsCreateManyServiceInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    languages_id?: string;

    @Field(() => String, {nullable:false})
    name!: string;
}
