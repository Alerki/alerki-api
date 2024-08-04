import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_settingsCreateManyInput } from '../directus-settings/directus-settings-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManydirectusSettingsArgs {
  @Field(() => [directus_settingsCreateManyInput], { nullable: false })
  @Type(() => directus_settingsCreateManyInput)
  data!: Array<directus_settingsCreateManyInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
