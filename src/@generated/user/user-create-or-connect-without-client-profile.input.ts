import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutClientProfileInput } from './user-create-without-client-profile.input';

@InputType()
export class UserCreateOrConnectWithoutClientProfileInput {
  @Field(() => UserWhereUniqueInput, { nullable: false })
  @Type(() => UserWhereUniqueInput)
  where!: Prisma.AtLeast<
    UserWhereUniqueInput,
    'id' | 'email' | 'phoneNumber' | 'username'
  >;

  @Field(() => UserCreateWithoutClientProfileInput, { nullable: false })
  @Type(() => UserCreateWithoutClientProfileInput)
  create!: UserCreateWithoutClientProfileInput;
}
