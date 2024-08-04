import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UuidFilter } from '../prisma/uuid-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { UuidNullableFilter } from '../prisma/uuid-nullable-filter.input';

@InputType()
export class directus_foldersScalarWhereInput {
  @Field(() => [directus_foldersScalarWhereInput], { nullable: true })
  AND?: Array<directus_foldersScalarWhereInput>;

  @Field(() => [directus_foldersScalarWhereInput], { nullable: true })
  OR?: Array<directus_foldersScalarWhereInput>;

  @Field(() => [directus_foldersScalarWhereInput], { nullable: true })
  NOT?: Array<directus_foldersScalarWhereInput>;

  @Field(() => UuidFilter, { nullable: true })
  id?: UuidFilter;

  @Field(() => StringFilter, { nullable: true })
  name?: StringFilter;

  @Field(() => UuidNullableFilter, { nullable: true })
  parent?: UuidNullableFilter;
}
