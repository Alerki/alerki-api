import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ClientProfileWhereUniqueInput } from './client-profile-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueClientProfileArgs {

    @Field(() => ClientProfileWhereUniqueInput, {nullable:false})
    @Type(() => ClientProfileWhereUniqueInput)
    where!: Prisma.AtLeast<ClientProfileWhereUniqueInput, 'id'>;
}
