import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_foldersWhereInput } from '../directus-folders/directus-folders-where.input';

@InputType()
export class Directus_foldersRelationFilter {

    @Field(() => directus_foldersWhereInput, {nullable:true})
    is?: directus_foldersWhereInput;

    @Field(() => directus_foldersWhereInput, {nullable:true})
    isNot?: directus_foldersWhereInput;
}
