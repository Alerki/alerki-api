import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_filesCreateWithoutUserPictureInput } from './directus-files-create-without-user-picture.input';
import { Type } from 'class-transformer';
import { directus_filesCreateOrConnectWithoutUserPictureInput } from './directus-files-create-or-connect-without-user-picture.input';
import { directus_filesUpsertWithoutUserPictureInput } from './directus-files-upsert-without-user-picture.input';
import { Prisma } from '@prisma/client';
import { directus_filesWhereUniqueInput } from './directus-files-where-unique.input';
import { directus_filesUpdateWithoutUserPictureInput } from './directus-files-update-without-user-picture.input';

@InputType()
export class directus_filesUpdateOneRequiredWithoutUserPictureNestedInput {
  @Field(() => directus_filesCreateWithoutUserPictureInput, { nullable: true })
  @Type(() => directus_filesCreateWithoutUserPictureInput)
  create?: directus_filesCreateWithoutUserPictureInput;

  @Field(() => directus_filesCreateOrConnectWithoutUserPictureInput, {
    nullable: true,
  })
  @Type(() => directus_filesCreateOrConnectWithoutUserPictureInput)
  connectOrCreate?: directus_filesCreateOrConnectWithoutUserPictureInput;

  @Field(() => directus_filesUpsertWithoutUserPictureInput, { nullable: true })
  @Type(() => directus_filesUpsertWithoutUserPictureInput)
  upsert?: directus_filesUpsertWithoutUserPictureInput;

  @Field(() => directus_filesWhereUniqueInput, { nullable: true })
  @Type(() => directus_filesWhereUniqueInput)
  connect?: Prisma.AtLeast<directus_filesWhereUniqueInput, 'id'>;

  @Field(() => directus_filesUpdateWithoutUserPictureInput, { nullable: true })
  @Type(() => directus_filesUpdateWithoutUserPictureInput)
  update?: directus_filesUpdateWithoutUserPictureInput;
}
