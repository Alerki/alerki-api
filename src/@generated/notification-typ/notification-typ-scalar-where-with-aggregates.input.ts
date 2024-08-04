import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';

@InputType()
export class NotificationTypScalarWhereWithAggregatesInput {
  @Field(() => [NotificationTypScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  AND?: Array<NotificationTypScalarWhereWithAggregatesInput>;

  @Field(() => [NotificationTypScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  OR?: Array<NotificationTypScalarWhereWithAggregatesInput>;

  @Field(() => [NotificationTypScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  NOT?: Array<NotificationTypScalarWhereWithAggregatesInput>;

  @Field(() => IntWithAggregatesFilter, { nullable: true })
  id?: IntWithAggregatesFilter;
}
