import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class Service_translationsAvgAggregateInput {
  @Field(() => Boolean, { nullable: true })
  id?: true;
}
