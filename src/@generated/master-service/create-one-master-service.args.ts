import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MasterServiceCreateInput } from './master-service-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneMasterServiceArgs {
  @Field(() => MasterServiceCreateInput, { nullable: false })
  @Type(() => MasterServiceCreateInput)
  data!: MasterServiceCreateInput;
}
