import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { directus_sessions } from '../directus-sessions/directus-sessions.model';
import { directus_collections } from '../directus-collections/directus-collections.model';
import { directus_roles } from '../directus-roles/directus-roles.model';
import { directus_users } from '../directus-users/directus-users.model';
import { Directus_sharesCount } from '../prisma/directus-shares-count.output';

@ObjectType()
export class directus_shares {
  @Field(() => ID, { nullable: false })
  id!: string;

  @Field(() => String, { nullable: true })
  name!: string | null;

  @Field(() => String, { nullable: false })
  collection!: string;

  @Field(() => String, { nullable: false })
  item!: string;

  @Field(() => String, { nullable: true })
  role!: string | null;

  @Field(() => String, { nullable: true })
  password!: string | null;

  @Field(() => String, { nullable: true })
  user_created!: string | null;

  @Field(() => Date, { nullable: true })
  date_created!: Date | null;

  @Field(() => Date, { nullable: true })
  date_start!: Date | null;

  @Field(() => Date, { nullable: true })
  date_end!: Date | null;

  @Field(() => Int, { nullable: true, defaultValue: 0 })
  times_used!: number | null;

  @Field(() => Int, { nullable: true })
  max_uses!: number | null;

  @Field(() => [directus_sessions], { nullable: true })
  directus_sessions?: Array<directus_sessions>;

  @Field(() => directus_collections, { nullable: false })
  directus_collections?: directus_collections;

  @Field(() => directus_roles, { nullable: true })
  directus_roles?: directus_roles | null;

  @Field(() => directus_users, { nullable: true })
  directus_users?: directus_users | null;

  @Field(() => Directus_sharesCount, { nullable: false })
  _count?: Directus_sharesCount;
}
