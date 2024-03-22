import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_sessionsWhereInput } from '../directus-sessions/directus-sessions-where.input';
import { Type } from 'class-transformer';
import { directus_sessionsOrderByWithRelationAndSearchRelevanceInput } from '../directus-sessions/directus-sessions-order-by-with-relation-and-search-relevance.input';
import { directus_sessionsWhereUniqueInput } from '../directus-sessions/directus-sessions-where-unique.input';
import { Int } from '@nestjs/graphql';
import { Directus_sessionsScalarFieldEnum } from './directus-sessions-scalar-field.enum';

@ArgsType()
export class FindFirstdirectusSessionsArgs {

    @Field(() => directus_sessionsWhereInput, {nullable:true})
    @Type(() => directus_sessionsWhereInput)
    where?: directus_sessionsWhereInput;

    @Field(() => [directus_sessionsOrderByWithRelationAndSearchRelevanceInput], {nullable:true})
    orderBy?: Array<directus_sessionsOrderByWithRelationAndSearchRelevanceInput>;

    @Field(() => directus_sessionsWhereUniqueInput, {nullable:true})
    cursor?: directus_sessionsWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [Directus_sessionsScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof Directus_sessionsScalarFieldEnum>;
}
