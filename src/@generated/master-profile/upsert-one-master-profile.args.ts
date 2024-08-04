import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { MasterProfileWhereUniqueInput } from './master-profile-where-unique.input';
import { Type } from 'class-transformer';
import { MasterProfileCreateInput } from './master-profile-create.input';
import { MasterProfileUpdateInput } from './master-profile-update.input';

@ArgsType()
export class UpsertOneMasterProfileArgs {
  @Field(() => MasterProfileWhereUniqueInput, { nullable: false })
  @Type(() => MasterProfileWhereUniqueInput)
  where!: Prisma.AtLeast<MasterProfileWhereUniqueInput, 'id'>;

  @Field(() => MasterProfileCreateInput, { nullable: false })
  @Type(() => MasterProfileCreateInput)
  create!: MasterProfileCreateInput;

  @Field(() => MasterProfileUpdateInput, { nullable: false })
  @Type(() => MasterProfileUpdateInput)
  update!: MasterProfileUpdateInput;
}
