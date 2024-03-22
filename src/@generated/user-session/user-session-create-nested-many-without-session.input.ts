import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { User_SessionCreateWithoutSessionInput } from './user-session-create-without-session.input';
import { Type } from 'class-transformer';
import { User_SessionCreateOrConnectWithoutSessionInput } from './user-session-create-or-connect-without-session.input';
import { User_SessionCreateManySessionInputEnvelope } from './user-session-create-many-session-input-envelope.input';
import { Prisma } from '@prisma/client';
import { User_SessionWhereUniqueInput } from './user-session-where-unique.input';

@InputType()
export class User_SessionCreateNestedManyWithoutSessionInput {

    @Field(() => [User_SessionCreateWithoutSessionInput], {nullable:true})
    @Type(() => User_SessionCreateWithoutSessionInput)
    create?: Array<User_SessionCreateWithoutSessionInput>;

    @Field(() => [User_SessionCreateOrConnectWithoutSessionInput], {nullable:true})
    @Type(() => User_SessionCreateOrConnectWithoutSessionInput)
    connectOrCreate?: Array<User_SessionCreateOrConnectWithoutSessionInput>;

    @Field(() => User_SessionCreateManySessionInputEnvelope, {nullable:true})
    @Type(() => User_SessionCreateManySessionInputEnvelope)
    createMany?: User_SessionCreateManySessionInputEnvelope;

    @Field(() => [User_SessionWhereUniqueInput], {nullable:true})
    @Type(() => User_SessionWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<User_SessionWhereUniqueInput, 'id'>>;
}
