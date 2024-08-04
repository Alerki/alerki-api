import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ServiceWhereInput } from './service-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyServiceArgs {
  @Field(() => ServiceWhereInput, { nullable: true })
  @Type(() => ServiceWhereInput)
  where?: ServiceWhereInput;
}
