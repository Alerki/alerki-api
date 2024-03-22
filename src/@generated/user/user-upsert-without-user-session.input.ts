import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutUser_SessionInput } from './user-update-without-user-session.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutUser_SessionInput } from './user-create-without-user-session.input';

@InputType()
export class UserUpsertWithoutUser_SessionInput {

    @Field(() => UserUpdateWithoutUser_SessionInput, {nullable:false})
    @Type(() => UserUpdateWithoutUser_SessionInput)
    update!: UserUpdateWithoutUser_SessionInput;

    @Field(() => UserCreateWithoutUser_SessionInput, {nullable:false})
    @Type(() => UserCreateWithoutUser_SessionInput)
    create!: UserCreateWithoutUser_SessionInput;
}
