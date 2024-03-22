import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserRolesWhereUniqueInput } from './user-roles-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueUserRolesOrThrowArgs {

    @Field(() => UserRolesWhereUniqueInput, {nullable:false})
    @Type(() => UserRolesWhereUniqueInput)
    where!: Prisma.AtLeast<UserRolesWhereUniqueInput, 'id' | 'name'>;
}
