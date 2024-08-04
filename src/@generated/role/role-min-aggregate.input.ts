import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class RoleMinAggregateInput {
  @Field(() => Boolean, { nullable: true })
  id?: true;
}
