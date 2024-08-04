import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class directus_sessionsUncheckedCreateWithoutDirectus_sharesInput {
  @Field(() => String, { nullable: false })
  token!: string;

  @Field(() => String, { nullable: true })
  user?: string;

  @Field(() => Date, { nullable: false })
  expires!: Date | string;

  @Field(() => String, { nullable: true })
  ip?: string;

  @Field(() => String, { nullable: true })
  user_agent?: string;

  @Field(() => String, { nullable: true })
  origin?: string;
}
