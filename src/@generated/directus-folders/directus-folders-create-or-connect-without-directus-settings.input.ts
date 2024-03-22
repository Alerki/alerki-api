import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { directus_foldersWhereUniqueInput } from './directus-folders-where-unique.input';
import { Type } from 'class-transformer';
import { directus_foldersCreateWithoutDirectus_settingsInput } from './directus-folders-create-without-directus-settings.input';

@InputType()
export class directus_foldersCreateOrConnectWithoutDirectus_settingsInput {

    @Field(() => directus_foldersWhereUniqueInput, {nullable:false})
    @Type(() => directus_foldersWhereUniqueInput)
    where!: Prisma.AtLeast<directus_foldersWhereUniqueInput, 'id'>;

    @Field(() => directus_foldersCreateWithoutDirectus_settingsInput, {nullable:false})
    @Type(() => directus_foldersCreateWithoutDirectus_settingsInput)
    create!: directus_foldersCreateWithoutDirectus_settingsInput;
}
