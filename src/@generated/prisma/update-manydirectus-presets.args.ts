import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_presetsUpdateManyMutationInput } from '../directus-presets/directus-presets-update-many-mutation.input';
import { Type } from 'class-transformer';
import { directus_presetsWhereInput } from '../directus-presets/directus-presets-where.input';

@ArgsType()
export class UpdateManydirectusPresetsArgs {
  @Field(() => directus_presetsUpdateManyMutationInput, { nullable: false })
  @Type(() => directus_presetsUpdateManyMutationInput)
  data!: directus_presetsUpdateManyMutationInput;

  @Field(() => directus_presetsWhereInput, { nullable: true })
  @Type(() => directus_presetsWhereInput)
  where?: directus_presetsWhereInput;
}
