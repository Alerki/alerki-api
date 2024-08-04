import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_operationsCreateManyInput } from '../directus-operations/directus-operations-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManydirectusOperationsArgs {
  @Field(() => [directus_operationsCreateManyInput], { nullable: false })
  @Type(() => directus_operationsCreateManyInput)
  data!: Array<directus_operationsCreateManyInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
