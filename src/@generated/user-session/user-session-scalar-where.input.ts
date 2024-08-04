import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { UuidFilter } from '../prisma/uuid-filter.input';

@InputType()
export class User_SessionScalarWhereInput {
  @Field(() => [User_SessionScalarWhereInput], { nullable: true })
  AND?: Array<User_SessionScalarWhereInput>;

  @Field(() => [User_SessionScalarWhereInput], { nullable: true })
  OR?: Array<User_SessionScalarWhereInput>;

  @Field(() => [User_SessionScalarWhereInput], { nullable: true })
  NOT?: Array<User_SessionScalarWhereInput>;

  @Field(() => IntFilter, { nullable: true })
  id?: IntFilter;

  @Field(() => UuidFilter, { nullable: true })
  User_id?: UuidFilter;

  @Field(() => UuidFilter, { nullable: true })
  Session_id?: UuidFilter;
}
