import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_filesWhereInput } from '../directus-files/directus-files-where.input';
import { Type } from 'class-transformer';
import { directus_filesOrderByWithRelationAndSearchRelevanceInput } from '../directus-files/directus-files-order-by-with-relation-and-search-relevance.input';
import { directus_filesWhereUniqueInput } from '../directus-files/directus-files-where-unique.input';
import { Int } from '@nestjs/graphql';
import { Directus_filesScalarFieldEnum } from './directus-files-scalar-field.enum';

@ArgsType()
export class FindManydirectusFilesArgs {

    @Field(() => directus_filesWhereInput, {nullable:true})
    @Type(() => directus_filesWhereInput)
    where?: directus_filesWhereInput;

    @Field(() => [directus_filesOrderByWithRelationAndSearchRelevanceInput], {nullable:true})
    orderBy?: Array<directus_filesOrderByWithRelationAndSearchRelevanceInput>;

    @Field(() => directus_filesWhereUniqueInput, {nullable:true})
    cursor?: directus_filesWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [Directus_filesScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof Directus_filesScalarFieldEnum>;
}
