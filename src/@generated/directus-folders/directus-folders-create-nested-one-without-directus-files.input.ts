import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_foldersCreateWithoutDirectus_filesInput } from './directus-folders-create-without-directus-files.input';
import { Type } from 'class-transformer';
import { directus_foldersCreateOrConnectWithoutDirectus_filesInput } from './directus-folders-create-or-connect-without-directus-files.input';
import { Prisma } from '@prisma/client';
import { directus_foldersWhereUniqueInput } from './directus-folders-where-unique.input';

@InputType()
export class directus_foldersCreateNestedOneWithoutDirectus_filesInput {

    @Field(() => directus_foldersCreateWithoutDirectus_filesInput, {nullable:true})
    @Type(() => directus_foldersCreateWithoutDirectus_filesInput)
    create?: directus_foldersCreateWithoutDirectus_filesInput;

    @Field(() => directus_foldersCreateOrConnectWithoutDirectus_filesInput, {nullable:true})
    @Type(() => directus_foldersCreateOrConnectWithoutDirectus_filesInput)
    connectOrCreate?: directus_foldersCreateOrConnectWithoutDirectus_filesInput;

    @Field(() => directus_foldersWhereUniqueInput, {nullable:true})
    @Type(() => directus_foldersWhereUniqueInput)
    connect?: Prisma.AtLeast<directus_foldersWhereUniqueInput, 'id'>;
}
