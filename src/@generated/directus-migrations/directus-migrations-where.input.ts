import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';

@InputType()
export class directus_migrationsWhereInput {
  @Field(() => [directus_migrationsWhereInput], { nullable: true })
  AND?: Array<directus_migrationsWhereInput>;

  @Field(() => [directus_migrationsWhereInput], { nullable: true })
  OR?: Array<directus_migrationsWhereInput>;

  @Field(() => [directus_migrationsWhereInput], { nullable: true })
  NOT?: Array<directus_migrationsWhereInput>;

  @Field(() => StringFilter, { nullable: true })
  version?: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  name?: StringFilter;

  @Field(() => DateTimeNullableFilter, { nullable: true })
  timestamp?: DateTimeNullableFilter;
}
