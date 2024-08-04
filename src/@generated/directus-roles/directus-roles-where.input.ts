import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UuidFilter } from '../prisma/uuid-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { Directus_permissionsListRelationFilter } from '../prisma/directus-permissions-list-relation-filter.input';
import { Directus_presetsListRelationFilter } from '../prisma/directus-presets-list-relation-filter.input';
import { Directus_sharesListRelationFilter } from '../prisma/directus-shares-list-relation-filter.input';
import { Directus_usersListRelationFilter } from '../prisma/directus-users-list-relation-filter.input';

@InputType()
export class directus_rolesWhereInput {
  @Field(() => [directus_rolesWhereInput], { nullable: true })
  AND?: Array<directus_rolesWhereInput>;

  @Field(() => [directus_rolesWhereInput], { nullable: true })
  OR?: Array<directus_rolesWhereInput>;

  @Field(() => [directus_rolesWhereInput], { nullable: true })
  NOT?: Array<directus_rolesWhereInput>;

  @Field(() => UuidFilter, { nullable: true })
  id?: UuidFilter;

  @Field(() => StringFilter, { nullable: true })
  name?: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  icon?: StringFilter;

  @Field(() => StringNullableFilter, { nullable: true })
  description?: StringNullableFilter;

  @Field(() => StringNullableFilter, { nullable: true })
  ip_access?: StringNullableFilter;

  @Field(() => BoolFilter, { nullable: true })
  enforce_tfa?: BoolFilter;

  @Field(() => BoolFilter, { nullable: true })
  admin_access?: BoolFilter;

  @Field(() => BoolFilter, { nullable: true })
  app_access?: BoolFilter;

  @Field(() => Directus_permissionsListRelationFilter, { nullable: true })
  directus_permissions?: Directus_permissionsListRelationFilter;

  @Field(() => Directus_presetsListRelationFilter, { nullable: true })
  directus_presets?: Directus_presetsListRelationFilter;

  @Field(() => Directus_sharesListRelationFilter, { nullable: true })
  directus_shares?: Directus_sharesListRelationFilter;

  @Field(() => Directus_usersListRelationFilter, { nullable: true })
  directus_users?: Directus_usersListRelationFilter;
}
