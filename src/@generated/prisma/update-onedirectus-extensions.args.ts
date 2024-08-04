import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_extensionsUpdateInput } from '../directus-extensions/directus-extensions-update.input';
import { Type } from 'class-transformer';
import { directus_extensionsWhereUniqueInput } from '../directus-extensions/directus-extensions-where-unique.input';

@ArgsType()
export class UpdateOnedirectusExtensionsArgs {
  @Field(() => directus_extensionsUpdateInput, { nullable: false })
  @Type(() => directus_extensionsUpdateInput)
  data!: directus_extensionsUpdateInput;

  @Field(() => directus_extensionsWhereUniqueInput, { nullable: false })
  @Type(() => directus_extensionsWhereUniqueInput)
  where!: directus_extensionsWhereUniqueInput;
}
