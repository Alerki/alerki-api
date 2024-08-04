import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_presetsWhereInput } from '../directus-presets/directus-presets-where.input';

@InputType()
export class Directus_presetsListRelationFilter {
  @Field(() => directus_presetsWhereInput, { nullable: true })
  every?: directus_presetsWhereInput;

  @Field(() => directus_presetsWhereInput, { nullable: true })
  some?: directus_presetsWhereInput;

  @Field(() => directus_presetsWhereInput, { nullable: true })
  none?: directus_presetsWhereInput;
}
