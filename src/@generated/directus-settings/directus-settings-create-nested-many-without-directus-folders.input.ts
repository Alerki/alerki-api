import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_settingsCreateWithoutDirectus_foldersInput } from './directus-settings-create-without-directus-folders.input';
import { Type } from 'class-transformer';
import { directus_settingsCreateOrConnectWithoutDirectus_foldersInput } from './directus-settings-create-or-connect-without-directus-folders.input';
import { directus_settingsCreateManyDirectus_foldersInputEnvelope } from './directus-settings-create-many-directus-folders-input-envelope.input';
import { Prisma } from '@prisma/client';
import { directus_settingsWhereUniqueInput } from './directus-settings-where-unique.input';

@InputType()
export class directus_settingsCreateNestedManyWithoutDirectus_foldersInput {
  @Field(() => [directus_settingsCreateWithoutDirectus_foldersInput], {
    nullable: true,
  })
  @Type(() => directus_settingsCreateWithoutDirectus_foldersInput)
  create?: Array<directus_settingsCreateWithoutDirectus_foldersInput>;

  @Field(() => [directus_settingsCreateOrConnectWithoutDirectus_foldersInput], {
    nullable: true,
  })
  @Type(() => directus_settingsCreateOrConnectWithoutDirectus_foldersInput)
  connectOrCreate?: Array<directus_settingsCreateOrConnectWithoutDirectus_foldersInput>;

  @Field(() => directus_settingsCreateManyDirectus_foldersInputEnvelope, {
    nullable: true,
  })
  @Type(() => directus_settingsCreateManyDirectus_foldersInputEnvelope)
  createMany?: directus_settingsCreateManyDirectus_foldersInputEnvelope;

  @Field(() => [directus_settingsWhereUniqueInput], { nullable: true })
  @Type(() => directus_settingsWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<directus_settingsWhereUniqueInput, 'id'>>;
}
