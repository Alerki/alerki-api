import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MasterProfileCreateManyInput } from './master-profile-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyMasterProfileArgs {
  @Field(() => [MasterProfileCreateManyInput], { nullable: false })
  @Type(() => MasterProfileCreateManyInput)
  data!: Array<MasterProfileCreateManyInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
