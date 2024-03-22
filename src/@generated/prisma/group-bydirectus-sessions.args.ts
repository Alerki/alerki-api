import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_sessionsWhereInput } from '../directus-sessions/directus-sessions-where.input';
import { Type } from 'class-transformer';
import { directus_sessionsOrderByWithAggregationInput } from '../directus-sessions/directus-sessions-order-by-with-aggregation.input';
import { Directus_sessionsScalarFieldEnum } from './directus-sessions-scalar-field.enum';
import { directus_sessionsScalarWhereWithAggregatesInput } from '../directus-sessions/directus-sessions-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupBydirectusSessionsArgs {

    @Field(() => directus_sessionsWhereInput, {nullable:true})
    @Type(() => directus_sessionsWhereInput)
    where?: directus_sessionsWhereInput;

    @Field(() => [directus_sessionsOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<directus_sessionsOrderByWithAggregationInput>;

    @Field(() => [Directus_sessionsScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof Directus_sessionsScalarFieldEnum>;

    @Field(() => directus_sessionsScalarWhereWithAggregatesInput, {nullable:true})
    having?: directus_sessionsScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
