import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class User_UserRolesMinAggregateInput {
  @Field(() => Boolean, { nullable: true })
  id?: true;

  @Field(() => Boolean, { nullable: true })
  User_id?: true;

  @Field(() => Boolean, { nullable: true })
  UserRoles_id?: true;
}
