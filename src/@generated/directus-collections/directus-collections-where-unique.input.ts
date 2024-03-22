import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class directus_collectionsWhereUniqueInput {

    @Field(() => String, {nullable:true})
    collection?: string;
}
