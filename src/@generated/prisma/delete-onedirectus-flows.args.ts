import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_flowsWhereUniqueInput } from '../directus-flows/directus-flows-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOnedirectusFlowsArgs {
  @Field(() => directus_flowsWhereUniqueInput, { nullable: false })
  @Type(() => directus_flowsWhereUniqueInput)
  where!: directus_flowsWhereUniqueInput;
}
