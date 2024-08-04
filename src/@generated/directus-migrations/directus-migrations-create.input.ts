import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class directus_migrationsCreateInput {
  @Field(() => String, { nullable: false })
  version!: string;

  @Field(() => String, { nullable: false })
  name!: string;

  @Field(() => Date, { nullable: true })
  timestamp?: Date | string;
}
