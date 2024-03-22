import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_filesCreateNestedOneWithoutUserPictureInput } from '../directus-files/directus-files-create-nested-one-without-user-picture.input';

@InputType()
export class UserPictureCreateWithoutUserInput {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => Date, {nullable:true})
    date_created?: Date | string;

    @Field(() => Date, {nullable:true})
    date_updated?: Date | string;

    @Field(() => directus_filesCreateNestedOneWithoutUserPictureInput, {nullable:false})
    directus_files!: directus_filesCreateNestedOneWithoutUserPictureInput;
}
