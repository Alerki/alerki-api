import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { User_SessionCreateWithoutUserInput } from './user-session-create-without-user.input';
import { Type } from 'class-transformer';
import { User_SessionCreateOrConnectWithoutUserInput } from './user-session-create-or-connect-without-user.input';
import { User_SessionUpsertWithWhereUniqueWithoutUserInput } from './user-session-upsert-with-where-unique-without-user.input';
import { User_SessionCreateManyUserInputEnvelope } from './user-session-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { User_SessionWhereUniqueInput } from './user-session-where-unique.input';
import { User_SessionUpdateWithWhereUniqueWithoutUserInput } from './user-session-update-with-where-unique-without-user.input';
import { User_SessionUpdateManyWithWhereWithoutUserInput } from './user-session-update-many-with-where-without-user.input';
import { User_SessionScalarWhereInput } from './user-session-scalar-where.input';

@InputType()
export class User_SessionUpdateManyWithoutUserNestedInput {

    @Field(() => [User_SessionCreateWithoutUserInput], {nullable:true})
    @Type(() => User_SessionCreateWithoutUserInput)
    create?: Array<User_SessionCreateWithoutUserInput>;

    @Field(() => [User_SessionCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => User_SessionCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<User_SessionCreateOrConnectWithoutUserInput>;

    @Field(() => [User_SessionUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => User_SessionUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<User_SessionUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => User_SessionCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => User_SessionCreateManyUserInputEnvelope)
    createMany?: User_SessionCreateManyUserInputEnvelope;

    @Field(() => [User_SessionWhereUniqueInput], {nullable:true})
    @Type(() => User_SessionWhereUniqueInput)
    set?: Array<Prisma.AtLeast<User_SessionWhereUniqueInput, 'id'>>;

    @Field(() => [User_SessionWhereUniqueInput], {nullable:true})
    @Type(() => User_SessionWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<User_SessionWhereUniqueInput, 'id'>>;

    @Field(() => [User_SessionWhereUniqueInput], {nullable:true})
    @Type(() => User_SessionWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<User_SessionWhereUniqueInput, 'id'>>;

    @Field(() => [User_SessionWhereUniqueInput], {nullable:true})
    @Type(() => User_SessionWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<User_SessionWhereUniqueInput, 'id'>>;

    @Field(() => [User_SessionUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => User_SessionUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<User_SessionUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [User_SessionUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => User_SessionUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<User_SessionUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [User_SessionScalarWhereInput], {nullable:true})
    @Type(() => User_SessionScalarWhereInput)
    deleteMany?: Array<User_SessionScalarWhereInput>;
}
