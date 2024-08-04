import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_presetsCreateInput } from '../directus-presets/directus-presets-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnedirectusPresetsArgs {
  @Field(() => directus_presetsCreateInput, { nullable: false })
  @Type(() => directus_presetsCreateInput)
  data!: directus_presetsCreateInput;
}
