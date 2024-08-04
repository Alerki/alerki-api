import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Directus_rolesMinAggregate {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => String, { nullable: true })
  name?: string;

  @Field(() => String, { nullable: true })
  icon?: string;

  @Field(() => String, { nullable: true })
  description?: string;

  @Field(() => String, { nullable: true })
  ip_access?: string;

  @Field(() => Boolean, { nullable: true })
  enforce_tfa?: boolean;

  @Field(() => Boolean, { nullable: true })
  admin_access?: boolean;

  @Field(() => Boolean, { nullable: true })
  app_access?: boolean;
}
