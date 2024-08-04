import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { directus_foldersWhereUniqueInput } from './directus-folders-where-unique.input';
import { Type } from 'class-transformer';
import { directus_foldersCreateWithoutDirectus_filesInput } from './directus-folders-create-without-directus-files.input';

@InputType()
export class directus_foldersCreateOrConnectWithoutDirectus_filesInput {
  @Field(() => directus_foldersWhereUniqueInput, { nullable: false })
  @Type(() => directus_foldersWhereUniqueInput)
  where!: Prisma.AtLeast<directus_foldersWhereUniqueInput, 'id'>;

  @Field(() => directus_foldersCreateWithoutDirectus_filesInput, {
    nullable: false,
  })
  @Type(() => directus_foldersCreateWithoutDirectus_filesInput)
  create!: directus_foldersCreateWithoutDirectus_filesInput;
}
