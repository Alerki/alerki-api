import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserPictureUpdateWithoutUserInput } from './user-picture-update-without-user.input';
import { Type } from 'class-transformer';
import { UserPictureCreateWithoutUserInput } from './user-picture-create-without-user.input';

@InputType()
export class UserPictureUpsertWithoutUserInput {

    @Field(() => UserPictureUpdateWithoutUserInput, {nullable:false})
    @Type(() => UserPictureUpdateWithoutUserInput)
    update!: UserPictureUpdateWithoutUserInput;

    @Field(() => UserPictureCreateWithoutUserInput, {nullable:false})
    @Type(() => UserPictureCreateWithoutUserInput)
    create!: UserPictureCreateWithoutUserInput;
}
