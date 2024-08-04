import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_versionsUpdateManyMutationInput } from '../directus-versions/directus-versions-update-many-mutation.input';
import { Type } from 'class-transformer';
import { directus_versionsWhereInput } from '../directus-versions/directus-versions-where.input';

@ArgsType()
export class UpdateManydirectusVersionsArgs {
  @Field(() => directus_versionsUpdateManyMutationInput, { nullable: false })
  @Type(() => directus_versionsUpdateManyMutationInput)
  data!: directus_versionsUpdateManyMutationInput;

  @Field(() => directus_versionsWhereInput, { nullable: true })
  @Type(() => directus_versionsWhereInput)
  where?: directus_versionsWhereInput;
}
