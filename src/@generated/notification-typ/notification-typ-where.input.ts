import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';

@InputType()
export class NotificationTypWhereInput {
  @Field(() => [NotificationTypWhereInput], { nullable: true })
  AND?: Array<NotificationTypWhereInput>;

  @Field(() => [NotificationTypWhereInput], { nullable: true })
  OR?: Array<NotificationTypWhereInput>;

  @Field(() => [NotificationTypWhereInput], { nullable: true })
  NOT?: Array<NotificationTypWhereInput>;

  @Field(() => IntFilter, { nullable: true })
  id?: IntFilter;
}
