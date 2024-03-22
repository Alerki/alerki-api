import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_foldersCreateWithoutDirectus_settingsInput } from './directus-folders-create-without-directus-settings.input';
import { Type } from 'class-transformer';
import { directus_foldersCreateOrConnectWithoutDirectus_settingsInput } from './directus-folders-create-or-connect-without-directus-settings.input';
import { directus_foldersUpsertWithoutDirectus_settingsInput } from './directus-folders-upsert-without-directus-settings.input';
import { Prisma } from '@prisma/client';
import { directus_foldersWhereUniqueInput } from './directus-folders-where-unique.input';
import { directus_foldersUpdateWithoutDirectus_settingsInput } from './directus-folders-update-without-directus-settings.input';

@InputType()
export class directus_foldersUpdateOneWithoutDirectus_settingsNestedInput {

    @Field(() => directus_foldersCreateWithoutDirectus_settingsInput, {nullable:true})
    @Type(() => directus_foldersCreateWithoutDirectus_settingsInput)
    create?: directus_foldersCreateWithoutDirectus_settingsInput;

    @Field(() => directus_foldersCreateOrConnectWithoutDirectus_settingsInput, {nullable:true})
    @Type(() => directus_foldersCreateOrConnectWithoutDirectus_settingsInput)
    connectOrCreate?: directus_foldersCreateOrConnectWithoutDirectus_settingsInput;

    @Field(() => directus_foldersUpsertWithoutDirectus_settingsInput, {nullable:true})
    @Type(() => directus_foldersUpsertWithoutDirectus_settingsInput)
    upsert?: directus_foldersUpsertWithoutDirectus_settingsInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => directus_foldersWhereUniqueInput, {nullable:true})
    @Type(() => directus_foldersWhereUniqueInput)
    connect?: Prisma.AtLeast<directus_foldersWhereUniqueInput, 'id'>;

    @Field(() => directus_foldersUpdateWithoutDirectus_settingsInput, {nullable:true})
    @Type(() => directus_foldersUpdateWithoutDirectus_settingsInput)
    update?: directus_foldersUpdateWithoutDirectus_settingsInput;
}
