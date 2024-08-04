import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { User_UserRolesCreateManyUserRolesInput } from './user-user-roles-create-many-user-roles.input';
import { Type } from 'class-transformer';

@InputType()
export class User_UserRolesCreateManyUserRolesInputEnvelope {
  @Field(() => [User_UserRolesCreateManyUserRolesInput], { nullable: false })
  @Type(() => User_UserRolesCreateManyUserRolesInput)
  data!: Array<User_UserRolesCreateManyUserRolesInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
