import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_extensionsWhereInput } from '../directus-extensions/directus-extensions-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManydirectusExtensionsArgs {
  @Field(() => directus_extensionsWhereInput, { nullable: true })
  @Type(() => directus_extensionsWhereInput)
  where?: directus_extensionsWhereInput;
}
