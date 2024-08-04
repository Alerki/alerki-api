import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_settingsUpdateInput } from '../directus-settings/directus-settings-update.input';
import { Type } from 'class-transformer';
import { directus_settingsWhereUniqueInput } from '../directus-settings/directus-settings-where-unique.input';

@ArgsType()
export class UpdateOnedirectusSettingsArgs {
  @Field(() => directus_settingsUpdateInput, { nullable: false })
  @Type(() => directus_settingsUpdateInput)
  data!: directus_settingsUpdateInput;

  @Field(() => directus_settingsWhereUniqueInput, { nullable: false })
  @Type(() => directus_settingsWhereUniqueInput)
  where!: directus_settingsWhereUniqueInput;
}
