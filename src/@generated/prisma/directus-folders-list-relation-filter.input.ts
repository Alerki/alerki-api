import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_foldersWhereInput } from '../directus-folders/directus-folders-where.input';

@InputType()
export class Directus_foldersListRelationFilter {

    @Field(() => directus_foldersWhereInput, {nullable:true})
    every?: directus_foldersWhereInput;

    @Field(() => directus_foldersWhereInput, {nullable:true})
    some?: directus_foldersWhereInput;

    @Field(() => directus_foldersWhereInput, {nullable:true})
    none?: directus_foldersWhereInput;
}
