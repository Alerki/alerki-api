import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_filesWhereInput } from '../directus-files/directus-files-where.input';

@InputType()
export class Directus_filesListRelationFilter {

    @Field(() => directus_filesWhereInput, {nullable:true})
    every?: directus_filesWhereInput;

    @Field(() => directus_filesWhereInput, {nullable:true})
    some?: directus_filesWhereInput;

    @Field(() => directus_filesWhereInput, {nullable:true})
    none?: directus_filesWhereInput;
}
