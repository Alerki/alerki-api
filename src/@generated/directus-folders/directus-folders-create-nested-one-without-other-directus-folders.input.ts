import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_foldersCreateWithoutOther_directus_foldersInput } from './directus-folders-create-without-other-directus-folders.input';
import { Type } from 'class-transformer';
import { directus_foldersCreateOrConnectWithoutOther_directus_foldersInput } from './directus-folders-create-or-connect-without-other-directus-folders.input';
import { Prisma } from '@prisma/client';
import { directus_foldersWhereUniqueInput } from './directus-folders-where-unique.input';

@InputType()
export class directus_foldersCreateNestedOneWithoutOther_directus_foldersInput {
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

  @Field(() => directus_foldersWhereUniqueInput, { nullable: true })
  @Type(() => directus_foldersWhereUniqueInput)
  connect?: Prisma.AtLeast<directus_foldersWhereUniqueInput, 'id'>;
}
