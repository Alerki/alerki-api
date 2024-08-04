import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { User_UserRolesCreateManyInput } from '../user-user-roles/user-user-roles-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyUserUserRolesArgs {
  @Field(() => [User_UserRolesCreateManyInput], { nullable: false })
  @Type(() => User_UserRolesCreateManyInput)
  data!: Array<User_UserRolesCreateManyInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
