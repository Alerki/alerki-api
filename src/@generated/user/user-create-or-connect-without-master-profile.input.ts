import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutMasterProfileInput } from './user-create-without-master-profile.input';

@InputType()
export class UserCreateOrConnectWithoutMasterProfileInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'phoneNumber' | 'username'>;

    @Field(() => UserCreateWithoutMasterProfileInput, {nullable:false})
    @Type(() => UserCreateWithoutMasterProfileInput)
    create!: UserCreateWithoutMasterProfileInput;
}
