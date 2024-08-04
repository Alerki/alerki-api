import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UuidFilter } from '../prisma/uuid-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { UuidNullableFilter } from '../prisma/uuid-nullable-filter.input';

@InputType()
export class directus_dashboardsScalarWhereInput {
  @Field(() => [directus_dashboardsScalarWhereInput], { nullable: true })
  AND?: Array<directus_dashboardsScalarWhereInput>;

  @Field(() => [directus_dashboardsScalarWhereInput], { nullable: true })
  OR?: Array<directus_dashboardsScalarWhereInput>;

  @Field(() => [directus_dashboardsScalarWhereInput], { nullable: true })
  NOT?: Array<directus_dashboardsScalarWhereInput>;

  @Field(() => UuidFilter, { nullable: true })
  id?: UuidFilter;

  @Field(() => StringFilter, { nullable: true })
  name?: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  icon?: StringFilter;

  @Field(() => StringNullableFilter, { nullable: true })
  note?: StringNullableFilter;

  @Field(() => DateTimeNullableFilter, { nullable: true })
  date_created?: DateTimeNullableFilter;

  @Field(() => UuidNullableFilter, { nullable: true })
  user_created?: UuidNullableFilter;

  @Field(() => StringNullableFilter, { nullable: true })
  color?: StringNullableFilter;
}
