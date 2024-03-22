import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_foldersCreateWithoutDirectus_settingsInput } from './directus-folders-create-without-directus-settings.input';
import { Type } from 'class-transformer';
import { directus_foldersCreateOrConnectWithoutDirectus_settingsInput } from './directus-folders-create-or-connect-without-directus-settings.input';
import { Prisma } from '@prisma/client';
import { directus_foldersWhereUniqueInput } from './directus-folders-where-unique.input';

@InputType()
export class directus_foldersCreateNestedOneWithoutDirectus_settingsInput {

    @Field(() => directus_foldersCreateWithoutDirectus_settingsInput, {nullable:true})
    @Type(() => directus_foldersCreateWithoutDirectus_settingsInput)
    create?: directus_foldersCreateWithoutDirectus_settingsInput;

    @Field(() => directus_foldersCreateOrConnectWithoutDirectus_settingsInput, {nullable:true})
    @Type(() => directus_foldersCreateOrConnectWithoutDirectus_settingsInput)
    connectOrCreate?: directus_foldersCreateOrConnectWithoutDirectus_settingsInput;

    @Field(() => directus_foldersWhereUniqueInput, {nullable:true})
    @Type(() => directus_foldersWhereUniqueInput)
    connect?: Prisma.AtLeast<directus_foldersWhereUniqueInput, 'id'>;
}
