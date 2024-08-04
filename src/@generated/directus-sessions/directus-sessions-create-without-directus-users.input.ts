import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_sharesCreateNestedOneWithoutDirectus_sessionsInput } from '../directus-shares/directus-shares-create-nested-one-without-directus-sessions.input';

@InputType()
export class directus_sessionsCreateWithoutDirectus_usersInput {
  @Field(() => String, { nullable: false })
  token!: string;

  @Field(() => Date, { nullable: false })
  expires!: Date | string;

  @Field(() => String, { nullable: true })
  ip?: string;

  @Field(() => String, { nullable: true })
  user_agent?: string;

  @Field(() => String, { nullable: true })
  origin?: string;

  @Field(() => directus_sharesCreateNestedOneWithoutDirectus_sessionsInput, {
    nullable: true,
  })
  directus_shares?: directus_sharesCreateNestedOneWithoutDirectus_sessionsInput;
}
