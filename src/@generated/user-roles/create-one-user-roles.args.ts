import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserRolesCreateInput } from './user-roles-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneUserRolesArgs {
  @Field(() => UserRolesCreateInput, { nullable: false })
  @Type(() => UserRolesCreateInput)
  data!: UserRolesCreateInput;
}
