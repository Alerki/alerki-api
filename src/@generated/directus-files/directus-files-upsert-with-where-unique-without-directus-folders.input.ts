import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { directus_filesWhereUniqueInput } from './directus-files-where-unique.input';
import { Type } from 'class-transformer';
import { directus_filesUpdateWithoutDirectus_foldersInput } from './directus-files-update-without-directus-folders.input';
import { directus_filesCreateWithoutDirectus_foldersInput } from './directus-files-create-without-directus-folders.input';

@InputType()
export class directus_filesUpsertWithWhereUniqueWithoutDirectus_foldersInput {

    @Field(() => directus_filesWhereUniqueInput, {nullable:false})
    @Type(() => directus_filesWhereUniqueInput)
    where!: Prisma.AtLeast<directus_filesWhereUniqueInput, 'id'>;

    @Field(() => directus_filesUpdateWithoutDirectus_foldersInput, {nullable:false})
    @Type(() => directus_filesUpdateWithoutDirectus_foldersInput)
    update!: directus_filesUpdateWithoutDirectus_foldersInput;

    @Field(() => directus_filesCreateWithoutDirectus_foldersInput, {nullable:false})
    @Type(() => directus_filesCreateWithoutDirectus_foldersInput)
    create!: directus_filesCreateWithoutDirectus_foldersInput;
}
