import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ClientProfileWhereInput } from './client-profile-where.input';
import { Type } from 'class-transformer';
import { ClientProfileOrderByWithAggregationInput } from './client-profile-order-by-with-aggregation.input';
import { ClientProfileScalarFieldEnum } from './client-profile-scalar-field.enum';
import { ClientProfileScalarWhereWithAggregatesInput } from './client-profile-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ClientProfileCountAggregateInput } from './client-profile-count-aggregate.input';
import { ClientProfileMinAggregateInput } from './client-profile-min-aggregate.input';
import { ClientProfileMaxAggregateInput } from './client-profile-max-aggregate.input';

@ArgsType()
export class ClientProfileGroupByArgs {

    @Field(() => ClientProfileWhereInput, {nullable:true})
    @Type(() => ClientProfileWhereInput)
    where?: ClientProfileWhereInput;

    @Field(() => [ClientProfileOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ClientProfileOrderByWithAggregationInput>;

    @Field(() => [ClientProfileScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof ClientProfileScalarFieldEnum>;

    @Field(() => ClientProfileScalarWhereWithAggregatesInput, {nullable:true})
    having?: ClientProfileScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ClientProfileCountAggregateInput, {nullable:true})
    _count?: ClientProfileCountAggregateInput;

    @Field(() => ClientProfileMinAggregateInput, {nullable:true})
    _min?: ClientProfileMinAggregateInput;

    @Field(() => ClientProfileMaxAggregateInput, {nullable:true})
    _max?: ClientProfileMaxAggregateInput;
}
