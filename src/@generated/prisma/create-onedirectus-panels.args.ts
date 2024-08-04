import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_panelsCreateInput } from '../directus-panels/directus-panels-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnedirectusPanelsArgs {
  @Field(() => directus_panelsCreateInput, { nullable: false })
  @Type(() => directus_panelsCreateInput)
  data!: directus_panelsCreateInput;
}
