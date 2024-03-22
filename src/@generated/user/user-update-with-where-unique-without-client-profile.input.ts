import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutClientProfileInput } from './user-update-without-client-profile.input';

@InputType()
export class UserUpdateWithWhereUniqueWithoutClientProfileInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'phoneNumber' | 'username'>;

    @Field(() => UserUpdateWithoutClientProfileInput, {nullable:false})
    @Type(() => UserUpdateWithoutClientProfileInput)
    data!: UserUpdateWithoutClientProfileInput;
}
