import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class languagesCreateWithoutService_translationsInput {
  @Field(() => String, { nullable: false })
  code!: string;

  @Field(() => String, { nullable: true })
  name?: string;

  @Field(() => String, { nullable: true })
  direction?: string;
}
