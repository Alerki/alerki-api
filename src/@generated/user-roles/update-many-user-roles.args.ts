import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserRolesUpdateManyMutationInput } from './user-roles-update-many-mutation.input';
import { Type } from 'class-transformer';
import { UserRolesWhereInput } from './user-roles-where.input';

@ArgsType()
export class UpdateManyUserRolesArgs {

    @Field(() => UserRolesUpdateManyMutationInput, {nullable:false})
    @Type(() => UserRolesUpdateManyMutationInput)
    data!: UserRolesUpdateManyMutationInput;

    @Field(() => UserRolesWhereInput, {nullable:true})
    @Type(() => UserRolesWhereInput)
    where?: UserRolesWhereInput;
}
