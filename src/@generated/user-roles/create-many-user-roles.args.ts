import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserRolesCreateManyInput } from './user-roles-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyUserRolesArgs {
  @Field(() => [UserRolesCreateManyInput], { nullable: false })
  @Type(() => UserRolesCreateManyInput)
  data!: Array<UserRolesCreateManyInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
