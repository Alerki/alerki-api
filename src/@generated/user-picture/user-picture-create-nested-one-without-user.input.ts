import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserPictureCreateWithoutUserInput } from './user-picture-create-without-user.input';
import { Type } from 'class-transformer';
import { UserPictureCreateOrConnectWithoutUserInput } from './user-picture-create-or-connect-without-user.input';
import { Prisma } from '@prisma/client';
import { UserPictureWhereUniqueInput } from './user-picture-where-unique.input';

@InputType()
export class UserPictureCreateNestedOneWithoutUserInput {

    @Field(() => UserPictureCreateWithoutUserInput, {nullable:true})
    @Type(() => UserPictureCreateWithoutUserInput)
    create?: UserPictureCreateWithoutUserInput;

    @Field(() => UserPictureCreateOrConnectWithoutUserInput, {nullable:true})
    @Type(() => UserPictureCreateOrConnectWithoutUserInput)
    connectOrCreate?: UserPictureCreateOrConnectWithoutUserInput;

    @Field(() => UserPictureWhereUniqueInput, {nullable:true})
    @Type(() => UserPictureWhereUniqueInput)
    connect?: Prisma.AtLeast<UserPictureWhereUniqueInput, 'id'>;
}
