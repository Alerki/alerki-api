import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { SessionWhereUniqueInput } from './session-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueSessionOrThrowArgs {

    @Field(() => SessionWhereUniqueInput, {nullable:false})
    @Type(() => SessionWhereUniqueInput)
    where!: Prisma.AtLeast<SessionWhereUniqueInput, 'id'>;
}
