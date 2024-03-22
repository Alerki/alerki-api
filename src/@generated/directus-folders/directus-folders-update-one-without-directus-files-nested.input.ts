import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_foldersCreateWithoutDirectus_filesInput } from './directus-folders-create-without-directus-files.input';
import { Type } from 'class-transformer';
import { directus_foldersCreateOrConnectWithoutDirectus_filesInput } from './directus-folders-create-or-connect-without-directus-files.input';
import { directus_foldersUpsertWithoutDirectus_filesInput } from './directus-folders-upsert-without-directus-files.input';
import { Prisma } from '@prisma/client';
import { directus_foldersWhereUniqueInput } from './directus-folders-where-unique.input';
import { directus_foldersUpdateWithoutDirectus_filesInput } from './directus-folders-update-without-directus-files.input';

@InputType()
export class directus_foldersUpdateOneWithoutDirectus_filesNestedInput {

    @Field(() => directus_foldersCreateWithoutDirectus_filesInput, {nullable:true})
    @Type(() => directus_foldersCreateWithoutDirectus_filesInput)
    create?: directus_foldersCreateWithoutDirectus_filesInput;

    @Field(() => directus_foldersCreateOrConnectWithoutDirectus_filesInput, {nullable:true})
    @Type(() => directus_foldersCreateOrConnectWithoutDirectus_filesInput)
    connectOrCreate?: directus_foldersCreateOrConnectWithoutDirectus_filesInput;

    @Field(() => directus_foldersUpsertWithoutDirectus_filesInput, {nullable:true})
    @Type(() => directus_foldersUpsertWithoutDirectus_filesInput)
    upsert?: directus_foldersUpsertWithoutDirectus_filesInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => directus_foldersWhereUniqueInput, {nullable:true})
    @Type(() => directus_foldersWhereUniqueInput)
    connect?: Prisma.AtLeast<directus_foldersWhereUniqueInput, 'id'>;

    @Field(() => directus_foldersUpdateWithoutDirectus_filesInput, {nullable:true})
    @Type(() => directus_foldersUpdateWithoutDirectus_filesInput)
    update?: directus_foldersUpdateWithoutDirectus_filesInput;
}
