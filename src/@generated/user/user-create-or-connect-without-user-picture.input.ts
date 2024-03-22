import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutUserPictureInput } from './user-create-without-user-picture.input';

@InputType()
export class UserCreateOrConnectWithoutUserPictureInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'phoneNumber' | 'username'>;

    @Field(() => UserCreateWithoutUserPictureInput, {nullable:false})
    @Type(() => UserCreateWithoutUserPictureInput)
    create!: UserCreateWithoutUserPictureInput;
}
