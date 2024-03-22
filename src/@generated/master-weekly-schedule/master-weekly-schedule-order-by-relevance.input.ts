import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MasterWeeklyScheduleOrderByRelevanceFieldEnum } from './master-weekly-schedule-order-by-relevance-field.enum';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class MasterWeeklyScheduleOrderByRelevanceInput {

    @Field(() => [MasterWeeklyScheduleOrderByRelevanceFieldEnum], {nullable:false})
    fields!: Array<keyof typeof MasterWeeklyScheduleOrderByRelevanceFieldEnum>;

    @Field(() => SortOrder, {nullable:false})
    sort!: keyof typeof SortOrder;

    @Field(() => String, {nullable:false})
    search!: string;
}
