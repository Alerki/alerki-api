import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_operationsCreateManyDirectus_flowsInput } from './directus-operations-create-many-directus-flows.input';
import { Type } from 'class-transformer';

@InputType()
export class directus_operationsCreateManyDirectus_flowsInputEnvelope {
  @Field(() => [directus_operationsCreateManyDirectus_flowsInput], {
    nullable: false,
  })
  @Type(() => directus_operationsCreateManyDirectus_flowsInput)
  data!: Array<directus_operationsCreateManyDirectus_flowsInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
