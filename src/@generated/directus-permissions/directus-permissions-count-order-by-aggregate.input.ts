import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class directus_permissionsCountOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    role?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    collection?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    action?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    permissions?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    validation?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    presets?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    fields?: keyof typeof SortOrder;
}
