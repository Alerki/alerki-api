import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_fieldsCreateInput } from '../directus-fields/directus-fields-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnedirectusFieldsArgs {
  @Field(() => directus_fieldsCreateInput, { nullable: false })
  @Type(() => directus_fieldsCreateInput)
  data!: directus_fieldsCreateInput;
}
