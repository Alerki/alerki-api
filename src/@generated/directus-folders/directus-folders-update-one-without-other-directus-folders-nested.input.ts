import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_foldersCreateWithoutOther_directus_foldersInput } from './directus-folders-create-without-other-directus-folders.input';
import { Type } from 'class-transformer';
import { directus_foldersCreateOrConnectWithoutOther_directus_foldersInput } from './directus-folders-create-or-connect-without-other-directus-folders.input';
import { directus_foldersUpsertWithoutOther_directus_foldersInput } from './directus-folders-upsert-without-other-directus-folders.input';
import { Prisma } from '@prisma/client';
import { directus_foldersWhereUniqueInput } from './directus-folders-where-unique.input';
import { directus_foldersUpdateWithoutOther_directus_foldersInput } from './directus-folders-update-without-other-directus-folders.input';

@InputType()
export class directus_foldersUpdateOneWithoutOther_directus_foldersNestedInput {
  @Field(() => directus_foldersCreateWithoutOther_directus_foldersInput, {
    nullable: true,
  })
  @Type(() => directus_foldersCreateWithoutOther_directus_foldersInput)
  create?: directus_foldersCreateWithoutOther_directus_foldersInput;

  @Field(
    () => directus_foldersCreateOrConnectWithoutOther_directus_foldersInput,
    { nullable: true },
  )
  @Type(() => directus_foldersCreateOrConnectWithoutOther_directus_foldersInput)
  connectOrCreate?: directus_foldersCreateOrConnectWithoutOther_directus_foldersInput;

  @Field(() => directus_foldersUpsertWithoutOther_directus_foldersInput, {
    nullable: true,
  })
  @Type(() => directus_foldersUpsertWithoutOther_directus_foldersInput)
  upsert?: directus_foldersUpsertWithoutOther_directus_foldersInput;

  @Field(() => Boolean, { nullable: true })
  disconnect?: boolean;

  @Field(() => Boolean, { nullable: true })
  delete?: boolean;

  @Field(() => directus_foldersWhereUniqueInput, { nullable: true })
  @Type(() => directus_foldersWhereUniqueInput)
  connect?: Prisma.AtLeast<directus_foldersWhereUniqueInput, 'id'>;

  @Field(() => directus_foldersUpdateWithoutOther_directus_foldersInput, {
    nullable: true,
  })
  @Type(() => directus_foldersUpdateWithoutOther_directus_foldersInput)
  update?: directus_foldersUpdateWithoutOther_directus_foldersInput;
}
