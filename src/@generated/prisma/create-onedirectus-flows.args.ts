import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_flowsCreateInput } from '../directus-flows/directus-flows-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnedirectusFlowsArgs {
  @Field(() => directus_flowsCreateInput, { nullable: false })
  @Type(() => directus_flowsCreateInput)
  data!: directus_flowsCreateInput;
}
