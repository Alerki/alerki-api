import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutClientProfileInput } from './user-create-without-client-profile.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutClientProfileInput } from './user-create-or-connect-without-client-profile.input';
import { UserCreateManyClientProfileInputEnvelope } from './user-create-many-client-profile-input-envelope.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedManyWithoutClientProfileInput {

    @Field(() => [UserCreateWithoutClientProfileInput], {nullable:true})
    @Type(() => UserCreateWithoutClientProfileInput)
    create?: Array<UserCreateWithoutClientProfileInput>;

    @Field(() => [UserCreateOrConnectWithoutClientProfileInput], {nullable:true})
    @Type(() => UserCreateOrConnectWithoutClientProfileInput)
    connectOrCreate?: Array<UserCreateOrConnectWithoutClientProfileInput>;

    @Field(() => UserCreateManyClientProfileInputEnvelope, {nullable:true})
    @Type(() => UserCreateManyClientProfileInputEnvelope)
    createMany?: UserCreateManyClientProfileInputEnvelope;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'phoneNumber' | 'username'>>;
}
