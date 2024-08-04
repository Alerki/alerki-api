import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { User_UserRolesCreateManyUserInput } from './user-user-roles-create-many-user.input';
import { Type } from 'class-transformer';

@InputType()
export class User_UserRolesCreateManyUserInputEnvelope {
  @Field(() => [User_UserRolesCreateManyUserInput], { nullable: false })
  @Type(() => User_UserRolesCreateManyUserInput)
  data!: Array<User_UserRolesCreateManyUserInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
