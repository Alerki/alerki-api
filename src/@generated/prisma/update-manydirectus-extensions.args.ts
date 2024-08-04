import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_extensionsUpdateManyMutationInput } from '../directus-extensions/directus-extensions-update-many-mutation.input';
import { Type } from 'class-transformer';
import { directus_extensionsWhereInput } from '../directus-extensions/directus-extensions-where.input';

@ArgsType()
export class UpdateManydirectusExtensionsArgs {
  @Field(() => directus_extensionsUpdateManyMutationInput, { nullable: false })
  @Type(() => directus_extensionsUpdateManyMutationInput)
  data!: directus_extensionsUpdateManyMutationInput;

  @Field(() => directus_extensionsWhereInput, { nullable: true })
  @Type(() => directus_extensionsWhereInput)
  where?: directus_extensionsWhereInput;
}
