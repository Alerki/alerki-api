import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ServiceCreateManyInput } from './service-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyServiceArgs {
  @Field(() => [ServiceCreateManyInput], { nullable: false })
  @Type(() => ServiceCreateManyInput)
  data!: Array<ServiceCreateManyInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
