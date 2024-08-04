import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { directus_users } from '../directus-users/directus-users.model';
import { Service_translations } from '../service-translations/service-translations.model';
import { ServiceCount } from './service-count.output';

@ObjectType()
export class Service {
  @Field(() => ID, { nullable: false })
  id!: string;

  @Field(() => String, { nullable: false, defaultValue: 'draft' })
  status!: string;

  @Field(() => Int, { nullable: true })
  sort!: number | null;

  @Field(() => String, { nullable: true })
  user_created!: string | null;

  @Field(() => Date, { nullable: true })
  date_created!: Date | null;

  @Field(() => String, { nullable: true })
  user_updated!: string | null;

  @Field(() => Date, { nullable: true })
  date_updated!: Date | null;

  @Field(() => directus_users, { nullable: true })
  directus_users_Service_user_createdTodirectus_users?: directus_users | null;

  @Field(() => directus_users, { nullable: true })
  directus_users_Service_user_updatedTodirectus_users?: directus_users | null;

  @Field(() => [Service_translations], { nullable: true })
  Service_translations?: Array<Service_translations>;

  @Field(() => ServiceCount, { nullable: false })
  _count?: ServiceCount;
}
