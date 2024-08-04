import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MasterProfileUpdateWithoutUserInput } from './master-profile-update-without-user.input';
import { Type } from 'class-transformer';
import { MasterProfileCreateWithoutUserInput } from './master-profile-create-without-user.input';

@InputType()
export class MasterProfileUpsertWithoutUserInput {
  @Field(() => MasterProfileUpdateWithoutUserInput, { nullable: false })
  @Type(() => MasterProfileUpdateWithoutUserInput)
  update!: MasterProfileUpdateWithoutUserInput;

  @Field(() => MasterProfileCreateWithoutUserInput, { nullable: false })
  @Type(() => MasterProfileCreateWithoutUserInput)
  create!: MasterProfileCreateWithoutUserInput;
}
