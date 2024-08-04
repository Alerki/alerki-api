import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class directus_translationsCreateManyInput {
  @Field(() => String, { nullable: false })
  id!: string;

  @Field(() => String, { nullable: false })
  language!: string;

  @Field(() => String, { nullable: false })
  key!: string;

  @Field(() => String, { nullable: false })
  value!: string;
}
