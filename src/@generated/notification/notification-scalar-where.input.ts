import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UuidFilter } from '../prisma/uuid-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';

@InputType()
export class NotificationScalarWhereInput {
  @Field(() => [NotificationScalarWhereInput], { nullable: true })
  AND?: Array<NotificationScalarWhereInput>;

  @Field(() => [NotificationScalarWhereInput], { nullable: true })
  OR?: Array<NotificationScalarWhereInput>;

  @Field(() => [NotificationScalarWhereInput], { nullable: true })
  NOT?: Array<NotificationScalarWhereInput>;

  @Field(() => UuidFilter, { nullable: true })
  id?: UuidFilter;

  @Field(() => DateTimeNullableFilter, { nullable: true })
  date_created?: DateTimeNullableFilter;

  @Field(() => DateTimeNullableFilter, { nullable: true })
  date_updated?: DateTimeNullableFilter;

  @Field(() => UuidFilter, { nullable: true })
  type?: UuidFilter;
}
