import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserPictureWhereInput } from './user-picture-where.input';

@InputType()
export class UserPictureRelationFilter {
  @Field(() => UserPictureWhereInput, { nullable: true })
  is?: UserPictureWhereInput;

  @Field(() => UserPictureWhereInput, { nullable: true })
  isNot?: UserPictureWhereInput;
}
