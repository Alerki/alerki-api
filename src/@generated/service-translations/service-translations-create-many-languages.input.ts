import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class Service_translationsCreateManyLanguagesInput {
  @Field(() => Int, { nullable: true })
  id?: number;

  @Field(() => String, { nullable: true })
  Service_id?: string;

  @Field(() => String, { nullable: false })
  name!: string;
}
