import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UuidFilter } from '../prisma/uuid-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { UuidNullableFilter } from '../prisma/uuid-nullable-filter.input';
import { Directus_usersRelationFilter } from '../prisma/directus-users-relation-filter.input';
import { Directus_panelsListRelationFilter } from '../prisma/directus-panels-list-relation-filter.input';

@InputType()
export class directus_dashboardsWhereInput {
  @Field(() => [directus_dashboardsWhereInput], { nullable: true })
  AND?: Array<directus_dashboardsWhereInput>;

  @Field(() => [directus_dashboardsWhereInput], { nullable: true })
  OR?: Array<directus_dashboardsWhereInput>;

  @Field(() => [directus_dashboardsWhereInput], { nullable: true })
  NOT?: Array<directus_dashboardsWhereInput>;

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

  @Field(() => Directus_usersRelationFilter, { nullable: true })
  directus_users?: Directus_usersRelationFilter;

  @Field(() => Directus_panelsListRelationFilter, { nullable: true })
  directus_panels?: Directus_panelsListRelationFilter;
}
