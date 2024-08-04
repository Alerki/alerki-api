import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutMasterProfileInput } from './user-update-without-master-profile.input';

@InputType()
export class UserUpdateWithWhereUniqueWithoutMasterProfileInput {
  @Field(() => UserWhereUniqueInput, { nullable: false })
  @Type(() => UserWhereUniqueInput)
  where!: Prisma.AtLeast<
    UserWhereUniqueInput,
    'id' | 'email' | 'phoneNumber' | 'username'
  >;

  @Field(() => UserUpdateWithoutMasterProfileInput, { nullable: false })
  @Type(() => UserUpdateWithoutMasterProfileInput)
  data!: UserUpdateWithoutMasterProfileInput;
}
