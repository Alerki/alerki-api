import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';

@InputType()
export class RoleWhereInput {
  @Field(() => [RoleWhereInput], { nullable: true })
  AND?: Array<RoleWhereInput>;

  @Field(() => [RoleWhereInput], { nullable: true })
  OR?: Array<RoleWhereInput>;

  @Field(() => [RoleWhereInput], { nullable: true })
  NOT?: Array<RoleWhereInput>;

  @Field(() => IntFilter, { nullable: true })
  id?: IntFilter;
}
