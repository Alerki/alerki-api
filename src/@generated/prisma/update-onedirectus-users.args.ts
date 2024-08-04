import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_usersUpdateInput } from '../directus-users/directus-users-update.input';
import { Type } from 'class-transformer';
import { directus_usersWhereUniqueInput } from '../directus-users/directus-users-where-unique.input';

@ArgsType()
export class UpdateOnedirectusUsersArgs {
  @Field(() => directus_usersUpdateInput, { nullable: false })
  @Type(() => directus_usersUpdateInput)
  data!: directus_usersUpdateInput;

  @Field(() => directus_usersWhereUniqueInput, { nullable: false })
  @Type(() => directus_usersWhereUniqueInput)
  where!: directus_usersWhereUniqueInput;
}
