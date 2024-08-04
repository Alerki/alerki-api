import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserPictureCreateWithoutUserInput } from './user-picture-create-without-user.input';
import { Type } from 'class-transformer';
import { UserPictureCreateOrConnectWithoutUserInput } from './user-picture-create-or-connect-without-user.input';
import { UserPictureUpsertWithoutUserInput } from './user-picture-upsert-without-user.input';
import { Prisma } from '@prisma/client';
import { UserPictureWhereUniqueInput } from './user-picture-where-unique.input';
import { UserPictureUpdateWithoutUserInput } from './user-picture-update-without-user.input';

@InputType()
export class UserPictureUpdateOneWithoutUserNestedInput {
  @Field(() => UserPictureCreateWithoutUserInput, { nullable: true })
  @Type(() => UserPictureCreateWithoutUserInput)
  create?: UserPictureCreateWithoutUserInput;

  @Field(() => UserPictureCreateOrConnectWithoutUserInput, { nullable: true })
  @Type(() => UserPictureCreateOrConnectWithoutUserInput)
  connectOrCreate?: UserPictureCreateOrConnectWithoutUserInput;

  @Field(() => UserPictureUpsertWithoutUserInput, { nullable: true })
  @Type(() => UserPictureUpsertWithoutUserInput)
  upsert?: UserPictureUpsertWithoutUserInput;

  @Field(() => Boolean, { nullable: true })
  disconnect?: boolean;

  @Field(() => Boolean, { nullable: true })
  delete?: boolean;

  @Field(() => UserPictureWhereUniqueInput, { nullable: true })
  @Type(() => UserPictureWhereUniqueInput)
  connect?: Prisma.AtLeast<UserPictureWhereUniqueInput, 'id'>;

  @Field(() => UserPictureUpdateWithoutUserInput, { nullable: true })
  @Type(() => UserPictureUpdateWithoutUserInput)
  update?: UserPictureUpdateWithoutUserInput;
}
