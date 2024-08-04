import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UuidFilter } from '../prisma/uuid-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { JsonNullableFilter } from '../prisma/json-nullable-filter.input';
import { UuidNullableFilter } from '../prisma/uuid-nullable-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { Directus_usersRelationFilter } from '../prisma/directus-users-relation-filter.input';
import { Directus_operationsListRelationFilter } from '../prisma/directus-operations-list-relation-filter.input';

@InputType()
export class directus_flowsWhereInput {
  @Field(() => [directus_flowsWhereInput], { nullable: true })
  AND?: Array<directus_flowsWhereInput>;

  @Field(() => [directus_flowsWhereInput], { nullable: true })
  OR?: Array<directus_flowsWhereInput>;

  @Field(() => [directus_flowsWhereInput], { nullable: true })
  NOT?: Array<directus_flowsWhereInput>;

  @Field(() => UuidFilter, { nullable: true })
  id?: UuidFilter;

  @Field(() => StringFilter, { nullable: true })
  name?: StringFilter;

  @Field(() => StringNullableFilter, { nullable: true })
  icon?: StringNullableFilter;

  @Field(() => StringNullableFilter, { nullable: true })
  color?: StringNullableFilter;

  @Field(() => StringNullableFilter, { nullable: true })
  description?: StringNullableFilter;

  @Field(() => StringFilter, { nullable: true })
  status?: StringFilter;

  @Field(() => StringNullableFilter, { nullable: true })
  trigger?: StringNullableFilter;

  @Field(() => StringNullableFilter, { nullable: true })
  accountability?: StringNullableFilter;

  @Field(() => JsonNullableFilter, { nullable: true })
  options?: JsonNullableFilter;

  @Field(() => UuidNullableFilter, { nullable: true })
  operation?: UuidNullableFilter;

  @Field(() => DateTimeNullableFilter, { nullable: true })
  date_created?: DateTimeNullableFilter;

  @Field(() => UuidNullableFilter, { nullable: true })
  user_created?: UuidNullableFilter;

  @Field(() => Directus_usersRelationFilter, { nullable: true })
  directus_users?: Directus_usersRelationFilter;

  @Field(() => Directus_operationsListRelationFilter, { nullable: true })
  directus_operations?: Directus_operationsListRelationFilter;
}
