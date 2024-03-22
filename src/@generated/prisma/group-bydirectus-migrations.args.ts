import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_migrationsWhereInput } from '../directus-migrations/directus-migrations-where.input';
import { Type } from 'class-transformer';
import { directus_migrationsOrderByWithAggregationInput } from '../directus-migrations/directus-migrations-order-by-with-aggregation.input';
import { Directus_migrationsScalarFieldEnum } from './directus-migrations-scalar-field.enum';
import { directus_migrationsScalarWhereWithAggregatesInput } from '../directus-migrations/directus-migrations-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupBydirectusMigrationsArgs {

    @Field(() => directus_migrationsWhereInput, {nullable:true})
    @Type(() => directus_migrationsWhereInput)
    where?: directus_migrationsWhereInput;

    @Field(() => [directus_migrationsOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<directus_migrationsOrderByWithAggregationInput>;

    @Field(() => [Directus_migrationsScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof Directus_migrationsScalarFieldEnum>;

    @Field(() => directus_migrationsScalarWhereWithAggregatesInput, {nullable:true})
    having?: directus_migrationsScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
