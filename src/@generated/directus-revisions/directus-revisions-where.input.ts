import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { JsonNullableFilter } from '../prisma/json-nullable-filter.input';
import { Type } from 'class-transformer';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { UuidNullableFilter } from '../prisma/uuid-nullable-filter.input';
import { Directus_activityRelationFilter } from '../prisma/directus-activity-relation-filter.input';
import { Directus_revisionsRelationFilter } from '../prisma/directus-revisions-relation-filter.input';
import { Directus_revisionsListRelationFilter } from '../prisma/directus-revisions-list-relation-filter.input';
import { Directus_versionsRelationFilter } from '../prisma/directus-versions-relation-filter.input';

@InputType()
export class directus_revisionsWhereInput {
  @Field(() => [directus_revisionsWhereInput], { nullable: true })
  AND?: Array<directus_revisionsWhereInput>;

  @Field(() => [directus_revisionsWhereInput], { nullable: true })
  OR?: Array<directus_revisionsWhereInput>;

  @Field(() => [directus_revisionsWhereInput], { nullable: true })
  NOT?: Array<directus_revisionsWhereInput>;

  @Field(() => IntFilter, { nullable: true })
  id?: IntFilter;

  @Field(() => IntFilter, { nullable: true })
  activity?: IntFilter;

  @Field(() => StringFilter, { nullable: true })
  collection?: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  item?: StringFilter;

  @Field(() => JsonNullableFilter, { nullable: true })
  @Type(() => JsonNullableFilter)
  data?: JsonNullableFilter;

  @Field(() => JsonNullableFilter, { nullable: true })
  delta?: JsonNullableFilter;

  @Field(() => IntNullableFilter, { nullable: true })
  parent?: IntNullableFilter;

  @Field(() => UuidNullableFilter, { nullable: true })
  version?: UuidNullableFilter;

  @Field(() => Directus_activityRelationFilter, { nullable: true })
  directus_activity?: Directus_activityRelationFilter;

  @Field(() => Directus_revisionsRelationFilter, { nullable: true })
  directus_revisions?: Directus_revisionsRelationFilter;

  @Field(() => Directus_revisionsListRelationFilter, { nullable: true })
  other_directus_revisions?: Directus_revisionsListRelationFilter;

  @Field(() => Directus_versionsRelationFilter, { nullable: true })
  directus_versions?: Directus_versionsRelationFilter;
}
