import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class directus_sessionsWhereUniqueInput {
  @Field(() => String, { nullable: true })
  token?: string;
}
