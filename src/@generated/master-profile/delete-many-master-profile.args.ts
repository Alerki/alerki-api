import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MasterProfileWhereInput } from './master-profile-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyMasterProfileArgs {
  @Field(() => MasterProfileWhereInput, { nullable: true })
  @Type(() => MasterProfileWhereInput)
  where?: MasterProfileWhereInput;
}
