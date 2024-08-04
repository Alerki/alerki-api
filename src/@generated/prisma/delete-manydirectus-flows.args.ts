import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_flowsWhereInput } from '../directus-flows/directus-flows-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManydirectusFlowsArgs {
  @Field(() => directus_flowsWhereInput, { nullable: true })
  @Type(() => directus_flowsWhereInput)
  where?: directus_flowsWhereInput;
}
