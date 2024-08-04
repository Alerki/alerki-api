import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class UserPictureWhereUniqueInput {
  @Field(() => String, { nullable: true })
  id?: string;
}
