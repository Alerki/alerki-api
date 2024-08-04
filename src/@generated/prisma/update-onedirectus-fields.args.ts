import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_fieldsUpdateInput } from '../directus-fields/directus-fields-update.input';
import { Type } from 'class-transformer';
import { directus_fieldsWhereUniqueInput } from '../directus-fields/directus-fields-where-unique.input';

@ArgsType()
export class UpdateOnedirectusFieldsArgs {
  @Field(() => directus_fieldsUpdateInput, { nullable: false })
  @Type(() => directus_fieldsUpdateInput)
  data!: directus_fieldsUpdateInput;

  @Field(() => directus_fieldsWhereUniqueInput, { nullable: false })
  @Type(() => directus_fieldsWhereUniqueInput)
  where!: directus_fieldsWhereUniqueInput;
}
