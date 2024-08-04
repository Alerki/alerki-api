import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { UuidNullableFilter } from '../prisma/uuid-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';

@InputType()
export class directus_sessionsScalarWhereInput {
  @Field(() => [directus_sessionsScalarWhereInput], { nullable: true })
  AND?: Array<directus_sessionsScalarWhereInput>;

  @Field(() => [directus_sessionsScalarWhereInput], { nullable: true })
  OR?: Array<directus_sessionsScalarWhereInput>;

  @Field(() => [directus_sessionsScalarWhereInput], { nullable: true })
  NOT?: Array<directus_sessionsScalarWhereInput>;

  @Field(() => StringFilter, { nullable: true })
  token?: StringFilter;

  @Field(() => UuidNullableFilter, { nullable: true })
  user?: UuidNullableFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  expires?: DateTimeFilter;

  @Field(() => StringNullableFilter, { nullable: true })
  ip?: StringNullableFilter;

  @Field(() => StringNullableFilter, { nullable: true })
  user_agent?: StringNullableFilter;

  @Field(() => UuidNullableFilter, { nullable: true })
  share?: UuidNullableFilter;

  @Field(() => StringNullableFilter, { nullable: true })
  origin?: StringNullableFilter;
}
