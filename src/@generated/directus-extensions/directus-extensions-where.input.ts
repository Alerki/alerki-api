import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BoolFilter } from '../prisma/bool-filter.input';
import { UuidFilter } from '../prisma/uuid-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { UuidNullableFilter } from '../prisma/uuid-nullable-filter.input';

@InputType()
export class directus_extensionsWhereInput {
  @Field(() => [directus_extensionsWhereInput], { nullable: true })
  AND?: Array<directus_extensionsWhereInput>;

  @Field(() => [directus_extensionsWhereInput], { nullable: true })
  OR?: Array<directus_extensionsWhereInput>;

  @Field(() => [directus_extensionsWhereInput], { nullable: true })
  NOT?: Array<directus_extensionsWhereInput>;

  @Field(() => BoolFilter, { nullable: true })
  enabled?: BoolFilter;

  @Field(() => UuidFilter, { nullable: true })
  id?: UuidFilter;

  @Field(() => StringFilter, { nullable: true })
  folder?: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  source?: StringFilter;

  @Field(() => UuidNullableFilter, { nullable: true })
  bundle?: UuidNullableFilter;
}
