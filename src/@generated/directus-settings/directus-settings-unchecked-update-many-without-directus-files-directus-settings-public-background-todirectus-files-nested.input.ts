import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_settingsCreateWithoutDirectus_files_directus_settings_public_backgroundTodirectus_filesInput } from './directus-settings-create-without-directus-files-directus-settings-public-background-todirectus-files.input';
import { Type } from 'class-transformer';
import { directus_settingsCreateOrConnectWithoutDirectus_files_directus_settings_public_backgroundTodirectus_filesInput } from './directus-settings-create-or-connect-without-directus-files-directus-settings-public-background-todirectus-files.input';
import { directus_settingsUpsertWithWhereUniqueWithoutDirectus_files_directus_settings_public_backgroundTodirectus_filesInput } from './directus-settings-upsert-with-where-unique-without-directus-files-directus-settings-public-background-todirectus-files.input';
import { directus_settingsCreateManyDirectus_files_directus_settings_public_backgroundTodirectus_filesInputEnvelope } from './directus-settings-create-many-directus-files-directus-settings-public-background-todirectus-files-input-envelope.input';
import { Prisma } from '@prisma/client';
import { directus_settingsWhereUniqueInput } from './directus-settings-where-unique.input';
import { directus_settingsUpdateWithWhereUniqueWithoutDirectus_files_directus_settings_public_backgroundTodirectus_filesInput } from './directus-settings-update-with-where-unique-without-directus-files-directus-settings-public-background-todirectus-files.input';
import { directus_settingsUpdateManyWithWhereWithoutDirectus_files_directus_settings_public_backgroundTodirectus_filesInput } from './directus-settings-update-many-with-where-without-directus-files-directus-settings-public-background-todirectus-files.input';
import { directus_settingsScalarWhereInput } from './directus-settings-scalar-where.input';

@InputType()
export class directus_settingsUncheckedUpdateManyWithoutDirectus_files_directus_settings_public_backgroundTodirectus_filesNestedInput {
  @Field(
    () => [
      directus_settingsCreateWithoutDirectus_files_directus_settings_public_backgroundTodirectus_filesInput,
    ],
    { nullable: true },
  )
  @Type(
    () =>
      directus_settingsCreateWithoutDirectus_files_directus_settings_public_backgroundTodirectus_filesInput,
  )
  create?: Array<directus_settingsCreateWithoutDirectus_files_directus_settings_public_backgroundTodirectus_filesInput>;

  @Field(
    () => [
      directus_settingsCreateOrConnectWithoutDirectus_files_directus_settings_public_backgroundTodirectus_filesInput,
    ],
    { nullable: true },
  )
  @Type(
    () =>
      directus_settingsCreateOrConnectWithoutDirectus_files_directus_settings_public_backgroundTodirectus_filesInput,
  )
  connectOrCreate?: Array<directus_settingsCreateOrConnectWithoutDirectus_files_directus_settings_public_backgroundTodirectus_filesInput>;

  @Field(
    () => [
      directus_settingsUpsertWithWhereUniqueWithoutDirectus_files_directus_settings_public_backgroundTodirectus_filesInput,
    ],
    { nullable: true },
  )
  @Type(
    () =>
      directus_settingsUpsertWithWhereUniqueWithoutDirectus_files_directus_settings_public_backgroundTodirectus_filesInput,
  )
  upsert?: Array<directus_settingsUpsertWithWhereUniqueWithoutDirectus_files_directus_settings_public_backgroundTodirectus_filesInput>;

  @Field(
    () =>
      directus_settingsCreateManyDirectus_files_directus_settings_public_backgroundTodirectus_filesInputEnvelope,
    { nullable: true },
  )
  @Type(
    () =>
      directus_settingsCreateManyDirectus_files_directus_settings_public_backgroundTodirectus_filesInputEnvelope,
  )
  createMany?: directus_settingsCreateManyDirectus_files_directus_settings_public_backgroundTodirectus_filesInputEnvelope;

  @Field(() => [directus_settingsWhereUniqueInput], { nullable: true })
  @Type(() => directus_settingsWhereUniqueInput)
  set?: Array<Prisma.AtLeast<directus_settingsWhereUniqueInput, 'id'>>;

  @Field(() => [directus_settingsWhereUniqueInput], { nullable: true })
  @Type(() => directus_settingsWhereUniqueInput)
  disconnect?: Array<Prisma.AtLeast<directus_settingsWhereUniqueInput, 'id'>>;

  @Field(() => [directus_settingsWhereUniqueInput], { nullable: true })
  @Type(() => directus_settingsWhereUniqueInput)
  delete?: Array<Prisma.AtLeast<directus_settingsWhereUniqueInput, 'id'>>;

  @Field(() => [directus_settingsWhereUniqueInput], { nullable: true })
  @Type(() => directus_settingsWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<directus_settingsWhereUniqueInput, 'id'>>;

  @Field(
    () => [
      directus_settingsUpdateWithWhereUniqueWithoutDirectus_files_directus_settings_public_backgroundTodirectus_filesInput,
    ],
    { nullable: true },
  )
  @Type(
    () =>
      directus_settingsUpdateWithWhereUniqueWithoutDirectus_files_directus_settings_public_backgroundTodirectus_filesInput,
  )
  update?: Array<directus_settingsUpdateWithWhereUniqueWithoutDirectus_files_directus_settings_public_backgroundTodirectus_filesInput>;

  @Field(
    () => [
      directus_settingsUpdateManyWithWhereWithoutDirectus_files_directus_settings_public_backgroundTodirectus_filesInput,
    ],
    { nullable: true },
  )
  @Type(
    () =>
      directus_settingsUpdateManyWithWhereWithoutDirectus_files_directus_settings_public_backgroundTodirectus_filesInput,
  )
  updateMany?: Array<directus_settingsUpdateManyWithWhereWithoutDirectus_files_directus_settings_public_backgroundTodirectus_filesInput>;

  @Field(() => [directus_settingsScalarWhereInput], { nullable: true })
  @Type(() => directus_settingsScalarWhereInput)
  deleteMany?: Array<directus_settingsScalarWhereInput>;
}
