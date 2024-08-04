import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_foldersUpdateManyMutationInput } from '../directus-folders/directus-folders-update-many-mutation.input';
import { Type } from 'class-transformer';
import { directus_foldersWhereInput } from '../directus-folders/directus-folders-where.input';

@ArgsType()
export class UpdateManydirectusFoldersArgs {
  @Field(() => directus_foldersUpdateManyMutationInput, { nullable: false })
  @Type(() => directus_foldersUpdateManyMutationInput)
  data!: directus_foldersUpdateManyMutationInput;

  @Field(() => directus_foldersWhereInput, { nullable: true })
  @Type(() => directus_foldersWhereInput)
  where?: directus_foldersWhereInput;
}
