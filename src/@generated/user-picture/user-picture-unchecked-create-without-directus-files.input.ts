import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUncheckedCreateNestedManyWithoutUserPictureInput } from '../user/user-unchecked-create-nested-many-without-user-picture.input';

@InputType()
export class UserPictureUncheckedCreateWithoutDirectus_filesInput {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => Date, {nullable:true})
    date_created?: Date | string;

    @Field(() => Date, {nullable:true})
    date_updated?: Date | string;

    @Field(() => UserUncheckedCreateNestedManyWithoutUserPictureInput, {nullable:true})
    User?: UserUncheckedCreateNestedManyWithoutUserPictureInput;
}
