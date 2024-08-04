import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ClientProfileCreateManyInput } from './client-profile-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyClientProfileArgs {
  @Field(() => [ClientProfileCreateManyInput], { nullable: false })
  @Type(() => ClientProfileCreateManyInput)
  data!: Array<ClientProfileCreateManyInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
