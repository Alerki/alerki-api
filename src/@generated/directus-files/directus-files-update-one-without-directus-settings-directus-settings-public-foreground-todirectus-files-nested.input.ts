import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_filesCreateWithoutDirectus_settings_directus_settings_public_foregroundTodirectus_filesInput } from './directus-files-create-without-directus-settings-directus-settings-public-foreground-todirectus-files.input';
import { Type } from 'class-transformer';
import { directus_filesCreateOrConnectWithoutDirectus_settings_directus_settings_public_foregroundTodirectus_filesInput } from './directus-files-create-or-connect-without-directus-settings-directus-settings-public-foreground-todirectus-files.input';
import { directus_filesUpsertWithoutDirectus_settings_directus_settings_public_foregroundTodirectus_filesInput } from './directus-files-upsert-without-directus-settings-directus-settings-public-foreground-todirectus-files.input';
import { Prisma } from '@prisma/client';
import { directus_filesWhereUniqueInput } from './directus-files-where-unique.input';
import { directus_filesUpdateWithoutDirectus_settings_directus_settings_public_foregroundTodirectus_filesInput } from './directus-files-update-without-directus-settings-directus-settings-public-foreground-todirectus-files.input';

@InputType()
export class directus_filesUpdateOneWithoutDirectus_settings_directus_settings_public_foregroundTodirectus_filesNestedInput {
  @Field(
    () =>
      directus_filesCreateWithoutDirectus_settings_directus_settings_public_foregroundTodirectus_filesInput,
    { nullable: true },
  )
  @Type(
    () =>
      directus_filesCreateWithoutDirectus_settings_directus_settings_public_foregroundTodirectus_filesInput,
  )
  create?: directus_filesCreateWithoutDirectus_settings_directus_settings_public_foregroundTodirectus_filesInput;

  @Field(
    () =>
      directus_filesCreateOrConnectWithoutDirectus_settings_directus_settings_public_foregroundTodirectus_filesInput,
    { nullable: true },
  )
  @Type(
    () =>
      directus_filesCreateOrConnectWithoutDirectus_settings_directus_settings_public_foregroundTodirectus_filesInput,
  )
  connectOrCreate?: directus_filesCreateOrConnectWithoutDirectus_settings_directus_settings_public_foregroundTodirectus_filesInput;

  @Field(
    () =>
      directus_filesUpsertWithoutDirectus_settings_directus_settings_public_foregroundTodirectus_filesInput,
    { nullable: true },
  )
  @Type(
    () =>
      directus_filesUpsertWithoutDirectus_settings_directus_settings_public_foregroundTodirectus_filesInput,
  )
  upsert?: directus_filesUpsertWithoutDirectus_settings_directus_settings_public_foregroundTodirectus_filesInput;

  @Field(() => Boolean, { nullable: true })
  disconnect?: boolean;

  @Field(() => Boolean, { nullable: true })
  delete?: boolean;

  @Field(() => directus_filesWhereUniqueInput, { nullable: true })
  @Type(() => directus_filesWhereUniqueInput)
  connect?: Prisma.AtLeast<directus_filesWhereUniqueInput, 'id'>;

  @Field(
    () =>
      directus_filesUpdateWithoutDirectus_settings_directus_settings_public_foregroundTodirectus_filesInput,
    { nullable: true },
  )
  @Type(
    () =>
      directus_filesUpdateWithoutDirectus_settings_directus_settings_public_foregroundTodirectus_filesInput,
  )
  update?: directus_filesUpdateWithoutDirectus_settings_directus_settings_public_foregroundTodirectus_filesInput;
}
