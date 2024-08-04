import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_fieldsWhereUniqueInput } from '../directus-fields/directus-fields-where-unique.input';
import { Type } from 'class-transformer';
import { directus_fieldsCreateInput } from '../directus-fields/directus-fields-create.input';
import { directus_fieldsUpdateInput } from '../directus-fields/directus-fields-update.input';

@ArgsType()
export class UpsertOnedirectusFieldsArgs {
  @Field(() => directus_fieldsWhereUniqueInput, { nullable: false })
  @Type(() => directus_fieldsWhereUniqueInput)
  where!: directus_fieldsWhereUniqueInput;

  @Field(() => directus_fieldsCreateInput, { nullable: false })
  @Type(() => directus_fieldsCreateInput)
  create!: directus_fieldsCreateInput;

  @Field(() => directus_fieldsUpdateInput, { nullable: false })
  @Type(() => directus_fieldsUpdateInput)
  update!: directus_fieldsUpdateInput;
}
