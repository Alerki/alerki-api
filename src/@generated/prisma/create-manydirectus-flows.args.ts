import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_flowsCreateManyInput } from '../directus-flows/directus-flows-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManydirectusFlowsArgs {
  @Field(() => [directus_flowsCreateManyInput], { nullable: false })
  @Type(() => directus_flowsCreateManyInput)
  data!: Array<directus_flowsCreateManyInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
