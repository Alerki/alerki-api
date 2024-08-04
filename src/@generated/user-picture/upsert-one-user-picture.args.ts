import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserPictureWhereUniqueInput } from './user-picture-where-unique.input';
import { Type } from 'class-transformer';
import { UserPictureCreateInput } from './user-picture-create.input';
import { UserPictureUpdateInput } from './user-picture-update.input';

@ArgsType()
export class UpsertOneUserPictureArgs {
  @Field(() => UserPictureWhereUniqueInput, { nullable: false })
  @Type(() => UserPictureWhereUniqueInput)
  where!: Prisma.AtLeast<UserPictureWhereUniqueInput, 'id'>;

  @Field(() => UserPictureCreateInput, { nullable: false })
  @Type(() => UserPictureCreateInput)
  create!: UserPictureCreateInput;

  @Field(() => UserPictureUpdateInput, { nullable: false })
  @Type(() => UserPictureUpdateInput)
  update!: UserPictureUpdateInput;
}
