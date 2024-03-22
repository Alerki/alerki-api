import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserRolesWhereUniqueInput } from './user-roles-where-unique.input';
import { Type } from 'class-transformer';
import { UserRolesCreateInput } from './user-roles-create.input';
import { UserRolesUpdateInput } from './user-roles-update.input';

@ArgsType()
export class UpsertOneUserRolesArgs {

    @Field(() => UserRolesWhereUniqueInput, {nullable:false})
    @Type(() => UserRolesWhereUniqueInput)
    where!: Prisma.AtLeast<UserRolesWhereUniqueInput, 'id' | 'name'>;

    @Field(() => UserRolesCreateInput, {nullable:false})
    @Type(() => UserRolesCreateInput)
    create!: UserRolesCreateInput;

    @Field(() => UserRolesUpdateInput, {nullable:false})
    @Type(() => UserRolesUpdateInput)
    update!: UserRolesUpdateInput;
}
