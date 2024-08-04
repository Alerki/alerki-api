import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class User_UserRolesSumAggregateInput {
  @Field(() => Boolean, { nullable: true })
  id?: true;
}
