import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { MasterServiceWhereUniqueInput } from './master-service-where-unique.input';
import { Type } from 'class-transformer';
import { MasterServiceCreateInput } from './master-service-create.input';
import { MasterServiceUpdateInput } from './master-service-update.input';

@ArgsType()
export class UpsertOneMasterServiceArgs {
  @Field(() => MasterServiceWhereUniqueInput, { nullable: false })
  @Type(() => MasterServiceWhereUniqueInput)
  where!: Prisma.AtLeast<MasterServiceWhereUniqueInput, 'id'>;

  @Field(() => MasterServiceCreateInput, { nullable: false })
  @Type(() => MasterServiceCreateInput)
  create!: MasterServiceCreateInput;

  @Field(() => MasterServiceUpdateInput, { nullable: false })
  @Type(() => MasterServiceUpdateInput)
  update!: MasterServiceUpdateInput;
}
