import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_presetsWhereInput } from '../directus-presets/directus-presets-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManydirectusPresetsArgs {
  @Field(() => directus_presetsWhereInput, { nullable: true })
  @Type(() => directus_presetsWhereInput)
  where?: directus_presetsWhereInput;
}
