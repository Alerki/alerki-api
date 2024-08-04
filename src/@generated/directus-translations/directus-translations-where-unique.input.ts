import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class directus_translationsWhereUniqueInput {
  @Field(() => String, { nullable: true })
  id?: string;
}
