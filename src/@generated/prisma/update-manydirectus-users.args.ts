import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_usersUpdateManyMutationInput } from '../directus-users/directus-users-update-many-mutation.input';
import { Type } from 'class-transformer';
import { directus_usersWhereInput } from '../directus-users/directus-users-where.input';

@ArgsType()
export class UpdateManydirectusUsersArgs {
  @Field(() => directus_usersUpdateManyMutationInput, { nullable: false })
  @Type(() => directus_usersUpdateManyMutationInput)
  data!: directus_usersUpdateManyMutationInput;

  @Field(() => directus_usersWhereInput, { nullable: true })
  @Type(() => directus_usersWhereInput)
  where?: directus_usersWhereInput;
}
