import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_usersWhereUniqueInput } from '../directus-users/directus-users-where-unique.input';
import { Type } from 'class-transformer';
import { directus_usersCreateInput } from '../directus-users/directus-users-create.input';
import { directus_usersUpdateInput } from '../directus-users/directus-users-update.input';

@ArgsType()
export class UpsertOnedirectusUsersArgs {
  @Field(() => directus_usersWhereUniqueInput, { nullable: false })
  @Type(() => directus_usersWhereUniqueInput)
  where!: directus_usersWhereUniqueInput;

  @Field(() => directus_usersCreateInput, { nullable: false })
  @Type(() => directus_usersCreateInput)
  create!: directus_usersCreateInput;

  @Field(() => directus_usersUpdateInput, { nullable: false })
  @Type(() => directus_usersUpdateInput)
  update!: directus_usersUpdateInput;
}
