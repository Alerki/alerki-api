import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MasterServiceUpdateInput } from './master-service-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { MasterServiceWhereUniqueInput } from './master-service-where-unique.input';

@ArgsType()
export class UpdateOneMasterServiceArgs {
  @Field(() => MasterServiceUpdateInput, { nullable: false })
  @Type(() => MasterServiceUpdateInput)
  data!: MasterServiceUpdateInput;

  @Field(() => MasterServiceWhereUniqueInput, { nullable: false })
  @Type(() => MasterServiceWhereUniqueInput)
  where!: Prisma.AtLeast<MasterServiceWhereUniqueInput, 'id'>;
}
