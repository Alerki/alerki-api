import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NotificationTypeWhereInput } from './notification-type-where.input';
import { Type } from 'class-transformer';
import { NotificationTypeOrderByWithAggregationInput } from './notification-type-order-by-with-aggregation.input';
import { NotificationTypeScalarFieldEnum } from './notification-type-scalar-field.enum';
import { NotificationTypeScalarWhereWithAggregatesInput } from './notification-type-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { NotificationTypeCountAggregateInput } from './notification-type-count-aggregate.input';
import { NotificationTypeAvgAggregateInput } from './notification-type-avg-aggregate.input';
import { NotificationTypeSumAggregateInput } from './notification-type-sum-aggregate.input';
import { NotificationTypeMinAggregateInput } from './notification-type-min-aggregate.input';
import { NotificationTypeMaxAggregateInput } from './notification-type-max-aggregate.input';

@ArgsType()
export class NotificationTypeGroupByArgs {

    @Field(() => NotificationTypeWhereInput, {nullable:true})
    @Type(() => NotificationTypeWhereInput)
    where?: NotificationTypeWhereInput;

    @Field(() => [NotificationTypeOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<NotificationTypeOrderByWithAggregationInput>;

    @Field(() => [NotificationTypeScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof NotificationTypeScalarFieldEnum>;

    @Field(() => NotificationTypeScalarWhereWithAggregatesInput, {nullable:true})
    having?: NotificationTypeScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => NotificationTypeCountAggregateInput, {nullable:true})
    _count?: NotificationTypeCountAggregateInput;

    @Field(() => NotificationTypeAvgAggregateInput, {nullable:true})
    _avg?: NotificationTypeAvgAggregateInput;

    @Field(() => NotificationTypeSumAggregateInput, {nullable:true})
    _sum?: NotificationTypeSumAggregateInput;

    @Field(() => NotificationTypeMinAggregateInput, {nullable:true})
    _min?: NotificationTypeMinAggregateInput;

    @Field(() => NotificationTypeMaxAggregateInput, {nullable:true})
    _max?: NotificationTypeMaxAggregateInput;
}
