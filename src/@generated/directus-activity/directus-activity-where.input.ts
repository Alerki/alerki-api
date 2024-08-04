import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { UuidNullableFilter } from '../prisma/uuid-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { Directus_revisionsListRelationFilter } from '../prisma/directus-revisions-list-relation-filter.input';

@InputType()
export class directus_activityWhereInput {
  @Field(() => [directus_activityWhereInput], { nullable: true })
  AND?: Array<directus_activityWhereInput>;

  @Field(() => [directus_activityWhereInput], { nullable: true })
  OR?: Array<directus_activityWhereInput>;

  @Field(() => [directus_activityWhereInput], { nullable: true })
  NOT?: Array<directus_activityWhereInput>;

  @Field(() => IntFilter, { nullable: true })
  id?: IntFilter;

  @Field(() => StringFilter, { nullable: true })
  action?: StringFilter;

  @Field(() => UuidNullableFilter, { nullable: true })
  user?: UuidNullableFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  timestamp?: DateTimeFilter;

  @Field(() => StringNullableFilter, { nullable: true })
  ip?: StringNullableFilter;

  @Field(() => StringNullableFilter, { nullable: true })
  user_agent?: StringNullableFilter;

  @Field(() => StringFilter, { nullable: true })
  collection?: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  item?: StringFilter;

  @Field(() => StringNullableFilter, { nullable: true })
  comment?: StringNullableFilter;

  @Field(() => StringNullableFilter, { nullable: true })
  origin?: StringNullableFilter;

  @Field(() => Directus_revisionsListRelationFilter, { nullable: true })
  directus_revisions?: Directus_revisionsListRelationFilter;
}
