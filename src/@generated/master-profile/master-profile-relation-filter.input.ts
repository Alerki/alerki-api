import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MasterProfileWhereInput } from './master-profile-where.input';

@InputType()
export class MasterProfileRelationFilter {
  @Field(() => MasterProfileWhereInput, { nullable: true })
  is?: MasterProfileWhereInput;

  @Field(() => MasterProfileWhereInput, { nullable: true })
  isNot?: MasterProfileWhereInput;
}
