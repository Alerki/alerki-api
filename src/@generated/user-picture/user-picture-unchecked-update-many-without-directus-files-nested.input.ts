import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserPictureCreateWithoutDirectus_filesInput } from './user-picture-create-without-directus-files.input';
import { Type } from 'class-transformer';
import { UserPictureCreateOrConnectWithoutDirectus_filesInput } from './user-picture-create-or-connect-without-directus-files.input';
import { UserPictureUpsertWithWhereUniqueWithoutDirectus_filesInput } from './user-picture-upsert-with-where-unique-without-directus-files.input';
import { UserPictureCreateManyDirectus_filesInputEnvelope } from './user-picture-create-many-directus-files-input-envelope.input';
import { Prisma } from '@prisma/client';
import { UserPictureWhereUniqueInput } from './user-picture-where-unique.input';
import { UserPictureUpdateWithWhereUniqueWithoutDirectus_filesInput } from './user-picture-update-with-where-unique-without-directus-files.input';
import { UserPictureUpdateManyWithWhereWithoutDirectus_filesInput } from './user-picture-update-many-with-where-without-directus-files.input';
import { UserPictureScalarWhereInput } from './user-picture-scalar-where.input';

@InputType()
export class UserPictureUncheckedUpdateManyWithoutDirectus_filesNestedInput {
  @Field(() => [UserPictureCreateWithoutDirectus_filesInput], {
    nullable: true,
  })
  @Type(() => UserPictureCreateWithoutDirectus_filesInput)
  create?: Array<UserPictureCreateWithoutDirectus_filesInput>;

  @Field(() => [UserPictureCreateOrConnectWithoutDirectus_filesInput], {
    nullable: true,
  })
  @Type(() => UserPictureCreateOrConnectWithoutDirectus_filesInput)
  connectOrCreate?: Array<UserPictureCreateOrConnectWithoutDirectus_filesInput>;

  @Field(() => [UserPictureUpsertWithWhereUniqueWithoutDirectus_filesInput], {
    nullable: true,
  })
  @Type(() => UserPictureUpsertWithWhereUniqueWithoutDirectus_filesInput)
  upsert?: Array<UserPictureUpsertWithWhereUniqueWithoutDirectus_filesInput>;

  @Field(() => UserPictureCreateManyDirectus_filesInputEnvelope, {
    nullable: true,
  })
  @Type(() => UserPictureCreateManyDirectus_filesInputEnvelope)
  createMany?: UserPictureCreateManyDirectus_filesInputEnvelope;

  @Field(() => [UserPictureWhereUniqueInput], { nullable: true })
  @Type(() => UserPictureWhereUniqueInput)
  set?: Array<Prisma.AtLeast<UserPictureWhereUniqueInput, 'id'>>;

  @Field(() => [UserPictureWhereUniqueInput], { nullable: true })
  @Type(() => UserPictureWhereUniqueInput)
  disconnect?: Array<Prisma.AtLeast<UserPictureWhereUniqueInput, 'id'>>;

  @Field(() => [UserPictureWhereUniqueInput], { nullable: true })
  @Type(() => UserPictureWhereUniqueInput)
  delete?: Array<Prisma.AtLeast<UserPictureWhereUniqueInput, 'id'>>;

  @Field(() => [UserPictureWhereUniqueInput], { nullable: true })
  @Type(() => UserPictureWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<UserPictureWhereUniqueInput, 'id'>>;

  @Field(() => [UserPictureUpdateWithWhereUniqueWithoutDirectus_filesInput], {
    nullable: true,
  })
  @Type(() => UserPictureUpdateWithWhereUniqueWithoutDirectus_filesInput)
  update?: Array<UserPictureUpdateWithWhereUniqueWithoutDirectus_filesInput>;

  @Field(() => [UserPictureUpdateManyWithWhereWithoutDirectus_filesInput], {
    nullable: true,
  })
  @Type(() => UserPictureUpdateManyWithWhereWithoutDirectus_filesInput)
  updateMany?: Array<UserPictureUpdateManyWithWhereWithoutDirectus_filesInput>;

  @Field(() => [UserPictureScalarWhereInput], { nullable: true })
  @Type(() => UserPictureScalarWhereInput)
  deleteMany?: Array<UserPictureScalarWhereInput>;
}
