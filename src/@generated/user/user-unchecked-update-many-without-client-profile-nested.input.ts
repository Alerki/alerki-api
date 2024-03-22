import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutClientProfileInput } from './user-create-without-client-profile.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutClientProfileInput } from './user-create-or-connect-without-client-profile.input';
import { UserUpsertWithWhereUniqueWithoutClientProfileInput } from './user-upsert-with-where-unique-without-client-profile.input';
import { UserCreateManyClientProfileInputEnvelope } from './user-create-many-client-profile-input-envelope.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithWhereUniqueWithoutClientProfileInput } from './user-update-with-where-unique-without-client-profile.input';
import { UserUpdateManyWithWhereWithoutClientProfileInput } from './user-update-many-with-where-without-client-profile.input';
import { UserScalarWhereInput } from './user-scalar-where.input';

@InputType()
export class UserUncheckedUpdateManyWithoutClientProfileNestedInput {

    @Field(() => [UserCreateWithoutClientProfileInput], {nullable:true})
    @Type(() => UserCreateWithoutClientProfileInput)
    create?: Array<UserCreateWithoutClientProfileInput>;

    @Field(() => [UserCreateOrConnectWithoutClientProfileInput], {nullable:true})
    @Type(() => UserCreateOrConnectWithoutClientProfileInput)
    connectOrCreate?: Array<UserCreateOrConnectWithoutClientProfileInput>;

    @Field(() => [UserUpsertWithWhereUniqueWithoutClientProfileInput], {nullable:true})
    @Type(() => UserUpsertWithWhereUniqueWithoutClientProfileInput)
    upsert?: Array<UserUpsertWithWhereUniqueWithoutClientProfileInput>;

    @Field(() => UserCreateManyClientProfileInputEnvelope, {nullable:true})
    @Type(() => UserCreateManyClientProfileInputEnvelope)
    createMany?: UserCreateManyClientProfileInputEnvelope;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    set?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'phoneNumber' | 'username'>>;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'phoneNumber' | 'username'>>;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'phoneNumber' | 'username'>>;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'phoneNumber' | 'username'>>;

    @Field(() => [UserUpdateWithWhereUniqueWithoutClientProfileInput], {nullable:true})
    @Type(() => UserUpdateWithWhereUniqueWithoutClientProfileInput)
    update?: Array<UserUpdateWithWhereUniqueWithoutClientProfileInput>;

    @Field(() => [UserUpdateManyWithWhereWithoutClientProfileInput], {nullable:true})
    @Type(() => UserUpdateManyWithWhereWithoutClientProfileInput)
    updateMany?: Array<UserUpdateManyWithWhereWithoutClientProfileInput>;

    @Field(() => [UserScalarWhereInput], {nullable:true})
    @Type(() => UserScalarWhereInput)
    deleteMany?: Array<UserScalarWhereInput>;
}
