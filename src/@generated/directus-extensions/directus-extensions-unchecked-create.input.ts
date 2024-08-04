import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class directus_extensionsUncheckedCreateInput {
  @Field(() => Boolean, { nullable: true })
  enabled?: boolean;

  @Field(() => String, { nullable: false })
  id!: string;

  @Field(() => String, { nullable: false })
  folder!: string;

  @Field(() => String, { nullable: false })
  source!: string;

  @Field(() => String, { nullable: true })
  bundle?: string;
}
