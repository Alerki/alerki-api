import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_filesCreateWithoutDirectus_foldersInput } from './directus-files-create-without-directus-folders.input';
import { Type } from 'class-transformer';
import { directus_filesCreateOrConnectWithoutDirectus_foldersInput } from './directus-files-create-or-connect-without-directus-folders.input';
import { directus_filesCreateManyDirectus_foldersInputEnvelope } from './directus-files-create-many-directus-folders-input-envelope.input';
import { Prisma } from '@prisma/client';
import { directus_filesWhereUniqueInput } from './directus-files-where-unique.input';

@InputType()
export class directus_filesUncheckedCreateNestedManyWithoutDirectus_foldersInput {

    @Field(() => [directus_filesCreateWithoutDirectus_foldersInput], {nullable:true})
    @Type(() => directus_filesCreateWithoutDirectus_foldersInput)
    create?: Array<directus_filesCreateWithoutDirectus_foldersInput>;

    @Field(() => [directus_filesCreateOrConnectWithoutDirectus_foldersInput], {nullable:true})
    @Type(() => directus_filesCreateOrConnectWithoutDirectus_foldersInput)
    connectOrCreate?: Array<directus_filesCreateOrConnectWithoutDirectus_foldersInput>;

    @Field(() => directus_filesCreateManyDirectus_foldersInputEnvelope, {nullable:true})
    @Type(() => directus_filesCreateManyDirectus_foldersInputEnvelope)
    createMany?: directus_filesCreateManyDirectus_foldersInputEnvelope;

    @Field(() => [directus_filesWhereUniqueInput], {nullable:true})
    @Type(() => directus_filesWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<directus_filesWhereUniqueInput, 'id'>>;
}
