import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_permissionsWhereUniqueInput } from '../directus-permissions/directus-permissions-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOnedirectusPermissionsArgs {
  @Field(() => directus_permissionsWhereUniqueInput, { nullable: false })
  @Type(() => directus_permissionsWhereUniqueInput)
  where!: directus_permissionsWhereUniqueInput;
}
