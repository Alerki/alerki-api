import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_settingsCreateInput } from '../directus-settings/directus-settings-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnedirectusSettingsArgs {
  @Field(() => directus_settingsCreateInput, { nullable: false })
  @Type(() => directus_settingsCreateInput)
  data!: directus_settingsCreateInput;
}
