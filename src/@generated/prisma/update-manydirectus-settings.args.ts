import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_settingsUpdateManyMutationInput } from '../directus-settings/directus-settings-update-many-mutation.input';
import { Type } from 'class-transformer';
import { directus_settingsWhereInput } from '../directus-settings/directus-settings-where.input';

@ArgsType()
export class UpdateManydirectusSettingsArgs {
  @Field(() => directus_settingsUpdateManyMutationInput, { nullable: false })
  @Type(() => directus_settingsUpdateManyMutationInput)
  data!: directus_settingsUpdateManyMutationInput;

  @Field(() => directus_settingsWhereInput, { nullable: true })
  @Type(() => directus_settingsWhereInput)
  where?: directus_settingsWhereInput;
}
