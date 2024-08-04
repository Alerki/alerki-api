import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MasterProfileWhereInput } from './master-profile-where.input';

@InputType()
export class MasterProfileListRelationFilter {
  @Field(() => MasterProfileWhereInput, { nullable: true })
  every?: MasterProfileWhereInput;

  @Field(() => MasterProfileWhereInput, { nullable: true })
  some?: MasterProfileWhereInput;

  @Field(() => MasterProfileWhereInput, { nullable: true })
  none?: MasterProfileWhereInput;
}
