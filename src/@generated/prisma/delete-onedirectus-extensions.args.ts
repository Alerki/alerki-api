import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_extensionsWhereUniqueInput } from '../directus-extensions/directus-extensions-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOnedirectusExtensionsArgs {
  @Field(() => directus_extensionsWhereUniqueInput, { nullable: false })
  @Type(() => directus_extensionsWhereUniqueInput)
  where!: directus_extensionsWhereUniqueInput;
}
