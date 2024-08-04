import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MasterServiceUpdateManyMutationInput } from './master-service-update-many-mutation.input';
import { Type } from 'class-transformer';
import { MasterServiceWhereInput } from './master-service-where.input';

@ArgsType()
export class UpdateManyMasterServiceArgs {
  @Field(() => MasterServiceUpdateManyMutationInput, { nullable: false })
  @Type(() => MasterServiceUpdateManyMutationInput)
  data!: MasterServiceUpdateManyMutationInput;

  @Field(() => MasterServiceWhereInput, { nullable: true })
  @Type(() => MasterServiceWhereInput)
  where?: MasterServiceWhereInput;
}
