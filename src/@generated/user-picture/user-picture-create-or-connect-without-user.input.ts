import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserPictureWhereUniqueInput } from './user-picture-where-unique.input';
import { Type } from 'class-transformer';
import { UserPictureCreateWithoutUserInput } from './user-picture-create-without-user.input';

@InputType()
export class UserPictureCreateOrConnectWithoutUserInput {
  @Field(() => UserPictureWhereUniqueInput, { nullable: false })
  @Type(() => UserPictureWhereUniqueInput)
  where!: Prisma.AtLeast<UserPictureWhereUniqueInput, 'id'>;

  @Field(() => UserPictureCreateWithoutUserInput, { nullable: false })
  @Type(() => UserPictureCreateWithoutUserInput)
  create!: UserPictureCreateWithoutUserInput;
}
