import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { UuidFilter } from '../prisma/uuid-filter.input';

@InputType()
export class User_UserRolesScalarWhereInput {
  @Field(() => [User_UserRolesScalarWhereInput], { nullable: true })
  AND?: Array<User_UserRolesScalarWhereInput>;

  @Field(() => [User_UserRolesScalarWhereInput], { nullable: true })
  OR?: Array<User_UserRolesScalarWhereInput>;

  @Field(() => [User_UserRolesScalarWhereInput], { nullable: true })
  NOT?: Array<User_UserRolesScalarWhereInput>;

  @Field(() => IntFilter, { nullable: true })
  id?: IntFilter;

  @Field(() => UuidFilter, { nullable: true })
  User_id?: UuidFilter;

  @Field(() => UuidFilter, { nullable: true })
  UserRoles_id?: UuidFilter;
}
