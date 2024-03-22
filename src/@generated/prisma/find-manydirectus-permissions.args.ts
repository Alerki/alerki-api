import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_permissionsWhereInput } from '../directus-permissions/directus-permissions-where.input';
import { Type } from 'class-transformer';
import { directus_permissionsOrderByWithRelationAndSearchRelevanceInput } from '../directus-permissions/directus-permissions-order-by-with-relation-and-search-relevance.input';
import { directus_permissionsWhereUniqueInput } from '../directus-permissions/directus-permissions-where-unique.input';
import { Int } from '@nestjs/graphql';
import { Directus_permissionsScalarFieldEnum } from './directus-permissions-scalar-field.enum';

@ArgsType()
export class FindManydirectusPermissionsArgs {

    @Field(() => directus_permissionsWhereInput, {nullable:true})
    @Type(() => directus_permissionsWhereInput)
    where?: directus_permissionsWhereInput;

    @Field(() => [directus_permissionsOrderByWithRelationAndSearchRelevanceInput], {nullable:true})
    orderBy?: Array<directus_permissionsOrderByWithRelationAndSearchRelevanceInput>;

    @Field(() => directus_permissionsWhereUniqueInput, {nullable:true})
    cursor?: directus_permissionsWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [Directus_permissionsScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof Directus_permissionsScalarFieldEnum>;
}
