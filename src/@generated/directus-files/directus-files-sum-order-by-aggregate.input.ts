import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class directus_filesSumOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    filesize?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    width?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    height?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    duration?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    focal_point_x?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    focal_point_y?: keyof typeof SortOrder;
}
