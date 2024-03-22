import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NotificationWhereInput } from './notification-where.input';
import { Type } from 'class-transformer';
import { NotificationOrderByWithAggregationInput } from './notification-order-by-with-aggregation.input';
import { NotificationScalarFieldEnum } from './notification-scalar-field.enum';
import { NotificationScalarWhereWithAggregatesInput } from './notification-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { NotificationCountAggregateInput } from './notification-count-aggregate.input';
import { NotificationMinAggregateInput } from './notification-min-aggregate.input';
import { NotificationMaxAggregateInput } from './notification-max-aggregate.input';

@ArgsType()
export class NotificationGroupByArgs {

    @Field(() => NotificationWhereInput, {nullable:true})
    @Type(() => NotificationWhereInput)
    where?: NotificationWhereInput;

    @Field(() => [NotificationOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<NotificationOrderByWithAggregationInput>;

    @Field(() => [NotificationScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof NotificationScalarFieldEnum>;

    @Field(() => NotificationScalarWhereWithAggregatesInput, {nullable:true})
    having?: NotificationScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => NotificationCountAggregateInput, {nullable:true})
    _count?: NotificationCountAggregateInput;

    @Field(() => NotificationMinAggregateInput, {nullable:true})
    _min?: NotificationMinAggregateInput;

    @Field(() => NotificationMaxAggregateInput, {nullable:true})
    _max?: NotificationMaxAggregateInput;
}
