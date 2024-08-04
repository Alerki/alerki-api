import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_settingsWhereInput } from '../directus-settings/directus-settings-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManydirectusSettingsArgs {
  @Field(() => directus_settingsWhereInput, { nullable: true })
  @Type(() => directus_settingsWhereInput)
  where?: directus_settingsWhereInput;
}
