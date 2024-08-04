import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { UuidFilter } from '../prisma/uuid-filter.input';
import { UuidNullableFilter } from '../prisma/uuid-nullable-filter.input';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class directus_notificationsScalarWhereInput {
  @Field(() => [directus_notificationsScalarWhereInput], { nullable: true })
  AND?: Array<directus_notificationsScalarWhereInput>;

  @Field(() => [directus_notificationsScalarWhereInput], { nullable: true })
  OR?: Array<directus_notificationsScalarWhereInput>;

  @Field(() => [directus_notificationsScalarWhereInput], { nullable: true })
  NOT?: Array<directus_notificationsScalarWhereInput>;

  @Field(() => IntFilter, { nullable: true })
  id?: IntFilter;

  @Field(() => DateTimeNullableFilter, { nullable: true })
  timestamp?: DateTimeNullableFilter;

  @Field(() => StringNullableFilter, { nullable: true })
  status?: StringNullableFilter;

  @Field(() => UuidFilter, { nullable: true })
  recipient?: UuidFilter;

  @Field(() => UuidNullableFilter, { nullable: true })
  sender?: UuidNullableFilter;

  @Field(() => StringFilter, { nullable: true })
  subject?: StringFilter;

  @Field(() => StringNullableFilter, { nullable: true })
  message?: StringNullableFilter;

  @Field(() => StringNullableFilter, { nullable: true })
  collection?: StringNullableFilter;

  @Field(() => StringNullableFilter, { nullable: true })
  item?: StringNullableFilter;
}
