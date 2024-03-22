import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutUser_SessionInput } from './user-create-without-user-session.input';

@InputType()
export class UserCreateOrConnectWithoutUser_SessionInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'phoneNumber' | 'username'>;

    @Field(() => UserCreateWithoutUser_SessionInput, {nullable:false})
    @Type(() => UserCreateWithoutUser_SessionInput)
    create!: UserCreateWithoutUser_SessionInput;
}
