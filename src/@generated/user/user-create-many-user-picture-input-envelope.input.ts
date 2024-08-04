import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateManyUserPictureInput } from './user-create-many-user-picture.input';
import { Type } from 'class-transformer';

@InputType()
export class UserCreateManyUserPictureInputEnvelope {
  @Field(() => [UserCreateManyUserPictureInput], { nullable: false })
  @Type(() => UserCreateManyUserPictureInput)
  data!: Array<UserCreateManyUserPictureInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
