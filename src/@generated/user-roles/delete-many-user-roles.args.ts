import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserRolesWhereInput } from './user-roles-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyUserRolesArgs {

    @Field(() => UserRolesWhereInput, {nullable:true})
    @Type(() => UserRolesWhereInput)
    where?: UserRolesWhereInput;
}
