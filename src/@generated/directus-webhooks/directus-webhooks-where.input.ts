import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { Type } from 'class-transformer';
import { JsonNullableFilter } from '../prisma/json-nullable-filter.input';

@InputType()
export class directus_webhooksWhereInput {
  @Field(() => [directus_webhooksWhereInput], { nullable: true })
  AND?: Array<directus_webhooksWhereInput>;

  @Field(() => [directus_webhooksWhereInput], { nullable: true })
  OR?: Array<directus_webhooksWhereInput>;

  @Field(() => [directus_webhooksWhereInput], { nullable: true })
  NOT?: Array<directus_webhooksWhereInput>;

  @Field(() => IntFilter, { nullable: true })
  id?: IntFilter;

  @Field(() => StringFilter, { nullable: true })
  name?: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  method?: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  url?: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  status?: StringFilter;

  @Field(() => BoolFilter, { nullable: true })
  @Type(() => BoolFilter)
  data?: BoolFilter;

  @Field(() => StringFilter, { nullable: true })
  actions?: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  collections?: StringFilter;

  @Field(() => JsonNullableFilter, { nullable: true })
  headers?: JsonNullableFilter;
}
