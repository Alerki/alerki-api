import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { User_SessionWhereInput } from '../user-session/user-session-where.input';
import { Type } from 'class-transformer';
import { User_SessionOrderByWithRelationAndSearchRelevanceInput } from '../user-session/user-session-order-by-with-relation-and-search-relevance.input';
import { User_SessionWhereUniqueInput } from '../user-session/user-session-where-unique.input';
import { Int } from '@nestjs/graphql';
import { User_SessionScalarFieldEnum } from '../user-session/user-session-scalar-field.enum';

@ArgsType()
export class FindManyUserSessionArgs {

    @Field(() => User_SessionWhereInput, {nullable:true})
    @Type(() => User_SessionWhereInput)
    where?: User_SessionWhereInput;

    @Field(() => [User_SessionOrderByWithRelationAndSearchRelevanceInput], {nullable:true})
    orderBy?: Array<User_SessionOrderByWithRelationAndSearchRelevanceInput>;

    @Field(() => User_SessionWhereUniqueInput, {nullable:true})
    cursor?: User_SessionWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [User_SessionScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof User_SessionScalarFieldEnum>;
}
