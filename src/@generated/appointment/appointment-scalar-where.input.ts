import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UuidFilter } from '../prisma/uuid-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';

@InputType()
export class AppointmentScalarWhereInput {
  @Field(() => [AppointmentScalarWhereInput], { nullable: true })
  AND?: Array<AppointmentScalarWhereInput>;

  @Field(() => [AppointmentScalarWhereInput], { nullable: true })
  OR?: Array<AppointmentScalarWhereInput>;

  @Field(() => [AppointmentScalarWhereInput], { nullable: true })
  NOT?: Array<AppointmentScalarWhereInput>;

  @Field(() => UuidFilter, { nullable: true })
  id?: UuidFilter;

  @Field(() => DateTimeNullableFilter, { nullable: true })
  date_created?: DateTimeNullableFilter;

  @Field(() => DateTimeNullableFilter, { nullable: true })
  date_updated?: DateTimeNullableFilter;

  @Field(() => UuidFilter, { nullable: true })
  masterService?: UuidFilter;

  @Field(() => UuidFilter, { nullable: true })
  clientProfile?: UuidFilter;

  @Field(() => UuidFilter, { nullable: true })
  masterProfile?: UuidFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  duration?: DateTimeFilter;

  @Field(() => IntFilter, { nullable: true })
  price?: IntFilter;

  @Field(() => UuidFilter, { nullable: true })
  currency?: UuidFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  startAt?: DateTimeFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  endAt?: DateTimeFilter;

  @Field(() => BoolFilter, { nullable: true })
  confirmed?: BoolFilter;

  @Field(() => BoolFilter, { nullable: true })
  cancelled?: BoolFilter;
}
