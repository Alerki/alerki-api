import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AppointmentOrderByRelevanceFieldEnum } from './appointment-order-by-relevance-field.enum';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class AppointmentOrderByRelevanceInput {
  @Field(() => [AppointmentOrderByRelevanceFieldEnum], { nullable: false })
  fields!: Array<keyof typeof AppointmentOrderByRelevanceFieldEnum>;

  @Field(() => SortOrder, { nullable: false })
  sort!: keyof typeof SortOrder;

  @Field(() => String, { nullable: false })
  search!: string;
}
