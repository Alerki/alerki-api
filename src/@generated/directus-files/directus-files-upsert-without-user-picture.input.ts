import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_filesUpdateWithoutUserPictureInput } from './directus-files-update-without-user-picture.input';
import { Type } from 'class-transformer';
import { directus_filesCreateWithoutUserPictureInput } from './directus-files-create-without-user-picture.input';

@InputType()
export class directus_filesUpsertWithoutUserPictureInput {

    @Field(() => directus_filesUpdateWithoutUserPictureInput, {nullable:false})
    @Type(() => directus_filesUpdateWithoutUserPictureInput)
    update!: directus_filesUpdateWithoutUserPictureInput;

    @Field(() => directus_filesCreateWithoutUserPictureInput, {nullable:false})
    @Type(() => directus_filesCreateWithoutUserPictureInput)
    create!: directus_filesCreateWithoutUserPictureInput;
}
