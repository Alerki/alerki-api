import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MasterServiceWhereInput } from './master-service-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyMasterServiceArgs {
  @Field(() => MasterServiceWhereInput, { nullable: true })
  @Type(() => MasterServiceWhereInput)
  where?: MasterServiceWhereInput;
}
