import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_permissionsCreateManyInput } from '../directus-permissions/directus-permissions-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManydirectusPermissionsArgs {
  @Field(() => [directus_permissionsCreateManyInput], { nullable: false })
  @Type(() => directus_permissionsCreateManyInput)
  data!: Array<directus_permissionsCreateManyInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
