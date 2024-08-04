import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { directus_foldersWhereUniqueInput } from './directus-folders-where-unique.input';
import { Type } from 'class-transformer';
import { directus_foldersUpdateWithoutDirectus_foldersInput } from './directus-folders-update-without-directus-folders.input';
import { directus_foldersCreateWithoutDirectus_foldersInput } from './directus-folders-create-without-directus-folders.input';

@InputType()
export class directus_foldersUpsertWithWhereUniqueWithoutDirectus_foldersInput {
  @Field(() => directus_foldersWhereUniqueInput, { nullable: false })
  @Type(() => directus_foldersWhereUniqueInput)
  where!: Prisma.AtLeast<directus_foldersWhereUniqueInput, 'id'>;

  @Field(() => directus_foldersUpdateWithoutDirectus_foldersInput, {
    nullable: false,
  })
  @Type(() => directus_foldersUpdateWithoutDirectus_foldersInput)
  update!: directus_foldersUpdateWithoutDirectus_foldersInput;

  @Field(() => directus_foldersCreateWithoutDirectus_foldersInput, {
    nullable: false,
  })
  @Type(() => directus_foldersCreateWithoutDirectus_foldersInput)
  create!: directus_foldersCreateWithoutDirectus_foldersInput;
}
