import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class User_UserRolesAvgAggregateInput {
  @Field(() => Boolean, { nullable: true })
  id?: true;
}
