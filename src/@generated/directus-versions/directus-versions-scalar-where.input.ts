import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UuidFilter } from '../prisma/uuid-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { UuidNullableFilter } from '../prisma/uuid-nullable-filter.input';

@InputType()
export class directus_versionsScalarWhereInput {
  @Field(() => [directus_versionsScalarWhereInput], { nullable: true })
  AND?: Array<directus_versionsScalarWhereInput>;

  @Field(() => [directus_versionsScalarWhereInput], { nullable: true })
  OR?: Array<directus_versionsScalarWhereInput>;

  @Field(() => [directus_versionsScalarWhereInput], { nullable: true })
  NOT?: Array<directus_versionsScalarWhereInput>;

  @Field(() => UuidFilter, { nullable: true })
  id?: UuidFilter;

  @Field(() => StringFilter, { nullable: true })
  key?: StringFilter;

  @Field(() => StringNullableFilter, { nullable: true })
  name?: StringNullableFilter;

  @Field(() => StringFilter, { nullable: true })
  collection?: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  item?: StringFilter;

  @Field(() => StringNullableFilter, { nullable: true })
  hash?: StringNullableFilter;

  @Field(() => DateTimeNullableFilter, { nullable: true })
  date_created?: DateTimeNullableFilter;

  @Field(() => DateTimeNullableFilter, { nullable: true })
  date_updated?: DateTimeNullableFilter;

  @Field(() => UuidNullableFilter, { nullable: true })
  user_created?: UuidNullableFilter;

  @Field(() => UuidNullableFilter, { nullable: true })
  user_updated?: UuidNullableFilter;
}
