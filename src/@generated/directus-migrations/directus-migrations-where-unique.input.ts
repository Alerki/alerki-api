import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class directus_migrationsWhereUniqueInput {
  @Field(() => String, { nullable: true })
  version?: string;
}
