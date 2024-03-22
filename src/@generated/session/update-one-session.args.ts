import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SessionUpdateInput } from './session-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { SessionWhereUniqueInput } from './session-where-unique.input';

@ArgsType()
export class UpdateOneSessionArgs {

    @Field(() => SessionUpdateInput, {nullable:false})
    @Type(() => SessionUpdateInput)
    data!: SessionUpdateInput;

    @Field(() => SessionWhereUniqueInput, {nullable:false})
    @Type(() => SessionWhereUniqueInput)
    where!: Prisma.AtLeast<SessionWhereUniqueInput, 'id'>;
}
