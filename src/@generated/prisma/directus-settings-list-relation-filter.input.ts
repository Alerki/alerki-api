import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_settingsWhereInput } from '../directus-settings/directus-settings-where.input';

@InputType()
export class Directus_settingsListRelationFilter {
  @Field(() => directus_settingsWhereInput, { nullable: true })
  every?: directus_settingsWhereInput;

  @Field(() => directus_settingsWhereInput, { nullable: true })
  some?: directus_settingsWhereInput;

  @Field(() => directus_settingsWhereInput, { nullable: true })
  none?: directus_settingsWhereInput;
}
