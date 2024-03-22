import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_filesWhereInput } from '../directus-files/directus-files-where.input';

@InputType()
export class Directus_filesRelationFilter {

    @Field(() => directus_filesWhereInput, {nullable:true})
    is?: directus_filesWhereInput;

    @Field(() => directus_filesWhereInput, {nullable:true})
    isNot?: directus_filesWhereInput;
}
