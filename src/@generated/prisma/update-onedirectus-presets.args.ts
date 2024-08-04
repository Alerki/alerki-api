import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_presetsUpdateInput } from '../directus-presets/directus-presets-update.input';
import { Type } from 'class-transformer';
import { directus_presetsWhereUniqueInput } from '../directus-presets/directus-presets-where-unique.input';

@ArgsType()
export class UpdateOnedirectusPresetsArgs {
  @Field(() => directus_presetsUpdateInput, { nullable: false })
  @Type(() => directus_presetsUpdateInput)
  data!: directus_presetsUpdateInput;

  @Field(() => directus_presetsWhereUniqueInput, { nullable: false })
  @Type(() => directus_presetsWhereUniqueInput)
  where!: directus_presetsWhereUniqueInput;
}
