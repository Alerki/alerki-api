import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedManyWithoutUserPictureInput } from '../user/user-create-nested-many-without-user-picture.input';

@InputType()
export class UserPictureCreateWithoutDirectus_filesInput {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => Date, {nullable:true})
    date_created?: Date | string;

    @Field(() => Date, {nullable:true})
    date_updated?: Date | string;

    @Field(() => UserCreateNestedManyWithoutUserPictureInput, {nullable:true})
    User?: UserCreateNestedManyWithoutUserPictureInput;
}
