import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { directus_settingsWhereUniqueInput } from './directus-settings-where-unique.input';
import { Type } from 'class-transformer';
import { directus_settingsUpdateWithoutDirectus_foldersInput } from './directus-settings-update-without-directus-folders.input';

@InputType()
export class directus_settingsUpdateWithWhereUniqueWithoutDirectus_foldersInput {

    @Field(() => directus_settingsWhereUniqueInput, {nullable:false})
    @Type(() => directus_settingsWhereUniqueInput)
    where!: Prisma.AtLeast<directus_settingsWhereUniqueInput, 'id'>;

    @Field(() => directus_settingsUpdateWithoutDirectus_foldersInput, {nullable:false})
    @Type(() => directus_settingsUpdateWithoutDirectus_foldersInput)
    data!: directus_settingsUpdateWithoutDirectus_foldersInput;
}
