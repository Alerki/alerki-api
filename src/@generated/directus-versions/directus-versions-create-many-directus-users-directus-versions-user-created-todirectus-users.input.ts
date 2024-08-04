import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class directus_versionsCreateManyDirectus_users_directus_versions_user_createdTodirectus_usersInput {
  @Field(() => String, { nullable: false })
  id!: string;

  @Field(() => String, { nullable: false })
  key!: string;

  @Field(() => String, { nullable: true })
  name?: string;

  @Field(() => String, { nullable: false })
  collection!: string;

  @Field(() => String, { nullable: false })
  item!: string;

  @Field(() => String, { nullable: true })
  hash?: string;

  @Field(() => Date, { nullable: true })
  date_created?: Date | string;

  @Field(() => Date, { nullable: true })
  date_updated?: Date | string;

  @Field(() => String, { nullable: true })
  user_updated?: string;
}
