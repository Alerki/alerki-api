import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ServiceWhereInput } from './service-where.input';

@InputType()
export class ServiceListRelationFilter {
  @Field(() => ServiceWhereInput, { nullable: true })
  every?: ServiceWhereInput;

  @Field(() => ServiceWhereInput, { nullable: true })
  some?: ServiceWhereInput;

  @Field(() => ServiceWhereInput, { nullable: true })
  none?: ServiceWhereInput;
}
