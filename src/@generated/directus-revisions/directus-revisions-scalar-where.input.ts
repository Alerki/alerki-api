import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { JsonNullableFilter } from '../prisma/json-nullable-filter.input';
import { Type } from 'class-transformer';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { UuidNullableFilter } from '../prisma/uuid-nullable-filter.input';

@InputType()
export class directus_revisionsScalarWhereInput {
  @Field(() => [directus_revisionsScalarWhereInput], { nullable: true })
  AND?: Array<directus_revisionsScalarWhereInput>;

  @Field(() => [directus_revisionsScalarWhereInput], { nullable: true })
  OR?: Array<directus_revisionsScalarWhereInput>;

  @Field(() => [directus_revisionsScalarWhereInput], { nullable: true })
  NOT?: Array<directus_revisionsScalarWhereInput>;

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
}
