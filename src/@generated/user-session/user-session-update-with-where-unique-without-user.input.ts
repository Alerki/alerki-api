import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { User_SessionWhereUniqueInput } from './user-session-where-unique.input';
import { Type } from 'class-transformer';
import { User_SessionUpdateWithoutUserInput } from './user-session-update-without-user.input';

@InputType()
export class User_SessionUpdateWithWhereUniqueWithoutUserInput {

    @Field(() => User_SessionWhereUniqueInput, {nullable:false})
    @Type(() => User_SessionWhereUniqueInput)
    where!: Prisma.AtLeast<User_SessionWhereUniqueInput, 'id'>;

    @Field(() => User_SessionUpdateWithoutUserInput, {nullable:false})
    @Type(() => User_SessionUpdateWithoutUserInput)
    data!: User_SessionUpdateWithoutUserInput;
}
