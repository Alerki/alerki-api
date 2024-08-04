import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class directus_extensionsWhereUniqueInput {
  @Field(() => String, { nullable: true })
  id?: string;
}
