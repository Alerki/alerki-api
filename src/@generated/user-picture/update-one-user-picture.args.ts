import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserPictureUpdateInput } from './user-picture-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { UserPictureWhereUniqueInput } from './user-picture-where-unique.input';

@ArgsType()
export class UpdateOneUserPictureArgs {
  @Field(() => UserPictureUpdateInput, { nullable: false })
  @Type(() => UserPictureUpdateInput)
  data!: UserPictureUpdateInput;

  @Field(() => UserPictureWhereUniqueInput, { nullable: false })
  @Type(() => UserPictureWhereUniqueInput)
  where!: Prisma.AtLeast<UserPictureWhereUniqueInput, 'id'>;
}
