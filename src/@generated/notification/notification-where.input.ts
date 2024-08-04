import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UuidFilter } from '../prisma/uuid-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { NotificationTypeRelationFilter } from '../notification-type/notification-type-relation-filter.input';

@InputType()
export class NotificationWhereInput {
  @Field(() => [NotificationWhereInput], { nullable: true })
  AND?: Array<NotificationWhereInput>;

  @Field(() => [NotificationWhereInput], { nullable: true })
  OR?: Array<NotificationWhereInput>;

  @Field(() => [NotificationWhereInput], { nullable: true })
  NOT?: Array<NotificationWhereInput>;

  @Field(() => UuidFilter, { nullable: true })
  id?: UuidFilter;

  @Field(() => DateTimeNullableFilter, { nullable: true })
  date_created?: DateTimeNullableFilter;

  @Field(() => DateTimeNullableFilter, { nullable: true })
  date_updated?: DateTimeNullableFilter;

  @Field(() => UuidFilter, { nullable: true })
  type?: UuidFilter;

  @Field(() => NotificationTypeRelationFilter, { nullable: true })
  NotificationType?: NotificationTypeRelationFilter;
}
