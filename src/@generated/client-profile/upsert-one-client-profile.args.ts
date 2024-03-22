import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ClientProfileWhereUniqueInput } from './client-profile-where-unique.input';
import { Type } from 'class-transformer';
import { ClientProfileCreateInput } from './client-profile-create.input';
import { ClientProfileUpdateInput } from './client-profile-update.input';

@ArgsType()
export class UpsertOneClientProfileArgs {

    @Field(() => ClientProfileWhereUniqueInput, {nullable:false})
    @Type(() => ClientProfileWhereUniqueInput)
    where!: Prisma.AtLeast<ClientProfileWhereUniqueInput, 'id'>;

    @Field(() => ClientProfileCreateInput, {nullable:false})
    @Type(() => ClientProfileCreateInput)
    create!: ClientProfileCreateInput;

    @Field(() => ClientProfileUpdateInput, {nullable:false})
    @Type(() => ClientProfileUpdateInput)
    update!: ClientProfileUpdateInput;
}
