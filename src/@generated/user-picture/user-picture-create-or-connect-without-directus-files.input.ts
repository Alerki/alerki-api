import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserPictureWhereUniqueInput } from './user-picture-where-unique.input';
import { Type } from 'class-transformer';
import { UserPictureCreateWithoutDirectus_filesInput } from './user-picture-create-without-directus-files.input';

@InputType()
export class UserPictureCreateOrConnectWithoutDirectus_filesInput {
  @Field(() => UserPictureWhereUniqueInput, { nullable: false })
  @Type(() => UserPictureWhereUniqueInput)
  where!: Prisma.AtLeast<UserPictureWhereUniqueInput, 'id'>;

  @Field(() => UserPictureCreateWithoutDirectus_filesInput, { nullable: false })
  @Type(() => UserPictureCreateWithoutDirectus_filesInput)
  create!: UserPictureCreateWithoutDirectus_filesInput;
}
