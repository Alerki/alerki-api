import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MasterProfileWhereInput } from './master-profile-where.input';
import { Type } from 'class-transformer';
import { MasterProfileOrderByWithAggregationInput } from './master-profile-order-by-with-aggregation.input';
import { MasterProfileScalarFieldEnum } from './master-profile-scalar-field.enum';
import { MasterProfileScalarWhereWithAggregatesInput } from './master-profile-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { MasterProfileCountAggregateInput } from './master-profile-count-aggregate.input';
import { MasterProfileMinAggregateInput } from './master-profile-min-aggregate.input';
import { MasterProfileMaxAggregateInput } from './master-profile-max-aggregate.input';

@ArgsType()
export class MasterProfileGroupByArgs {

    @Field(() => MasterProfileWhereInput, {nullable:true})
    @Type(() => MasterProfileWhereInput)
    where?: MasterProfileWhereInput;

    @Field(() => [MasterProfileOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<MasterProfileOrderByWithAggregationInput>;

    @Field(() => [MasterProfileScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof MasterProfileScalarFieldEnum>;

    @Field(() => MasterProfileScalarWhereWithAggregatesInput, {nullable:true})
    having?: MasterProfileScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => MasterProfileCountAggregateInput, {nullable:true})
    _count?: MasterProfileCountAggregateInput;

    @Field(() => MasterProfileMinAggregateInput, {nullable:true})
    _min?: MasterProfileMinAggregateInput;

    @Field(() => MasterProfileMaxAggregateInput, {nullable:true})
    _max?: MasterProfileMaxAggregateInput;
}
