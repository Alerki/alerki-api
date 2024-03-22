import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedManyWithoutUserPictureInput } from '../user/user-create-nested-many-without-user-picture.input';
import { directus_filesCreateNestedOneWithoutUserPictureInput } from '../directus-files/directus-files-create-nested-one-without-user-picture.input';

@InputType()
export class UserPictureCreateInput {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => Date, {nullable:true})
    date_created?: Date | string;

    @Field(() => Date, {nullable:true})
    date_updated?: Date | string;

    @Field(() => UserCreateNestedManyWithoutUserPictureInput, {nullable:true})
    User?: UserCreateNestedManyWithoutUserPictureInput;

    @Field(() => directus_filesCreateNestedOneWithoutUserPictureInput, {nullable:false})
    directus_files!: directus_filesCreateNestedOneWithoutUserPictureInput;
}
