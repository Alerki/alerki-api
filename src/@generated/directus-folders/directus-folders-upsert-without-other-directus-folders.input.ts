import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_foldersUpdateWithoutOther_directus_foldersInput } from './directus-folders-update-without-other-directus-folders.input';
import { Type } from 'class-transformer';
import { directus_foldersCreateWithoutOther_directus_foldersInput } from './directus-folders-create-without-other-directus-folders.input';

@InputType()
export class directus_foldersUpsertWithoutOther_directus_foldersInput {

    @Field(() => directus_foldersUpdateWithoutOther_directus_foldersInput, {nullable:false})
    @Type(() => directus_foldersUpdateWithoutOther_directus_foldersInput)
    update!: directus_foldersUpdateWithoutOther_directus_foldersInput;

    @Field(() => directus_foldersCreateWithoutOther_directus_foldersInput, {nullable:false})
    @Type(() => directus_foldersCreateWithoutOther_directus_foldersInput)
    create!: directus_foldersCreateWithoutOther_directus_foldersInput;
}
