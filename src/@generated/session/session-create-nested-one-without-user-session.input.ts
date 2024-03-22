import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SessionCreateWithoutUser_SessionInput } from './session-create-without-user-session.input';
import { Type } from 'class-transformer';
import { SessionCreateOrConnectWithoutUser_SessionInput } from './session-create-or-connect-without-user-session.input';
import { Prisma } from '@prisma/client';
import { SessionWhereUniqueInput } from './session-where-unique.input';

@InputType()
export class SessionCreateNestedOneWithoutUser_SessionInput {

    @Field(() => SessionCreateWithoutUser_SessionInput, {nullable:true})
    @Type(() => SessionCreateWithoutUser_SessionInput)
    create?: SessionCreateWithoutUser_SessionInput;

    @Field(() => SessionCreateOrConnectWithoutUser_SessionInput, {nullable:true})
    @Type(() => SessionCreateOrConnectWithoutUser_SessionInput)
    connectOrCreate?: SessionCreateOrConnectWithoutUser_SessionInput;

    @Field(() => SessionWhereUniqueInput, {nullable:true})
    @Type(() => SessionWhereUniqueInput)
    connect?: Prisma.AtLeast<SessionWhereUniqueInput, 'id'>;
}
